// 京东首页JS特效文件

// 搜索框的失去焦点事件
$('.search input').focus(function(){
	$(this).val('');
}).blur(function(){
	$(this).val('移动电源');
});

// 二级菜单下的li的鼠标移入和移出事件---------------------
$('.house').each(function(index,item){
	$('.house').eq(index).mouseover(function(){
		// console.log($('.house'));
		$('this:nth-child(2)').css('display','block');
	}).mouseout(function(){
		$('this:nth-child(2)').css('display','none');
	});
})

//-------------------------轮播图-----------------------------------
// 获取所有的图片li元素
var lis = $('#lun>ul>li');
// console.log(lis);
// 获取数字列表
var lis_num = $('#list_num>ul>li');
// console.log(lis_num);
// 获取左右箭头元素
var jian = $('#jian');

var i = 0;
var len = lis.length;
var run;

// 将定时器封装成函数
function autoRun(){
	// if(run){
		// return;
	// }
	run = setInterval(function(){
		lis.eq(i).fadeOut(500);
		lis_num.eq(i).removeAttr('class');
		
		i++;
		
		if(i==len){
			i = 0;
		};
		
		lis.eq(i).delay(100);
		lis.eq(i).fadeIn(900);
		lis_num.eq(i).attr('class','active_num');
		
	},1500);
};

autoRun();

// 设置鼠标移入和移出事件
// 移入 轮播图停止，定时器停止 -- 清除定时器
$('#lun').mouseover(function(){
	clearInterval(run);
	jian.css('display','block');
}).mouseout(function(){
	autoRun();
	jian.css('display','none');
})

var j = 0;
lis_num.each(function(index,item){
	lis_num.eq(index).mouseover(function(){
		// console.log(item);
		// console.log(lis_num.eq(index));
		clearInterval(run);
		lis.eq(i).fadeOut(500);
		lis_num.eq(i).removeAttr('class');
		
		// i = this.getAttribute('data-num');
		i = lis_num.eq(index).attr('data-num');
		
		lis.eq(i).delay(500);
		lis.eq(i).fadeIn(500);
		lis_num.eq(i).attr('class','active_num');
	})
})

// 左箭头的单击事件			
$('#left').click(function(){
	lis.eq(i).fadeOut(500);
	lis_num.eq(i).removeAttr('class');
	
	i--;
	if(i<0){
		i = len-1;
	}
	
	lis.eq(i).delay(500);
	lis.eq(i).fadeIn(500);
	lis_num.eq(i).attr('class','active_num');	
})

// 右箭头的单击事件
$('#right').click(function(){
	lis.eq(i).fadeOut(500);
	lis_num.eq(i).removeAttr('class');
	
	i++;
	if(i==len){
		i = 0;
	}
	
	lis.eq(i).delay(500);
	lis.eq(i).fadeIn(500);
	lis_num.eq(i).attr('class','active_num');
})




//---------------------------- 页面二级菜单和轮播图右侧js----------------------
// 登录和注册按钮
$('.onload,.zhuce').mouseover(function(){
	$(this).css('color','#E01222');
}).mouseout(function(){
	$(this).css('color','#000');
});
// 新人福利和PLUS会员
$('.newman,.vip').mouseover(function(){
	$(this).css('background','#E01222');
	$(this).css('color','#fff');
}).mouseout(function(){
	$(this).css('background','#fff');
	$(this).css('color','#E01222');
});

//----------轮播图右侧滑动------------------------------------

$('.cuxiao').mouseover(function(){
	$('.hua').css('transform','translateX(0px)');
	$('.cuxiao_box').css('display','block');
	$('.gonggao_box').css('display','none');
});
$('.gonggao').mouseover(function(){
	$('.hua').css('transform','translateX(45px)');
	$('.cuxiao_box').css('display','none');
	$('.gonggao_box').css('display','block');
});

