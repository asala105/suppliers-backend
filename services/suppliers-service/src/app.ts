import "./config";
import express from "express";
import bodyParser from "body-parser";
import { SupplierController } from "./controllers/SupplierController";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json());

// Routes
app.post("/suppliers", (req, res) =>
  SupplierController.createSupplier(req, res)
);
app.post("/update-suppliers", (req, res) =>
  SupplierController.updateSupplier(req, res)
);
app.delete("/suppliers/:id", (req, res) =>
  SupplierController.deleteSupplier(req, res)
);
app.get("/suppliers", (req, res) => SupplierController.getSuppliers(req, res));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
