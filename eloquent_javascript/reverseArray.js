// Обращаем вспять массив

// У массивов есть метод reverse, меняющий порядок 
// элементов в массиве на обратный. В качестве 
// упражнения напишите две функции, reverseArray 
// и reverseArrayInPlace. Первая получает массив 
// как аргумент и выдаёт новый массив – с обратным 
// порядком элементов. Вторая работает как 
// оригинальный метод reverse – она меняет 
// порядок элементов на обратный в том массиве, 
// который был ей передан в качестве аргумента. 
// Не используйте стандартный метод reverse.

function reverseArray(arr) {
	var x = new Array;
	for (i = arr.length-1; i >= 0; i--){
		x.push(arr[i]);
	}
	return x;
}

function reverseArrayInPlace(arr){
	var arrHelper = new Array;

	for(i = arr.length-1; i >= 0; i--){
		arrHelper.push(arr[i]);
	}

	for(i = 0; i <= arrHelper.length-1; i++){
		// variant one
		// arr.splice(i, 1, (arrHelper[i]));

		// variant two
		arr[i] = arrHelper[i];
	}
	return arr;
}

reverseArrayInPlace([1, 2, 3, 7, 8, 9]);

// variant three
function reverseArrayInPlace(arr){
	var arrHelper = new Array;

	for(i = arr.length-1; i >= 0; i--){
		arrHelper.push(arr[i]);
	}

	arr.length = 0;
	arr = arrHelper;

	return arr;
}

reverseArrayInPlace([1, 2, 3, 7, 8, 9]);

