import { AppDataSource } from "../data-source";
import { Supplier } from "../entities/Supplier";

export class CreateSupplierCommand {
  static async execute(data: Partial<Supplier>) {
    const supplierRepo = AppDataSource.getRepository(Supplier);
    const supplier = supplierRepo.create(data);
    return await supplierRepo.save(supplier);
  }
}
