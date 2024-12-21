import {
  CreateSupplierCommand,
  DeleteSupplierCommand,
  UpdateSupplierCommand,
} from "../commands";
import { Supplier } from "../entities/Supplier";
import { GetSuppliersQuery } from "../queries/GetSuppliersQuery";

export class SupplierService {
  static async getAllSuppliers(
    filters: Partial<Supplier> = {},
    sort: { [key: string]: "ASC" | "DESC" } = {}
  ) {
    return await GetSuppliersQuery.execute(filters, sort);
  }

  static async createSupplier(data: Omit<Supplier, "id">) {
    return await CreateSupplierCommand.execute(data);
  }

  static async updateSupplier(id: number, data: Omit<Supplier, "id">) {
    return await UpdateSupplierCommand.execute(id, data);
  }

  static async deleteSupplier(id: number) {
    return await DeleteSupplierCommand.execute(id);
  }
}
