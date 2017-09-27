var map = map1;
var Hmap = Hmap1;
var hero = new hero();

var monsters = [];
var checkTimer ;


function start(){
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	canvas.width = GAMEWIDTH;
	canvas.height = GAMEHEIGHT;
	document.getElementById("game").appendChild(canvas);
	drawMonsters();
	drawHero();
	drawBG(ctx);
	drawThings(ctx);
	hero.draw(ctx);
	//绘制人物
	setInterval(function() {
		hero.update(ctx);
		for(var m = 0; m < monsters.length; m++) {
			monsters[m].draw(ctx);
		}
	}, 10);

	//怪物移动
	setInterval(function() {
		drawBG(ctx);
		drawThings(ctx);
		hero.draw(ctx);
		for(var m = 0; m < monsters.length; m++) {
			monsters[m].move(ctx);
			monsters[m].draw(ctx);
		}
	}, 2000);

	setInterval(function() {
		drawBG(ctx);
		drawThings(ctx);
		hero.draw(ctx);
		for(var m = 0; m < monsters.length; m++) {
			monsters[m].fireMove();
			monsters[m].draw(ctx);
			monsters[m].fire(ctx);
			monsters[m].fireDismiss();
		}
	}, 10);
	
	checkTimer = setInterval(function(){
		isOver(hero, monsters);
	},500);
	
	setInterval(function(){
		isSuccess(hero,map);
	},500);
	
	
	
	document.onkeydown = function(e) {
		var code = e.keyCode;
		var x = Math.floor(hero.x / ITEMSIZE);
		var y = Math.floor(hero.y / ITEMSIZE);
		switch(code) {
			case 37: //左
				if(hero.x > 0) {
					if(hero.isStop(hero, 37)) {
						hero.x -= ITEMSIZE * hero.speed;
					}
				}
				break;
			case 38: //上
				if(hero.y > 0) {
					if(hero.isStop(hero, 38)) {
						hero.y -= ITEMSIZE * hero.speed;
					}
				}
				break;
			case 39: //右
				if(hero.x < GAMEWIDTH - ITEMSIZE) {
					if(hero.isStop(hero, 39)) {
						hero.x += ITEMSIZE * hero.speed;
					}
				}
				break;
			case 40: //下
				if(hero.y < GAMEHEIGHT - ITEMSIZE) {
					if(hero.isStop(hero, 40)) {
						hero.y += ITEMSIZE * hero.speed;
					}
				}
				break;
		}
		drawBG(ctx);
		drawThings(ctx);
		for(var m = 0; m < monsters.length; m++) {
			monsters[m].draw(ctx);
			monsters[m].draw(ctx);
		}
	}
}


