import { SyntaxError, ValidationError } from "apollo-server";
import CustomConsole from "../../utils/customConsole";

export default {
  Query: {
    getPeriod: (_, {period}, { models }) => {
      return models.Period.findOne({
        where: {
          name: period,
        },
        include: {
          model: models.Candidate,
          as: 'Candidate'
        }
      })
    },
    getAllPeriod: (_, _args, { models }) => {
      return models.Period.findAll({
        include: {
          model: models.Candidate,
          as: 'Candidate'
        }
      })
    }
  },
  Mutation: {
    createPeriod: async (_, { period }, { models }) => {
      if (period.trim() === "") {
        throw new ValidationError("period required");
      }
      const inpPeriod = {
        name: period
      }

      const t = await models.sequelize.transaction();
      try {
        const newPeriod = await models.Period.create({...inpPeriod}, {
          transaction: t
        });

        t.commit();
        return newPeriod;
        
      } catch (error) {
        t.rollback();
        CustomConsole({origin: 'createPeriod', info: { error }, type: 'error'})
        throw new SyntaxError(error)
      }
    },
    deletePeriod: async (_, { periodId }, { models }) => {
      if (periodId.trim() === "") {
        throw new ValidationError("period required");
      }
      
      const t = await models.sequelize.transaction();
      try {
        await models.Period.destroy({
          where: {
            id: periodId
          },
          transaction: t
        });

        t.commit();
        return true;
        
      } catch (error) {
        t.rollback();
        CustomConsole({origin: 'deletePeriod', info: { error }, type: 'error'})
        throw new SyntaxError(error)
      }
    }
  },
};
