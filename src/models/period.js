import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Period extends Model {
    static associate(models) {
      Period.hasMany(models.Candidate, {
        foreignKey: {
          name: 'periodId',
          field: 'periodId'
        },
        as: 'Candidate',
      });
    }
  }

  Period.init(
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
      modelName: 'Period'
    }
  );

  return Period;
};