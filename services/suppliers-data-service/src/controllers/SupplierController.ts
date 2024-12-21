import { Request, Response } from "express";
import { SupplierService } from "../services/SupplierService";

export class SupplierController {
  static async createSupplier(req: Request, res: Response) {
    try {
      //TODO: add input validation
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
      //TODO: add input validation
      const result = await SupplierService.updateSupplier(
        req.params.id,
        req.body.data
      );
      res.status(201).json(result);
    } catch (error) {
      console.error("Error updating supplier:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: errorMessage });
    }
  }

  static async deleterSupplier(req: Request, res: Response) {
    try {
      //TODO: add input validation
      const result = await SupplierService.deleteSupplier(req.params.id);
      res.status(201).json(result);
    } catch (error) {
      console.error("Error deleting supplier:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: errorMessage });
    }
  }

  static async getSuppliers(req: Request, res: Response) {
    try {
      const suppliers = await SupplierService.getAllSuppliers();
      res.status(200).json(suppliers);
    } catch (error) {
      console.error("Error getting suppliers:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: errorMessage });
    }
  }
}
