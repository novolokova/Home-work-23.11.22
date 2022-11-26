// Є массив [1,2,3,1,5,6,1,2,5],
// треба використовуючи цей масив створити новий,
// в якому будуть присутні тільки тільки ті значення які повторюються.
// Результат буде [1,2,5]
// Якщо в джерельному масиві усі значення унікальні,
// то створюєте новий пустий масив.

// *зробити функцію

const arrNums = [1, 2, 3, 1, 5, 6, 1, 1, 1, 1, 2, 5, 5, 5, 5, 5, 5];
const arrNumsClone1 = arrNums.slice(0);
const arrNumsClone2 = arrNums.slice(0);

/**
 *
 * @param {[number]} array
 * @returns {[]}
 */
function getRepeatsNumbers(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] === undefined) break;
      if (array[j] === array[i]) {
        if (result.includes(array[i])) {
          break;
        }
        result.push(array[i]);
      }
    }
  }
  return result;
}
console.log(getRepeatsNumbers(arrNums));

//**************************************** */

/**
 *
 * @param {number} value
 * @param {number} index
 * @param {[number]} arr
 * @returns {boolean}
 */
function getRepeatsNum1(value, index, arr) {
  return arr.indexOf(value) !== index;
}

/**
 *
 * @param {number} value
 * @param {number} index
 * @param {number} arr
 * @returns {boolean}
 */
function getRepeatsNum2(value, index, arr) {
  return arr.indexOf(value) === index;
}

const result2 = arrNums.filter(getRepeatsNum1).filter(getRepeatsNum2);

console.log(result2);

//*********************************************** */

const sortArr = function (array) {
  array.sort(function (current, next) {
    return current < next ? -1 : 1;
  });
};

/**
 *
 * @param {[number]} array
 * @returns {[number]}
 */
function getRepeatsNumbers3(array) {
  let result = [];
  sortArr(array);
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] === undefined) break;
    if (array[i] === array[i - 1]) {
      if (result.includes(array[i])) {
        array.splice(i, 1);
      } else {
        result.push(array[i]);
        array.splice(i, 1);
      }
      i--;
    }
  }
  return result;
}

console.log(getRepeatsNumbers3(arrNumsClone1));

//*************************** */

/**
 *
 * @param {[number]} array
 * @returns {[number]}
 */
function getRepeatsNumbers4(array) {
  let result = [];
  sortArr(array);

  for (let i = 0; i < array.length; i++) {
    if (array[i] === undefined) break;
    if (array[i] >= array[i + 1]) {
      if (!result.includes(array[i]) && !result.includes(array[i + 1])) {
        result.push(array[i]);
      }
    }
  }
  return result;
}
console.log(getRepeatsNumbers4(arrNumsClone2));
