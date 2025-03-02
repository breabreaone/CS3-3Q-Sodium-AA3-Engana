function checkMessage(){
	let message = prompt("Enter message:");
	let resultElement = document.getElementById("result");
	
	if (message.includes("FR")){
		resultElement.textContent = "The Message " + message + " is LIGITIMATE!";
	} else if (message.includes("FR") && message.includes("AI")){
		resultElement.textContent = "The Message " + message + " is LIGITIMATE!";
	} else if (message.includes("AI")){
		resultElement.textContent = "The Message " + message + " is TAMPERED WITH!";
	} else if (message.includes("aI") || message.includes("Ai")){
		resultElement.textContent = "The Message " + message + " is TAMPERED WITH!";
	}else{
		resultElement.textContent = "The Message " + message + " is YET TO BE ENCODED!";
	}
	
}
