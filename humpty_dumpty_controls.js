function move_img(str) {
    var step=100; // change this to different step value
    switch(str){
    case "down":
    var x=document.getElementById('humpty_dumpty').offsetTop;
    x= x + step;
    document.getElementById('humpty_dumpty').style.top= x + "px";
    break;
    
    case "up":
    var x=document.getElementById('humpty_dumpty').offsetTop;
    x= x -step;
    document.getElementById('humpty_dumpty').style.top= x + "px";
    break;
    
    case "left":
    var y=document.getElementById('humpty_dumpty').offsetLeft;
    y= y - step;
    document.getElementById('humpty_dumpty').style.left= y + "px";
    break;
    
    case "right":
    var y=document.getElementById('humpty_dumpty').offsetLeft;
    y= y + step;
    document.getElementById('humpty_dumpty').style.left= y + "px";
    break;
    }
}    