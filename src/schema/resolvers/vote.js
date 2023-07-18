import CustomConsole from "../../utils/customConsole";

export default{
  Query: {
    getAllVoteByLocation: async (_, { input}, { models }) => {
      const {stateId, municipalityId, parishId, period} = input;
      const where = {
          period: period,
      }

      if(parishId){
        where.parishId = parishId;
      }

      if(municipalityId){
        where['$Parish.municipalityId$'] = municipalityId;
      }

      if(stateId){
        where['$Parish.Municipality.stateId$'] = stateId;
      }

      
      const data = await models.Vote.findAll({
        where: where,
        include: [
          {
            model: models.Parish,
            as: 'Parish',
            include: {
              model: models.Municipality,
              as: "Municipality",
              include: {
                model: models.State,
                as: "State"
              }
            },
          },
          {
            model: models.PollingPlace,
            as: 'PollingPlace'
          },
          {
            model: models.PoliticalParty,
            as: 'PoliticalParty'
          }
        ]
      });

      return data
    }    
  },
  Mutation: {
  }
}