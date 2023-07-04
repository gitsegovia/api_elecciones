// Dependencies
import 'dotenv/config'
import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';

// Utils
import { encrypt, setBase64, getBase64 } from './security';
import { isPasswordMatch } from './is';

// Configuration
const JWT_SECRETKEY = process.env.JWT_SECRETKEY || 'JWT_SECRETKEY';
const JWT_EXPIRESIN = process.env.JWT_EXPIRESIN || '7d';

export const createToken = async user => {
  const { id, email, password, privilege, active, providerId, clientId, employeeId, country, nameUser,subSellerId ='', nameSeller='' } = user;

  const token = setBase64(`${encrypt(JWT_SECRETKEY)}${password}`);
  const userData = {
    id,
    email,
    privilege,
    active,
    token,
    providerId,
    clientId,
    employeeId,
    country,
    nameUser,
    subSellerId,
    nameSeller
  };

  const createTk = jwt.sign({ data: setBase64(userData) }, JWT_SECRETKEY, { expiresIn: JWT_EXPIRESIN });

  return Promise.all([createTk]);
};

export const returnTokenInfo = token => {
  const infoToken = jwt.verify(token, JWT_SECRETKEY, function (err, decoded) {
    if (err) {
      console.log('returnTokenInfo err',err)
      return { id: '' };
    }
    if (decoded) {
      console.log('returnTokenInfo decoded',decoded)
      return getBase64(decoded.data);
    }
  });

  return infoToken;
};

export const createTokenUser = async user => {
  const { id, nameUser, active, pin, numberUser } = user;

  const userData = {
    id,
    nameUser,
    active,
    pin,
    numberUser
  };

  const createTk = jwt.sign({ data: setBase64(userData) }, JWT_SECRETKEY, { expiresIn: JWT_EXPIRESIN });

  return Promise.all([createTk]);
};

export const doLogin = async ({username, password, models}) => {
  const user = await models.User.findOne({
    where: {
      username,
    },
    raw: true
  });

  if (!user) {
    throw new AuthenticationError('wrong_username_password');
  }
  const passwordMatch = isPasswordMatch(encrypt(password), user.password);
  const isActive = user.active;

  if (!passwordMatch) {
    throw new AuthenticationError('wrong_username_password');
  }

  if (!isActive) {
    throw new AuthenticationError('account_inactive');
  }

  const [token] = await createToken(user);

  const data = {
    token: token,
    userId: user.id,
    privilege: user.privilege,
    role: user.role,
    employeeId: user.employeeId
  };
  return data;
};


export const doCheckToken = async ({access_token, models}) => {
  
  try {
    const { data } = jwt.verify(access_token, JWT_SECRETKEY);
    const { id, privilege } = getBase64(data);

    const user = await models.User.findOne({
      where: { id: id, active: true },
      raw: true
    });

    if (!user) {
      throw new AuthenticationError('account_inactive');
    }

    const [token] = await createToken(user);

    const AuthPayLoad = {
      token: token,
      userId: user.id,
      privilege: user.privilege,
      role: user.role,
      employeeId: user.employeeId
    };


    return AuthPayLoad;
  } catch (e) {
    throw new AuthenticationError('invalid_token');
  }
};