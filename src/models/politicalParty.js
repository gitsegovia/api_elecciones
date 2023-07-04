import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class PoliticalParty extends Model {
    static associate(models) {
      // Rest of the associations...
      PoliticalParty.hasMany(models.Vote, {
        foreignKey: {
          name: 'politicalPartyId',
          field: 'politicalPartyId'
        },
        as: 'Vote',
      });
      PoliticalParty.belongsTo(models.Candidate, {
        foreignKey: {
          name: 'candidateId',
          field: 'candidateId'
        },
        as: 'Candidate',
      });
      PoliticalParty.hasOne(models.Candidate, {
        foreignKey: {
          name: 'politicalPartyId',
          field: 'politicalPartyId'
        },
        as: 'CandidateOwner',
      });
    }
  }

  PoliticalParty.init(
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
      iso: {
        allowNull: true,
        type: DataTypes.STRING
      },
    },
    {
      sequelize,
      modelName: 'PoliticalParty'
    }
  );

  return PoliticalParty;
};