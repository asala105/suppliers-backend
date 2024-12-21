import { AppDataSource } from "../data-source";
import { Supplier } from "../entities/Supplier";

export class UpdateSupplierCommand {
  static async execute(id: number, data: Partial<Supplier>) {
    const supplierRepo = AppDataSource.getRepository(Supplier);
    await supplierRepo.update(id, data);
    const updatedSupplier = await supplierRepo.findOneBy({ id });
    return updatedSupplier;
  }
}