//----------------- 倒计时--------------------------------------
// 定义获取活动是否开始的函数
var run2;
function getTimeStart(){
	// 活动开始时间 -- 时间对象  2016年11月18日 10:0:0
	var start = new Date(2017,11,18,10,00,00);

	// 当前此刻的时间对象
	var now = new Date();

	// 计算两个时间对象的时间差

	// getTime() 获取当前时间对象对应的微秒数 -- 从1970年1月1日0时0分0秒到现在此刻的微秒数
	// console.log(start.getTime());
	// console.log(now.getTime());
	var cha = start.getTime() - now.getTime();
	// console.log(cha);

	// 判断差值
	if (cha<=0) {
		// console.log('活动已经开始');

		// 停止计时器
		clearInterval(run2);

		// 活动已经开始了，time元素里面的字符串
		$('#show_box').innerHTML = '0天0时0分0秒';

		// 激活抢购a链接 -- 添加href属性
		buy.setAttribute('href','https://www.tmall.com/');
		buy.style.background = '#C40000';

		// 执行下去的必要性吗
		return;
	};

	// 时间差 -- 对应的转换成多少天、多少小时、多少分、多少秒
	var day = Math.floor(cha/1000/60/60/24);
	//console.log(day+'天');

	// 多少小时
	cha = cha - day*24*60*60*1000;	// 剩余的时间差
	var hour = Math.floor(cha/1000/60/60);
	//console.log(hour+'时');

	// 多少分
	cha = cha - hour*60*60*1000;
	var minute = Math.floor(cha/1000/60);
	//console.log(minute);

	// 多少秒
	cha = cha - minute*60*1000;
	var second = Math.floor(cha/1000);
	//console.log(second);

	// 赋值
	$('#shi').html(hour);
	$('#fen').html(minute);
	$('#miao').html(second);
	
}

// 第一次进入页面调用函数
getTimeStart();

// 设置定时器
var run2 = setInterval(getTimeStart,1000);	



//-------------------倒计时下热卖单品的js-----------------------------------------
// 图片移入时向上移动，下面的字改变颜色
$('.hot_num').each(function(index,item){
	// console.log($('.hot_num'));
	$('.hot_num').eq(index).mouseover(function(){
		$(this).css('marginTop','0px');
		$(this).css('transition','1s ease');
		$(this).parent().next().next().css('color','#C81623');
	}).mouseout(function(){
		$(this).css('marginTop','8px');
		$(this).css('transition','1s ease');
		$(this).parent().next().next().css('color','#999');
	});
});
// 文字移入时改变颜色，图片向上移动
$('.hot_intro').each(function(index,item){
	// console.log($('.hot_intro'));
	$('.hot_intro').eq(index).mouseover(function(){
		$(this).css('color','#C81623');
		$(this).prev().prev().children('.hot_num').css('marginTop','-10px');
		$(this).prev().prev().children('.hot_num').css('transition','1s ease');
	}).mouseout(function(){
		$(this).css('color','#999');
		$(this).prev().prev().children('.hot_num').css('marginTop','0px');
	});
})

//------------------------右侧固定漂浮菜单----------------------
// 京东会员隐藏框
$('.jdVip3').mouseover(function(){
	$('.jdVip2').css('transform','translateX(-110px)');
	$('.jdVip').css('background','#C81623');
}).mouseout(function(){
	$('.jdVip').css('display','block');
	$('.jdVip2').css('transform','translateX(110px)');
	$('.jdVip').css('background','');
});
// 购物车隐藏框
$('.shopping3').mouseover(function(){
	$('.shopping2').css('transform','translateX(-110px)');
	$('.shopping').css('background','#C81623');
}).mouseout(function(){
	$('.shopping').css('display','block');
	$('.shopping2').css('transform','translateX(110px)');
	$('.shopping').css('background','');
});
// 我的关注隐藏框
$('.heart3').mouseover(function(){
	$('.heart2').css('transform','translateX(-110px)');
	$('.heart').css('background','#C81623');
}).mouseout(function(){
	$('.heart').css('display','block');
	$('.heart2').css('transform','translateX(110px)');
	$('.heart').css('background','');
});
// 我的足迹隐藏框
$('.biao3').mouseover(function(){
	$('.biao2').css('transform','translateX(-110px)');
	$('.biao').css('background','#C81623');
}).mouseout(function(){
	$('.biao').css('display','block');
	$('.biao2').css('transform','translateX(110px)');
	$('.biao').css('background','');
});
// 我的消息隐藏框
$('.xiao3').mouseover(function(){
	$('.xiao2').css('transform','translateX(-110px)');
	$('.xiao').css('background','#C81623');
}).mouseout(function(){
	$('.xiao').css('display','block');
	$('.xiao2').css('transform','translateX(110px)');
	$('.xiao').css('background','');
});
// 咨询JIMI隐藏框
$('.zixun3').mouseover(function(){
	$('.zixun2').css('transform','translateX(-110px)');
	$('.zixun').css('background','#C81623');
}).mouseout(function(){
	$('.zixun').css('display','block');
	$('.zixun2').css('transform','translateX(110px)');
	$('.zixun').css('background','');
});
// 回到顶部隐藏框
$('.returnTop3').mouseover(function(){
	$('.returnTop2').css('transform','translateX(-110px)');
	$('.returnTop').css('background','#C81623');
}).mouseout(function(){
	$('.returnTop').css('display','block');
	$('.returnTop2').css('transform','translateX(110px)');
	$('.returnTop').css('background','');
});
// 反馈隐藏框
$('.fan3').mouseover(function(){
	$('.fan2').css('transform','translateX(-110px)');
	$('.fan').css('background','#C81623');
}).mouseout(function(){
	$('.fan').css('display','block');
	$('.fan2').css('transform','translateX(110px)');
	$('.fan').css('background','');
});

