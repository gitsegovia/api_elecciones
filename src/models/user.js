import { Model, DataTypes } from 'sequelize';
import { encrypt, makeCodeNumeric } from '../utils/security';

export default (sequelize) => {
  class User extends Model {
    static associate(models) {
      // Rest of the associations...
      User.belongsTo(models.Employee, {
        foreignKey: {
          name: 'employeeId',
          field: 'employeeId'
        },
        as: 'Employee',
      });
    }
  }

  User.init(
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      username: {
        allowNull: true,
        type: DataTypes.STRING
      },
      password: {
        allowNull: true,
        type: DataTypes.STRING
      },
      pin: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: makeCodeNumeric(4)
      },
      privilege: {
        allowNull: true,
        type: DataTypes.STRING
      },
      role: {
        allowNull: true,
        type: DataTypes.TEXT
      },
      active: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      typeSuspension: {
        allowNull: true,
        type: DataTypes.STRING
      },
      reasonSuspension: {
        allowNull: true,
        type: DataTypes.TEXT
      },
      tokenActivation: {
        allowNull: true,
        type: DataTypes.STRING
      },
      numberUser: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          let valor = await User.findAll({
            attributes: [[sequelize.fn('max', sequelize.col('numberUser')), 'maxNumber']],
            raw: true
          });
          let number = 1;
          if (valor && valor[0].maxNumber != null) {
            number += valor[0].maxNumber;
          }
          user.numberUser = number;
          user.password = encrypt(user.password);
        }
      },
      sequelize,
      modelName: 'User'
    }
  );

  return User;
};