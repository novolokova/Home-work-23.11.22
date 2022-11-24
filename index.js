// Є массив [1,2,3,1,5,6,1,2,5],
// треба використовуючи цей масив створити новий,
// в якому будуть присутні тільки тільки ті значення які повторюються.
// Результат буде [1,2,5]
// Якщо в джерельному масиві усі значення унікальні,
// то створюєте новий пустий масив.

// *зробити функцію

const arrNums = [1, 2, 3, 1, 5, 6, 1, 2, 5];

/**
 *
 * @param {[number]} array
 * @returns {[]}
 */
function getRepeatsNumbers(array) {
  let result = [];
  if (array.length === 0) {
    return result;
  }

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
