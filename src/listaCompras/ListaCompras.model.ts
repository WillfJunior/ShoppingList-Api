import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class ListaCompras extends Model {
  @Column
  produto: string;
}
