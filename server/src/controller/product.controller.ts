import { Request, Response, NextFunction } from 'express';
import { ResponseView } from '../view';
import { ProductRepository } from '../repository';
export class ProductController {

    static async createProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, price, quantity, description } = req.body;
            const product = await ProductRepository.createProduct(name, price, quantity, description);
            return ResponseView.CreateSuccessResponse(product, 201, res);
        } catch (e) {
            next(e);
        }
    }

    static async getAllProducts(req: Request, res: Response, next: NextFunction) {
        try {
            const products = await ProductRepository.getAllProducts();
            return ResponseView.CreateSuccessResponse(products, 200, res);
        } catch (e) {
            next(e);
        }
    }

    static async getProductById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const product = await ProductRepository.getProductById(id);
            if (!product) {
                return ResponseView.CreateErrorResponse("Product not found", 404);
            }
            return ResponseView.CreateSuccessResponse(product, 200, res);
        } catch (e) {
            next(e);
        }
    }

    static async updateProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { name, price, quantity, description } = req.body;
            const product = await ProductRepository.updateProduct(id, name, price, quantity, description);
            if (!product) {
                return ResponseView.CreateErrorResponse("Product not found", 404);
            }
            return ResponseView.CreateSuccessResponse(product, 200, res);
        } catch (e) {
            next(e);
        }
    }

    static async deleteProductById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const product = await ProductRepository.deleleProductById(id);
            if (!product) {
                return ResponseView.CreateErrorResponse("Product not found", 404);
            }
            return ResponseView.CreateSuccessResponse({}, 204, res);
        } catch (e) {
            next(e);
        }
    }
}