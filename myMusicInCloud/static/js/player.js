/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

//This is the class that interact with the interface
var player = new (function(){
	//Simulate a playlist
	this.playList = ["Cold Play - Fix you", "Madonna - Give it 2 me", "Mirror's Edge Theme Song - Still Alive", "Rihanna - Unfaithful with Lyrics"];
	//The song position
	this.position = -1;
	//The current volume
	this.volume = 3;
	//Status: 0:pause, 1:play
	this.status = 1;
	//Jump to the next or first song if the it is in the last position
	this.nextSong = function(){
		if(this.position+1 == this.playList.length)
			this.position = 0;
		else
			this.position++;
		//So, the reference to this class is not lost
		var me = this;
		$(".title").fadeOut(200, function(){
			$(this).text(me.playList[me.position]);
		}).fadeIn();
	}
	//Jump to he previous or last song if it is in the first position
	this.prevSong = function(){
		if(this.position-1 < 0)
			this.position = this.playList.length-1;
		else
			this.position--;
		
		var me = this;
		$(".title").fadeOut(200, function(){
			$(this).text(me.playList[me.position]);
		}).fadeIn();
	}
	//Increase the volume in one point
	this.volumeInc = function(){
		if(this.volume +1 <= 3){
			this.volume++;
			var me = this;
			$("#volume").fadeOut(200, function(){
				$(this).css("backgroundImage", "url('css/images/vol" +  me.volume + ".jpg')");
			}).fadeIn(200);
		}
	}
	//Decrease the volume in one point
	this.volumeDec = function(){
		if(this.volume -1 > 0){
			this.volume--;
			var me = this;
			$("#volume").fadeOut(200, function(){
				$(this).css("backgroundImage", "url('css/images/vol" +  me.volume + ".jpg')");
			}).fadeIn(200);
		}
	}
	//Toggle play & pause
	this.playPause = function(){
		this.status = !this.status;
		var me = this;
		$("#play").fadeOut(200, function(){
			if(me.status == 0)
				$(this).css("backgroundImage", "url('css/images/pause.jpg')");
			else
				$(this).css("backgroundImage", "url('css/images/play.jpg')");
		}).fadeIn(200);
	}
});
//Starts playing :P
player.nextSong();