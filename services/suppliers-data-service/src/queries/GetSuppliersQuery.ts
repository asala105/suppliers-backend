import { AppDataSource } from "../data-source";
import { Supplier } from "../entities/Supplier";

export class GetSuppliersQuery {
  static async execute(
    filters: Partial<Supplier> = {},
    sort: { [key: string]: "ASC" | "DESC" } = {}
  ) {
    const supplierRepo = AppDataSource.getRepository(Supplier);
    return await supplierRepo.find({
      where: filters,
      order: sort,
    });
  }
}
