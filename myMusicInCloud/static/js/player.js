/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

//This is the class that interact with the interface
var player = new (function(){
    $("#wikiControl").html("<h1>"+jQuery.getJSON("/static/api/wiki.json")+"</h1>");  
	
    //The current volume
	this.volume = 3;
	//Status: 0:pause, 1:play
	this.status = 1;
	
    //Jump to the next or first song if the it is in the last position
	this.nextSong = function(){
		$(".title").fadeOut(200, function(){"updating"}).fadeIn();
	}
	
    //Jump to he previous or last song if it is in the first position
	this.prevSong = function(){
		$(".title").fadeOut(200, function(){
		}).fadeIn();
	}
	
    //Increase the volume in one point
	this.volumeInc = function(){
		if(this.volume +1 <= 3){
			this.volume++;
			var me = this;
			$("#volume").fadeOut(200, function(){
				$(this).css("backgroundImage", "url('/static/images/vol" +  me.volume + ".jpg')");
			}).fadeIn(200);
		}
	}
	
    //Decrease the volume in one point
	this.volumeDec = function(){
		if(this.volume -1 > 0){
			this.volume--;
			var me = this;
			$("#volume").fadeOut(200, function(){
				$(this).css("backgroundImage", "url('/static/images/vol" +  me.volume + ".jpg')");
			}).fadeIn(200);
		}
	}
	
    //Toggle play & pause
	this.playPause = function(){
		this.status = !this.status;
		var me = this;
		$("#play").fadeOut(200, function(){
			if(me.status == 0)
				$(this).css("backgroundImage", "url('/static/images/pause.jpg')");
			else
				$(this).css("backgroundImage", "url('/static/images/play.jpg')");
		}).fadeIn(200);
	}
});

//Starts playing :P
player.nextSong();
