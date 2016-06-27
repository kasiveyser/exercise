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

function arrayToList(arr) {
	var list = {};
	var listHelp = {};
	var count = 0;
	// if(arr.length > 0){
	// 		helper(arr, list)
	// 	};
		function helper(arr){
			if(arr.length > 0){
					if(count === 0){
						list.value = arr[arr.length-1];
						list.rest = null;
					}
					else {
						list.rest = list;
						list.value = arr[arr.length-1];
						}
				console.log(list);
				arr.pop();
				console.log(arr.length);
				count++;
				console.log(count);
					helper(arr, list);
				
			}
			// else break;
		}
	helper(arr, count);
	return list;
}

