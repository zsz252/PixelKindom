//怪物类
function monster(x,y){
	this.x = x;
	this.y = y;
	this.dir = 0;
	this.isFire = false;
	this.fireX = x;
	this.fireY = y;
	this.fireDir = 0;
	//喷火
	this.fire = function(ctx) {
		if(this.isFire){
			var image = new Image()
			var x = this.fireX + FIRESIZE;
			var y = this.fireY + FIRESIZE;
			image.onload = function(){
				ctx.drawImage(image,x,y)
			}
			image.src = "img/fire.png"
		}
	}
	
	this.fireMove = function(){
		switch (this.fireDir){
			case 37:
				this.fireX -= ITEMSIZE/50;
				break;
			case 38:
				this.fireY -= ITEMSIZE/50;
				break;
			case 39:
				this.fireX += ITEMSIZE/50;
				break;
			case 40:
				this.fireY += ITEMSIZE/50;
				break;
		}
	}
	

	this.fireDismiss = function(){
		if(this.fireX < 0 || this.fireY < 0 || this.fireX > GAMEWIDTH || this.fireY > GAMEHEIGHT){
			this.isFire = false;
			return
		}
		var i = Math.floor(Math.floor(this.fireX)/ITEMSIZE);
		var j = Math.floor(Math.floor(this.fireY)/ITEMSIZE);
		
		if(map[j][i] == 2 || map[j][i] == 3){
			this.isFire = false;
			return
		}
	}
	
	this.draw = function(ctx) {
		var image = new Image();
		var x = this.x;
		var y = this.y;
		image.onload = function() {
			ctx.drawImage(image, x, y);
		}
		image.src = "img/monster.png";
	}
	
//	this.update = function(ctx) {
//		var image = new Image();
//		var x = this.x;
//		var y = this.y;
//		image.onload = function() {
//			ctx.drawImage(image, x, y);
//		}
//		image.src = "img/monster.png";
//	}
	
	this.move = function(ctx){
		do{
			this.dir = Math.floor(Math.random() * 4) + 37;
			var i = Math.floor(this.x / ITEMSIZE);
			var j = Math.floor(this.y / ITEMSIZE);
//			console.log(i + "," + j)
			switch(this.dir) {
				case 37:
					if(i > 0){
						i -= 1;
					}
					break;
				case 38:
					if(j > 0){
						j -= 1;
					}
					break;
				case 39:
					i += 1;
					break;
				case 40:
					j += 1;
					break;
				default:
					break;
			}
			var isWall = false;
			if(this.dir == 37 && this.x <= 0){
				isWall = true;
			}else if(this.dir == 38 && this.y <= 0){
				isWall = true;
			}else if(this.dir == 39 && this.x >= GAMEWIDTH -ITEMSIZE){
				isWall = true;
			}else if(this.dir == 40 && this.y >= GAMEHEIGHT - ITEMSIZE){
				isWall = true;
			}
		}while(map[j][i] == 2 || map[j][i] == 3 || isWall);
		
		switch(this.dir) {
			case 37: //左
				if(this.x > 0) {
					this.x -= ITEMSIZE;
				}
				break;
			case 38: //上
				if(this.y > 0) {
					this.y -= ITEMSIZE;
				}
				break;
			case 39: //右
				if(this.x < GAMEWIDTH - ITEMSIZE) {
					this.x += ITEMSIZE;
				}
				break;
			case 40: //下
				if(this.y < GAMEHEIGHT - ITEMSIZE) {
					this.y += ITEMSIZE;
				}
				break;
		}
		
		if(!this.isFire){
			this.fireX = this.x;
			this.fireY = this.y;
			this.fire(ctx);
			this.fireDir = this.dir;
			this.isFire = true;
		}
		
		
	}
	
}