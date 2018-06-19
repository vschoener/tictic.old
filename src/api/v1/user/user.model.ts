import {
  Model,
  Table,
  Column,
  Unique,
  CreatedAt,
  UpdatedAt } from "sequelize-typescript";

@Table({
  timestamps: true
})
export default class User extends Model<User> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Unique
  @Column
  email: string;

  @Column
  password: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
