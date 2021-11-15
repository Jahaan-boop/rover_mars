canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

mars_array=["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
var random_number=Math.floor(Math.random()*4);

rover_width=100;
rover_height=90;
rover_x=299;
rover_y=10;

var background_img=mars_array[random_number];
var rover_img="rover.png";

function add() {
background_imgTag = new Image();
background_imgTag.onload =  uploadBackground;
background_imgTag.src = background_img;

rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = rover_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
   ctx.drawImage(rover_imgTag, rover_x , rover_y, rover_width, rover_height); 
}

window.addEventListener("keydown",my_keyDown);

function my_keyDown (e) {
  keyPressed=e.keyCode;
  console.log(keyPressed);
  if (keyPressed=="38"){
 up();
 console.log("Key pressed: Up");
  }  


  if (keyPressed=="40"){
    down();
    console.log("Key pressed: Down");
     }  

     if (keyPressed=="37"){
        left();
        console.log("Key pressed: Left");
         } 
         
         if (keyPressed=="39"){
            right();
            console.log("Key pressed: Right");
             }
}

function up(){
if(rover_y>=0){
rover_y=rover_y-10;
console.log("When the up arrow is clicked, X="+rover_x+",Y="+rover_y);
uploadBackground();
uploadrover();
}
}

function down(){
   if(rover_y<=500){
   rover_y=rover_y+10;
   console.log("When the down arrow is clicked, X="+rover_x+",Y="+rover_y);
   uploadBackground();
   uploadrover();
   }
   }

   function left(){
      if(rover_x>=0){
      rover_x=rover_x-10;
      console.log("When the left arrow is clicked, X="+rover_x+",Y="+rover_y);
      uploadBackground();
      uploadrover();
      }
      }

      function right(){
         if(rover_x<=700){
         rover_x=rover_x+10;
         console.log("When the right arrow is clicked, X="+rover_x+",Y="+rover_y);
         uploadBackground();
         uploadrover();
         }
         }
