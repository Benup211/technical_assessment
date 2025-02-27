export const productSwaggerDocs = {
    "/api/products": {
        get: {
            summary: "Get all products",
            tags: ["Products"],
            responses: {
                200: { description: "Successfully retrieved product list" },
                500: { description: "Server error" }
            }
        }
    },
    "/api/products/{id}": {
        get: {
            summary: "Get a product by ID",
            tags: ["Products"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: { type: "string" },
                    description: "The product ID"
                }
            ],
            responses: {
                200: { description: "Successfully retrieved product" },
                404: { description: "Product not found" },
                500: { description: "Server error" }
            }
        }
    },
    "/api/products/create": {
        post: {
            summary: "Create a new product",
            tags: ["Products"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                name: { type: "string" },
                                price: { type: "number" },
                                quantity: { type: "number" },
                                description: { type: "string" }
                            }
                        }
                    }
                }
            },
            responses: {
                201: { description: "Product created successfully" },
                400: { description: "Validation error" }
            }
        }
    },
    "/api/products/update/{id}": {
        put: {
            summary: "Update an existing product",
            tags: ["Products"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: { type: "string" },
                    description: "The product ID"
                }
            ],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                name: { type: "string" },
                                price: { type: "number" },
                                quantity: { type: "number" },
                                description: { type: "string" }
                            }
                        }
                    }
                }
            },
            responses: {
                200: { description: "Product updated successfully" },
                400: { description: "Validation error" },
                404: { description: "Product not found" }
            }
        }
    },
    "/api/products/delete/{id}": {
        delete: {
            summary: "Delete a product by ID",
            tags: ["Products"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: { type: "string" },
                    description: "The product ID"
                }
            ],
            responses: {
                200: { description: "Product deleted successfully" },
                404: { description: "Product not found" }
            }
        }
    }
};
