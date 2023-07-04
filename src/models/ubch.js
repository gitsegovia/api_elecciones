import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Ubch extends Model {
    static associate(models) {
      // Rest of the associations...
      Ubch.belongsTo(models.PollingPlace, {
        foreignKey: {
          name: 'pollingPlaceId',
          field: 'pollingPlaceId'
        },
        as: 'PollingPlace',
      });
    }
  }

  Ubch.init(
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      nameRepresentative: {
        allowNull: true,
        type: DataTypes.STRING
      },
      numberPhone: {
        allowNull: true,
        type: DataTypes.STRING
      },
    },
    {
      sequelize,
      modelName: 'Ubch'
    }
  );

  return Ubch;
};