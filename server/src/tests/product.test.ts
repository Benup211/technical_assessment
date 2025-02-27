import request from "supertest";
import { MainServer } from "../server";

const app = new MainServer().app;

describe("Product Routes", () => {
    let productId: string;

    it("should create a new product", async () => {
        const res = await request(app).post("/api/products/create").send({
            name: "Test Product",
            price: 100,
            quantity: 10,
            description: "A sample product for testing"
        });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("_id");
        productId = res.body._id;
    });

    it("should get all products", async () => {
        const res = await request(app).get("/api/products");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it("should get a product by ID", async () => {
        const res = await request(app).get(`/api/products/${productId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("_id", productId);
    });

    it("should return 404 for non-existing product", async () => {
        const res = await request(app).get("/api/products/invalidID");
        expect(res.statusCode).toBe(404);
    });

    it("should update a product", async () => {
        const res = await request(app).put(`/api/products/update/${productId}`).send({
            name: "Updated Product",
            price: 120,
            quantity: 5,
            description: "Updated description"
        });
        expect(res.statusCode).toBe(200);
    });

    it("should delete a product", async () => {
        const res = await request(app).delete(`/api/products/delete/${productId}`);
        expect(res.statusCode).toBe(204);
    });
});
