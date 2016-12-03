$(document).ready(function(){
	//国美会员
	$('#dh-1').hover(function(){
		$('.gm-xl').show()
		$('.gm-zhe').show()
	},function(){
		$('.gm-xl').hide()
		$('.gm-zhe').hide()
	})
	//我的国美
	$('.dh-r2').hover(function(){
		$('.my-gm-xl').show()
		$('.my-gm-zhe').show()
	},function(){
		$('.my-gm-xl').hide()
		$('.my-gm-zhe').hide()
	})
	//服务中心
	$('.dh-r4').hover(function(){
		$('.fuwu-xl').show()
		$('.fuwu-zhe').show()
	},function(){
		$('.fuwu-xl').hide()
		$('.fuwu-zhe').hide()
	})
	//网站导航
	$('.dh-r5').hover(function(){
		$('.dh-xl').show()
		$('.dh-zhe').show()
	},function(){
		$('.dh-xl').hide()
		$('.dh-zhe').hide()
	})
	//手机国美
	$('.dh-r7').hover(function(){
		$('.sj-xl').show()
		$('.sj-zhe').show()
	},function(){
		$('.sj-xl').hide()
		$('.sj-zhe').hide()
	})
	//底部事件
	$('.code-1').hover(function(){
		$('.code-a').show()
	},function(){
		$('.code-a').hide()
	})
	$('.code-2').hover(function(){
		$('.code-b').show()
	},function(){
		$('.code-b').hide()
	})
})

$(document).ready(function(){
	//banner轮播
	var n=0
	var flag=true
	var t=setInterval(move,2000)
	function move(){
		if(!flag){
			return
		}
		flag=false
		n++
		if(n>=$('.banner-in').length){
			n=0
		}
		$('.banner-in').stop(true).fadeOut()
		$('.banner-in').eq(n).fadeIn(function(){
			flag=true
		})	
		$('.b-l-fir').eq(n).hide()
		$('.b-l-fir').eq(n-1).show()
		$('.b-l-next').eq(n).show()
		$('.b-l-next').eq(n-1).hide()
	}
	$('.banner-box').mouseover(function(){
		clearInterval(t)
	})
	$('.banner-box').mouseout(function(){
		t=setInterval(move,2000)
	})
	$('.b-right').click(function(){
		move()
	})
	$('.b-left').click(function(){
		if(!flag){
			return
		}
		flag=false
		n--
		if(n<0){
			n=$('.banner-in').length-1
		}
		var x=n+1
		if(x>=$('.banner-in').length){
			x=0
		}
		$('.banner-in').stop(true).fadeOut()
		$('.banner-in').eq(n).fadeIn(function(){
			flag=true
		})
		$('.b-l-fir').eq(n).hide()
		$('.b-l-fir').eq(x).show()
		$('.b-l-next').eq(n).show()
		$('.b-l-next').eq(x).hide()
	})
	$('.banner-list li').mouseover(function(){
		var index=$(this).index()
		$('.b-l-fir').show()
		$('.b-l-next').hide()
		$('.b-l-fir').eq(index).hide()
		$('.b-l-next').eq(index).show()
		$('.banner-in').stop(true).fadeOut()
		$('.banner-in').eq(index).fadeIn()	
		n=index
	})
//	$('.banner-list b').mouseover(function(){
//			var k=$(this).index()
//			$('.banner-in li').stop(true).fadeOut()
//			$('.banner-in li').eq(p*2+k).fadeIn()	
//			$('.banner-list i').removeClass('chur')
//			$('.banner-list i').eq(p*2+k).addClass('chur')
//	})
})


