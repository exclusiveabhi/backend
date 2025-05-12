import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Employee extends Model {
  public id!: number;
  public employeeName!: string;
  public employeeId!: string;
  public position!: string;
  public department?: string;
  public email?: string;
  public phoneNumber!: string;
  public joiningDate!: Date;
  public address?: string;
  public qualification?: string;
  public experience?: string;
  public salary?: number;
  public photoUrl?: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    employeeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    joiningDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    qualification: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    experience: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    salary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    photoUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize,
    tableName: 'employees',
    timestamps: true,
  }
);

export default Employee;