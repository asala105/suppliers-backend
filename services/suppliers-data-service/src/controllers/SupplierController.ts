import { Request, Response } from "express";
import { SupplierService } from "../services/SupplierService";
import { body, validationResult } from "express-validator";

export class SupplierController {
  static validate(method: string) {
    switch (method) {
      case "createSupplier": {
        return [
          body("name").notEmpty().withMessage("Name is required"),
          body("vatNumber").notEmpty().withMessage("VAT number is required"),
        ];
      }
      case "updateSupplier": {
        return [
          body("id").notEmpty().withMessage("ID is required"),
          body("name").optional().notEmpty().withMessage("Name is required"),
          body("vatNumber")
            .optional()
            .notEmpty()
            .withMessage("VAT number is required"),
        ];
      }
      default:
        return [];
    }
  }

  public static async createSupplier(
    req: Request,
    res: Response
  ): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    try {
      const result = await SupplierService.createSupplier(req.body);
      res.status(201).json(result);
    } catch (error) {
      console.error("Error creating supplier:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: errorMessage });
    }
  }

  public static async updateSupplier(
    req: Request,
    res: Response
  ): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const result = await SupplierService.updateSupplier(
        req.body.id,
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

  public static async deleterSupplier(
    req: Request,
    res: Response
  ): Promise<void> {
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

  public static async getSuppliers(req: Request, res: Response): Promise<void> {
    try {
      const suppliers = await SupplierService.getSuppliers(req.body);
      res.status(200).json(suppliers);
    } catch (error) {
      console.error("Error getting suppliers:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: errorMessage });
    }
  }
}
