// src/services/SupplierService.ts
import axios from "axios";
import { Supplier } from "../types";

const SUPPLIERS_DATA_SERVICE_URL = process.env.SUPPLIERS_DATA_SERVICE_URL;
export class SupplierService {
  static async createSupplier(data: Partial<Supplier>) {
    try {
      const response = await axios.post(
        `${SUPPLIERS_DATA_SERVICE_URL}/suppliers`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Error updating supplier:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      throw new Error(`Error creating supplier: ${errorMessage}`);
    }
  }

  static async updateSupplier(id: string, data: Partial<Supplier>) {
    try {
      const response = await axios.put(
        `${SUPPLIERS_DATA_SERVICE_URL}/suppliers/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Error updating supplier:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      throw new Error(`Error updating supplier: ${errorMessage}`);
    }
  }

  static async deleteSupplier(id: string) {
    try {
      const response = await axios.delete(
        `${SUPPLIERS_DATA_SERVICE_URL}/suppliers/${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting supplier:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      throw new Error(`Error deleting supplier: ${errorMessage}`);
    }
  }

  static async getSuppliers() {
    try {
      const response = await axios.get(
        `${SUPPLIERS_DATA_SERVICE_URL}/suppliers`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching suppliers:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      throw new Error(`Error fetching suppliers: ${errorMessage}`);
    }
  }
}
