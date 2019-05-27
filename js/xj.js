(function($){
	//
	$.fn.extend({
		"backBtn":function(options){
			var obj={
				isBack:true,
				scrollTop:0,
				position:"left",
				width:1000,
				offset:0,
				speed:800,
				ifShow:false,
				bottom:100
			}//默认值 如果用户不传 就按照默认值得属性来走
			var ops=$.extend(obj,options)//对象的比较融合 第二个对象中替换第一个 如果相同的属性
			//第二个替换第一个 不相同 全部加上
			var $win=$(window),$dom=$(this)
			var opr={ 
				//1.获取想要的值 2.设置想要的值 3.实现想要的功能
				getLeft:function(){
					var l//距离
					var ww=$win.width() //表示当前窗口的宽度
					var dw=$dom.outerWidth()//获取到当前元素的宽度
					if(ops.position=="left"){
						l=(ww-ops.width)/2-dw-ops.offset
					}else if(ops.position=="right"){
						//l= 空白区域+ops.width+ops.offset
						l=(ww-ops.width)/2+ops.width+ops.offset
					}
					return l
				},
				getTop:function(){
					var t
					var wh=$win.height() //表示当前窗口的高度
					var dh=$dom.outerHeight()//获取到当前元素的高度
					t=wh-dh-ops.bottom
					return t
				},
				setPosition:function(){
					var L=this.getLeft()
					var T=this.getTop()
					$dom.css({
						left:L+"px",
						top:T+"px"
					})
				},
				init:function(){//插件的初始化
					this.setPosition()
					$win.scroll(function(){
						if($win.scrollTop()>ops.scrollTop){
							
							$dom.show()
						}else{
							$dom.hide()
						}
					})
					$win.resize(function(){
						opr.setPosition()
					})
					if(ops.isBack){
						$dom.on("click",function(){
							$("body,html").animate({
								scrollTop:0
							},ops.speed)
						})
					}
					
					if(ops.ifShow){
						$dom.show()
					}else{
						$dom.hide()
					}

				}
			}
			opr.init()
			return $dom
		}
	})//.html()
})(jQuery)

	// $("#backTop").backBtn({
	// 	 		isBack:true,
	// 	 		scrollTop:600,
	// 	 		position:"right",
	// 	 		bottom:800
	// 	 	})

