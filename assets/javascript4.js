var listaMusica = document.getElementById("audioList");
var listaVideo = document.getElementById("videoList");
var global;

//quando è pronto il documento parte questa funzione
$(document).ready(function() {
    $.ajax({
        url: "assets/data/media.json",
        data: "data",
        dataType: "json",
        success: function(response){
            global = response;

            for(i=0; i<3; i++){
            var listaMusica = document.getElementById("audioList");
            var listaVideo = document.getElementById("videoList");
            listaMusica.innerHTML += "<li onclick='chooseSong("+i+")' class='list-group-item'>" + response.audio[i].title + "</li>";
            listaVideo.innerHTML += "<li onclick='chooseVideo("+i+")' class='list-group-item'>" + response.video[i].title + "</li>";
            }},
        error: function(error){
            console.log(error.status);
        }
    })
})
function chooseSong(i){
    $("audio").attr("src", "assets/audio3/" + global.audio[i].file, "type", "audio/mp3");
    var myAudio = document.getElementById("audioBox");
    console.log(myAudio);
    myAudio.play();
}


function chooseVideo(i){

    $("video").attr("src", "assets/video_flower/" + global.video[i].file, "type", "video/mp4");
    var myVideo = document.getElementById("videoBox");
    console.log(myVideo);
    myVideo.play();
}