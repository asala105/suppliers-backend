import { Request, Response } from "express";
import { SupplierService } from "../Services/SupplierService";
import { Supplier } from "../types";

export class SupplierController {
  static async createSupplier(req: Request, res: Response) {
    try {
      // TODO: add input validation
      const result = await SupplierService.createSupplier(req.body);
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
      const data = req.body as Supplier;
      const updatedSupplier = await SupplierService.updateSupplier(data.id, {
        name: data.name,
        vatNumber: data.vatNumber,
      });
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
      const { id } = req.body as { id: string };
      const result = await SupplierService.deleteSupplier(id);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error deleting supplier:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: errorMessage });
    }
  }
}
