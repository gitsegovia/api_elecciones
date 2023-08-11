import { doLogin, doCheckToken } from "../../utils/auth";
import { SyntaxError, ValidationError } from "apollo-server";
import CustomConsole from "../../utils/customConsole";

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
      return doLogin({ username: username.trim().toLowerCase(), password, models });
    },
    checkToken: (_, { token }, { models }) => {
      return doCheckToken({ access_token: token, models });
    },
    createUser: async (_, { input }, { models }) => {
      const { username, password, privilege, role, firstName, lastName, dni, gender, phoneNumber, photo, dniImg } = input;

      if (username.trim() === "") {
        throw new ValidationError("username required");
      }
      if (password.trim() === "") {
        throw new ValidationError("password required");
      }
      if (privilege.trim() === "") {
        throw new ValidationError("privilege required");
      }
      if (role.trim() === "") {
        throw new ValidationError("role required");
      }
      if (firstName.trim() === "") {
        throw new ValidationError("firstName required");
      }
      if (lastName.trim() === "") {
        throw new ValidationError("lastName required");
      }
      if (phoneNumber.trim() === "") {
        throw new ValidationError("phoneNumber required");
      }

      const inpUser = {
        username: username,
        password: password,
        privilege: privilege,
        role: role,
        Employee: {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
        },
      };

      if (dni && dni !== "") {
        inpUser.Employee.dni = dni;
      }
      if (gender && gender !== "") {
        inpUser.Employee.gender = gender;
      }
      if (photo && photo !== "") {
        inpUser.Employee.photo = photo;
      }
      if (dniImg && dniImg !== "") {
        inpUser.Employee.dniImg = dniImg;
      }

      
      const t = await models.sequelize.transaction();
      try {
        const newUser = await models.User.create({ ...inpUser }, {
          include: {
            model: models.Employee,
            as: 'Employee'
          },
          transaction: t
        })
        
        t.commit();

        return newUser;
      } catch (error) {
        t.rollback();
        CustomConsole({origin: 'createUser', info: { error }, type: 'error'})
        throw new SyntaxError(error)
      }
    },
    deleteUser: async (_, { userId }, { models }) => {
      if (userId.trim() === "") {
        throw new ValidationError("User ID required");
      }

      const user = await models.User.finByPk(userId);

      if(!user){
        throw new ValidationError("User not found");
      }

      const t = await models.sequelize.transaction();
      try {
        await models.Employee.destroy({
          where: {
            id: user.employeeId
          },
          transaction: t
        });
        
        await models.User.destroy({
          where: {
            id: userId
          },
          transaction: t
        });

        t.commit();
        return true;
        
      } catch (error) {
        t.rollback();
        CustomConsole({origin: 'deleteUser', info: { error }, type: 'error'})
        throw new SyntaxError(error)
      }
    }
  },
};
