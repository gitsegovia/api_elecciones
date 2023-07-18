import CustomConsole from "../../utils/customConsole";

export default{
  Mutation: {
    insertData2000: async (_, args, { models }) => {
      const checkStatus = await models.Vote.findAll({
        where: {
          period: 'elecciones 2000'
        }
      });
      if(checkStatus.length>0){
        return false;
      }
      
      const t = await models.sequelize.transaction();
      
      try {       

        const inpData = [
          {period: 'elecciones 2000',count:63306,politicalPartyId:'cf5aaf99-c441-4518-b594-fceb313d76bb',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:23884,politicalPartyId:'4c174150-ce45-471f-8467-5738285bbc47',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:2732,politicalPartyId:'17936c46-72e6-4b64-923f-1116c8a1448a',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:1183,politicalPartyId:'46c12feb-e6b5-4772-899d-ca5be7dd5e4b',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:759,politicalPartyId:'d5501047-ecd6-4c0b-91be-a235b0119640',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:561,politicalPartyId:'5bf8d2a8-285a-4076-b5e6-238e0f1caf46',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:289,politicalPartyId:'0d1729b9-2eb3-43b3-b35d-577715533d76',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:163,politicalPartyId:'73117e7c-c902-43c1-b51d-c9b9a9ddfdcf',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:129,politicalPartyId:'e0b6ceb1-d9b9-4314-9c45-82fa7f1bfbb0',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:0,politicalPartyId:'05b654a1-1e3d-46a9-925b-20048c1dfbfb',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:5475,politicalPartyId:'bd77b930-626a-4ab5-9b34-7a77efd7bbed',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:29961,politicalPartyId:'61951523-348c-45e4-a13f-04961aeedbde',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:24813,politicalPartyId:'1a5add8d-8135-4346-8ed3-b1950e7a168b',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:3745,politicalPartyId:'84835377-62a3-4509-9253-b156a8ee2d41',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:1502,politicalPartyId:'3039787f-e512-4337-81ea-df4a37b1b230',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:1035,politicalPartyId:'efe3dfe1-318f-491d-ac87-4a57881dc464',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:741,politicalPartyId:'b4552307-1919-43a9-9c00-8f2383f99a7f',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:2247,politicalPartyId:'bd77b930-626a-4ab5-9b34-7a77efd7bbed',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:2486,politicalPartyId:'1f9abd01-5b37-4f54-a97f-8b912a641bc6',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:50826,politicalPartyId:'3312cc4b-c48d-4a01-a615-61b7c3b99397',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:40477,politicalPartyId:'f635d68e-737e-45ed-a44d-1cbafcfa72ef',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:16303,politicalPartyId:'840d5faa-97bb-40d8-a1bb-ce97da654cb7',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:7811,politicalPartyId:'0b11fbce-47fb-4a80-991b-1c9f304bf7e9',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:4120,politicalPartyId:'d129a152-1fc2-435a-95b3-af0f3480d0af',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:3898,politicalPartyId:'3b7113b7-6316-42c7-954c-aed5ec94d371',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:2254,politicalPartyId:'976466c2-cdb8-4bf1-91a2-8e6df3b7fe97',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:1867,politicalPartyId:'948622b4-fae2-4eb3-8488-f5ea8eb4ef1a',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:1089,politicalPartyId:'a0f59109-7078-40f3-8eb5-8e419acd0a47',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:1034,politicalPartyId:'ab942460-4efa-4732-bb4b-98f9397ce05b',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:955,politicalPartyId:'38745877-c54a-4daa-b7fd-bc2ac3911ec6',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:942,politicalPartyId:'8209a4b6-f2bb-4675-bb68-003093a0fac7',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:941,politicalPartyId:'936fd7d9-27ff-4c42-a613-35732de2d090',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:758,politicalPartyId:'cc0847a6-eae4-47fa-9b63-c3498345031b',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:639,politicalPartyId:'76a13609-bd5d-40ef-9a23-3e4b498c320f',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:543,politicalPartyId:'8883a8e0-f325-47e0-8263-e702edbd521b',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:497,politicalPartyId:'79108f43-abbe-472b-b812-080c6b48d554',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
          {period: 'elecciones 2000',count:497,politicalPartyId:'163277bc-016f-4f27-a7b5-91d54efb55a8',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        ]
      
        await models.Vote.bulkCreate(inpData, { transaction: t });
        t.commit();
        return true;
      } catch (error) {
        CustomConsole({ origin: 'insertData2000', info: error})
        t.rollback();
        return false
      }
    },
  }
}