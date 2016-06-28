// var list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };

// Напишите функцию arrayToList, которая строит 
// такую структуру, получая в качестве аргумента 
// [1, 2, 3], а также функцию listToArray, которая 
// создаёт массив из списка. Также напишите 
// вспомогательную функцию prepend, которая получает 
// элемент и создаёт новый список, где этот элемент 
// добавлен спереди к первоначальному списку, и 
// функцию nth, которая в качестве аргументов 
// принимает список и число, а возвращает элемент 
// на заданной позиции в списке или же undefined в 
// случае отсутствия такого элемента.

// Если ваша версия nth не рекурсивна, тогда напишите 
// её рекурсивную версию.

// console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

	//	arrayToList

// v.1
function arrayToList(arr) {
	var list = {};
	if(arr.length > 0){
		list.value = arr[0];
		arr.shift();
			if(arr.length > 0)
			list.rest = arrayToList(arr);
			else list.rest = null;
	}
	return list;
}

// v.2 
function arrayToList(arr) {
	var list = {};
	var count = 0;
		function helper(){
			if(arr.length > 0){
				if(count === 0){
					list.value = arr[arr.length-1];
					list.rest = null;
				}
				else {
					list.rest = {value: list.value, rest: list.rest};
					list.value = arr[arr.length-1];
					}
				console.log(list);
				arr.pop();
				console.log(arr.length);
				count++;
				console.log(count);
				helper();
			}
		}
	helper();
	return list;
}


// v.3
function arrayToList(arr) {
	var list = {};
		for(i = arr.length, c = 0; i > 0; i--, c++){
			if(c == 0){
				list.value = arr[arr.length-1];
				list.rest = null;
			}
			else {
				list.rest = {value:list.value, rest:list.rest};
				list.value = arr[i - 1];
			}
		}
	return list;
}

	//	listToArray

// v.1
function listToArray(list){
	var arr = [];
		for(;;){
			arr.push(list.value);
			list = list.rest;
			if(list === null) break;
		}
		return arr;
}