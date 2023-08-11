import { SyntaxError, ValidationError } from "apollo-server";
import CustomConsole from "../../utils/customConsole";

export default{
  Query: {
    getAllCandidates: (_, _args, { models }) => {
      return models.Candidate.findAll();
    },
    getCandidatesByPeriod: (_, { periodId }, { models }) => {
      return models.Candidate.findAll({
        where: {
          periodId: periodId
        }
      })
    }
  },
  Mutation: {
    createCandidate: async (_, { input }, { models }) => {
      const { name, politicalPartyId } = input;

      if (name.trim() === "") {
        throw new ValidationError("name required");
      }
      if (politicalPartyId.trim() === "") {
        throw new ValidationError("politicalPartyId required");
      }

      const checkPoliticalParty = await models.PoliticalParty.findByPk(politicalPartyId);

      if(checkPoliticalParty){
        const t = await models.sequelize.transaction();
        const inpCandidate = {
          name: name,
          politicalPartyId: politicalPartyId
        }
        try {
          const newCandidate = await models.Candidate.create({...inpCandidate}, {
            transaction: t
          });

          t.commit();
          return newCandidate;
          
        } catch (error) {
          t.rollback();
          CustomConsole({origin: 'createCandidate', info: { error }, type: 'error'})
          throw new SyntaxError(error)
        }
      }else{
        throw new ValidationError("PoliticalParty not found");
      }
    },
    deleteCandidate: async (_, { candidateId }, { models }) => {
      if (candidateId.trim() === "") {
        throw new ValidationError("Candidate ID required");
      }

      const t = await models.sequelize.transaction();
      try {
        await models.Candidate.destroy({
          where: {
            id: candidateId
          },
          transaction: t
        });

        t.commit();
        return true;
        
      } catch (error) {
        t.rollback();
        CustomConsole({origin: 'deleteCandidate', info: { error }, type: 'error'})
        throw new SyntaxError(error)
      }
    }
  }
}