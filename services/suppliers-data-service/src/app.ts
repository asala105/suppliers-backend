import bodyParser from "body-parser";
import express from "express";
import "./config";
import { SupplierController } from "./controllers/SupplierController";
import { AppDataSource } from "./data-source";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Routes
app.post(
  "/suppliers",
  SupplierController.validate("createSupplier"),
  SupplierController.createSupplier
);
app.post(
  "/update-supplier",
  SupplierController.validate("updateSupplier"),
  SupplierController.updateSupplier
);
app.delete("/supplier/:id", SupplierController.deleterSupplier);
app.get("/suppliers", SupplierController.getSuppliers);

// Start the server
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("Database connection error:", error));
