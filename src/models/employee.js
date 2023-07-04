import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Employee extends Model {
    static associate(models) {
      // Rest of the associations...
      Employee.hasOne(models.User, {
        foreignKey: {
          name: 'employeeId',
          field: 'employeeId'
        },
        as: 'User',
      });
    }
  }

  Employee.init(
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4()
      },
      firstName: {
        allowNull: true,
        type: DataTypes.STRING
      },
      lastName: {
        allowNull: true,
        type: DataTypes.STRING
      },
      dni: {
        allowNull: true,
        type: DataTypes.STRING
      },
      gender: {
        allowNull: true,
        type: DataTypes.STRING
      },
      phoneNumber: {
        allowNull: true,
        type: DataTypes.STRING
      },
      photo: {
        allowNull: true,
        type: DataTypes.STRING
      },
      dniImg: {
        allowNull: true,
        type: DataTypes.STRING
      },
    },
    {
      sequelize,
      modelName: 'Employee'
    }
  );

  return Employee;
};