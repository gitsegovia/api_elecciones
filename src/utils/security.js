// Dependencies
import 'dotenv/config'
import crypto from 'crypto';

// Configuration
const SECRETKEY = process.env.SECRETKEY || 'SECRETKEY';

export function encrypt(str) {
  return crypto.createHash('sha1').update(`${SECRETKEY}${str.toString()}`).digest('hex');
}

export function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  length = length || 12;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function makeCode(length = 12, type = 'alfanumeric') {
  var result = '';
  var alfabetic = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var numeric = '0123456789';
  var characters = alfabetic + numeric;

  if (type === 'numeric') {
    for (var i = 0; i < length; i++) {
      result += numeric.charAt(Math.floor(Math.random() * numeric.length));
    }
  } else if (type === 'alfabetic') {
    for (var i = 0; i < length; i++) {
      result += alfabetic.charAt(Math.floor(Math.random() * alfabetic.length));
    }
  } else {
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }

  return result;
}

export function makeCodeNumeric(length = 12) {
  return Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1));
}

export function getBase64(value) {
  let buff = Buffer.from(value, 'base64');
  let base64data = buff.toString('utf8');
  let data = JSON.parse(base64data);

  return data;
}

export function setBase64(value) {
  let data = JSON.stringify(value);
  let buff = Buffer.from(data, 'utf8');
  let base64data = buff.toString('base64');

  return base64data;
}

