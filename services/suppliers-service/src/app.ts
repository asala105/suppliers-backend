import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import "./config";
import { SupplierController } from "./controllers/SupplierController";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json());

const corsOptions = {
  origin: "*", // Your frontend URL
  methods: "GET, POST, PUT, DELETE",
};

app.use(cors(corsOptions));

// Supplier Routes
app.post("/suppliers", SupplierController.createSupplier);
app.post("/update-supplier", SupplierController.updateSupplier);
app.delete("/supplier/:id", SupplierController.deleteSupplier);
app.get("/suppliers", SupplierController.getSuppliers);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
