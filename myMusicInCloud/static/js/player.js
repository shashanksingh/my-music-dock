/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

//This is the class that interact with the interface
var player = new (function(){
    jQuery.getJSON("/static/api/wiki.json",function(data){
        $("#wikiControl").html("<h1>"+data[0]+"</h1>");  
        config.log("dasdsada"+data[0]);
    });
	//Simulate a playlist
	this.playList = ["Updating The List"];
	jQuery.getJSON("/static/api/name.json",function(json){this.playlist=json;console.log(json); });
    console.log(this.playlist)
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
