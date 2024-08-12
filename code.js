console.log("hello")

// variable decleration
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlays = document.getElementById('masterPlays');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');

let songsItem = Array.from(document.getElementsByClassName('songsItem'));



masterPlays.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlays.classList.remove('fa-play-circle');
        masterPlays.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlays.classList.remove('fa-pause-circle');
        masterPlays.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

const MakeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        MakeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlays.classList.remove('fa-play-circle');
        masterPlays.classList.add('fa-pause-circle');
    })
}) 

