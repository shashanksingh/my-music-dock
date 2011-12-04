/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

var captured = false;
var originalPoint = {x:0,y:0};
var newPoint = [];
//Different mouse gesture types
var MoveTypes = { Up: 0, Right: 1, Down: 2, Left: 3 };

var isIE = navigator.appName.toLowerCase().indexOf("explorer") > -1;

document.body.onmousedown = function(e){
	//When user clicks in the page, the click coords are captured
	if(isIE)
		originalPoint = {x: event.clientX, y: event.clientY};
	else
		originalPoint = {x: e.pageX, y: e.pageY};
	captured=true;
};

document.body.onmouseup = function(){
	//The user up the button click, the gesture willo not be captured
	captured=false;
};

document.body.onmousemove = function(e){
	//If user has button click pressed
	if(captured){
		//Click coords are captured and compared with the original coords
		if(isIE)
			newPoint = {x: event.clientX, y: event.clientY};
		else
			newPoint = {x: e.pageX, y: e.pageY};
		//Search for what is the mouse direction
		var diffPoint = {x: newPoint.x - originalPoint.x, y: newPoint.y - originalPoint.y};
		if(diffPoint.x >= 100)
			onMouseCaptured(MoveTypes.Right);
		else if(diffPoint.x <= -100)
			onMouseCaptured(MoveTypes.Left);
		else if(diffPoint.y >= 100)
			onMouseCaptured(MoveTypes.Down);
		else if(diffPoint.y <= -100)
			onMouseCaptured(MoveTypes.Up);
	}
}

//This function is called when an mouse gesture is captured
// moveType is an enumeration of type MoveTypes
function onMouseCaptured(moveType){
	captured = false;
	originalPoint = newPoint = [];
	//call different function for each mouse gesture
	switch(moveType){
		case MoveTypes.Up:
			player.volumeInc();
			break;
		case MoveTypes.Down:
			player.volumeDec();
			break;
		case MoveTypes.Left:
			player.prevSong();
			break;
		case MoveTypes.Right:
			player.nextSong();
			break;
	}
}

//Captures the key press events
document.onkeydown = function(e){
	var ev = isIE?event:e;
	if(ev.charCode && ev.charCode == 32)
		player.playPause();
	else{
		switch(ev.keyCode){
			case 32:
				player.playPause();
				break;
			case 39:
				player.nextSong();
				break;
			case 37:
				player.prevSong();
				break;
			case 38:
				player.volumeInc();
				break;
			case 40:
				player.volumeDec();
				break;
		}
	}
}