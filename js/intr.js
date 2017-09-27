$(document).ready(function(){
	
	$('.btn').on("click",function(){
		$("#sence1").animate({
			left : - 1537 + 'px'
		},2000,function(){
			$("#sence2").fadeIn();
			$("#sence1").hide();
			$("#sence1").animate({
				left : 0 + 'px'
			})
			var i = 1;
			timer = setInterval(function() {
			
				$(".l" + i).show();
				i++;
				if(i == 12) {
					clearInterval(timer)
					i = 1;
				}
			
			}, 2000);
		});	
	})
	
	$('.last,.lastT').on("click",function(){
		$("#sence2").animate({
			left : 1537 + 'px'
		},2000,function(){
			$("#sence1").fadeIn();
			$("#sence2").hide();
			$("#sence2").animate({
				left : 0 + 'px'
			})
		});	
	})
	
	$('.next,.nextT').on("click",function(){
		$("#sence2").animate({
			left : - 1537 + 'px'
		},2000,function(){
			$("#sence3").fadeIn();
			$("#sence2").hide();
			$("#sence2").animate({
				left : 0 + 'px'
			})
			var s = 1;
			
			var timer = setInterval(function() {
				$("#spans .s" + s).animate({
					top: -10 + 'px'
				}, 1000).animate({
					top: 10 + 'px'
				})
			
				s++;
				if(s == 8) {
					$("#spans .s" + s).fadeOut(1000).fadeIn()
					s = 1;
					}
			}, 166)
			setTimeout(function(){
				$("#sence3").animate({
					left : -1537 + 'px'
				},2000,function(){
					$("#canvas").hide();
					$("#sence4").fadeIn();
					$("#sence3").hide();
					$("#sence3").animate({
						left : 0 + 'px'
					})
					fire();
					fire1();
					start();
				})
			},5000)
		})
	});	
})
