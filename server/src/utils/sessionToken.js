import { randomBytes } from 'crypto';

import Session from "../models/session.js";

const createSession = async (userId, ip, userAgent) => {

    const token = randomBytes(45).toString("hex");

    await Session.create({
        token,
        userId,
        userAgent,
        ip
    });

    return token;

};

export { createSession };