$(document).ready(function(){
	//全部分类
	$('.list-nav li').hover(function(){
		var v=$(this).index()
		$('.qubu-xl').eq(v).show()
	},function(){
		$('.qubu-xl').hide()
	})
	//楼层选项卡
	$('.f1 .tab-list').mouseover(function(){
		var b=$(this).index()
		$('.f1 .tab-list').removeClass('tab-fir')
		$('.f1 .tab-list').eq(b).addClass('tab-fir')
		$('.f1 .main').hide()
		$('.f1 .main').eq(b).show()
	})
	$('.f2 .tab-list').mouseover(function(){
		var b=$(this).index()
		$('.f2 .tab-list').removeClass('tab-fir')
		$('.f2 .tab-list').eq(b).addClass('tab-fir')
		$('.f2 .main').hide()
		$('.f2 .main').eq(b).show()
	})
	$('.f3 .tab-list').mouseover(function(){
		var b=$(this).index()
		$('.f3 .tab-list').removeClass('tab-fir')
		$('.f3 .tab-list').eq(b).addClass('tab-fir')
		$('.f3 .main').hide()
		$('.f3 .main').eq(b).show()
	})
	$('.f4 .tab-list').mouseover(function(){
		var b=$(this).index()
		$('.f4 .tab-list').removeClass('tab-fir')
		$('.f4 .tab-list').eq(b).addClass('tab-fir')
		$('.f4 .main').hide()
		$('.f4 .main').eq(b).show()
	})
	$('.f5 .tab-list').mouseover(function(){
		var b=$(this).index()
		$('.f5 .tab-list').removeClass('tab-fir')
		$('.f5 .tab-list').eq(b).addClass('tab-fir')
		$('.f5 .main').hide()
		$('.f5 .main').eq(b).show()
	})
	//楼层轮播
	var n1=0
	var t1=setInterval(move1,2000)
	function move1(){
		n1++
		if(n1>=$('.f1 .mt-ba').length){
			n1=0
		}
		$('.f1 .mt-ba').stop(true).fadeOut().eq(n1).fadeIn()
		$('.f1 .mt-quan li').removeClass('mt-first')
		$('.f1 .mt-quan li').eq(n1).addClass('mt-first')
	}
	$('.f1 .mt-banner').mouseover(function(){
		clearInterval(t1)
		$('.f1 .mt-left').show()
		$('.f1 .mt-right').show()
	})
	$('.f1 .mt-banner').mouseout(function(){
		t1=setInterval(move1,2000)
		$('.f1 .mt-left').hide()
		$('.f1 .mt-right').hide()
	})
	$('.f1 .mt-right').click(function(){
		move1()
	})
	$('.f1 .mt-left').click(function(){
		n1--
		if(n1<0){
			n1=$('.f1 .mt-banner-body li').length-1
		}
		$('.f1 .mt-banner-body li').stop(true).fadeOut()
		$('.f1 .mt-banner-body li').eq(n1).fadeIn()	
		$('.f1 .mt-quan li').removeClass('mt-first')
		$('.f1 .mt-quan li').eq(n1).addClass('mt-first')
	})
	$('.f1 .mt-quan li').mouseover(function(){
		var c=$(this).index()
		$('.f1 .mt-quan li').removeClass('mt-first')
		$('.f1 .mt-quan li').eq(c).addClass('mt-first')
		$('.f1 .mt-ba').stop(true).fadeOut().eq(c).fadeIn()
		n1=c
		
	})
	//2f
	var n2=0
	var t2=setInterval(move2,2000)
	function move2(){
		n2++
		if(n2>=$('.f2 .mt-ba').length){
			n2=0
		}
		$('.f2 .mt-ba').stop(true).fadeOut().eq(n2).fadeIn()
		$('.f2 .mt-quan li').removeClass('mt-first')
		$('.f2 .mt-quan li').eq(n2).addClass('mt-first')
	}
	$('.f2 .mt-banner').mouseover(function(){
		clearInterval(t2)
		$('.f2 .mt-left').show()
		$('.f2 .mt-right').show()
	})
	$('.f2 .mt-banner').mouseout(function(){
		t2=setInterval(move2,2000)
		$('.f2 .mt-left').hide()
		$('.f2 .mt-right').hide()
	})
	$('.f2 .mt-right').click(function(){
		move2()
	})
	$('.f2 .mt-left').click(function(){
		n2--
		if(n2<0){
			n2=$('.f2 .mt-banner-body li').length-1
		}
		$('.f2 .mt-banner-body li').stop(true).fadeOut()
		$('.f2 .mt-banner-body li').eq(n2).fadeIn()	
		$('.f2 .mt-quan li').removeClass('mt-first')
		$('.f2 .mt-quan li').eq(n2).addClass('mt-first')
	})
	$('.f2 .mt-quan li').mouseover(function(){
		var c=$(this).index()
		$('.f2 .mt-quan li').removeClass('mt-first')
		$('.f2 .mt-quan li').eq(c).addClass('mt-first')
		$('.f2 .mt-ba').stop(true).fadeOut().eq(c).fadeIn()
		n1=c
		
	})
	//3f
	var n3=0
	var t3=setInterval(move3,2000)
	function move3(){
		n3++
		if(n3>=$('.f3 .mt-ba').length){
			n3=0
		}
		$('.f3 .mt-ba').stop(true).fadeOut().eq(n3).fadeIn()
		$('.f3 .mt-quan li').removeClass('mt-first')
		$('.f3 .mt-quan li').eq(n3).addClass('mt-first')
	}
	$('.f3 .mt-banner').mouseover(function(){
		clearInterval(t3)
		$('.f3 .mt-left').show()
		$('.f3 .mt-right').show()
	})
	$('.f3 .mt-banner').mouseout(function(){
		t3=setInterval(move3,2000)
		$('.f3 .mt-left').hide()
		$('.f3 .mt-right').hide()
	})
	$('.f3 .mt-right').click(function(){
		move3()
	})
	$('.f3 .mt-left').click(function(){
		n3--
		if(n3<0){
			n3=$('.f3 .mt-banner-body li').length-1
		}
		$('.f3 .mt-banner-body li').stop(true).fadeOut()
		$('.f3 .mt-banner-body li').eq(n3).fadeIn()	
		$('.f3 .mt-quan li').removeClass('mt-first')
		$('.f3 .mt-quan li').eq(n3).addClass('mt-first')
	})
	$('.f3 .mt-quan li').mouseover(function(){
		var c=$(this).index()
		$('.f3 .mt-quan li').removeClass('mt-first')
		$('.f3 .mt-quan li').eq(c).addClass('mt-first')
		$('.f3 .mt-ba').stop(true).fadeOut().eq(c).fadeIn()
		n1=c
		
	})
	//4f
	var n4=0
	var t4=setInterval(move4,2000)
	function move4(){
		n4++
		if(n4>=$('.f4 .mt-ba').length){
			n4=0
		}
		$('.f4 .mt-ba').stop(true).fadeOut().eq(n4).fadeIn()
		$('.f4 .mt-quan li').removeClass('mt-first')
		$('.f4 .mt-quan li').eq(n4).addClass('mt-first')
	}
	$('.f4 .mt-banner').mouseover(function(){
		clearInterval(t4)
		$('.f4 .mt-left').show()
		$('.f4 .mt-right').show()
	})
	$('.f4 .mt-banner').mouseout(function(){
		t4=setInterval(move4,2000)
		$('.f4 .mt-left').hide()
		$('.f4 .mt-right').hide()
	})
	$('.f4 .mt-right').click(function(){
		move4()
	})
	$('.f4 .mt-left').click(function(){
		n4--
		if(n4<0){
			n4=$('.f4 .mt-banner-body li').length-1
		}
		$('.f4 .mt-banner-body li').stop(true).fadeOut()
		$('.f4 .mt-banner-body li').eq(n4).fadeIn()	
		$('.f4 .mt-quan li').removeClass('mt-first')
		$('.f4 .mt-quan li').eq(n4).addClass('mt-first')
	})
	$('.f4 .mt-quan li').mouseover(function(){
		var c=$(this).index()
		$('.f4 .mt-quan li').removeClass('mt-first')
		$('.f4 .mt-quan li').eq(c).addClass('mt-first')
		$('.f4 .mt-ba').stop(true).fadeOut().eq(c).fadeIn()
		n1=c
		
	})
	//5f
	var n5=0
	var t5=setInterval(move5,2000)
	function move5(){
		n5++
		if(n5>=$('.f5 .mt-ba').length){
			n5=0
		}
		$('.f5 .mt-ba').stop(true).fadeOut().eq(n5).fadeIn()
		$('.f5 .mt-quan li').removeClass('mt-first')
		$('.f5 .mt-quan li').eq(n5).addClass('mt-first')
	}
	$('.f5 .mt-banner').mouseover(function(){
		clearInterval(t5)
		$('.f5 .mt-left').show()
		$('.f5 .mt-right').show()
	})
	$('.f5 .mt-banner').mouseout(function(){
		t5=setInterval(move5,2000)
		$('.f5 .mt-left').hide()
		$('.f5 .mt-right').hide()
	})
	$('.f5 .mt-right').click(function(){
		move5()
	})
	$('.f5 .mt-left').click(function(){
		n5--
		if(n5<0){
			n5=$('.f5 .mt-banner-body li').length-1
		}
		$('.f5 .mt-banner-body li').stop(true).fadeOut()
		$('.f5 .mt-banner-body li').eq(n5).fadeIn()	
		$('.f5 .mt-quan li').removeClass('mt-first')
		$('.f5 .mt-quan li').eq(n5).addClass('mt-first')
	})
	$('.f5 .mt-quan li').mouseover(function(){
		var c=$(this).index()
		$('.f5 .mt-quan li').removeClass('mt-first')
		$('.f5 .mt-quan li').eq(c).addClass('mt-first')
		$('.f5 .mt-ba').stop(true).fadeOut().eq(c).fadeIn()
		n1=c
		
	})
})
//楼层跳转
$(document).ready(function(){
	
	//导航出现消失
	$(window).scroll(function(){
		if($(window).scrollTop()>=$('.f1').offset().top-380){
			$('.fov-box').show()
		}else{
			$('.fov-box').hide()
		}
		if($(window).scrollTop()>=$('.floor').last().offset().top+200){
			$('.fov-box').hide()
		}	
		//出现对应的效果
		$('.floor').each(function(z){
			if($(window).scrollTop()>=$('.floor').eq(z).offset().top-200){
				$('.fov-in li').each(function(x){
					$('.fov-in li span').eq(x).css("color","#777")
					$('.fov-in li p').eq(x).css("color","#777")
				})
				$('.fov-in li span').eq(z).css("color","red")
				$('.fov-in li p').eq(z).css("color","red")
			}
		})
		//点击回到对应的楼层
		$('.fov-in li').each(function(){	
			$('.fov-in li').click(function(){
				var index=$(this).index()
				animate(document.body,{scrollTop:$('.floor').eq(index).offset().top})
				animate(document.documentElement,{scrollTop:$('.floor').eq(index).offset().top})
			})
		})
		
	})	
	//back
	$(window).scroll(function(){
		if($(window).scrollTop()>0){
			$('.xianx-4').css("display","block")
		}else{
			$('.xianx-4').css("display","none")
		}
	})
	$('.xianx-4').click(function(){
		$('body,html').animate({scrollTop:0},1000);
	})
	$('.back-top').click(function(){
		$('body,html').animate({scrollTop:0},1000);
	})
	$('.back-bottom').click(function(){
		$('body,html').animate({scrollTop:$('body').height()},1000);
	})
	//close
	$('.close').click(function(){
		$('.dh-gg').hide()
	})
	
})
$(document).ready(function(){
	//logo下轮播
	var n6=0
	var t6=setInterval(move6,2000)
	function move6(){
		n6++
		if(n6>=$('.fl-gg-img li').length){
			n6=0
		}
		$('.fl-gg-img li').stop(true).fadeOut().eq(n6).fadeIn()
	}
	$('.fl-gg').mouseover(function(){
		clearInterval(t6)	
	})
	$('.fl-gg').mouseout(function(){
		t6=setInterval(move6,2000)
	})
	$('.fl-gg-one').click(function(){
		move6()
	})
	$('.fl-gg-two').click(function(){
		n6--
		if(n6<0){
			n6=$('.fl-gg-img li').length-1
		}
		$('.fl-gg-img li').stop(true).fadeOut()
		$('.fl-gg-img li').eq(n6).fadeIn()	
		
	})

})
$(document).ready(function(){
	//会员下导航
		var n7=0;
		var next7=0;
		flag=true;
		var width=$(".tequan").width();
		function move7(){
			if(!flag){
				return
			}
			flag=false;
			next7=n7+1;
			if(next7>=$('.tequan div').length){
				next7=0;
			}
			$('.tequan div').eq(next7).css("left",width).end().eq(n7).animate({left:-width}).end().eq(next7).animate({left:0},function(){
				flag=true
			});

			n7=next7;
		}
		$('.te-right').click(function(){
			move7();
		})
		$('.te-left').click(function(){
			if(!flag){
				return
			}
			flag=false;
			next7=n7-1;
			if(next7<0){
				next7=$('.tequan div').length-1;
			}
			$('.tequan div').eq(next7).css("left",-width+"px").end().eq(n7).animate({left:width}).end().eq(next7).animate({left:0},function(){
				flag=true;
			});

			n7=next7;
		})
	//换一批
	var n8=0
	function move8(){
		n8++
		if(n8>=$('.guess-main').length){
			n8=0
		}
		$('.guess-main').stop(true).hide().eq(n8).show()
	}

	$('.change_btn').click(function(){
		move8()
	})
})