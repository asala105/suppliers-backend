import { Request, Response } from "express";
import { SupplierService } from "../Services/SupplierService";
import { Supplier } from "../types";

export class SupplierController {
  static async createSupplier(req: Request, res: Response) {
    try {
      console.log("Creating supplier:", req.body);
      // TODO: add input validation
      const result = await SupplierService.createSupplier(req.body);
      console.log("Creating supplier:", req.body);
      res.status(201).json(result);
    } catch (error) {
      console.error("Error creating supplier:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: errorMessage });
    }
  }

  static async updateSupplier(req: Request, res: Response) {
    try {
      const data = req.body.data as Partial<Supplier>;
      const updatedSupplier = await SupplierService.updateSupplier(
        req.body.id,
        data
      );
      if (!updatedSupplier) {
        res.status(404).json({ error: "Supplier not found" });
      }
      res.status(200).json(updatedSupplier);
    } catch (error) {
      console.error("Error updating supplier:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: errorMessage });
    }
  }

  static async deleteSupplier(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const result = await SupplierService.deleteSupplier(id);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error deleting supplier:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: errorMessage });
    }
  }

  static async getSuppliers(req: Request, res: Response) {
    try {
      const result = await SupplierService.getSuppliers(
        req.body.filters,
        req.body.sort
      );
      res.status(200).json(result);
    } catch (error) {
      console.error("Error deleting supplier:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: errorMessage });
    }
  }
}
