function buttonAnimation(currentKey){

    let activeKey=document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");
    const myTimeout=setTimeout(function(){
        activeKey.classList.remove("pressed");
    },120);

}


function drumButtons(drumKey){
    switch (drumKey){
        case 'w':
        var audio=new Audio('sounds/crash.mp3')
        audio.play();
        break;
        case 'a':
        var audio=new Audio('sounds/kick-bass.mp3')
        audio.play();
        break;
        case 's':
        var audio=new Audio('sounds/snare.mp3')
        audio.play();
        break;
        case 'd':
        var audio=new Audio('sounds/tom-1.mp3')
        audio.play();
        break;
        case 'j':
        var audio=new Audio('sounds/tom-2.mp3')
        audio.play();
        break;
        case 'k':
        var audio=new Audio('sounds/tom-3.mp3')
        audio.play();
        break;
        case 'l':
        var audio=new Audio('sounds/tom-4.mp3')
        audio.play();
        break;
    }
}
//Detecting mouse clicks
for(let i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll("button")[i].addEventListener("click", function(){
        buttonAnimation(this.textContent);
        drumButtons(this.textContent); 
    })
} 
//Detecting keypress
document.addEventListener("keypress",function(event){
    buttonAnimation(event.key);
    drumButtons(event.key);    
});


