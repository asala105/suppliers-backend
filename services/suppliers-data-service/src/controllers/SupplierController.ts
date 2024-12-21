import { Request, Response } from "express";
import { SupplierService } from "../services/SupplierService";

export class SupplierController {
  static async createSupplier(req: Request, res: Response) {
    try {
      const result = await SupplierService.createSupplier(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateSupplier(req: Request, res: Response) {
    try {
      const result = await SupplierService.updateSupplier(
        req.body.id,
        req.body.data
      );
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getSuppliers(req: Request, res: Response) {
    try {
      const suppliers = await SupplierService.getAllSuppliers();
      res.status(200).json(suppliers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
