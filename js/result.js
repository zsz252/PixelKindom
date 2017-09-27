//是否失败
function isOver(hero,monsters){
	var x = Math.floor(hero.x/ITEMSIZE);
	var y = Math.floor(hero.y/ITEMSIZE);
	
	if(map[y][x] != 1){
		for (var i = 0 ; i < monsters.length ; i++) {
			var mx = Math.floor(monsters[i].x/ITEMSIZE);
			var my = Math.floor(monsters[i].y/ITEMSIZE);
			
			var fx = Math.floor(Math.floor(monsters[i].fireX)/ITEMSIZE);
			var fy = Math.floor(Math.floor(monsters[i].fireY)/ITEMSIZE);
			
			if(x == mx && y == my){
				clearInterval(checkTimer);
				if(hero.life <= 0){
					hero.life = 1;
					monsters.length = 0;
					drawMonsters();
					drawHero();
					setTimeout(function() {
						checkTimer = setInterval(function() {
							isOver(hero, monsters);
						}, 500);
					}, 1000)
				}else{
					hero.life = hero.life - 1;
					setTimeout(function(){
						checkTimer = setInterval(function(){
							isOver(hero, monsters);
						},500);
					},1000)
				}
				//alert(hero.life)
			}else if(x == fx && y == fy && map[y][x] != 5){
				clearInterval(checkTimer);
				if(hero.life <= 0){
					hero.life = 1;
					monsters.length = 0;
					drawMonsters();
					drawHero();
					setTimeout(function() {
						checkTimer = setInterval(function() {
							isOver(hero, monsters);
						}, 500);
					}, 1000)
				}else{
					hero.life = hero.life - 1;
					setTimeout(function() {
						checkTimer = setInterval(function() {
							isOver(hero, monsters);
						}, 500);
					}, 1000)
				}
				//alert(hero.life)
			}
		}
	}
	
	if(map[y][x] == 10){
		hero.life = 1;	
	}
}

function isSuccess(hero){
	var x = Math.floor(hero.x/ITEMSIZE);
	var y = Math.floor(hero.y/ITEMSIZE);
	
	if(map[y][x] == 11){
		MISSION += 1;
		$("#level").html("Mission " + MISSION);
		Hmap = chooseHMap();
		map = chooseMap(MISSION);
		
	}
}

function chooseMap(){
	switch (MISSION){
		case 1:
			return map1;
			break;
		case 2:
			return map2;
			break;
		case 3:
			return map3;
			break;
		case 4:
			return map4;
			break;
//		default:
//			return map2;
//			break;
	} 
}

function chooseHMap(){
	switch (MISSION){
		case 1:
			return Hmap1;
			break;
		case 2:
			return Hmap2;
			break;
		case 3:
			return Hmap3;
			break;
		case 4:
			return Hmap4;
			break;
//		default:
//			return Hmap2;
//			break;
	} 
}
