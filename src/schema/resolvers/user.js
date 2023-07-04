import { doLogin,doCheckToken } from "../../utils/auth";

export default {
  Query: {
    getListEmployeesDashboard: async (_, args, { models }) => {
      const users = await models.User.findAll({
        include: [
          {
            model: models.Employee,
            as: "Employee",
          },
        ],
        order: [["numberUser"]],
      });

      return users;
    },
  },
  Mutation: {
    login: (_, { input: { username, password } }, { models }) => {
      return doLogin({username: username.trim().toLowerCase(), password, models});
    },    
    checkToken: (_, { token }, { models }) => {
      return doCheckToken({access_token: token, models});
    },
  },
};
