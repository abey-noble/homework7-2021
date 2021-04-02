var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// display play video to console
// play video
// change volume text
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = " 100%"
});

document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
})

// change the var value to double maybe maybe that will get better numbers
var speed_var;
document.getElementById("slower").addEventListener("click", function() {
	
	video.playbackRate = .95 * video.playbackRate;
	speed_var = video.playbackRate;
	console.log("New speed is " + speed_var);
})

document.getElementById("faster").addEventListener("click", function() {
	video.playbackRate = 1.05 * video.playbackRate;
	speed_var = video.playbackRate;
	console.log("New speed is " + speed_var);
})

document.getElementById("skip").addEventListener("click", function() {
	var timing = video.currentTime;
	console.log("Original location " + timing);
	if (timing >= video.duration - 15){
		timing = 0;
	}
	else {
		timing = timing + 15;
	}
	video.currentTime = timing;
	console.log("New location " + timing);
})

var mute_settings = document.getElementById("mute");
document.getElementById("mute").addEventListener("click", function() {
	if(video.muted == false){
		mute_settings.innerHTML = "Unmute";
		video.muted = true;
	}
	else{
		mute_settings.innerHTML = "Mute";
		video.muted = false;
	}
} )


document.getElementById("slider").addEventListener("change", function() {
	video.volume = (document.getElementById("slider").value) / 100; 
	console.log(video.volume);
	document.getElementById("volume").innerHTML = video.volume;
})

document.getElementById("vintage").addEventListener("click", function (){
	video.classList.add(".oldSchool")
})

document.getElementById("orig").addEventListener("click", function (){
	video.classList.remove(".oldSchool")
	
})























// this is the element and this is the event function

// document.getElementById("play").addEventListener("onclick", function() {

// })