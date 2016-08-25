function placeNumbers(across, down) {
	// traverse all squares and number them depending on bordering mines
	for (i = 1; i <= across; i++) {
		for (j = 1; j <= down; j++) {
			var selector = '.' + i + '-' + j;
			if (!$(selector).hasClass("mine")) {
				var mine_count = 0;
				for (x = i - 1; x < i + 2; x++) {
					for (y = j - 1; y < j + 2; y++) {
						var border = '.' + x + '-' + y;
						if ($(border).hasClass("mine")) {
							mine_count++;
						}
					}
				}
				$(selector).text(mine_count);
			}
		}
	}
}

function placeMines(across, down) {
	// place 1 mine for every 5 square
	for (i = 0; i < across * down / 5; i++) {
		// generate random coordinates and use square that matches it
		var x = Math.floor((Math.random() * across) + 1);
		var y = Math.floor((Math.random() * down) + 1);
		var selector = '.' + x + '-' + y;
		$(selector).attr('style', 'background-color: red').addClass("mine");
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
	placeNumbers(across, down);
}