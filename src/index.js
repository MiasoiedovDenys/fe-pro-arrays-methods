import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
   let brandItems = goods.filter((currentGood)=> currentGood.brand === brand);
   return brandItems;  

};

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
  let colorItems = goods.filter((currentColor)=> currentColor.color === color);
  return colorItems;  
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  let modelItems = goods.filter((currentModel)=> currentModel.model === model);
  return modelItems;  
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  let memoryItems = goods.filter((currentMemory)=> currentMemory.memory === memory);
  return memoryItems;  
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  let priceItems = goods.filter((currentPrice)=> currentPrice.price === price);
  return priceItems;  
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  let countryItems = goods.filter((currentCountry)=> currentCountry.country === country);
  return countryItems; 
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
  let osItems = goods.filter((currentOs)=> currentOs.os === os);
  return osItems;
};

/**
 * @param {number} from
 * @param {number} to
*/
const rangeFilter = (from, to) => goods.filter((item) =>item.price>= from && item.price <= to);

const minPriceReducer = () => goods.reduce((accumulator, good) => Math.min(accumulator, good.price), Infinity);

const maxPriceReducer = () => goods.reduce((accumulator, good) => Math.max(accumulator, good.price), -Infinity);

const toMaxSorter = () =>  goods.sort((firstGood,secondGood) => secondGood.price - firstGood.price);
const toMinSorter = () => goods.sort((firstGood,secondGood) => firstGood.price - secondGood.price);

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
