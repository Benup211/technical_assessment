import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config";
import { Product } from "./model";
import { ProductRoutes } from "./route";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { productSwaggerDocs } from "./route/swaggerdocs";

dotenv.config();

export class MainServer {
    public app: express.Application = express();

    constructor() {
        this.setConfiguration();
        this.dbConnection();
        this.setRoutes();
        this.setupSwagger();
        this.handle404Error();
        this.handleClientError();
    }

    async dbConnection() {
        connectDB().then(async () => {
            try {
                await Product.init();
                console.log("Product Schema initialized");
            } catch (e) {
                console.log("Schema initialization failed");
            }
        });
    }

    async setConfiguration() {
        this.app.use(express.json({ limit: '50mb' }));
        this.app.use(express.urlencoded({ extended: true, limit: '50mb' }));
        this.app.use(cookieParser());
        this.app.use(cors({
            origin: [process.env.ORIGIN_URL as string],
            credentials: true,
        }));
        this.app.use(morgan("dev"));
    }

    setRoutes() {
        this.app.use("/api/products", ProductRoutes);
    }

    setupSwagger() {
        const options = {
            definition: {
                openapi: "3.0.0",
                info: {
                    title: "API Documentation",
                    version: "1.0.0",
                    description: "This is the API documentation for the technical assessments of backend skill.",
                },
                servers: [
                    {
                        url: "http://localhost:3001",
                    },
                ],
                paths: {
                    ...productSwaggerDocs,
                }
            },
            apis: ["./src/route/*.ts"],
        };

        const swaggerSpec = swaggerJsdoc(options);
        this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }

    handle404Error() {
        this.app.use((req: Request, res: Response) => {
            res.status(404).json({
                status: 404,
                errorName: "Not Found",
                errorMessage: "API Not Found",
            });
        });
    }

    handleClientError() {
        this.app.use(
            (err: Error, req: Request, res: Response, next: NextFunction) => {
                let errorStatus = (err as any).errorStatus || 500;
                let errorMessage =
                    err.message ||
                    "Something went wrong. Please try again later";
                res.status(errorStatus).json({
                    status: errorStatus,
                    errorName: err.name,
                    errorMessage: errorMessage,
                });
            }
        );
    }
}
