import express, { Express, Request, Response, NextFunction } from "express";

const verifyuser = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.token;
    if (token) {
        if (token == process.env.JWT) {
            next();
        } else {
            return res.status(403).json({
                success: "false",
                message: "token is invalid"
            })
        }
    } else {
        return res.status(403).json({
            success: "false",
            message: "You are not authorized!"
        })
    }
}

export default verifyuser;