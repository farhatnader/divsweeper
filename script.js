function placeMines(across, down) {
	// place 1 mine for every 5 square
	for (i = 0; i < across * down / 5; i++) {
		// generate random coordinates and use square that matches it
		var x = Math.floor((Math.random() * across) + 1);
		var y = Math.floor((Math.random() * down) + 1);
		var selector = '.' + x + '-' + y;
		$(selector).attr('style', 'background-color: red');
	}
}

function setBoard(across = 20, down = 20, difficulty = 'easy') {
	var board = document.getElementById("container");
	board.style.width = across * 30 + across * 2 + 'px';

	// create squares and add them to board
	for(i = 0; i < across; i++) {
		for(j = 0; j < down; j++) {
			var square = document.createElement("div");
			square.setAttribute('class', 'square ' + (i+1) + '-' + (j+1));
			board.appendChild(square);
		}
	}

	placeMines(across, down);
}