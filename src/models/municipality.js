import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Municipality extends Model {
    static associate(models) {
      // Rest of the associations...
      Municipality.belongsTo(models.State, {
        foreignKey: {
          name: 'stateId',
          field: 'stateId'
        },
        as: 'State',
      });
      Municipality.hasMany(models.Parish, {
        foreignKey: {
          name: 'municipalityId',
          field: 'municipalityId'
        },
        as: 'Parish',
      });
    }
  }

  Municipality.init(
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
      modelName: 'Municipality'
    }
  );

  return Municipality;
};