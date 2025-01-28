import { NextFunction } from "express";

export function middleware1(req: Request,res: Response,next:NextFunction){
   console.log("Middleware1");
   next();
}