$(document).ready(function(){
	var j = 0;
			
			var canvas = document.getElementById("canvas");
			
			canvas.style.backgroundColor = "black";
			
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			
			var context = canvas.getContext("2d");
			
			//Particle(canvas.width*0.5,canvas.height*0.05);
			
			var particles = [];
			loop();
			
			function loop(){
				setInterval(function(){
					context.clearRect(0,0,canvas.width,canvas.height);
					
					var part = new Particle(canvas.width*0.5,canvas.height*0.5);
					
					if(j < 20){
						particles.push(part);
						j++;
					}
					
					for (var i = 0 ; i<particles.length ; i++) {
						particles[i].upData();
					}
				},30);
			}
			
			function Particle(x,y){
				this.xPos = x;
				this.yPos = y;
				
				this.yVal = -7;
				this.xVal = Math.random() * 8 - 4;
				this.r = 5;
				this.xgravity = 0.1;
				this.ygravity = 0.1;
				
				this.draw = function(){
					context.beginPath();
					context.arc(this.xPos,this.yPos,this.r,0,Math.PI*2,true);
					context.closePath();
					context.fill();
				}
				
				this.upData = function(){
					context.fillStyle = getRandomColor();
					this.xPos = this.xVal + this.xPos;
					this.yPos = this.yVal + this.yPos;
					
					this.yVal = this.yVal + this.ygravity;
					//this.xVal = this.xVal + this.xgravity;
//					if(this.xVal > 960){
//						this.xVal = Math.random() * 8 - 4 ;
//						this.xgravity = -this.xgravity;
//					}
					
					if(this.r < 15){
						this.r += 0.05;
					}
					if(this.yPos < window.innerHeight){
						this.draw();
					}
					if(this.yPos > window.innerHeight){
						this.yVal = -(Math.random() * 8);
						this.ygravity = -0.1;
						this.draw();
					}
					if(this.yPos < 0){
						this.yVal = (Math.random() * 8);
						this.ygravity = 0.1;
						this.draw();
					}
					
					if(this.xPos > window.innerWidth){
						this.xVal =  (Math.random() * 8 - 4) ;
						this.xgravity = -this.xgravity;
						this.draw();
					}
					
					if(this.xPos < 0){
						this.xVal = -(Math.random() * 8 - 4) ;
						this.xgravity = -this.xgravity;
						this.draw();
					}
				}
			}
			
			function getRandomColor(){
				return '#'+Math.floor(Math.random() * 0xffffff).toString(16);
			}
})