//---------------------------京东登录框------------------------------

// 设置右侧京东会员登录按钮的onclick事件
$('#aside .jdVip3').click(function(){
	$('#login').css('display','block');
	$('#zhao').css('display','block');
	getDivMiddle();
})
// 设置使登录元素垂直和水平都居中的函数
function getDivMiddle(){
	// 让元素处于页面可视区域的中间(上下左右都是居中的)
	// left  = (页面可视区域宽度 - 自身宽度)/2
	var w = login.offsetWidth;		// 自身宽度
	var cW = document.documentElement.clientWidth;	// 可视区域的宽度
	var h = login.offsetHeight;		// 自身高度
	var cH = document.documentElement.clientHeight;	// 可视区域的高度

	// 计算出来的值
	var newLeft = (cW - w)/2;
	var newTop = (cH - h)/2;

	// 赋值
	login.style.left = newLeft + 'px';
	login.style.top = newTop + 'px';
}
// 设置关闭按钮的单击事件
$('.close').click(function(){
	$('#login').css('display','none');
	$('#zhao').css('display','none');
});
// 当改变页面的宽度或者高度时，login元素要一直处于页面可视区域的居中位置
window.onresize = function(){
	// 调用div居中的函数
	getDivMiddle();
};

// 设置取消自动选择时 隐藏loginWarn下的提示
$('.auto input').click(function(){
	$('.loginWarn').html('');
	$('.loginWarn').css({background:'#fff',borderColor:'transparent'});
});

//-------------------头部隐藏导航条----------------------------

// 设置表单失去焦点事件
$('#searchTwo').focus(function(){
	$(this).val('');
}).blur(function(){
	$(this).val('平板二合一');
});
	
// 判定元素进入：元素距离文档顶部的值 - 滚动条的值 < 可视区域的高度
window.onscroll = function(){
	// 判断滚动条的滑动值控制显示头部隐藏导航条
	if(document.documentElement.scrollTop >= screen.height){
		$('#head_search').slideDown(300).fadeIn('slow');
	}else{
		$('#head_search').css('display','none');
	};
	// 判断滚动条的滑动值控制显示左侧菜单
	if(document.documentElement.scrollTop >= $('.floorSecond1').eq(0).offset().top-40){
		$('#asideLeft').slideDown(1000);
		//$('#asideLeft').css('display','block');	
	}else{
		$('#asideLeft').css('display','none');	
	}
}

//-------------------------左侧菜单栏------------------------------------
$('#asideLeft ul li').mouseover(function(){
	$(this).css('background','#D70B1C');
}).mouseout(function(){
	$(this).css('background','#918888');
})
// 左侧菜单栏 点击li显示对应的楼层
$(window).scroll(function(){
	$('.floorSecond1').each(function(index,item){
		if($('.floorSecond1').eq(index).offset().top <= $(document).scrollTop()+600){
			$('#asideLeft ul li').eq(index).css('background','#D70B1C');
			$('#asideLeft ul li').eq(index).siblings().css('background','#918888');
		}
	});
})

