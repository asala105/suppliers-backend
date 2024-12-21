// src/controllers/SupplierController.ts
import { Request, Response } from "express";
import { SupplierService } from "../services/SupplierService";

export class SupplierController {
  static async createSupplier(req: Request, res: Response) {
    try {
      const supplier = await SupplierService.createSupplier(req.body);
      res.status(201).json(supplier);
    } catch (error) {
      console.error("Error creating supplier:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: errorMessage });
    }
  }

  static async updateSupplier(req: Request, res: Response) {
    try {
      const supplier = await SupplierService.updateSupplier(req.body);
      res.status(201).json(supplier);
    } catch (error) {
      console.error("Error creating supplier:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: errorMessage });
    }
  }

  static async deleteSupplier(req: Request, res: Response) {
    try {
      const supplier = await SupplierService.updateSupplier(req.body);
      res.status(201).json(supplier);
    } catch (error) {
      console.error("Error creating supplier:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: errorMessage });
    }
  }



  static async getSuppliers(req: Request, res: Response) {
    try {
      const suppliers = await SupplierService.getSuppliers();
      res.status(200).json(suppliers);
    } catch (error) {
      console.error("Error fetching suppliers:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: errorMessage });
    }
  }
}
