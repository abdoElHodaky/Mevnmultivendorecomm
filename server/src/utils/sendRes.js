const withRefreshToken = (req, res) => {
    
    if(req.withRefreshTokens) {

        return res.status(200).cookie('access_token', req.accessToken, {
            'path': '/',
            'domain': 'localhost',
            'httpOnly': true,
        }).cookie('refresh_token', req.refreshToken, {
            'path': '/',
            'domain': 'localhost',
            'httpOnly': true,
        }).send(req.user);

    } else {

        return res.status(200).send(req.user);

    }

};

export default { withRefreshToken };