$('#asideLeft ul li').each(function(index,item){
	$('#asideLeft ul li').eq(index).click(function(){
		var newZ = $('.floorSecond1').eq(index).offset().top-70;
		// console.log(newZ);
		$(this).css('background','#D70B1C');
		// $(document).scrollTop(newZ)
		$('body,html').animate({scrollTop:newZ},500);
		return false;
	});
});















//--------------------发现好货、品牌街、排行榜--------------------------
// 发现好货
$('.findBox1').mouseover(function(){
	$(this).find('.baoPic').css('transform','translateX(-5px)');
}).mouseout(function(){
	$(this).find('.baoPic').css('transform','translateX(0px)');
});
// 品牌街
$('.findBox2').mouseover(function(){
	$(this).find('.baoPic2').css('transform','translateX(-5px)');
}).mouseout(function(){
	$(this).find('.baoPic2').css('transform','translateX(0px)');
});

// 排行榜导航条滑动事件

$('.rankOne').each(function(index,item){
	$('.rankOne').eq(index).mouseover(function(){
		// console.log($('.rankOne').eq(index));
		$('.rankOne>a').eq(index).css('color','#c81623');
		//$('.slip').css('transform','translateX(60px)');
	}).mouseout(function(){
		$('.rankOne>a').eq(index).css('color','');
		//$('.slip').css('transform','translateX(0px)');
	});
});
// 手机
$('.rankOne').eq(0).mouseover(function(){
	$('.slip').css('transform','translateX(0px)');
});
// 笔记本
$('.rankOne').eq(1).mouseover(function(){
	$('.slip').css('transform','translateX(60px)');
	$('.rankBox').css('display','none');
	$('.rankBox2').css('display','block');
}).mouseout(function(){
	$('.rankBox').css('display','block');
	$('.rankBox2').css('display','none');
});
// 游戏
$('.rankOne').eq(2).mouseover(function(){
	$('.slip').css('transform','translateX(140px)');
	$('.rankBox').css('display','block');
	$('.rankBox2').css('display','none');
}).mouseout(function(){
	$('.slip').css('transform','translateX(90px)');
	$('.rankBox').css('display','none');
	$('.rankBox2').css('display','block');
});
// 显示器
$('.rankOne').eq(3).mouseover(function(){
	$('.slip').css('transform','translateX(210px)');
	$('.rankBox').css('display','none');
	$('.rankBox2').css('display','block');
}).mouseout(function(){
	$('.slip').css('transform','translateX(140px)');
	$('.rankBox').css('display','block');
	$('.rankBox2').css('display','none');
})
// 散文/随笔
$('.rankOne').eq(4).mouseover(function(){
	$('.slip').css('transform','translateX(300px)');
	$('.rankBox').css('display','block');
	$('.rankBox2').css('display','none');
}).mouseout(function(){
	$('.rankBox').css('display','none');
	$('.rankBox2').css('display','block');
});

//---------------------领券中心------------------------------
$('.shouji_pic').each(function(index){
	var rr = index;
	$('.haoquan').eq(index).mouseover(function(){
		$('.shouji_pic').eq(rr).css('transform','translateX(30px)');
	}).mouseout(function(){
		$('.shouji_pic').eq(rr).css('transform','translateX(0px)');
	});
})
$('.haoquan1').mouseover(function(){
	$('.shouji_pic1').css('transform','translateX(30px)');
}).mouseout(function(){
	$('.shouji_pic1').css('transform','translateX(0px)');
})
//-------------------去看看吧------------------------
$('#look_box img').each(function(index,item){
	$('#look_box img').eq(index).mouseover(function(){
		console.log($(this));
		$(this).css('opacity','0.8');
		//console.log($('#look_box img').eq(index));
	}).mouseout(function(){
		$(this).css('opacity','1');
	})
})
$('#look_box1 img').each(function(index,item){
	$('#look_box1 img').eq(index).mouseover(function(){
		console.log($(this));
		$(this).css('opacity','0.8');
		//console.log($('#look_box img').eq(index));
	}).mouseout(function(){
		$(this).css('opacity','1');
	})
})
