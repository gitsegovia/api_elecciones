import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Vote extends Model {
    static associate(models) {
      // Rest of the associations...
      Vote.belongsTo(models.PollingPlace, {
        foreignKey: {
          name: 'pollingPlaceId',
          field: 'pollingPlaceId'
        },
        as: 'PollingPlace',
      });
      Vote.belongsTo(models.Parish, {
        foreignKey: {
          name: 'parishId',
          field: 'parishId'
        },
        as: 'Parish',
      });
      Vote.belongsTo(models.PoliticalParty, {
        foreignKey: {
          name: 'politicalPartyId',
          field: 'politicalPartyId'
        },
        as: 'PoliticalParty',
      });
      Vote.belongsTo(models.Period, {
        foreignKey: {
          name: 'periodId',
          field: 'periodId'
        },
        as: 'Period',
      });
    }
  }

  Vote.init(
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      count: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      period: {
        allowNull: true,
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'Vote'
    }
  );

  return Vote;
};