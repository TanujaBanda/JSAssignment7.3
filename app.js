var count=0;
function counter( ){
	++count;
	return count;
	}
function onButtonClick(){
	var incrementCounter=counter();
	console.log(count);
	}
