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
      Vote.belongsTo(models.PoliticalParty, {
        foreignKey: {
          name: 'politicalPartyId',
          field: 'politicalPartyId'
        },
        as: 'PoliticalParty',
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
    },
    {
      sequelize,
      modelName: 'Vote'
    }
  );

  return Vote;
};