	//	Шахматка

	// Шахматная доска

	// Напишите программу, создающую строку, содержащую решётку 8х8, 
	// в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. 
	// В результате должна получиться шахматная доска.

var odd = "#_",
	even = "_#",
	width = 8,
	height = 8,
	i;

for (i = 1; i < width; i++){
	if (odd.length < width) {odd = "#_" + odd}
		if (even.length < width) {even = even + "_#"}
}

for (i=1; i <= height; i++){
  if (i%2===0) console.log(even)
  else console.log(odd)
}

	// Когда справитесь, сделайте размер доски переменным, 
	// чтобы можно было создавать доски любого размера.