import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { ResponseView } from "../view";
export class GlobalMiddleware {

    static CheckValidationResult(req: Request, res: Response, next: NextFunction) {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            next(
                ResponseView.CreateErrorResponse(error.array()[0].msg, 400)
            );
        }
        next();
    }
    
}