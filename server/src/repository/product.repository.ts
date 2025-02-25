import { Product } from "../model";

export class ProductRepository {

    static async createProduct(name: string, price: number, quantity: number, description?: string) {
        try {
            return Product.create({ name, price, quantity, description });
        } catch {
            throw new Error("Database Error: Product creation failed");
        }
    }

    static async getAllProducts() {
        try {
            return Product.find();
        } catch {
            throw new Error("Database Error: Fetching products failed");
        }
    }

    static async getProductById(id: string) {
        try {
            return Product.findById(id);
        } catch {
            throw new Error("Database Error: Fetching single product failed");
        }
    }

    static async updateProduct(id: string, name?: string, price?: number, quantity?: number, description?: string) {
        try {
            return Product.findByIdAndUpdate(id, { name, price, quantity, description, updated_at: Date.now() }, { new: true });
        } catch {
            throw new Error("Database Error: Product update failed");
        }
    }

    static async deleleProductById(id: string) {
        try {
            return Product.findByIdAndDelete(id);
        } catch {
            throw new Error("Database Error: Product deletion failed");
        }
    }

}