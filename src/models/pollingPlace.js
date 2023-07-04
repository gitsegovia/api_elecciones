import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class PollingPlace extends Model {
    static associate(models) {
      // Rest of the associations...
      PollingPlace.belongsTo(models.Parish, {
        foreignKey: {
          name: 'parishId',
          field: 'parishId'
        },
        as: 'Parish',
      });
      PollingPlace.hasOne(models.Ubch, {
        foreignKey: {
          name: 'pollingPlaceId',
          field: 'pollingPlaceId'
        },
        as: 'Ubch',
      });
      PollingPlace.hasMany(models.Vote, {
        foreignKey: {
          name: 'pollingPlaceId',
          field: 'pollingPlaceId'
        },
        as: 'Vote',
      });
      
    }
  }

  PollingPlace.init(
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING
      },
      address: {
        allowNull: true,
        type: DataTypes.STRING
      },
      latitude: {
        allowNull: true,
        type: DataTypes.DECIMAL
      },
      longitude: {
        allowNull: true,
        type: DataTypes.DECIMAL
      }
    },
    {
      sequelize,
      modelName: 'PollingPlace'
    }
  );

  return PollingPlace;
};