import { AppDataSource } from "../data-source";
import { Supplier } from "../entities/Supplier";

export class DeleteSupplierCommand {
  static async execute(id: string) {
    const supplierRepo = AppDataSource.getRepository(Supplier);
    return await supplierRepo.delete(id);
  }
}
