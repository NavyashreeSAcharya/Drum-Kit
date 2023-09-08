var num=document.querySelectorAll(".drum").length
for(var i=0;i<num;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(btn){
        //alert("clicked")
    var btn =this.innerHTML
    switch(btn){
        case 'a':var audio=new Audio("sounds/sounds/sounds/tom-1.mp3")
        audio.play();
        console.log("a")
        break;
        case 'b':var audio=new Audio("sounds/sounds/sounds/tom-2.mp3")
        audio.play();
        console.log("b")
        break;
        case 'c':var audio=new Audio("sounds/sounds/sounds/tom-3.mp3")
        audio.play();
        console.log("c")
        break;
        case 'd':var audio=new Audio("sounds/sounds/sounds/tom-4.mp3")
        audio.play();
        console.log("d")
        break;
        case 'e':var audio=new Audio("sounds/sounds/sounds/crash.mp3")
        audio.play();
        console.log("e")
        break;
        case 'f':var audio=new Audio("sounds/sounds/sounds/kick-bass.mp3")
        audio.play();
        console.log("f")
        break;
        case 'g':var audio=new Audio("sounds/sounds/sounds/snare.mp3")
        audio.play();
        console.log("g")
        break;
    }})
}
document.addEventListener("keypress",function(e){
    var key=e.key.toLowerCase
    switch(key){
        case 'a':var audio=new Audio("sounds/tom-1.mp3")
        audio.play();
        console.log("a")
        break;
        case 'b':var audio=new Audio("sounds/tom-1.mp3")
        audio.play();
        console.log("b")
        break;
        case 'c':var audio=new Audio("sounds/tom-1.mp3")
        audio.play();
        console.log("c")
        break;
        case 'd':var audio=new Audio("sounds/tom-1.mp3")
        audio.play();
        console.log("d")
        break;
        case 'e':var audio=new Audio("sounds/tom-4.mp3")
        audio.play();
        console.log("e")
        break;
        case 'f':var audio=new Audio("sounds/tom-4.mp3")
        audio.play();
        console.log("f")
        break;
        case 'g':var audio=new Audio("sounds/tom-4.mp3")
        audio.play();
        console.log("g")
        break;
        default:
            console.log(e.key)
    }
})
