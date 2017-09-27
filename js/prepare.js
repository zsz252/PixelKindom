// 0 普通
// 1 草地
// 2 铁
// 3 砖块
// 4 河
// 5 冰
// 10 国王
// 11 门


function drawThings(ctx) {
	for(let i = 0; i < map.length; i++) {
		for(let j = 0; j < map[i].length; j++) {
			if(map[i][j] == 1) {
				var grass = new Image();
				grass.src = "img/grass.png";
				let x = j * 32;
				let y = i * 32;
				grass.onload = function() {
					ctx.drawImage(grass, x, y,ITEMSIZE, ITEMSIZE);
				}
			}
			if(map[i][j] == 2) {
				var steel = new Image();
				steel.src = "img/steels.gif";
				let x = j * 32;
				let y = i * 32;
				steel.onload = function() {
					ctx.drawImage(steel, x, y, ITEMSIZE, ITEMSIZE);
				}
			}
			if(map[i][j] == 3) {
				var wall = new Image();
				wall.src = "img/walls.gif";
				let x = j * 32;
				let y = i * 32;
				wall.onload = function() {
					ctx.drawImage(wall, x, y, ITEMSIZE, ITEMSIZE);
				}
			}
			if(map[i][j] == 4) {
				var water = new Image();
				water.src = "img/water.gif";
				let x = j * 32;
				let y = i * 32;
				water.onload = function() {
					ctx.drawImage(water, x, y, ITEMSIZE, ITEMSIZE);
				}
			}
			if(map[i][j] == 5) {
				var ice = new Image();
				ice.src = "img/ice.png";
				let x = j * 32;
				let y = i * 32;
				ice.onload = function() {
					ctx.drawImage(ice, x, y, ITEMSIZE, ITEMSIZE);
				}
			}
			if(map[i][j] == 10) {
				var heart = new Image();
				heart.src = "img/well.png";
				let x = j * 32;
				let y = i * 32;
				heart.onload = function() {
					ctx.drawImage(heart, x, y, ITEMSIZE, ITEMSIZE);
				}
			}
			if(map[i][j] == 11) {
				var door = new Image();
				door.src = "img/door.png";
				let x = j * 32;
				let y = i * 32;
				door.onload = function() {
					ctx.drawImage(door, x, y, ITEMSIZE, ITEMSIZE);
				}
			}
			
		}
	}
}

function drawBG(ctx) {
	var bgImage = new Image();
	bgImage.src = "img/background.png"
	bgImage.onload = function() {
		ctx.drawImage(bgImage, 0, 0)
	}
}

function drawMonsters(){
	for (let i = 0 ; i < Hmap.length ; i++) {
		for (let j = 0 ; j < Hmap[i].length ; j++) {
			if(Hmap[i][j] == 13){
				var m = new monster(j*32,i*32);
				monsters.push(m);
			}
		}
	}
}

function drawHero(){
	for (let i = 0 ; i < Hmap.length ; i++) {
		for (let j = 0 ; j < Hmap[i].length ; j++) {
			if(Hmap[i][j] == 12){
				hero.x = j*32;
				hero.y = i*32;
			}
		}
	}
}

