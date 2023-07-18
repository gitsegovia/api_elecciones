import CustomConsole from "../../utils/customConsole";

export default{
  Mutation: {
    insertData2012: async (_, args, { models }) => {
      const checkStatus = await models.Vote.findAll({
        where: {
          period: 'elecciones 2012'
        }
      });
      if(checkStatus.length>0){
        return false;
      }
      
      const t = await models.sequelize.transaction();
      
      try {       

        const inpData = [{period: 'elecciones 2012',count:181339,politicalPartyId:'a9f3ab72-05f9-4dd8-9ee4-74a7e96b2904',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:14629,politicalPartyId:'d350bc15-6b16-443e-beef-5d48cfcc92c8',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:13527,politicalPartyId:'283d57d1-af8e-4db0-9039-c0bc5f1b3b88',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:10101,politicalPartyId:'14a6cc82-3dc4-4f7a-a0a1-c4dae059f132',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:6784,politicalPartyId:'3b251f96-52b4-48c1-bba3-bc622b31d143',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:6595,politicalPartyId:'851c88cf-3d86-4f0a-bf0a-ca43ff4a40f0',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:4310,politicalPartyId:'0020d87e-f862-449b-9f28-478459f5a1cd',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:3903,politicalPartyId:'0d1729b9-2eb3-43b3-b35d-577715533d76',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:3119,politicalPartyId:'c4c1bbde-52c0-4615-a5b2-0ae9d28827aa',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:1943,politicalPartyId:'ec32c7c6-afa7-4ee9-9dfb-085a0540cca2',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:1690,politicalPartyId:'d5501047-ecd6-4c0b-91be-a235b0119640',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:1098,politicalPartyId:'38a1a694-a12a-4f7f-87ee-25e7ead6af66',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:181339,politicalPartyId:'a9f3ab72-05f9-4dd8-9ee4-74a7e96b2904',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:14629,politicalPartyId:'d350bc15-6b16-443e-beef-5d48cfcc92c8',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:13527,politicalPartyId:'283d57d1-af8e-4db0-9039-c0bc5f1b3b88',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:10101,politicalPartyId:'14a6cc82-3dc4-4f7a-a0a1-c4dae059f132',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:6784,politicalPartyId:'3b251f96-52b4-48c1-bba3-bc622b31d143',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:6595,politicalPartyId:'851c88cf-3d86-4f0a-bf0a-ca43ff4a40f0',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:4310,politicalPartyId:'0020d87e-f862-449b-9f28-478459f5a1cd',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:3903,politicalPartyId:'0d1729b9-2eb3-43b3-b35d-577715533d76',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:3119,politicalPartyId:'c4c1bbde-52c0-4615-a5b2-0ae9d28827aa',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:1943,politicalPartyId:'ec32c7c6-afa7-4ee9-9dfb-085a0540cca2',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:1690,politicalPartyId:'d5501047-ecd6-4c0b-91be-a235b0119640',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:1098,politicalPartyId:'38a1a694-a12a-4f7f-87ee-25e7ead6af66',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:2154,politicalPartyId:'94a76869-a789-4f38-9771-7469fbd2a5bf',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:72,politicalPartyId:'b4182ad9-7c69-4c13-9424-64fcff7efb50',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:243,politicalPartyId:'764fa02c-cbfb-45fb-9c06-3869065ba757',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:146,politicalPartyId:'540d4a82-9482-4e9e-ae30-e9219a330c03',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},
        {period: 'elecciones 2012',count:125,politicalPartyId:'7761aa02-ef13-4280-b215-4b99715c007b',pollingPlaceId:'26c07b1d-84f3-4d0f-9bed-00414cee1263',parishId:'fc3dd36c-20be-4d18-a98f-abdfd94aa06e'},]
      
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