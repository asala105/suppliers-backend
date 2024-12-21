import { Column, Entity } from "typeorm";
import { AbstactEntity } from "./AbstactEntity";

@Entity('suppliers')
export class Supplier extends AbstactEntity {
  @Column()
  name: string;

  @Column()
  vatNumber: string;
}
