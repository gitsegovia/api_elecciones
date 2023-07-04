import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Parish extends Model {
    static associate(models) {
      // Rest of the associations...
      Parish.belongsTo(models.Municipality, {
        foreignKey: {
          name: 'municipalityId',
          field: 'municipalityId'
        },
        as: 'Municipality',
      });
      Parish.hasMany(models.PollingPlace, {
        foreignKey: {
          name: 'parishId',
          field: 'parishId'
        },
        as: 'PollingPlace',
      });
    }
  }

  Parish.init(
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      code: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING
      },
    },
    {
      sequelize,
      modelName: 'Parish'
    }
  );

  return Parish;
};