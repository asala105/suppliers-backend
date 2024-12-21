import express from "express";
import bodyParser from "body-parser";
import { AppDataSource } from "./data-source";
import { SupplierController } from "./controllers/SupplierController";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Routes
app.post("/suppliers", SupplierController.createSupplier);
app.put("/suppliers/:id", SupplierController.updateSupplier);
app.delete("/suppliers/:id", SupplierController.deleterSupplier);
app.get("/suppliers", SupplierController.getSuppliers);

// Start the server
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("Database connection error:", error));
