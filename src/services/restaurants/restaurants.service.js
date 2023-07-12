import { mocks } from './mock';
import camelize from 'camelize';
export const restaurantsRequest = (location = '43.653225,-79.383186') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) reject('not found');
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((res) => {
    return {
      ...res,
      isOpenNow: res.opening_hours && res.opening_hours.open_now,
      isClosedTemporarily: res.business_status === 'CLOSED_TEMPORARILY',
    };
  });
  return camelize(results);
};
