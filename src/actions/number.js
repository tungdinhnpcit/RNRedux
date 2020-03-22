import {UP_NUMBER, DOWN_NUMBER} from './types';

export const upNumber = number => ({
  type: UP_NUMBER,
  data: number,
});

export const downNumber = number => ({
  type: DOWN_NUMBER,
  data: number,
});
