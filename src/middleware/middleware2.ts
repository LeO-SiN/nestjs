import { NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

export class Middleware2 implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        console.log("Middleware2");
        next();
        
    }
}