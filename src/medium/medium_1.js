import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let sum = array.reduce((a, b) => a+b, 0);
    return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let sortedArray = array.sort((a, b) => a - b);
    
    if (sortedArray.length % 2) {
        return sortedArray[sortedArray.length / 2];
    }

    return (sortedArray[sortedArray.length/2] + sortedArray[sortedArray.length / 2 - 1]) / 2;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let result = {};
    let arrayLength = array.length;
    let arraySum = getSum(array);
    let arrayMedian = getMedian(array);
    let arrayMaximum = Math.max(...array);
    let arrayMinimum = Math.min(...array);
    let arrayMean = arraySum / arrayLength;
    let arrayVariance = variance(array, arrayMean);
    let arrayStdDev = Math.sqrt(arrayVariance);

    result = {
        length: arrayLength,
        sum: arraySum,
        mean: arrayMean,
        median: arrayMedian,
        min: arrayMinimum,
        max: arrayMaximum,
        variance: arrayVariance,
        standard_deviation: arrayStdDev
    };

    return result;
}

