import jwt from "jsonwebtoken";

const createAccessToken = (sessionToken, userId) => {
    return jwt.sign({ sessionToken, userId }, process.env.JWT_SECRET);
};

const createRefreshToken = (sessionToken) => {
    return jwt.sign({ sessionToken }, process.env.JWT_SECRET);
};

export { createAccessToken, createRefreshToken };