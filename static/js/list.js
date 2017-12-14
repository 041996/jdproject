// 京东商城列表页 JS文件

//--------------------品牌logo的鼠标移入效果----------------------------
$('.pinpai').mouseover(function(){
	$(this).children('.brandPic').css('display','none');
	// console.log($('.pinpai').children('.brandPic'));
	$(this).children('.brandPic1').css('display','block');
}).mouseout(function(){
	$(this).children('.brandPic').css('display','block');
	$(this).children('.brandPic1').css('display','none');
});

//---------------------下拉、收起隐藏选项JS---------------------------

// 鼠标移入 更多选项(运行机身、系统等) 该按钮 改变颜色
$('.kindLast').mouseover(function(){
	$('.la').css({'color':'#E4393C','border-color':'#E4393C'});
	$(this).css('border-color','#E4393C');
}).mouseout(function(){
	$('.la').css({'color':'','border-color':''});
	$(this).css('border-color','');
});
// 更多选项 该按钮的单击事件 下拉框展开 显示‘收起’按钮
$('.kindLast .la').click(function(){
	$('.yin').css('display','block');
	$('.kindLast').css('display','none');
	$('.kindLast2').css('display','block');
});
// console.log($('.kindLast .la'));
// 收起 按钮
$('.kindLast2').mouseover(function(){
	$('.la2').css({'color':'#E4393C','border-color':'#E4393C'});
	$(this).css('border-color','#E4393C');
}).mouseout(function(){
	$('.la2').css({'color':'','border-color':''});
	$(this).css('border-color','');
});
// 更多选项 该按钮的单击事件 下拉框展开 显示‘收起’按钮
$('.kindLast2 .la2').click(function(){
	$('.yin').css('display','none');
	$('.kindLast').css('display','block');
	$('.kindLast2').css('display','none');
});

//--------------------- 筛选节点操作 ----------------------

// $('.money ul li').click(function(){
	// console.log($('.money ul li>a').text());
// });
// 价格
$('.money>ul>li').each(function(index,each){
	$('.money ul li').eq(index).click(function(){
		var text = $(this).children("a").text();
		// console.log(text);
		var name = $(this).parent().parent().prev().text();
		// 在手机通讯 后面追加节点
		$('#iphone').append('<div class="show">'+name+''+text+'<span>X</span></div>');
		//$('#iphone').append('<span class="clear">清空筛选</span>');
		// li所在的整个div隐藏
		$(this).parent().parent().parent().css('display','none');
		//$(this).parent().parent().parent().next().css('display','block');
		
		// 设置X按钮的单击事件
		$('.show span').click(function(){
			$(this).parent().css('display','none');
			$('.money>ul>li').parent().parent().parent().css('display','block');
			// $(this).parent().parent().parent().next().css('display','block');
			$('.yin').css('display','none');
		});
		// 设置追加内容的移入事件
		$('.show').mouseover(function(){
			$(this).css({'color':'#E4393C','border-color':'#E4393C'});
			$('.show span').css({'background':'#E4393C','color':'#fff'});
		}).mouseout(function(){
			$(this).css({'color':'','border-color':''});
			$('.show span').css({'background':'','color':''});
		});
	});
});
// 网络 热点 运行 内存 系统 电池 像素
$('.money2>ul>li').each(function(index,each){
	$('.money2 ul li').eq(index).click(function(){
		var text = $(this).children("a").text();
		// console.log(text);
		var name = $(this).parent().parent().prev().text();
		// 在手机通讯 后面追加节点
		$('#iphone').append('<div class="show2">'+name+''+text+'<span>X</span></div>');
		// li所在的整个div隐藏
		$(this).parent().parent().parent().css('display','none');
		//$(this).parent().parent().parent().next().css('display','block');
		
		// 设置X按钮的单击事件
		$('.show2 span').click(function(){
			$(this).parent().css('display','none');
			$('.money2>ul>li').parent().parent().parent().css('display','block');
			// $(this).parent().parent().parent().next().css('display','block');
			$('.yin').css('display','none');
		});
		// 设置追加内容的鼠标移入事件
		$('.show2').mouseover(function(){
			$(this).css({'color':'#E4393C','border-color':'#E4393C'});
			$('.show2 span').css({'background':'#E4393C','color':'#fff'});
		}).mouseout(function(){
			$(this).css({'color':'','border-color':''});
			$('.show2 span').css({'background':'','color':''});
		});
	});
});
// 屏幕尺寸
$('.money3>ul>li').each(function(index,each){
	$('.money3 ul li').eq(index).click(function(){
		var text = $(this).children("a").text();
		var name = $(this).parent().parent().prev().text();
		// console.log(name);
		// console.log(text);
		// 在手机通讯 后面追加节点
		$('#iphone').append('<div class="show3">'+name+''+text+'<span>X</span></div>');
		// li所在的整个div隐藏
		$(this).parent().parent().parent().css('display','none');
		//$(this).parent().parent().parent().next().css('display','block');
		
		// 设置X按钮的单击事件
		$('.show3 span').click(function(){
			$(this).parent().css('display','none');
			$('.money3>ul>li').parent().parent().parent().css('display','block');
			// $(this).parent().parent().parent().next().css('display','none');
			$('.yin').css('display','none');
		});
		// 设置追加内容的鼠标移入事件
		$('.show3').mouseover(function(){
			$(this).css({'color':'#E4393C','border-color':'#E4393C'});
			$('.show3 span').css({'background':'#E4393C','color':'#fff'});
		}).mouseout(function(){
			$(this).css({'color':'','border-color':''});
			$('.show3 span').css({'background':'','color':''});
		});
	});
});


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





