import moment from 'moment';
export const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const setTimeOutLocal = ({
  timeout = 20000,
  callback = () => {
    console.log('CALLBACK_TIMEOUT');
  }
}) => {
  setTimeout(() => {
    callback();
  }, timeout);
};

export const getRandomArbitrary = (min, max) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

export const cleanUpBlanks = str => {
  return str.replace(/\s/g, '');
};

export function sortList(list, field, order = 'ASC') {
	let sorted = list;

	if (order === 'ASC') {
		sorted = list.sort((objA, objB) => (objA[field] > objB[field] ? 1 : -1));
	} else {
		sorted = list.sort((objA, objB) => (objB[field] > objA[field] ? 1 : -1));
	}

	return sorted;
}
