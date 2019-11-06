"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authLogMiddleware = (req, _res, next) => {
    const authToken = req.headers.authorization;
    if (authToken) {
        console.log("This request was authenticated");
    }
    next();
};
exports.authMiddleware = (req, res, next) => {
    const authValue = req.headers.authorization;
    if (!authValue) {
        res.status(401).json({ message: 'Please authenticate yourself' });
        return;
    }
    if (authValue !== 'I am authenticated') {
        res.status(401).json({ message: 'You are not authenticated' });
        return;
    }
    next();
};
//# sourceMappingURL=profileAuth.js.map