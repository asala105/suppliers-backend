// src/services/SupplierService.ts
import axios from "axios";
import { Supplier } from "../types";
import { DaprClient, HttpMethod } from "@dapr/dapr";

const SUPPLIERS_DATA_SERVICE_URL = process.env.SUPPLIERS_DATA_SERVICE_URL;
const daprHost = process.env.DAPR_HOST;
const daprPort = process.env.DAPR_PORT;
const client = new DaprClient({
  daprHost,
  daprPort,
});

const targetAppId = process.env.DAPR_TARGET_APP || "";

export class SupplierService {
  static async createSupplier(data: Partial<Supplier>) {
    try {
      const response = await client.invoker.invoke(
        targetAppId,
        "suppliers",
        HttpMethod.POST,
        data
      );
      return response;
    } catch (error) {
      console.error("Error updating supplier:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      throw new Error(`Error creating supplier: ${errorMessage}`);
    }
  }

  static async updateSupplier(id: string, data: Partial<Supplier>) {
    try {
      const response = await client.invoker.invoke(
        targetAppId,
        `suppliers/${id}`,
        HttpMethod.PUT,
        data
      );
      return response;
    } catch (error) {
      console.error("Error updating supplier:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      throw new Error(`Error updating supplier: ${errorMessage}`);
    }
  }

  static async deleteSupplier(id: string) {
    try {
      const response = await client.invoker.invoke(
        targetAppId,
        `suppliers/${id}`,
        HttpMethod.DELETE
      );
      return response;
    } catch (error) {
      console.error("Error deleting supplier:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      throw new Error(`Error deleting supplier: ${errorMessage}`);
    }
  }

  static async getSuppliers(
    filters: Partial<Supplier>,
    sort: { [key: string]: "ASC" | "DESC" }
  ) {
    try {
      const response = await client.invoker.invoke(
        targetAppId,
        `suppliers`,
        HttpMethod.GET,
        { filters, sort }
      );
      return response;
    } catch (error) {
      console.error("Error fetching suppliers:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      throw new Error(`Error fetching suppliers: ${errorMessage}`);
    }
  }
}
