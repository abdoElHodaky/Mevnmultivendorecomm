import jwt from 'jsonwebtoken';

import User from '../models/user.js';
import Session from '../models/session.js';
import AsyncMiddleware from "./AsyncMiddleware.js";
import { createSession } from '../utils/sessionToken.js';
import { createAccessToken, createRefreshToken } from '../utils/jwtTokens.js';
import AppError from '../parts/AppError.js';

const isAuth = AsyncMiddleware(async (req, res, next) => {
    
    if(req?.signedCookies?.access_token) {

        const { userId } = jwt.verify(req.signedCookies.access_token, process.env.JWT_SECRET);

        const user = await User.findById(userId).select('-password');
        if(!user) return next(new AppError({message: 'not_logged_in'}, 401));

        req.user = user;

        return next();
    }

    if(req?.signedCookies?.refresh_token) {
        
        const { sessionToken } = jwt.verify(req.signedCookies.refresh_token, process.env.JWT_SECRET);

        const oldSession = await Session.findOne({token: sessionToken});
        
        if(!oldSession) return next(new AppError({message: 'not_logged_in'}, 401));
        
        // get user and recreate tokens
        const user = await User.findById(oldSession.userId).select('-password');
        if(!user) return next(new AppError({message: 'not_logged_in'}, 401));
        
        const newSessionToken = await createSession(user._id, req.ip, req.headers['user-agent']);
        const accessToken = createAccessToken(newSessionToken, user._id);
        const refreshToken = createRefreshToken(newSessionToken);
        
        req.withNewTokens = true;
        req.user = user;
        req.accessToken = accessToken;
        req.refreshToken = refreshToken;

        return next();
    }

    return next(new AppError({message: 'not_logged_in'}, 401));

});

export default isAuth;