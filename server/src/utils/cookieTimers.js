const refreshTokenExpireTime = () => {

    const d = new Date();
    d.setTime(d.getTime() + 30*24*60*60*1000); // in milliseconds
    return d;

};

export { refreshTokenExpireTime };