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
        if (!result.includes(array[i])) {
          result.push(array[i]);
        }
      }
    }
  }
  return result;
}
console.log(getRepeatsNumbers(arrNums));



