
<?php
	// 定义包含了各种各样评价的数组
	$assess = array(
		'quan' => array(
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren1.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/wuxing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						乐视的原生系统非常棒，很人性化，操作方便快捷！手机略感厚了～
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren2.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/wuxing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						机子外观很好看，内存足够用了，值得拥有
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan2.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren3.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/wuxing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						用的还不错，指纹识别也挺灵敏。
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren4.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/wuxing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						手机真心的不错，性价比高，待机时间长，还可以当遥控器用
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan3.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren5.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/wuxing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						商品漂亮，实用，非常喜欢
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan2.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren6.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/sanxing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						手机还不错，可是都没送个手机壳或则贴个膜什么的。
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren7.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/sanxing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						手机质感不是很好，相机一般，电量还可以
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan2.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren8.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/sanxing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						买回来的时候上面有瑕疵，本来打算换的，太麻烦了就没换，等着送人
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan1.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren9.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/yixing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						外包装特别脏，具体看图，我买的套餐，结果壳还给我发错了!
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan2.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren10.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/yixing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						差差差服务太差，正真的，发票不给，赠品也不给，真有意思，客服服务态度太差
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren11.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/yixing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						买回来屏幕就有问题，国产品牌别坑自己人
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan2.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren12.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/yixing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						很垃圾，经常卡机；发热，无法重启
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan3.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren13.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/yixing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						超级烂！物流也很烂，服务也很烂！
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan1.jpg"></div>
			</div>',
		),
		'good' => array(
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren1.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/wuxing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						乐视的原生系统非常棒，很人性化，操作方便快捷！手机略感厚了～
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren2.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/wuxing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						机子外观很好看，内存足够用了，值得拥有
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan2.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren3.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/wuxing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						用的还不错，指纹识别也挺灵敏。
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren4.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/wuxing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						手机真心的不错，性价比高，待机时间长，还可以当遥控器用
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan3.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren5.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/wuxing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						商品漂亮，实用，非常喜欢
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan2.jpg"></div>
			</div>',
		),
		'middle' => array(
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren6.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/sanxing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						手机还不错，可是都没送个手机壳或则贴个膜什么的。
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren7.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/sanxing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						手机质感不是很好，相机一般，电量还可以
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan2.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren8.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/sanxing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						买回来的时候上面有瑕疵，本来打算换的，太麻烦了就没换，等着送人
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan1.jpg"></div>
			</div>',
		),
		'bad' => array(
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren9.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/yixing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						外包装特别脏，具体看图，我买的套餐，结果壳还给我发错了!
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan2.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren10.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/yixing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						差差差服务太差，正真的，发票不给，赠品也不给，真有意思，客服服务态度太差
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren11.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/yixing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						买回来屏幕就有问题，国产品牌别坑自己人
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan2.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren12.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/yixing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						很垃圾，经常卡机；发热，无法重启
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan3.jpg"></div>
			</div>',
			'<div class="textContent">
				<div class="textLeft">
					<img src="./static/detail_imgs/ren13.jpg">
				</div>
				<div class="textMiddle">
					<img class="wuxing" src="./static/detail_imgs/yixing.jpg">
					<!-- 接收评价的内容 -->
					<div class="pingText">
						超级烂！物流也很烂，服务也很烂！
					</div>
				<!-- 多少天后评价 -->
					<img class="xiang" src="./static/detail_imgs/xiangxi.jpg">
				</div>
				<!-- 右侧 -->
				<div class="textRight"><img class="xiang" src="./static/detail_imgs/zan1.jpg"></div>
			</div>',
		),
	);
	
	// 接收用户传递的参数
	$id = $_GET['id'];
	
	// 使用post方式接收数据
	// $id = $_POST['id'];
	
	// 将数组按照json格式的字符串返回到客户端浏览器
	echo json_encode($assess[$id]);
	
	
	
	
	
	
	
	
	
	
	
	