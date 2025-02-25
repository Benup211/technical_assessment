import { body } from "express-validator";

export class ProductValidator {
    static createProduct() {
        return [
            body("name").isString().notEmpty().withMessage("Name is required"),
            body("price").isNumeric().notEmpty().withMessage("Price is required"),
            body("quantity").isNumeric().notEmpty().withMessage("Quantity is required"),
            body("description").isString().notEmpty().withMessage("Description is required"),
        ]
    }

    static updateProduct() {
        return [
            body("name").isString().optional(),
            body("price").isNumeric().optional(),
            body("quantity").isNumeric().optional(),
            body("description").isString().optional(),
        ]
    }
}