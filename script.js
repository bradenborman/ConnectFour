

var gameboard = [
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0]
]

var placePieceLocation = 0;
var playersTurn = 1

$(document).ready(function(){
        
	$(document).keypress(function(e) {
		if (e.which == 32) {
			alert(gameboard) //Press space to see the board value 
		}
	});	
		
		
	$(".piece").click(function(){
		
	});	
	
	//CHANGE 3 SPOTS IN ARRAY FOR EACH CLICK two in [][] and one in calling function
	function changeTurns() {
			playersTurn++ 
			if(playersTurn == 3) 
				playersTurn = 1
	}
	
	
	$(".one").click(function(){
		    for(var y = 0; y < gameboard.length; y++) {	
					if(gameboard[y][0] != 0) 
					{
						placePieceLocation = (y-1)
						break;
					}else {
						placePieceLocation = 5
					}
			}   
			gameboard[placePieceLocation][0] = playersTurn
			placePeice(placePieceLocation + 1, 1)
		changeTurns()
    });
			
	$(".two").click(function(){
		
		    for(var y = 0; y < gameboard.length; y++) {	
					if(gameboard[y][1] != 0) 
					{
						placePieceLocation = (y-1)
						break;
					}else {
						placePieceLocation = 5
					}
			}   
			gameboard[placePieceLocation][1] = playersTurn
			placePeice(placePieceLocation + 1, 2)
		changeTurns()
    });
	
	$(".three").click(function(){
		
		    for(var y = 0; y < gameboard.length; y++) {	
					if(gameboard[y][2] != 0) 
					{
						placePieceLocation = (y-1)
						break;
					}else {
						placePieceLocation = 5
					}
			}   
			gameboard[placePieceLocation][2] = playersTurn
			placePeice(placePieceLocation + 1, 3)
		changeTurns()
    });
		
	$(".four").click(function(){
		
		    for(var y = 0; y < gameboard.length; y++) {	
					if(gameboard[y][3] != 0) 
					{
						placePieceLocation = (y-1)
						break;
					}else {
						placePieceLocation = 5
					}
			}   
			gameboard[placePieceLocation][3] = playersTurn
			placePeice(placePieceLocation + 1, 4)
		changeTurns()
    });
	
	$(".five").click(function(){
		
		    for(var y = 0; y < gameboard.length; y++) {	
					if(gameboard[y][4] != 0) 
					{
						placePieceLocation = (y-1)
						break;
					}else {
						placePieceLocation = 5
					}
			}   
			gameboard[placePieceLocation][4] = playersTurn
			placePeice(placePieceLocation + 1, 5)
		changeTurns()
    });
	
	$(".six").click(function(){
		
		    for(var y = 0; y < gameboard.length; y++) {	
					if(gameboard[y][5] != 0) 
					{
						placePieceLocation = (y-1)
						break;
					}else {
						placePieceLocation = 5
					}
			}   
			gameboard[placePieceLocation][5] = playersTurn
			placePeice(placePieceLocation + 1, 6)
		changeTurns()
    });
	
	$(".seven").click(function(){
		
		    for(var y = 0; y < gameboard.length; y++) {	
					if(gameboard[y][6] != 0) 
					{
						placePieceLocation = (y-1)
						break;
					}else {
						placePieceLocation = 5
					}
			}   
			gameboard[placePieceLocation][6] = playersTurn
			placePeice(placePieceLocation + 1, 7)
		changeTurns()
    });
});



function placePeice(x, y) {
	if(playersTurn == 1) 
		var color = "yellow" 
	else 
		var color = "red"

	switch(y) {
		case 1: //COL 1
				if(x == 6)
					$("#row1 .one").css("background-color", color);
				if(x == 5)
					$("#row2 .one").css("background-color", color);
				if(x == 4)
					$("#row3 .one").css("background-color", color);
				if(x == 3)
					$("#row4 .one").css("background-color", color);
				if(x == 2)
					$("#row5 .one").css("background-color", color);
				if(x == 1)
					$("#row6 .one").css("background-color", color);
		/*		$(".one").fadeOut(10);
				$(".one").fadeIn(100); */
			break;
		case 2: //COL 2
				if(x == 6)
					$("#row1 .two").css("background-color", color);
				if(x == 5)
					$("#row2 .two").css("background-color", color);
				if(x == 4)
					$("#row3 .two").css("background-color", color);
				if(x == 3)
					$("#row4 .two").css("background-color", color);
				if(x == 2)
					$("#row5 .two").css("background-color", color);
				if(x == 1)
					$("#row6 .two").css("background-color", color);

			break;
			
		case 3: //COL 3
				if(x == 6)
					$("#row1 .three").css("background-color", color);
				if(x == 5)
					$("#row2 .three").css("background-color", color);
				if(x == 4)
					$("#row3 .three").css("background-color", color);
				if(x == 3)
					$("#row4 .three").css("background-color", color);
				if(x == 2)
					$("#row5 .three").css("background-color", color);
				if(x == 1)
					$("#row6 .three").css("background-color", color);

			break;
			
		case 4: //COL 3
				if(x == 6)
					$("#row1 .four").css("background-color", color);
				if(x == 5)
					$("#row2 .four").css("background-color", color);
				if(x == 4)
					$("#row3 .four").css("background-color", color);
				if(x == 3)
					$("#row4 .four").css("background-color", color);
				if(x == 2)
					$("#row5 .four").css("background-color", color);
				if(x == 1)
					$("#row6 .four").css("background-color", color);

			break;
			
		case 5: //COL 3
				if(x == 6)
					$("#row1 .five").css("background-color", color);
				if(x == 5)
					$("#row2 .five").css("background-color", color);
				if(x == 4)
					$("#row3 .five").css("background-color", color);
				if(x == 3)
					$("#row4 .five").css("background-color", color);
				if(x == 2)
					$("#row5 .five").css("background-color", color);
				if(x == 1)
					$("#row6 .five").css("background-color", color);

			break;
			
		case 6: //COL 3
				if(x == 6)
					$("#row1 .six").css("background-color", color);
				if(x == 5)
					$("#row2 .six").css("background-color", color);
				if(x == 4)
					$("#row3 .six").css("background-color", color);
				if(x == 3)
					$("#row4 .six").css("background-color", color);
				if(x == 2)
					$("#row5 .six").css("background-color", color);
				if(x == 1)
					$("#row6 .six").css("background-color", color);
				
			break;
			
		case 7: //COL 3
				if(x == 6)
					$("#row1 .seven").css("background-color", color);
				if(x == 5)
					$("#row2 .seven").css("background-color", color);
				if(x == 4)
					$("#row3 .seven").css("background-color", color);
				if(x == 3)
					$("#row4 .seven").css("background-color", color);
				if(x == 2)
					$("#row5 .seven").css("background-color", color);
				if(x == 1)
					$("#row6 .seven").css("background-color", color);
				
			break;

    default:
        
}
			
}