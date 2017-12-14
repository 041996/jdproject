// 购物车JS文件
window.onload = function(){
	
	// 设置全选、全不选input按钮的单击事件
	$('.allchoice').click(function(){
		if(this.checked){
			$('input:checkbox').prop('checked',true);
		}else{
			$('input:checkbox').prop('checked',false);
		}
	});

	
	// 当每个商品都被选中的时候 让全选按钮也都被选中
	// 京东自营 按钮
	// console.log($('input[type=checkbox]').eq(1));
	$('input[type=checkbox]').eq(1).click(function(){
		if($(this).prop('checked')){
			$('input[type=checkbox]').prop('checked',true);
		}else{
			$('input[type=checkbox]').prop('checked',false);
		}
	});
	
	// 第一件商品的多选框按钮
	// console.log($('input:checkbox').eq(2));
	$('.every').eq(0).click(function(){	
		if($('.every').eq(0).prop('checked')){
			$('.allchoice').prop('checked',true);
		}else{
			$('.allchoice').prop('checked',false);
		}
		// $('.allchoice').prop('checked',false);
		// 第二个商品单击
		$('.every').eq(1).click(function(){
			if($('.every').eq(0).prop('checked') == true && $('.every').eq(1).prop('checked') == true ){
				$('.allchoice').prop('checked',true);
			}
		});
	});
	
	// 第二件商品的多选框按钮
	$('.every').eq(1).click(function(){
		if($('.every').eq(1).prop('checked')){
			$('.allchoice').prop('checked',true);
		}else{
			$('.allchoice').prop('checked',false);
		}
		// $('.allchoice').prop('checked',false);
		// 第二个商品单击
		$('.every').eq(0).click(function(){
			if($('.every').eq(0).prop('checked') == true && $('.every').eq(1).prop('checked') == true ){
				$('.allchoice').prop('checked',true);
			}
		});		
	});
	
	
	
	
	//-----------------------加减商品数量 改变总价------------------------------------
	
	// 第一件商品的增加效果----------------
	
	// 定义变量获取单价 当数量改变时 后面的总价随之改变
	var newP = $('.qian').val();
	// console.log(newP);
	// 加号的单击事件
	$('.jia').click(function(){
		// 定义变量获取数量的value值
		var num = $('.num').val();
		// console.log(num);
		num++;
		// 把增加后的值重新赋给.num
		$('.num').val(num);
		
		// 定义变量接收数量增加后的价格
		var price = newP*$('.num').val();
		// console.log(price);
		// 重新赋值
		$('.qian').val(price+'.00');
		
		// 定义变量接收商品1和商品2改变数量后的总价格
		var newMoney = $('.qian').val()*1 + $('.qian-1').val()*1;
		// console.log(newMoney);
		// 赋值给结算的总价
		$('.zongBox').text('￥'+newMoney+'.00');	
	});
	
	// 第一件商品的减号单击事件
	$('.jian').click(function(){
		var num = $('.num').val();
		num--;
		if(num<1){
			num = 1;
		}
		$('.num').val(num);
		
		var price = newP*$('.num').val();
		$('.qian').val(price+'.00');
		
		var newMoney = $('.qian').val()*1 + $('.qian-1').val()*1;
		$('.zongBox').text('￥'+newMoney+'.00');
	});
	
	// 第二件商品的加号事件
	var newP1 = $('.qian-1').val();
	
	$('.jia-1').click(function(){
		var num = $('.num-1').val();
		num++;
		$('.num-1').val(num);
		
		var price1 = newP1*$('.num-1').val();
		$('.qian-1').val(price1+'.00');
		
		var newMoney = $('.qian').val()*1 + $('.qian-1').val()*1;
		$('.zongBox').text('￥'+newMoney+'.00');
	});
	
	// 第二件商品的减号事件
	$('.jian-1').click(function(){
		var num = $('.num-1').val();
		num--;
		if(num<1){
			num = 1;
		}
		$('.num-1').val(num);
		
		var price1 = newP1*$('.num-1').val();
		$('.qian-1').val(price1+'.00');
		
		var newMoney = $('.qian').val()*1 + $('.qian-1').val()*1;
		$('.zongBox').text('￥'+newMoney+'.00');
	});
	
	
	// -------------------------购物条效果---------------------------------------
	
	// 结算div距离文档顶部的高度
	console.log($('#pay').offset().top); // 334
	// 可视区域的高度
	// console.log(document.documentElement.clientHeight); // 391
	// 结算div的高度
	// console.log($('#pay').height()); // 55
	
	$(window).scroll(function(){
		// console.log($('#pay').offset().top - document.documentElement.clientHeight - $('#pay').height());
		if(screen.height - document.documentElement.clientHeight > $(document).scrollTop()+133){
			// 父级设置1像素边框
			$('#payBox').css({'position':'fixed','bottom':'0px','border-top':'1px solid #F0F0F0'});
			// 
			$('#pay').css({'position':'fixed','bottom':'0px','border':'none'});
		}else{
			$('#payBox').css({'position':'relative','border':'none','box-shadow':'none'});
			$('#pay').css({'position':'relative','width':'990px','border':'1px solid #E0E0E0'});
		}
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