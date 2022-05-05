import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
   let brandItems = goods.filter((currentgood)=> currentgood.brand === brand);
   return brandItems;  

};

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
  let colorItems = goods.filter((currentcolor)=> currentcolor.color === color);
  return colorItems;  
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  let modelItems = goods.filter((currentmodel)=> currentmodel.model === model);
  return modelItems;  
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  let memoryItems = goods.filter((currentmemory)=> currentmemory.memory === memory);
  return memoryItems;  
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  let priceItems = goods.filter((currentprice)=> currentprice.price === price);
  return priceItems;  
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  let countryItems = goods.filter((currentcountry)=> currentcountry.country === country);
  return countryItems; 
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
  let osItems = goods.filter((currentos)=> currentos.os === os);
  return osItems;
};

// /**
//  * @param {number} from
//  * @param {number} to
//  */
const rangeFilter = (from, to) => {
  return function(currentprice) {
    return currentprice >= from && currentprice <= to;
  };
    
  
};

const minPriceReducer = () => {

  let PriceReducer = goods.reduce(function (a,b) {
  
    return Math.min(a,b.price);
  });


  // console.log(PriceReducer);
};

const maxPriceReducer = () => {};

const toMaxSorter = () => {
  // function compare( a, b ) {
  //   debugger
  //   if ( a.goods < b.goods ){
  //     return -1;
  //   }
  //   if ( a.goods > b.goods ){
  //     return 1;
  //   }
  //   return 0;
  // }
  
  // goods.sort( compare );
};
const toMinSorter = () => {};

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
