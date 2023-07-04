import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Candidate extends Model {
    static associate(models) {
      // Rest of the associations...
      Candidate.belongsTo(models.PoliticalParty, {
        foreignKey: {
          name: 'politicalPartyId',
          field: 'politicalPartyId'
        },
        as: 'PoliticalPartyOwner',
      });
      Candidate.hasMany(models.PoliticalParty, {
        foreignKey: {
          name: 'candidateId',
          field: 'candidateId'
        },
        as: 'PoliticalParty',
      });
    }
  }

  Candidate.init(
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
    },
    {
      sequelize,
      modelName: 'Candidate'
    }
  );

  return Candidate;
};