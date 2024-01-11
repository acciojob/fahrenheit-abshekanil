function toFahrenheit(celsius) {
 // Write your code here
	let ans = (celsius * 9/5) + 32;
	return ans.toFixed(2);
}

// Do not change the code below
const celsius = prompt("Enter Celsius:"); 
alert(toFahrenheit(Number(celsius)));
