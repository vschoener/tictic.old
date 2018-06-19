import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  ForeignKey } from "sequelize-typescript";

import User from '../user/user.model';

@Table({
  timestamps: true
})
export default class Activity extends Model<Activity> {

  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => User)
  user: User

  @Column
  type: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
