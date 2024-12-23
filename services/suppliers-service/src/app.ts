import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { SupplierController } from "./controllers/SupplierController";
import "./config";
const app = express();
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json());

// Health Check Route
//@ts-ignore
app.get("/", (req: Request, res: Response) => {
  console.log("Hello from Suppliers Service!");
  res.json({ message: "Hello from Suppliers Service!" });
});

// Supplier Routes
app.post("/suppliers", SupplierController.createSupplier);
app.post("/update-supplier", SupplierController.updateSupplier);
app.delete("/supplier/:id", SupplierController.deleteSupplier);
app.get("/suppliers", SupplierController.getSuppliers);

app.listen(3002, () => console.log(`Server running on port ${3002}`));
