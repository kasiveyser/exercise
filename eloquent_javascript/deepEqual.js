// Глубокое сравнение

// Оператор == сравнивает переменные объектов, проверяя, 
// ссылаются ли они на один объект. Но иногда полезно 
// было бы сравнить объекты по содержимому.

// Напишите функцию deepEqual, которая принимает два 
// значения и возвращает true, только если это два 
// одинаковых значения или это объекты, свойства которых 
// имеют одинаковые значения, если их сравнивать 
// рекурсивным вызовом deepEqual.

// Чтобы узнать, когда сравнивать величины через ===, 
// а когда – объекты по содержимому, используйте 
// оператор typeof. Если он выдаёт "object" для обеих 
// величин, значит нужно делать глубокое сравнение. 

// Примите во внимание одно дурацкое исключение, 
// существующее по историческим причинам: typeof null 
// тоже возвращает "object".

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

function deepEqual(a, b){
		 if(typeof a === typeof b){ 
			if (a == b) return true
				else if(typeof a == "object"){
					if(a != null && b != null){
console.log("ну интересно же " + a + ":" + b);
var valueA, valueB, keyA, keyB;

	//	vers.3

for(keyA in a, b){
	console.log("forin " + a[keyA] + ":" + b[keyA]);
	valueA = a[keyA];
	valueB = b[keyA];
	if(deepEqual(valueA, valueB)) {
		console.log("value " + valueA + ":" + valueB);
		console.log("keys " + keyA + ":" + keyB)
		//return false
	}else return false;
}
return true;

	//	vers.2

/*for (keyA in a){
	valueA = a[keyA];
	break;
	keyA++;
}
for (keyB in b){
	valueB = b[keyB];
	break;
	keyB++;
}
	if(keyA!=keyB) {
	console.log("no-keys " + keyA + ":" + keyB);
	return false
	}
	else if(deepEqual(valueA, valueB)) {
		console.log("value " + valueA + ":" + valueB);
		console.log("keys " + keyA + ":" + keyB)
		//return false
	}else return false;
				//break;

		//return deepEqual(valueA, valueB);
return true;*/


	//	vers.1

/*for (keyA in a){
	valueA = a[keyA];
	for (keyB in b){
		valueB = b[keyB];
		if(keyA!=keyB) {
			console.log("no-keys " + keyA + ":" + keyB);
			return false
		}
			else if(deepEqual(valueA, valueB)) {
				console.log("value " + valueA + ":" + valueB);
				console.log("keys " + keyA + ":" + keyB)
				//return false
			}else return false;
				//break;

		//return deepEqual(valueA, valueB);
	}
}
return true;*/
						//else return false;
					}else {
						console.log("no null");
						return false;
					}
				}else {
					console.log("no object");
					return false;
				}
		}else {
			console.log("!typeof " + typeof a + ":" + typeof b + b);
			return false;
		}
}



var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true