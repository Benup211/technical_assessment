import { body } from "express-validator";

export class ProductValidator {
    static createProduct() {
        return [
            body("name").notEmpty().withMessage("Name is required"),
            body("price").notEmpty().withMessage("Price is required").isNumeric().withMessage("price value should be numeric"),
            body("quantity").notEmpty().withMessage("Quantity is required").isNumeric().withMessage("price value should be numeric"),
            body("description").optional(),
        ];
    }

    static updateProduct() {
        return [
            body("name").isString().optional(),
            body("price").isNumeric().optional(),
            body("quantity").isNumeric().optional(),
            body("description").isString().optional(),
        ];
    }
}