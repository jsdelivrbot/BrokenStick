function isPrime(n){
	var divisor = 2; 

	while (n > divisor){
		if(n % divisor == 0){
			return false; 
		}
		else
			divisor++; 
	}
	return true; 
}

console.log("Failed to open the specified link")

