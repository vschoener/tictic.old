import {
  Model,
  Table,
  Column,
  Unique } from "sequelize-typescript";

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
}
