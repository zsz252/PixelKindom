//猪脚类
function hero() {
	this.x = 0;
	this.y = 0;
	this.speed = 1;
	this.life = 1;
	
	this.draw = function(ctx) {
		var image = new Image();
		var x = this.x;
		var y = this.y;
		image.onload = function() {
			ctx.drawImage(image, x, y, ITEMSIZE, ITEMSIZE);
		}
		image.src = "img/hero.png";
	}

	this.update = function(ctx) {
		var image = new Image();
		var x = this.x;
		var y = this.y;
		image.onload = function() {
			ctx.drawImage(image, x, y, ITEMSIZE, ITEMSIZE);
		}
		image.src = "img/hero.png";
	}

	this.clear = function(ctx) {
		var x = this.x;
		var y = this.y;
		ctx.clearRect(x, y, ITEMSIZE, ITEMSIZE);
		drawBG(ctx);
		drawThings(ctx);
	}

	//猪脚移动判断
	this.isStop = function(hero, dir) {
		var i = hero.x / ITEMSIZE;
		var j = hero.y / ITEMSIZE;
		switch(dir) {
			case 37:
				i -= 1;
				break;
			case 38:
				j -= 1;
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
		//				alert(i + "," + j)
		//				alert(map[i][j])
		if(map[j][i] != 2 && map[j][i] != 4 && map[j][i] != 3) {
			return true;
		} else {
			return false;
		}
	}
}