function setBoard(across = 20, down = 20, difficulty = 'easy') {
	var board = document.getElementById("container");
	board.style.width = across * 30 + across * 2 + 'px';
	
	// create squares and add them to board
	for(i = 0; i < down; i++) {
		for(j = 0; j < across; j++) {
			var square = document.createElement("div");
			square.setAttribute('class', 'square ' + i + ' ' + j);
			board.appendChild(square);
		}
	}
}