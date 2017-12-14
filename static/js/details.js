// 商品详情页 JS文件

window.onload = function(){
	// ----------------------放大镜---------------------------
	$('#left_pic').mouseover(function(){
		// 显示
		$('#small').show();
		$('#bigPic').show();
	}).mouseout(function(){
		// 隐藏
		$('#small').hide();
		$('#bigPic').hide();
	}); 

	// 设置left_pic元素的鼠标移动事件
	$('#left_pic').mousemove(function(e){
		// 获取鼠标坐标，相对文档的左上角值
		// console.log(e);
		var x = e.pageX;
		var y = e.pageY;

		// small元素最终的left = 鼠标.x - left_pic.offsetLeft - small.width/2
		var newLeft = x - $(this).offset().left - $('#small').width()/2;

		// newLeft的值的取值范围
		// 最小值
		if(newLeft<=0){
			newLeft = 0;
		}

		// 最大值
		if(newLeft>($('#left_pic').width()-$('#small').width())){
			newLeft = $('#left_pic').width()-$('#small').width();
		}

		// small元素top值 = 鼠标.y - left_pic.offsetTop - small.height/2
		var newTop = y - $(this).offset().top - $('#small').height()/2;

		// newTop的取值范围
		if(newTop<0){
			newTop = 0;
		}

		// 最大值
		if(newTop>($('#left_pic').height()-$('#small').height())){
			newTop = $('#left_pic').height()-$('#small').height();
		}

		// 赋值操作
		$('#small').css({left:newLeft,top:newTop,cursor:'move'});


		// 当small移动时，对应右侧显示对应的区域
		// small.left / left_pic.width = big.offsetLeft / big.width
		var bigLeft = newLeft*$('#big').width()/$('#left_pic').width();
		// small.top / left_pic.height = big.offsetTop / big.height
		var bigTop = newTop*$('#big').height()/$('#left_pic').height();

		// 赋值
		$('#big').css({left:-bigLeft,top:-bigTop});
	});
	// 设置imglist元素下所有的img的单击事件
	$('#tu .tu1 img').click(function(){
		$('#left_pic>img').attr('src',$(this).attr('src'));
		// 右侧大图big
		$('#big').attr('src',$(this).attr('src'));
	});	
	// console.log($('#tu .tu1 img'));

	// 设置imglist元素下所有的img的鼠标移入事件
	$('#tu .tu1 img').mouseover(function(){
		$('#left_pic>img').attr('src',$(this).attr('src'));
		$(this).css('border','2px solid transparent');
		// 右侧大图big
		$('#big').attr('src',$(this).attr('src'));
	});	




	//-------------------商品介绍 规格包装等的 单击事件----------------------------

	// console.log('.auto');
	/*
	$('.auto').each(function(index){
		// 商品介绍
		$('.auto').eq(0).click(function(){
			$(this).css({'background':'#E4393C','color':'#fff'});
			$(this).siblings().css({'background':'#F7F7F7','color':'#666666'});
			$('.fen').css('display','block');
			$('.fen2').css('display','none');
			$('.fen3').css('display','none');
			$('.fen4').css('display','none');
			$('.fen5').css('display','none');
		});
		// 规格与包装
		$('.auto').eq(1).click(function(){
			$(this).css({'background':'#E4393C','color':'#fff'});
			$(this).siblings().css({'background':'#F7F7F7','color':'#666666'});
			$('.fen').css('display','none');
			$('.fen2').css('display','block');
			$('.fen3').css('display','none');
			$('.fen4').css('display','none');
			$('.fen5').css('display','none');
		});
		// 售后保障
		$('.auto').eq(2).click(function(){
			$(this).css({'background':'#E4393C','color':'#fff'});
			$(this).siblings().css({'background':'#F7F7F7','color':'#666666'});
			$('.fen').css('display','none');
			$('.fen2').css('display','none');
			$('.fen3').css('display','block');
			$('.fen4').css('display','none');
			$('.fen5').css('display','none');
		});
		// 商品评价
		$('.auto').eq(3).click(function(){
			$(this).css({'background':'#E4393C','color':'#fff'});
			$(this).siblings().css({'background':'#F7F7F7','color':'#666666'});
			$('.fen').css('display','none');
			$('.fen2').css('display','none');
			$('.fen3').css('display','none');
			$('.fen4').css('display','block');
			$('.fen5').css('display','none');
		});
		// 手机社区
		$('.auto').eq(4).click(function(){
			$(this).css({'background':'#E4393C','color':'#fff'});
			$(this).siblings().css({'background':'#F7F7F7','color':'#666666'});
			$('.fen').css('display','none');
			$('.fen2').css('display','none');
			$('.fen3').css('display','none');
			$('.fen4').css('display','none');
			$('.fen5').css('display','block');
		});
	});
	*/

	// 遍历方法 商品介绍 规格包装等的 单击事件
	$('.auto').each(function(index){
		$('.auto').eq(index).click(function(){
			$(this).css({'background':'#E4393C','color':'#fff'});
			$(this).siblings().css({'background':'#F7F7F7','color':'#666666'});
			// 让对应的内容显示
			$('.dian').eq(index).css('display','block');
			$('.dian').eq(index).siblings().css('display','none');
			// 本身的导航条要显示
			$('.hot_goods2').css('display','block');
		
			// console.log($('.dian').eq(index));
		});
	});


	// 设置商品介绍固定
	$(window).scroll(function(){
		// console.log($('.hot_goods2').offset().top);
		if(document.documentElement.scrollTop >= 1162){
			$('.hot_goods2').css({'position':'fixed','top':'0'});	
		}else{
			$('.hot_goods2').css({'position':'relative'});
		}
	});

	//-----------------用ajax筛选好评、中评、差评-------------------

	// 设置按钮的鼠标移入事件
	// $('.xuan').mouseover(function(){
		// $(this).css({'color':'#fff','background':'#E4393C'});
	// }).mouseout(function(){
		// $(this).css({'color':'','background':''});
	// });

	// 添加单击事件
	$('.fen4>ul li').each(function(index){
		$('.fen4>ul li').eq(index).click(function(){
			console.log($('.fen4>ul li').eq(index));
			var id = $(this).attr('id');
			// console.log(id);
			$(this).css({'color':'#fff','background':'#E4393C'});
			$(this).siblings().css({'color':'#666','background':'#FAFAFA'});
			
			// 以get方式发送
			// 定义传递的参数 -- json格式的对象
			var params = {id:id};
			$.get('./data.php',params,function(data){
				// console.log(data);
				
				var str = '';
					
					$(data).each(function(index,value){
						// console.log(value);
						str += value;
					});
					
					// 设置html的的内容
					$('#gong').html(str);
			},'json');
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







}