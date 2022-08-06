function changeBack(){
    debugger;
    let btns=document.getElementById("title1");
  if(count%2==0){
    btns.style.background="red";
  }
  else{
    btns.style.background="blue";
  }
  count++
  }
  function Circle(x, y, radius){
     this.x = x;
     this.y = y;
     this.radius = radius;
  }
  
  function getRandomHex(){
      return Math.floor(Math.random()*255);
  }
  
  function getRandomColor(){
     var red = getRandomHex();
     var green = getRandomHex();
     var blue = getRandomHex();
       return "rgb(" + red + "," + blue + "," + green +")";
  }
  
  function createCircle(){
      var ctx = document.getElementById("mycanvas").getContext("2d");
      var radius = Math.floor(Math.random() * 80);
      var color = getRandomColor();
      var x = Math.random() * 500;
      var y = Math.random() * 50;
      var circle= new Circle(x, y, radius);
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
  }
  function alert(){
  for(let count=1;count<15;count++){
  createCircle()
  }

  }
  setTimeout(alert,100)


  