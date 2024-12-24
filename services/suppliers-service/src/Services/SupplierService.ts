import { Supplier } from "../types";
import { CommunicationProtocolEnum, DaprClient, HttpMethod } from "@dapr/dapr";

const daprHost = process.env.DAPR_HOST || "localhost";
const daprPort = process.env.DAPR_PORT || "3502";
const client = new DaprClient({
  communicationProtocol: CommunicationProtocolEnum.HTTP,
  daprHost,
  daprPort,
});

const targetAppId = process.env.DAPR_TARGET_APP || "suppliers-data-service";

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
        "update-suppliers",
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
        `supplier/${id}`,
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
        "suppliers",
        HttpMethod.GET
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
