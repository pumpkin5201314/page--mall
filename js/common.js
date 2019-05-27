// 面向过程---轮播图
$(function(){


	 
		//判断当前ul是否在执行动画--》element.is(':animated')
		$('.next').click(function(){
			if(!$('.hot ul').is(':animated')){

			$('.hot ul').animate({  // animate有一个队列，当快速点击时，队列会依次执行
			left:'-1002px'
		},800,function(){
			$('.hot ul li').eq(0).appendTo($('.hot ul'));//因为dom操作在animate中所以会有过度效果
			$('.hot ul').css("left",0);
		})
		}
		})
		 
	 

//判断当前ul是否在执行动画--》element.is(':animated')

 $('.prev').click(function(){
		if(!$('.hot ul').is(':animated')){

		$('.hot ul').find('li').last().prependTo($('.hot ul'));//dom不在animate中瞬间点击时没有过度效果
		$('.hot ul').css("left",'-1002px');
			$('.hot ul').animate({
				left:0
			},800);

}
})
		 

	var t=setInterval(function(){
		 
       	$('.hot ul').animate({
				left:'-1002px'
			},800,function(){
				$('.hot ul li').eq(0).appendTo($('.hot ul'));
				$('.hot ul').css("left",0);
			})
		 
	},2000)

	$('.slide-box').mouseover(function(){
		clearInterval(t)
	});


	$('.slide-box').mouseout(function(){
		  t=setInterval(function(){
		 
       	$('.hot ul').animate({
				left:'-1002px'
			},800,function(){
				$('.hot ul li').eq(0).appendTo($('.hot ul'));
				$('.hot ul').css("left",0);
			})
		 
	},2000)
 	});

	 //发现  json请求
	 var indexNum=0;//统计当前的请求次数
	 $('.comMore').click(function(){
	 	var self=$(this);
	 	self.html('正在加载中').removeClass('cj').addClass('loading');
	 	$.ajax({
	 		 type:"post",
	 		 url:"./json/json.js",
	 		 dataType:"json",
	 		 success:function(data){
	 		 	var data1=data[indexNum]//当前需要遍历的数组
				var param=""
				for(var n=0;n<data1.length;n++){
					// data1[n].img //图片地址
					// data1[n].text//
					// data1[n].price
					param+='<li><img src="'+data1[n].img+'" width="222" height="130"><div class="info"><p class="name">'+data1[n].text+'</p><div class="fix"><span class="left price">'+data1[n].price+'</span><p class="right"><span class="xin">3</span><span class="look">3</span></p></div></div></li>'
				    // param+='<li><img src="'+data1[n].img+'" width="222" height="130"><div class="info"><p class="name">'+data1[n].text+'</p><div class="fix"><span class="left price">'+data1[n].price+'</span><p class="right"><span class="xin">3</span><span class="look">3</span></p></div></div></li>'
				}
				self.parent().prev().append(param);
				indexNum++;
				    self.html("点击加载更多").removeClass("loading").addClass("cj");
					// self.html('点击加载更多').removeClass('cj').addClass('loading');
					if(indexNum>=data.length){
					self.parent().html("<span class='no-more'>没有更多啦</span>")
				}
	 		 }
	 	})
	 })



//返回顶部按钮

			 $(window).scroll(function(){
			if($(window).scrollTop()>200){
				$("#backTop").show();
			}else{
				$("#backTop").hide();
			}
		})

			 //点击返回顶部按钮
			 $('#backTop').click(function(){
			 	$("html,body").animate({
			 		scrollTop:0
			 	},400)
			 })


 

//插件封装 
 //插件封装 可维护 复用 交互性
	//参数 当前插件的 作用 效果 
	// {
	// 	isBack:true, // 可选属性，控制是否返回顶部
	// 	scrollTop:0,//可选属性 滚动条高度为多少时出现
	// 	position:"left",//可选属性 控制当前按钮在内容区域的位置
	// 	width:1000,//可选属性 当前网页内容区域的宽度
	// 	offset:0,//可选属性 当前距离内容的距离
	// 	speed:800,//可选属性 滚动速度
	// 	ifShow:true//默认是否显示
	// }




		 
// $(".sy").click(function(){
// 	$('.sy a').css("color",'red');
// })


















})