import { Router } from "express";
import { ProductController } from "../controller";
import { ProductValidator } from "../validator";
import { GlobalMiddleware } from "../middleware";


class ProductRoute {
    public router: Router = Router();
    constructor() {
        this.getRoutes();
        this.postRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/', ProductController.getAllProducts);
        this.router.get('/:id', ProductController.getProductById);
    }
    postRoutes() {
        this.router.post('/create', ProductValidator.createProduct(), GlobalMiddleware.CheckValidationResult, ProductController.createProduct);
    }
    putRoutes() {
        this.router.put('/update/:id', ProductValidator.updateProduct(), GlobalMiddleware.CheckValidationResult, ProductController.updateProduct);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', ProductController.deleteProductById);
    }
}
export const ProductRoutes = new ProductRoute().router;