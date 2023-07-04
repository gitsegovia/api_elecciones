import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class State extends Model {
    static associate(models) {
      // Rest of the associations...
      State.hasMany(models.Municipality, {
        foreignKey: {
          name: 'stateId',
          field: 'stateId'
        },
        as: 'Municipality',
      });
    }
  }

  State.init(
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
      iso: {
        allowNull: true,
        type: DataTypes.STRING
      },
    },
    {
      sequelize,
      modelName: 'State'
    }
  );

  return State;
};