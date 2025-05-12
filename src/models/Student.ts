import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Student extends Model {
  public id!: number;
  public studentName!: string;
  public registrationNo!: string;
  public class!: string;
  public dateOfAdmission!: Date;
  public discountInFees?: string;
  public mobileNo!: string;
  public dateOfBirth!: Date;
  public studentBirthFormID?: string;
  public gender!: string;
  public caste?: string;
  public religion?: string;
  public orphanStudent?: string;
  public bloodGroup?: string;
  public previousSchool?: string;
  public previousID?: string;
  public identificationMark?: string;
  public disease?: string;
  public additionalNote?: string;
  public totalSiblings?: string;
  public photoUrl?: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    studentName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registrationNo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfAdmission: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    discountInFees: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mobileNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    studentBirthFormID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    caste: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    religion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    orphanStudent: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bloodGroup: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    previousSchool: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    previousID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    identificationMark: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    disease: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    additionalNote: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    totalSiblings: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photoUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize,
    tableName: 'students',
    timestamps: true,
  }
);

export default Student;