// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function opentab(tabname,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(tabname).style.display = "block";
    elmnt.style.backgroundColor = color;
}

// play audio
function audioplay() {
  var audio = document.getElementById('audio_play');
  audio.play();
}
