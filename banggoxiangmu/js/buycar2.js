/*
file name:mbshop - 功能类js
created by:kris
created date:2014-10-09
*/

;(function($){
	//numCaculate 商品详情页，数量增加与减少
	$.numCaculate={
		//valBox
		valBox:function(options){
			//$(options.valBoxId).val(options.beginNum);
			$(options.valBoxId).focusout(
				function(){
					if($(this).val()>parseInt(options.maxNum)){
						$(this).val(options.maxNum);
						if($(options.alertClass).is(":visible")){
							 $(options.alertClass).show();
						}else{
							$(options.alertClass).text('对不起，数量最多为'+ options.maxNum +'件。').fadeIn(options.fadeInSec).delay(options.delaySec).fadeOut(options.fadeOutSec);
						};
					}else if($(this).val()<parseInt(options.beginNum)){
						$(this).val(options.beginNum);
						if($(options.alertClass).is(":visible")){
							$(options.alertClass).show();
						}else{
							$(options.alertClass).text('对不起，数量至少为'+ options.minNum +'件。').fadeIn(options.fadeInSec).delay(options.delaySec).fadeOut(options.fadeOutSec);
						};
					};
				}
			);
		},
		//leftBtn
		lfBtnEvent:function(options){
			$(options.numBtnLess).live("click" ,function(){
				var $detail_buy_num=parseInt($(options.valBoxId).val())?parseInt($(options.valBoxId).val()):0;
				$(options.valBoxId).val($detail_buy_num-1);
				if($(options.valBoxId).val()<parseInt(options.minNum)){
					$(options.valBoxId).val(options.minNum);
					if($(options.alertClass).is(":visible")){
						 $(options.alertClass).show();
					}else{
						$(options.alertClass).text('对不起，数量至少为'+ options.minNum +'件。').fadeIn(options.fadeInSec).delay(options.delaySec).fadeOut(options.fadeOutSec);
					};
				};
			});
		},
		//rightBtn
		rtBtnEvent:function(options){
			$(options.numBtnAdd).live("click" ,function(){
				var detail_buy_num = parseInt($(options.valBoxId).val()) ? parseInt($(options.valBoxId).val()) : 0;
				$(options.valBoxId).val(detail_buy_num+1);
				if($(options.valBoxId).val()>parseInt(options.maxNum)){				
					$(options.valBoxId).val(options.maxNum);
					if($(options.alertClass).is(":visible")){
						 $(options.alertClass).show();
					}else{
						$(options.alertClass).text('对不起，数量最多为'+ options.maxNum +'件。').fadeIn(options.fadeInSec).delay(options.delaySec).fadeOut(options.fadeOutSec);
					};
				};	
			});
		}
	};

	//详情页搭配套餐div宽度
	$.fn.detailPicThumbWidth=function(mbshop_detail_pdCollectionCon){
        $(this).css('width', ($(mbshop_detail_pdCollectionCon).width()+50) * ($(mbshop_detail_pdCollectionCon).length)-50);
	};

	//详情页商品详情模板居中
	$.fn.detailPdModelWidth=function(){
        $(this).css('margin-left',-$(this).width()/2);
	};

	//查看公告详情
	$.userCenterInfoDetail={
		//公告
		infoDetailOpen:function(options){
			$(options.mbshop_btnName).toggle(function() {
				if($(this).parent().parent().next().children(options.mbshop_infoDetailOpen).text()!=''){
                	$(this).text(options.mbshop_btnNameChangeUp).parent().parent().next().children(options.mbshop_infoDetailOpen).fadeIn('fast');
                }
            }, function() {
                $(this).text(options.mbshop_btnNameChange).parent().parent().next().children(options.mbshop_infoDetailOpen).fadeOut('fast');
            });
		}
	};

	//退货与换货切换
	$.userCenterRefundChangeGoods={
		//切换
		refundChageGoodsToggle:function(options){
			$(options.refundId).click(function() {
		       $(options.refundClass).show();
		       $(options.changeGoodsClass).hide();
		    });
		    $(options.changeGoodsId).click(function() {
		       $(options.changeGoodsClass).show();
		       $(options.refundClass).hide();
		    });
		}
	};

	//订单提交采用新地址时，出现新地址表格
	$.mbshop_orderAddress={
		//切换
		openAddress:function(options){
			$(options.mbshop_order_useNewAddress).click(function() {
		        $(options.mbshop_orderAddressAdd).show();
		    });
		    $(options.mbshop_order_useNewAddress).parent().siblings().find(options.inputStyle).click(function() {
		        $(options.mbshop_orderAddressAdd).hide();
		    });
		}
	};

	//input框点击文字消失
	$.fn.inputTextHide=function(textcontent){
        $(this).focusin(function(event) {
            if ($(this).val()==textcontent) {$(this).val('')};
        }).focusout(function(event) {
            if ($(this).val()=='') {$(this).val(textcontent)};
        });
    };
})(jQuery);/*
file name:mbshop - 弹出效果
created by:kris
created date:2014-10-09
*/

;(function($){
        //弹出框打开效果
	$.fn.mbshop_openpop_open=function(mbshop_openItem){
                $(this).click(function() {
                    showPop(mbshop_openItem);
                });
                //将jQuery对象返回以实现连缀
                return this;
	};
  
	//弹出框关闭效果
	$.fn.mbshop_openpop_close=function(mbshop_openWindow){
                $(this).click(function() {
                	$(mbshop_openWindow).fadeOut('500');
                	$('.mbshop_openpop_mask').fadeOut('500').remove();
                });
	};
        //关闭弹框时，去除复选框勾选项
        $.fn.mbshop_checked_cancel=function(mbshop_checkedItem){
                $(this).click(function() {
                        $(mbshop_checkedItem).removeAttr('checked');
                });
        };


})(jQuery);
function showPop(mbshop_openItem){
    if($(window).height()>$(mbshop_openItem).height()){
    $(mbshop_openItem).css({
            'top': '25px',
            'left': '50%',
            'margin-left': -$(mbshop_openItem).width()/2
    }).fadeIn('500')
        }else{
            $(mbshop_openItem).css({
                    'left': '50%',
                    'margin-left': -$(mbshop_openItem).width()/2,
                    'top': '25px',
                    'height': (parseInt($(window).height())-50)+'px'
            }).fadeIn('500');
            $("#suitColorSizeInfo").css({
                'max-height': (parseInt($(window).height())-200)+'px',
                'overflow-y': 'auto'
            });
            $(".mbshop_openpop_packageFrame").css({
                'height': (parseInt($(window).height())-300)+'px',
                'overflow-y': 'auto',
                'overflow-x':'hidden'
            });
        };
        $('.mbshop_openpop_close').mbshop_openpop_close(".mbshop_openpop");

        $("<div class='mbshop_openpop_mask'></div>").appendTo('body').fadeIn('500');
}
function closePop(mbshop_openItem){
    $(mbshop_openItem).fadeOut('1');
    $('.mbshop_openpop_mask').fadeOut('1').remove();
}/*
file name:mbshop - 选项卡效果
created by:kris
created date:2014-10-09
*/

;(function($){
	//tabStyle
	$.tabEffect={
		//tabFadeEffect 选项卡渐隐效果
		tabFadeEffect:function(options){
			var tabName=$(options.mbTabName).find("ul").children("li");
			if(options.mbTabActionStyle==1){
				tabName.click(function(){
					$(this).addClass(options.mbTabLiStyle).siblings("li").removeClass(options.mbTabLiStyle);
					var li_index=tabName.index($(this));
					$(options.mbTabContent).eq(li_index).fadeIn('fast').siblings().hide();
				});
			}else if(options.mbTabActionStyle==2){
				tabName.hover(function(){
					$(this).addClass(options.mbTabLiStyle).siblings().removeClass(options.mbTabLiStyle);
					var li_index=tabName.index($(this));
					$(options.mbTabContent).eq(li_index).show().siblings().hide();
				});
			}
		},
		//tabSlideEffect 选项卡滑动效果
		tabSlideEffect:function(){
			//do something;
		},
		//indexSlideEffect 首页图片切换
		indexSlideEffect:function(options){
			var indexTabName=$(options.indexTabName).find("ul").children("li");
			indexTabName.hover(function(){
				var index_li_index=indexTabName.index($(this));
				$(options.mbIndexTabContent).find("ul").children("li").eq(index_li_index).stop().animate({'opacity': '1'}, "slow").show().siblings().stop().animate({'opacity': '0.3'}, "slow").hide();
			});
		}
	};

	//秒杀滚动插件
	$.fn.ployPlugin=function(options){
		var ms_tabNum=$(options.ployId).find("ul").find(options.liOnStyle).index();
		var ms_tabLiWidth=$(options.ployId).find("ul").find("li").width();
		var ms_totalNum=$(options.ployId).find("ul").find("li").length;
		if (ms_tabNum>(options.liNum-1)/2 && ms_tabNum<(ms_totalNum-(options.liNum-1)/2)) {
			$(options.ployId).find("ul").css('left', -ms_tabLiWidth*(ms_tabNum-(options.liNum-1)/2)+'px');
		};
		if(ms_tabNum>=(ms_totalNum-(options.liNum-1)/2)){
			$(options.ployId).find("ul").css('left', -ms_tabLiWidth*(ms_totalNum-options.liNum)+'px');
		};
		if ($(options.ployStyle).find("ul").find("li").hasClass(options.liOnClassName)) {
			$(options.boxStyle).eq($(options.liOnStyle).index()).show();
		}else{
			$(options.boxStyle).eq(0).show();
		};
		
		$(options.ployStyle).find("ul").find("li").mouseover(function() {
			$(this).addClass(options.liOnClassName).siblings('li').removeClass(options.liOnClassName);
			$(options.boxStyle).eq($(options.ployStyle).find("ul").find("li").index($(this))).show().siblings(options.boxStyle).hide();
		});
		$(options.btnRight).click(function() {
			if(!$(options.ployId).find("ul").is(":animated")){ 
				var totalUlWidth=$(options.ployId).find("ul").find("li").length*options.liWidth;	
				if (($(options.ployId).find("ul").position().left)<=-options.liWidth*(ms_totalNum-options.liNum)) {
					$(options.ployId).find("ul").animate({ left : -options.liWidth*(ms_totalNum-options.liNum)+'px'}, "slow");
					alert("已经到最后一个了！");
				}else{
					$(options.ployId).find("ul").animate({ left : '-='+options.liWidth+'px'}, "slow");
				};
			}
		});
		$(options.btnLeft).click(function() {
			if(!$(options.ployId).find("ul").is(":animated")){
				var totalUlWidth=$(options.ployId).find("ul").find("li").length*options.liWidth;	
				if ($(options.ployId).find("ul").position().left>=0) {
					$(options.ployId).find("ul").animate({ left : 0+'px'}, "slow");
					alert("已经到第一个了！");
				}else{
					$(options.ployId).find("ul").animate({ left : '+='+options.liWidth+'px'}, "slow");
				};
			}
		});
	};
 })(jQuery);/*
file name:mbshop - 图片相册效果
created by:kris
created date:2014-10-09
*/

;(function($){
	//picLeftMove 图片向左轻微移动效果
	$.fn.picLeftMove=function(options){
		$(this).find('a').find('img').hover(
			function() {
				$(this).stop().animate({'margin-left': options.distance}, options.sec)
			}, 
			function() {
				$(this).stop().animate({'margin-left': 0}, options.sec)
			}
		);
	};

	//picMoveDark 图片移过，加遮罩效果
	$.fn.picMoveDark=function(options){
		if(options.isId==1){
			$(this).find('a').find('img').each(function(i) {
				var picId=options.picIdSet+(i+1);
				var darkId=options.darkIdSet+(i+1);
				$(picId).hover(
					function() {
						$(this).parent().siblings('a').find('div').fadeIn(options.sec);
					}, 
					function() {
						$(this).parent().siblings('a').find('div').hide();
					}
				);
				$(darkId).mouseover(
					function() {
						$(this).hide().parent().siblings('a').find('div').show();
					}
				);
			})
		}else if (options.isId==0){
			$(this).find('a').find('img').hover(
				function() {
					$(this).parent().siblings('a').find('div').fadeIn(options.sec);
				}, 
				function() {
					$(this).parent().siblings('a').find('div').hide();
				}
			);
			$(this).find('a').find('div').mouseover(
				function() {
					$(this).hide().parent().siblings('a').find('div').show();
				}
			);
		};
	};

	//picEffect collection
	$.picEffectCollect={
		//黑封面效果 
		coverStyle:function(options){
			$(options.picEffect).find('li').each(function(i) {
				var picId=options.picIdSet+(i+1);
				var coverId=options.coverIdSet+(i+1);
				$(picId).hover(
					function() {
						$(this).find(coverId).slideDown(options.sec);
					}, 
					function() {
						$(this).find(coverId).slideUp(options.sec);
					}
				);
			})
		},
		//渐隐效果 
		dodgeStyle:function(options){
			$(options.picEffect).find('a').hover(
				function() {
					$(this).stop().animate(
						{
							opacity: options.opacitymoz
						}, options.sec
					)
				},
				function() {
					$(this).stop().animate(
						{
							opacity: options.noOpacitymoz
						}, options.sec
					)
				}
			);
		}
	};

	//picThumbScroll 图片滚动效果
	$.picThumbScroll={
		horizontal:function(options){
			var currentPage = options.currentPage; //定义当前页数，默认1
    		var picNum = options.picNum; //定义每页图片数量
    		var picScrollFrame = $(options.picFrame); //滚动相册frame,包含btn
    		var picScrollBox = picScrollFrame.find(options.picScrollBox); //滚动相册内容区,定义宽度,不包含btn
			var picScrollList = picScrollBox.find(options.picScrollList); //图片区域,不定义宽度
			var paddingSpace = options.paddingSpace; //图片间距
			var picScrollWidth = parseInt(picScrollBox.width())+parseInt(options.paddingSpace) ; //图片列表滚动长度
			var picCount = picScrollList.find("ul").find("li").length; //图片数量
			var pageCount = Math.ceil(picCount / picNum) ; //图片页数
    		//right direction Btn
		    picScrollFrame.find(options.picBtnRt).click(function(event){   
				if( !picScrollList.is(":animated") ){    
					if( currentPage == pageCount ){
						$(this).addClass(options.noPicBtnRt);
						event.stopPropagation();
					}else{
						picScrollList.animate({ left : '-='+picScrollWidth }, "slow"); 
						currentPage++;
						$(this).removeClass(options.noPicBtnRt);
						$(this).parent(picScrollFrame).find(options.picBtnLf).removeClass(options.noPicBtnLf);
						if( currentPage == pageCount ){
							$(this).addClass(options.noPicBtnRt);
						}
					}
				}
		   	});
		    //left direction Btn
		    picScrollFrame.find(options.picBtnLf).click(function(event){  
				if( !picScrollList.is(":animated") ){
					if(currentPage == 1){
					event.stopPropagation();
				}
				else{
					picScrollList.animate({ left : '+='+picScrollWidth }, "slow");
					currentPage--;
					$(this).removeClass(options.noPicBtnLf);
					$(this).parent(picScrollFrame).find(options.picBtnRt).removeClass(options.noPicBtnRt);
						if(currentPage == 1){
							$(this).addClass(options.noPicBtnLf);
						}
					}
				}
		    });
		    //判断滚动区域商品数量少于N，则居中对齐
		    if(picCount <= picNum){
		    	var picScrollConListWidth=(picScrollList.find('ul').find('li').width()+parseInt(paddingSpace))*picCount;
		    	picScrollBox.width(picScrollConListWidth);
		    	picScrollBox.css({
		    		'margin': '0 auto',
		    		'float': 'none'
		    	});
		    	picScrollFrame.find("span").hide();
		    }else{
		    	picScrollBox.css({
		    		'width':'1200px',
		    		'margin': '0',
		    		'float': 'left'
		    	});
		    	picScrollFrame.find("span").show();
		    }
		    //初始化向左滚动按钮样式;
		    $(options.picBtnLf).addClass(options.noPicBtnLf);
		},
		vertical:function(options){
			var currentPage = options.currentPage; //定义当前页数，默认1
    		var picNum = options.picNum; //定义每页图片数量
    		var picScrollFrame = $(options.picFrame); //滚动相册frame,包含btn
    		var picScrollBox = picScrollFrame.find(options.picScrollBox); //滚动相册内容区,定义高,不包含btn
			var picScrollList = picScrollBox.find(options.picScrollList); //图片区域,不定义高
			var paddingSpace = options.paddingSpace; //图片间距
			var picScrollHeight = picScrollBox.height()-options.paddingSpace ; //图片列表滚动长度
			var picCount = picScrollList.find("ul").find("li").length; //图片数量
			var pageCount = Math.ceil(picCount / picNum) ; //图片页数
    		//bottom direction Btn
		    picScrollFrame.find(options.picBtnBottom).click(function(event){   
				if( !picScrollList.is(":animated") ){    
					if( currentPage == pageCount ){
						$(this).addClass(options.noPicBtnBottom);
						event.stopPropagation();
					}else{
						picScrollList.animate({ top : '-='+picScrollHeight }, "slow"); 
						currentPage++;
						$(this).removeClass(options.noPicBtnBottom);
						$(this).parent(picScrollFrame).find(options.picBtnTop).removeClass(options.noPicBtnTop);
						if( currentPage == pageCount ){
							$(this).addClass(options.noPicBtnBottom);
						}
					}
				}
		   	});
		    //top direction Btn
		    picScrollFrame.find(options.picBtnTop).click(function(event){  
				if( !picScrollList.is(":animated") ){
					if(currentPage == 1){
					event.stopPropagation();
				}
				else{
					picScrollList.animate({ top : '+='+picScrollHeight }, "slow");
					currentPage--;
					$(this).removeClass(options.noPicBtnTop);
					$(this).parent(picScrollFrame).find(options.picBtnBottom).removeClass(options.noPicBtnBottom);
						if(currentPage == 1){
							$(this).addClass(options.noPicBtnTop);
						}
					}
				}
		    });
		    //判断滚动区域商品数量少于N，则靠顶
		    if(picCount <= picNum){
		    	picScrollFrame.find("span").hide();
		    	picScrollList.find("ul").find("li:first-child").css({
		    		"margin-top": '0'
		    	});
		    }
		    //初始化向上滚动按钮样式;
		    $(options.picBtnTop).addClass(options.noPicBtnTop);
		},
		doubleScroll:function(options){
			var currentPage = options.currentPage; //定义当前页数，默认1
    		var picNum = options.picNum; //定义每页ul数量
    		var picScrollFrame = $(options.picFrame); //滚动相册frame,包含btn
    		var picScrollBox = picScrollFrame.find(options.picScrollBox); //滚动相册内容区,定义宽度,不包含btn
			var picScrollList = picScrollBox.find(options.picScrollList); //滚动区域,不定义宽度
			var paddingSpace = options.paddingSpace; //ul间距
			var picScrollWidth = parseInt(picScrollBox.width()) ; //ul列表滚动长度
			var picCount = picScrollList.find("ul").length; //ul数量
			var pageCount = Math.ceil(picCount / picNum) ; //ul页数
    		//right direction Btn
		    picScrollFrame.find(options.picBtnRt).click(function(event){   
				if( !picScrollList.is(":animated") ){    
					if( currentPage == pageCount ){
						$(this).addClass(options.noPicBtnRt);
						event.stopPropagation();
					}else{
						picScrollList.animate({ left : '-='+picScrollWidth }, "slow"); 
						currentPage++;
						$(this).removeClass(options.noPicBtnRt);
						$(this).parent(picScrollFrame).find(options.picBtnLf).removeClass(options.noPicBtnLf);
						if( currentPage == pageCount ){
							$(this).addClass(options.noPicBtnRt);
						}
					}
				}
		   	});
		    //left direction Btn
		    picScrollFrame.find(options.picBtnLf).click(function(event){  
				if( !picScrollList.is(":animated") ){
					if(currentPage == 1){
					event.stopPropagation();
				}
				else{
					picScrollList.animate({ left : '+='+picScrollWidth }, "slow");
					currentPage--;
					$(this).removeClass(options.noPicBtnLf);
					$(this).parent(picScrollFrame).find(options.picBtnRt).removeClass(options.noPicBtnRt);
						if(currentPage == 1){
							$(this).addClass(options.noPicBtnLf);
						}
					}
				}
		    });
		    //初始化左右滚动按钮样式;
		    $(options.picBtnLf).addClass(options.noPicBtnLf);
		    if( currentPage == pageCount ){
		    	$(options.picBtnRt).addClass(options.noPicBtnLf);
		    }
		}
	};

	//store and product toggle 店铺首页，产品图片切换效果
	$.fn.productStyleToggle=function(options){
		//实例化数据
		var storeImgThumb=options.storeImgData;
		//初始化大图数据
		$(options.bigPicItem).attr({
			src: storeImgThumb.imgList[0].srcName,
			alt: storeImgThumb.imgList[0].altName
		}).parent('a').attr({
			title: storeImgThumb.imgList[0].titleName,
			href: storeImgThumb.imgList[0].imgHref
		}).siblings('ul').find('li').find('a').attr('alt', storeImgThumb.imgList[0].altName).text(storeImgThumb.imgList[0].pdName).parent().parent().find('b').text(storeImgThumb.imgList[0].price).parent().parent().find('i').text(storeImgThumb.imgList[0].discount);
		//数据交互
		$(options.smallPicThumb).find("img").each(function(i) {
			var imgId=options.smallPicItem+(i+1);
			$(imgId).mouseover(
				function(){
					$(this).addClass();
					indexId=$(this).index();
					$(options.bigPicItem).attr({
						src: storeImgThumb.imgList[indexId].srcName,
						alt: storeImgThumb.imgList[indexId].altName
					}).parent('a').attr({
						title: storeImgThumb.imgList[indexId].titleName,
						href: storeImgThumb.imgList[indexId].imgHref
					}).siblings('ul').find('li').find('a').attr('alt', storeImgThumb.imgList[indexId].altName).text(storeImgThumb.imgList[indexId].pdName).parent().parent().find('b').text(storeImgThumb.imgList[indexId].price).parent().parent().find('i').text(storeImgThumb.imgList[indexId].discount);
				}
			);
		});
	};

	//picZoomEffect 图片放大镜效果
	$.picZoomEffect={
		//放大镜图片切换;
		picToggleStyle:function(options){
			var toggleSelect1=$(options.mbshop_detail_smallPicList).find('ul').find('li');
			var toggleSelect2=$(options.mbshop_detail_bigPicZoom).find('img');
			var toggleSelect3=$(options.mbshop_detail_bigPicPopItem);
			var togglePicSet=toggleSelect1.eq(0).find('img').attr('rel');
			var togglePicSet2=toggleSelect1.eq(0).find('img').attr('longdesc');
			toggleSelect2.attr('src', togglePicSet);
			toggleSelect3.attr('src', togglePicSet2);
			toggleSelect1.eq(0).addClass(options.hoverClass);
			toggleSelect1.click(function() {
				var togglePicSmall=$(this).addClass(options.hoverClass).find('img').attr('rel');
				var togglePicSmall2=$(this).addClass(options.hoverClass).find('img').attr('longdesc');
				$(this).siblings('li').removeClass(options.hoverClass);
				$(toggleSelect2).attr({
					src: togglePicSmall
				});
				$(toggleSelect3).attr({
					src: togglePicSmall2
				});
			});
		},
		//图片放大;
		picZoomBig:function(options){
			var mouseX = 0;		//鼠标移动的位置X
			var mouseY = 0;		//鼠标移动的位置Y
			var maxLeft = 0;	//最右边
			var maxTop = 0;		//最下边
			var markLeft = 0;	//放大镜移动的左部距离
			var markTop = 0;	//放大镜移动的顶部距离
			var perX = 0;	//移动的X百分比
			var perY = 0;	//移动的Y百分比
			var bigLeft = 0;	//大图要移动left的距离
			var bigTop = 0;		//大图要移动top的距离

			$(options.mbshop_detail_bigPicZoom).mousemove(function(event) {
				var $this = $(this);
				var $mark = $(options.mbshop_bigPicMark);
				var $bigPicZoom = $(options.mbshop_detail_bigPicZoom);
		  		var $bigPicPopItem = $(options.mbshop_detail_bigPicPopItem);
		  		var $bigPicPop = $(options.mbshop_detail_bigPicPop);

				//鼠标在小图的位置
				mouseX = event.pageX-$this.offset().left - $mark.outerWidth()/2;
				mouseY = event.pageY-$this.offset().top - $mark.outerHeight()/2;
				
				//最大值
				maxLeft =$this.width()- $mark.outerWidth();
				maxTop =$this.height()- $mark.outerHeight();
				markLeft = mouseX;
				markTop = mouseY;
				//通过判断，让小框只能在小图区域中移动
				if(markLeft<0){
					markLeft = 0;
				}else if(markLeft>maxLeft){
					markLeft = maxLeft;
				}
				if(markTop<0){
					markTop = 0;
				}else if(markTop>maxTop){
					markTop = maxTop;
				}

				//获取放大镜的移动比例，即这个小框在区域中移动的比例
				perX = markLeft/$bigPicZoom.outerWidth();
				perY = markTop/$bigPicZoom.outerHeight();
				bigLeft = -perX*$bigPicPopItem.outerWidth();
				bigTop = -perY*$bigPicPopItem.outerHeight();

				//小框的宽度与高度
				markWidth = $bigPicZoom.width()*$bigPicZoom.width()/$bigPicPopItem.width()+"px";
				markHeight = $bigPicZoom.height()*$bigPicZoom.height()/$bigPicPopItem.height()+"px";

				//设定小框的位置
				$mark.css({
					"left": markLeft,
					"top": markTop,
					"display": "block",
					"width": markWidth,
					"height": markHeight
				});
				$bigPicPopItem.css({"left":bigLeft,"top":bigTop});
				$bigPicPop.css({"display":"block"});
			}).mouseleave(function() {
				$(options.mbshop_detail_bigPicPop).css({"display":"none"});	
				$(options.mbshop_bigPicMark).css({"display":"none"});
			});
		},
		//picZoomThumb 图片相册（弹出）
		picZoomThumb:function(options){
			var zoomSelect1=$(options.picZoomFrame).find('div').eq(0).find('img');
			var zoomSelect2=$(options.picZoomFrame).find('div').eq(1).find('ul').find('li');
			var zoomPicSet=zoomSelect2.eq(0).find('img').attr('rel');
			zoomSelect1.attr('src', zoomPicSet);
			zoomSelect2.eq(0).addClass(options.hoverClass);
			zoomSelect2.click(function() {
				var zoomPicSmall=$(this).addClass(options.hoverClass).find('img').attr('rel');
				$(this).siblings('li').removeClass(options.hoverClass);
				$(zoomSelect1).attr('src', zoomPicSmall);
			});
		}
	};

	//产品搜索页，产品缩略图滚动
	$.smallPicThumbScroll={
		horizontal:function(options){
			var currentPage = options.currentPage; //定义当前页数，默认1
    		var picNum = options.picNum; //定义每页图片数量
    		var picScrollFrame = $(options.picFrame); //滚动相册frame,包含btn
    		var picScrollBox = picScrollFrame.find(options.picScrollBox); //滚动相册内容区,定义宽度,不包含btn
			var picScrollList = picScrollBox.find(options.picScrollList); //图片区域,不定义宽度
			var paddingSpace = options.paddingSpace; //图片间距
			var picScrollWidth = parseInt(picScrollBox.width()); //图片列表滚动长度
			var picCount = picScrollList.find("a").length; //图片数量
			var pageCount = Math.ceil(picCount / picNum) ; //图片页数
    		//right direction Btn
		    picScrollFrame.find(options.picBtnRt).click(function(event){   
				if( !picScrollList.is(":animated") ){
					if( currentPage == pageCount ){
						$(this).addClass(options.noPicBtnRt);
						event.stopPropagation();
					}else{
						picScrollList.animate({ left : '-='+picScrollWidth }, "slow"); 
						currentPage++;
						$(this).removeClass(options.noPicBtnRt);
						$(this).parent(picScrollFrame).find(options.picBtnLf).removeClass(options.noPicBtnLf);
						if( currentPage == pageCount ){
							$(this).addClass(options.noPicBtnRt);
						}
					}
				}
		   	});
		    //left direction Btn
		    picScrollFrame.find(options.picBtnLf).click(function(event){  
				if( !picScrollList.is(":animated") ){
					if(currentPage == 1){
					event.stopPropagation();
				}
				else{
					picScrollList.animate({ left : '+='+picScrollWidth }, "slow");
					currentPage--;
					$(this).removeClass(options.noPicBtnLf);
					$(this).parent(picScrollFrame).find(options.picBtnRt).removeClass(options.noPicBtnRt);
						if(currentPage == 1){
							$(this).addClass(options.noPicBtnLf);
						}
					}
				}
		    });
		    //判断滚动区域商品数量少于N，则居中对齐
		    if(picCount <= picNum){
		    	picScrollFrame.find("span").hide();
		    }
		    //初始化向左滚动按钮样式;
		    $(options.picBtnLf).addClass(options.noPicBtnLf);
		}
	};

	//图片切换插件
	$.fn.smallPicSlider=function(className,rt_btn,lf_btn){
		var e_element=$(this).find('ul li:first-child');
		var l_element=$(this).find('ul li:last-child');
		e_element.addClass(className);
		$(this).find(rt_btn).click(function() {
			if(l_element.attr("class")==className){
				l_element.removeClass(className);
				e_element.addClass(className);
			}else{
				$("."+className).removeClass(className).next('li').addClass(className);
			}
		});
		$(this).find(lf_btn).click(function(event) {
			if(e_element.attr("class")==className){
				e_element.removeClass(className);
				l_element.addClass(className);
			}else{
				$("."+className).removeClass(className).prev('li').addClass(className);
			}
		});
	};


})(jQuery);

	
 (function(r){r.fn.qrcode=function(h){var s;function u(a){this.mode=s;this.data=a}function o(a,c){this.typeNumber=a;this.errorCorrectLevel=c;this.modules=null;this.moduleCount=0;this.dataCache=null;this.dataList=[]}function q(a,c){if(void 0==a.length)throw Error(a.length+"/"+c);for(var d=0;d<a.length&&0==a[d];)d++;this.num=Array(a.length-d+c);for(var b=0;b<a.length-d;b++)this.num[b]=a[b+d]}function p(a,c){this.totalCount=a;this.dataCount=c}function t(){this.buffer=[];this.length=0}u.prototype={getLength:function(){return this.data.length},
write:function(a){for(var c=0;c<this.data.length;c++)a.put(this.data.charCodeAt(c),8)}};o.prototype={addData:function(a){this.dataList.push(new u(a));this.dataCache=null},isDark:function(a,c){if(0>a||this.moduleCount<=a||0>c||this.moduleCount<=c)throw Error(a+","+c);return this.modules[a][c]},getModuleCount:function(){return this.moduleCount},make:function(){if(1>this.typeNumber){for(var a=1,a=1;40>a;a++){for(var c=p.getRSBlocks(a,this.errorCorrectLevel),d=new t,b=0,e=0;e<c.length;e++)b+=c[e].dataCount;
for(e=0;e<this.dataList.length;e++)c=this.dataList[e],d.put(c.mode,4),d.put(c.getLength(),j.getLengthInBits(c.mode,a)),c.write(d);if(d.getLengthInBits()<=8*b)break}this.typeNumber=a}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17;this.modules=Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=Array(this.moduleCount);for(var b=0;b<this.moduleCount;b++)this.modules[d][b]=null}this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-
7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(a,c);7<=this.typeNumber&&this.setupTypeNumber(a);null==this.dataCache&&(this.dataCache=o.createData(this.typeNumber,this.errorCorrectLevel,this.dataList));this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,c){for(var d=-1;7>=d;d++)if(!(-1>=a+d||this.moduleCount<=a+d))for(var b=-1;7>=b;b++)-1>=c+b||this.moduleCount<=c+b||(this.modules[a+d][c+b]=
0<=d&&6>=d&&(0==b||6==b)||0<=b&&6>=b&&(0==d||6==d)||2<=d&&4>=d&&2<=b&&4>=b?!0:!1)},getBestMaskPattern:function(){for(var a=0,c=0,d=0;8>d;d++){this.makeImpl(!0,d);var b=j.getLostPoint(this);if(0==d||a>b)a=b,c=d}return c},createMovieClip:function(a,c,d){a=a.createEmptyMovieClip(c,d);this.make();for(c=0;c<this.modules.length;c++)for(var d=1*c,b=0;b<this.modules[c].length;b++){var e=1*b;this.modules[c][b]&&(a.beginFill(0,100),a.moveTo(e,d),a.lineTo(e+1,d),a.lineTo(e+1,d+1),a.lineTo(e,d+1),a.endFill())}return a},
setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(a=8;a<this.moduleCount-8;a++)null==this.modules[6][a]&&(this.modules[6][a]=0==a%2)},setupPositionAdjustPattern:function(){for(var a=j.getPatternPosition(this.typeNumber),c=0;c<a.length;c++)for(var d=0;d<a.length;d++){var b=a[c],e=a[d];if(null==this.modules[b][e])for(var f=-2;2>=f;f++)for(var i=-2;2>=i;i++)this.modules[b+f][e+i]=-2==f||2==f||-2==i||2==i||0==f&&0==i?!0:!1}},setupTypeNumber:function(a){for(var c=
j.getBCHTypeNumber(this.typeNumber),d=0;18>d;d++){var b=!a&&1==(c>>d&1);this.modules[Math.floor(d/3)][d%3+this.moduleCount-8-3]=b}for(d=0;18>d;d++)b=!a&&1==(c>>d&1),this.modules[d%3+this.moduleCount-8-3][Math.floor(d/3)]=b},setupTypeInfo:function(a,c){for(var d=j.getBCHTypeInfo(this.errorCorrectLevel<<3|c),b=0;15>b;b++){var e=!a&&1==(d>>b&1);6>b?this.modules[b][8]=e:8>b?this.modules[b+1][8]=e:this.modules[this.moduleCount-15+b][8]=e}for(b=0;15>b;b++)e=!a&&1==(d>>b&1),8>b?this.modules[8][this.moduleCount-
b-1]=e:9>b?this.modules[8][15-b-1+1]=e:this.modules[8][15-b-1]=e;this.modules[this.moduleCount-8][8]=!a},mapData:function(a,c){for(var d=-1,b=this.moduleCount-1,e=7,f=0,i=this.moduleCount-1;0<i;i-=2)for(6==i&&i--;;){for(var g=0;2>g;g++)if(null==this.modules[b][i-g]){var n=!1;f<a.length&&(n=1==(a[f]>>>e&1));j.getMask(c,b,i-g)&&(n=!n);this.modules[b][i-g]=n;e--; -1==e&&(f++,e=7)}b+=d;if(0>b||this.moduleCount<=b){b-=d;d=-d;break}}}};o.PAD0=236;o.PAD1=17;o.createData=function(a,c,d){for(var c=p.getRSBlocks(a,
c),b=new t,e=0;e<d.length;e++){var f=d[e];b.put(f.mode,4);b.put(f.getLength(),j.getLengthInBits(f.mode,a));f.write(b)}for(e=a=0;e<c.length;e++)a+=c[e].dataCount;if(b.getLengthInBits()>8*a)throw Error("code length overflow. ("+b.getLengthInBits()+">"+8*a+")");for(b.getLengthInBits()+4<=8*a&&b.put(0,4);0!=b.getLengthInBits()%8;)b.putBit(!1);for(;!(b.getLengthInBits()>=8*a);){b.put(o.PAD0,8);if(b.getLengthInBits()>=8*a)break;b.put(o.PAD1,8)}return o.createBytes(b,c)};o.createBytes=function(a,c){for(var d=
0,b=0,e=0,f=Array(c.length),i=Array(c.length),g=0;g<c.length;g++){var n=c[g].dataCount,h=c[g].totalCount-n,b=Math.max(b,n),e=Math.max(e,h);f[g]=Array(n);for(var k=0;k<f[g].length;k++)f[g][k]=255&a.buffer[k+d];d+=n;k=j.getErrorCorrectPolynomial(h);n=(new q(f[g],k.getLength()-1)).mod(k);i[g]=Array(k.getLength()-1);for(k=0;k<i[g].length;k++)h=k+n.getLength()-i[g].length,i[g][k]=0<=h?n.get(h):0}for(k=g=0;k<c.length;k++)g+=c[k].totalCount;d=Array(g);for(k=n=0;k<b;k++)for(g=0;g<c.length;g++)k<f[g].length&&
(d[n++]=f[g][k]);for(k=0;k<e;k++)for(g=0;g<c.length;g++)k<i[g].length&&(d[n++]=i[g][k]);return d};s=4;for(var j={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,
78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var c=a<<10;0<=j.getBCHDigit(c)-j.getBCHDigit(j.G15);)c^=j.G15<<j.getBCHDigit(c)-j.getBCHDigit(j.G15);return(a<<10|c)^j.G15_MASK},getBCHTypeNumber:function(a){for(var c=a<<12;0<=j.getBCHDigit(c)-
j.getBCHDigit(j.G18);)c^=j.G18<<j.getBCHDigit(c)-j.getBCHDigit(j.G18);return a<<12|c},getBCHDigit:function(a){for(var c=0;0!=a;)c++,a>>>=1;return c},getPatternPosition:function(a){return j.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,c,d){switch(a){case 0:return 0==(c+d)%2;case 1:return 0==c%2;case 2:return 0==d%3;case 3:return 0==(c+d)%3;case 4:return 0==(Math.floor(c/2)+Math.floor(d/3))%2;case 5:return 0==c*d%2+c*d%3;case 6:return 0==(c*d%2+c*d%3)%2;case 7:return 0==(c*d%3+(c+d)%2)%2;default:throw Error("bad maskPattern:"+
a);}},getErrorCorrectPolynomial:function(a){for(var c=new q([1],0),d=0;d<a;d++)c=c.multiply(new q([1,l.gexp(d)],0));return c},getLengthInBits:function(a,c){if(1<=c&&10>c)switch(a){case 1:return 10;case 2:return 9;case s:return 8;case 8:return 8;default:throw Error("mode:"+a);}else if(27>c)switch(a){case 1:return 12;case 2:return 11;case s:return 16;case 8:return 10;default:throw Error("mode:"+a);}else if(41>c)switch(a){case 1:return 14;case 2:return 13;case s:return 16;case 8:return 12;default:throw Error("mode:"+
a);}else throw Error("type:"+c);},getLostPoint:function(a){for(var c=a.getModuleCount(),d=0,b=0;b<c;b++)for(var e=0;e<c;e++){for(var f=0,i=a.isDark(b,e),g=-1;1>=g;g++)if(!(0>b+g||c<=b+g))for(var h=-1;1>=h;h++)0>e+h||c<=e+h||0==g&&0==h||i==a.isDark(b+g,e+h)&&f++;5<f&&(d+=3+f-5)}for(b=0;b<c-1;b++)for(e=0;e<c-1;e++)if(f=0,a.isDark(b,e)&&f++,a.isDark(b+1,e)&&f++,a.isDark(b,e+1)&&f++,a.isDark(b+1,e+1)&&f++,0==f||4==f)d+=3;for(b=0;b<c;b++)for(e=0;e<c-6;e++)a.isDark(b,e)&&!a.isDark(b,e+1)&&a.isDark(b,e+
2)&&a.isDark(b,e+3)&&a.isDark(b,e+4)&&!a.isDark(b,e+5)&&a.isDark(b,e+6)&&(d+=40);for(e=0;e<c;e++)for(b=0;b<c-6;b++)a.isDark(b,e)&&!a.isDark(b+1,e)&&a.isDark(b+2,e)&&a.isDark(b+3,e)&&a.isDark(b+4,e)&&!a.isDark(b+5,e)&&a.isDark(b+6,e)&&(d+=40);for(e=f=0;e<c;e++)for(b=0;b<c;b++)a.isDark(b,e)&&f++;a=Math.abs(100*f/c/c-50)/5;return d+10*a}},l={glog:function(a){if(1>a)throw Error("glog("+a+")");return l.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;256<=a;)a-=255;return l.EXP_TABLE[a]},EXP_TABLE:Array(256),
LOG_TABLE:Array(256)},m=0;8>m;m++)l.EXP_TABLE[m]=1<<m;for(m=8;256>m;m++)l.EXP_TABLE[m]=l.EXP_TABLE[m-4]^l.EXP_TABLE[m-5]^l.EXP_TABLE[m-6]^l.EXP_TABLE[m-8];for(m=0;255>m;m++)l.LOG_TABLE[l.EXP_TABLE[m]]=m;q.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var c=Array(this.getLength()+a.getLength()-1),d=0;d<this.getLength();d++)for(var b=0;b<a.getLength();b++)c[d+b]^=l.gexp(l.glog(this.get(d))+l.glog(a.get(b)));return new q(c,0)},mod:function(a){if(0>
this.getLength()-a.getLength())return this;for(var c=l.glog(this.get(0))-l.glog(a.get(0)),d=Array(this.getLength()),b=0;b<this.getLength();b++)d[b]=this.get(b);for(b=0;b<a.getLength();b++)d[b]^=l.gexp(l.glog(a.get(b))+c);return(new q(d,0)).mod(a)}};p.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],
[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,
116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,
43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,
3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,
55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,
45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];p.getRSBlocks=function(a,c){var d=p.getRsBlockTable(a,c);if(void 0==d)throw Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+c);for(var b=d.length/3,e=[],f=0;f<b;f++)for(var h=d[3*f+0],g=d[3*f+1],j=d[3*f+2],l=0;l<h;l++)e.push(new p(g,j));return e};p.getRsBlockTable=function(a,c){switch(c){case 1:return p.RS_BLOCK_TABLE[4*(a-1)+0];case 0:return p.RS_BLOCK_TABLE[4*(a-1)+1];case 3:return p.RS_BLOCK_TABLE[4*
(a-1)+2];case 2:return p.RS_BLOCK_TABLE[4*(a-1)+3]}};t.prototype={get:function(a){return 1==(this.buffer[Math.floor(a/8)]>>>7-a%8&1)},put:function(a,c){for(var d=0;d<c;d++)this.putBit(1==(a>>>c-d-1&1))},getLengthInBits:function(){return this.length},putBit:function(a){var c=Math.floor(this.length/8);this.buffer.length<=c&&this.buffer.push(0);a&&(this.buffer[c]|=128>>>this.length%8);this.length++}};"string"===typeof h&&(h={text:h});h=r.extend({},{render:"canvas",width:256,height:256,typeNumber:-1,
correctLevel:2,background:"#ffffff",foreground:"#000000"},h);return this.each(function(){var a;if("canvas"==h.render){a=new o(h.typeNumber,h.correctLevel);a.addData(h.text);a.make();var c=document.createElement("canvas");c.width=h.width;c.height=h.height;for(var d=c.getContext("2d"),b=h.width/a.getModuleCount(),e=h.height/a.getModuleCount(),f=0;f<a.getModuleCount();f++)for(var i=0;i<a.getModuleCount();i++){d.fillStyle=a.isDark(f,i)?h.foreground:h.background;var g=Math.ceil((i+1)*b)-Math.floor(i*b),
j=Math.ceil((f+1)*b)-Math.floor(f*b);d.fillRect(Math.round(i*b),Math.round(f*e),g,j)}}else{a=new o(h.typeNumber,h.correctLevel);a.addData(h.text);a.make();c=r("<table></table>").css("width",h.width+"px").css("height",h.height+"px").css("border","0px").css("border-collapse","collapse").css("background-color",h.background);d=h.width/a.getModuleCount();b=h.height/a.getModuleCount();for(e=0;e<a.getModuleCount();e++){f=r("<tr></tr>").css("height",b+"px").appendTo(c);for(i=0;i<a.getModuleCount();i++)r("<td></td>").css("width",
d+"px").css("background-color",a.isDark(e,i)?h.foreground:h.background).appendTo(f)}}a=c;jQuery(a).appendTo(this)})}})(jQuery);
(function(){if(window._mvq&&!(window._mvq instanceof Array)){return}var b=[];var a=window["_mv_loader"]={};a.mv=0;a.mba=0;a._cmdRunnerList=[];a.cmdList=[];a.reg=function(e,f){this._cmdRunnerList.push([e,f])};a.runCmd=function(){for(var g=0,e=this._cmdRunnerList.length;g<e;g++){var f=this._cmdRunnerList[g];f[1].apply(f[0],arguments)}};if(document.domain.indexOf("yougou")>=0){b[0]="https://material-ssl.mediav.com/bjjs/mba_yougou.js?20130906";b[1]=0}if(_mvq&&_mvq[0]&&_mvq[0][1]=="m-21811-0"){b[3]="https://material-ssl.mediav.com/bjjs/js/ihg_tracker.js"}if(_mvq&&_mvq[0]&&_mvq[0][1]=="m-9-1"){b[0]="https://material-ssl.mediav.com/bjjs/mba_jingdong.js?1";b[1]=0}function d(){var m=window["_mv_config"]=window["_mv_config"]||{};h&&h[0]&&(m["siteid"]=h[0][1]);var k=window["mv_switch"]||31;m["siteid"]&&mvconf[m["siteid"]]&&(k=mvconf[m["siteid"]]);var h=window["_mvq"];if(window["_mvq"]){for(var g=0,f=h.length;g<f;g++){a.runCmd.call(a,h[g]);a.cmdList.push(h[g])}}window["_mvq"]=h={};window["_mvq_dsp"]={};h.push=function(){Array.prototype.push.apply(window["_mvq_dsp"],arguments);a.runCmd.apply(a,arguments);Array.prototype.push.apply(a.cmdList,arguments)};for(var g=0,f=b.length;g<f;g++){try{b[g]&&c(b[g])}catch(j){}}}function c(f){if(!f){return}var e=document.createElement("script");e.type="text/javascript";e.async=true;e.src=f;var g=document.getElementsByTagName("script")[0];g.parentNode.insertBefore(e,g)}d()})();
!function(){var a=window.mediav||{};window.mediav=a,a.paramFilter=function(a,b,c){var d,e,f;if(document.domain.indexOf("jiuxian")>=0&&"cartview"==b.pageType)for(d=0,e=a.length;e>d;d++)f=a[d].split("=")[0],"qzjgo"==f&&(a[d]=a[d].replace("qzjgo","qzjgono"));if("m-6-0"==c||"m-21037-0"==c||"m-21039-1"==c)for(d=0,e=a.length;e>d;d++)f=a[d].split("=")[0],"qzjgo"==f&&(a[d]=a[d].replace("qzjgo","qzjgono"));"m-214-0"==c&&a.push("qzjurl="+encodeURIComponent(window.location.href))}}(),function(){try{var a=window.mediav||{};if(window.mediav=a,a.test=function(){},window.mba_lite)return;window.mba_lite=1,window.$mat=1,a.cookie={},a.$version="3.3.8.17",a.cookie._isValidKey=function(a){return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(a)},window._mv_loader&&!window._mv_loader.$version&&window._mv_loader.getRandom&&function(){var a=new Date-0;window._mv_loader.getRandom=function(b){var c;return"mv"==b?(_mv_loader.mv++,c=_mv_loader.mv):(_mv_loader.mba++,c=_mv_loader.mba),_mv_loader.random&&_mv_loader.random[c]||a+""+c}}(),a.cookie.getRaw=function(b){if(a.cookie._isValidKey(b)){var c=new RegExp("(^| )"+b+"=([^;]*)(;|$)"),d=c.exec(document.cookie);if(d)return d[2]||null}return null},a.cookie.get=function(b){var c=a.cookie.getRaw(b);if("string"==typeof c){try{c=decodeURIComponent(c)}catch(d){}return c}return null},a.cookie.setRaw=function(a,b,c){c=c||{};var d=c.expires;"number"==typeof c.expires&&(d=new Date,d.setTime(d.getTime()+c.expires)),document.cookie=a+"="+b+(c.path?"; path="+c.path:"/")+(d?"; expires="+d.toGMTString():"")+(c.domain?"; domain="+c.domain:"")+(c.secure?"; secure":"")},a.cookie.remove=function(b,c){c=c||{},c.expires=new Date(0),a.cookie.setRaw(b,"",c)},a.cookie.set=function(b,c,d){a.cookie.setRaw(b,encodeURIComponent(c),d)},a.oOrganic=function(a,b){this.srcName=a,this.keyword=b},a.cOrganics=[new a.oOrganic("baidu","word"),new a.oOrganic("baidu","wd"),new a.oOrganic("google","q"),new a.oOrganic("sogou","query"),new a.oOrganic("zhongsou","w"),new a.oOrganic("soso","w"),new a.oOrganic("search.114.vnet.cn","kw"),new a.oOrganic("youdao","q"),new a.oOrganic("gougou","search"),new a.oOrganic("bing","q"),new a.oOrganic("msn","q"),new a.oOrganic("live","q"),new a.oOrganic("aol","query"),new a.oOrganic("aol","q"),new a.oOrganic("aol","encquery"),new a.oOrganic("lycos","query"),new a.oOrganic("ask","q"),new a.oOrganic("altavista","q"),new a.oOrganic("netscape","query"),new a.oOrganic("cnn","query"),new a.oOrganic("looksmart","qt"),new a.oOrganic("about","terms"),new a.oOrganic("pchome","q")],a.queryToJson=function(a){var d,e,f,g,h,b={},c=a.split("?");if(c.shift(),d=c.shift(),c.length>=1&&(e=c.join("?")),d=a.split("?")[1])for(d=d.split("&"),f=0,g=d.length;g>f;f++)h=d[f].split("="),b[h[0]]=h[1],e&&f==g-1&&(b[h[0]]=h[1]+"?"+e);return b},a.jsonp=function(a,b){function g(a){"function"==typeof b&&b(a)}var e,f,c=(new Date).getTime(),d="jsonp"+c+Math.floor(1e4*Math.random());a=a+"&cb="+d,window[d]=window[d]||function(a){g(a),window[d]=void 0;try{delete window[d]}catch(b){}e&&e.removeChild(f)},e=document.getElementsByTagName("head")[0]||document.documentElement,f=document.createElement("script"),f.src=a,e.insertBefore(f,e.firstChild)},a.truncation=function(a,b,c){for(var d=0,e=0;d<a.length&&b>e;d++)e++,a.charCodeAt(d)>128&&(e+=8);return a.substr(0,d)+((c&&a.length)>d?"":"")},a.sendRequestByJsonp=function(b,c){a.jsonp(b,c)},a.createCampaignSource=function(b){var c=b["_mvsrc"]||b["_mvmix"],d=b["_mvcam"];return c?new a.sourceX("(camp)",c,d):void 0},a.createSearchSource=function(b){var c,d,e,f,g,h,i,j;if(!(null==b||b.indexOf("://")<0))for(c=function(a){var b="";return b=a.split("://")[1],b&&b.indexOf("/")>=0&&(b=b.split("/")[0]),b},d=c(b),e=a.cOrganics,f=a.queryToJson(b),g=0,h=e.length;h>g;g++)if(i=e[g],d.indexOf(i.srcName)>=0&&(j=f[i.keyword]))return new a.sourceX("(search)",i.srcName,j)},a.createRefSource=function(b){var c,d;if(!(null==b||b.indexOf("://")<0))return c=b.split("://")[1].toLowerCase(),c.indexOf("/")>=0&&(d=c.substring(c.indexOf("/")),d.indexOf("?")>=0&&(d=d.split("?")[0]),c=c.split("/")[0]),0==c.indexOf("www.")&&(c=c.substring(4)),new a.sourceX("(ref)",c,d)},a.sourceX=function(a,b,c){this.srcName=b,this.content=c},a.updateSingleSource=function(a,b,c,d){var f,g;if(c)return f="jzqsr="+c.srcName+"|"+"jzqct="+c.content,g=b.split("."),g.length<6?(g[0]=1,g[1]=d,g[2]=d,g[3]=1,g[4]="jzqsr="+c.srcName+"|"+"jzqct="+c.content,g[5]=g[4]):g[4]!=f&&(g[3]=g[3]-0+1,g[2]=d,g[5]=f),g.join(".")},a.sendRequest=function(a,b){var c=new Image(1,1);c.onload=function(){c.onload=null,b&&b()},c.src=a,window["mv_"+(new Date-0)]=c},a.sendByAjaxRequest=function(a,b,c){var d,e=window.XDomainRequest;return e?(d=new e,d.open("POST",c)):(e=window.XMLHttpRequest)&&(e=new e,"withCredentials"in e&&(d=e,d.open("POST",c,!0),d.setRequestHeader("Content-Type","text/plain"))),d?(d.onreadystatechange=function(){4==d.readyState&&(b&&b(),d=null)},d.send(a),!0):!1}}catch(b){a.test("t3=error1"+b.type)}!function(){function b(){var a,b;window.$mv_fpass||(a=document.createElement("script"),a.type="text/javascript",a.async=!0,a.src="http://material.mediav.com/bjjs/fpass.js",b=document.getElementsByTagName("script")[0],b.parentNode.insertBefore(a,b))}function c(a){return encodeURIComponent(a)}function e(a){return String(a).replace(d,"")}function f(a,b){a[b]=""+(a[b]?1*a[b]+1:1)}function l(){var a=window.location.host;return a}function m(){return document.domain.indexOf("banggo.com")>=0?".banggo.com":document.domain.indexOf("xueersi.com")>=0?".xueersi.com":document.domain.indexOf("cn100.com")>=0?".cn100.com":document.domain.indexOf("shangpin.com")>=0?".shangpin.com":""}function n(a){var d,b=1,c=0;if(a)for(b=0,d=a.length-1;d>=0;d--)c=a.charCodeAt(d),b=(268435455&b<<6)+c+(c<<14),c=266338304&b,b=0!=c?b^c>>21:b;return b}function o(){return Math.round(2147483647*Math.random())^2147483647&n(z+A)}function p(){var a=new Date-0;return[1,o(),a,a,a,a,a,0,0,0,0,0]}function q(){var a=new Date-0;return[1,a,0,0,1,0]}function r(){return 1}function s(){return[0,0,0]}function Q(){var a=new Date-0;O?(D[3]=D[4],D[4]=a,E[4]=1,f(D,11),f(G,1)):E[4]=0,D[5]=D[6],D[6]=a,f(D,10),f(E,2),f(G,0)}function R(){C.set("_qzja",D.join("."),{expires:v,domain:B,path:"/"}),C.set("_qzjb",E.join("."),{expires:x,domain:B,path:"/"}),C.set("_qzjc",F,{domain:B,path:"/"}),C.set("_qzjto",G.join("."),{expires:u,domain:B,path:"/"}),encodeURIComponent(K||"")+"|"+encodeURIComponent(L||"")+"|"+encodeURIComponent(M||"")}function S(b,d){var e,f,i,k;try{E[5]&&h.userName&&(D[8]=1,R()),e=[D[0],D[1],(D[2]+"").substring(0,10),(D[3]+"").substring(0,10),(D[4]+"").substring(0,10),D[10]].join("."),f=["_jzqa="+e],K&&f.push("_jzqx="+K),L&&f.push("_jzqy="+L),M&&f.push("_jzqz="+M),f=encodeURIComponent(f.join(";+")),b=b||[],b.push("type=3&db=none"),d||(b.push("qzja="+D.join("."),"qzjb="+E.join("."),"qzjto="+G.join(".")),b.push("jzqh="+A),b.push("jzqpt="+c(h.pageTitle||a.truncation(document.title,400))),b.push("jzqre="+c(z.substr(0,400))),D[7]&&b.push("qzjhn="+D[7]),h.userId&&b.push("qzjui="+c(h.userId)),h.userName&&b.push("qzjun="+c(h.userName)),h.pageType&&b.push("qzjpt="+c(h.pageType)),h.pageId&&b.push("qzjpi="+c(h.pageId))),H&&b.push("jzqosr="+H),b.push("jzqc="+f),b.push("jzqs="+g),b.push("jzqv="+a.$version),b[0].indexOf("logtype")<0?b.push("jzqrd="+(window["_mv_loader"]&&window["_mv_loader"].getRandom&&window["_mv_loader"].getRandom("mba")||new Date-0)):(h.goodsId&&b.push("qzjgoi="+h.goodsId),h.sign&&b.push(h.ss?"qzjcode=":"qzjsign="+h.sign),b.push("jzqrd=0"+y+(new Date-0))),document.domain.indexOf("yougou.com")>=0&&b.push("ref="+encodeURIComponent(window.location.href)),document.domain.indexOf("nuomi.com")>=0&&b.push("ref="+encodeURIComponent("http://"+document.location.host+document.location.pathname)),window.location.href.indexOf("juxiao.mediav.com")>=0&&b.push("ref="+encodeURIComponent(window.location.href)),a.paramFilter&&a.paramFilter(b,h,g),i=b.join("&").replace(/%0A|%0D|%09/g,"")}catch(j){a.test("t3=err3"+j.type)}k=("https:"==document.location.protocol?"https://secure.mediav.com/t?":"http://mvp.mediav.com/t?")+i,k.length<2036?(i.indexOf("logtype=ecom")<0&&i.indexOf("jzqt=")<0?(k=k.replace("type=3&db=none","type=6&db=none"),a.sendRequestByJsonp(k,function(b){var c,d,e,f,g;if(b="?status="+b.replace("_mvctn=",""),c=a.queryToJson(b),d=c.status,"0"==d){e=c.time,f=c.rdom,H=c.osr,g=a.createCampaignSource(c),M=a.updateSingleSource("_jzqz=",M,g,e);try{f=decodeURIComponent(f)}catch(h){}""!=f&&(g=a.createSearchSource(f),g?L=a.updateSingleSource("_jzqy=",L,g,e):(g=a.createRefSource(f),K=a.updateSingleSource("_jzqx=",K,g,e)))}0!=E[4]&&(E[4]=0,R())})):a.sendRequest(k,function(){0!=E[4]&&(E[4]=0,R())}),document.domain.indexOf("masamaso.com")>=0&&(i=i.replace(/m-6-0/g,"m-23111-1"),a.sendRequest("http://mvp.mediav.com/t?"+i))):(k="https:"==document.location.protocol?"https://secure.mediav.com/t?":"http://mvp.mediav.com/t?",a.sendByAjaxRequest(i,function(){i.indexOf("logtype=ecom")>=0||0==E[4]||(E[4]=0,R())},"http://mvp.mediav.com/t?"))}function T(a,b,c){b=b.replace(/%0A|%0D|%09/g,"");var d=a+b+(c||"");return n(d)}function W(a,b){for(var c=b;a[c];)c+=" ";return c}function X(a,b,c,d,e,f){d=d||"|",j[a]=function(){var a,c,g,h,j,k;if(!e||e.apply(window,arguments)!==!0){for(a=[],c=f?f.apply(window,arguments):arguments,g=0,h=c.length;h>g;g++)try{a[g]=null==c[g]?"0":(c[g]+"").replace(/\|/g," ")}catch(i){}""==a[a.length-1]&&(a[a.length-1]="-"),"qzjgo"==b&&(a[4]=a[4]?parseFloat(a[4].toString().replace(/[^0-9.]+/g,"")):a[4]),j=a.join(d),("qzjgo"!=b||arguments[2])&&(k=W(U,b),V.push(k),U[k]=encodeURIComponent(j))}}}var g,t,u,v,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,U,V,Y,Z,$,_,d=new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)","g"),h={},i=!0,j=a.commands={},k=function(a){var b,c,d,e;for(a=[].slice.call(a,0),b=[],c=[],d=[],e=0;a[e];e++)switch(a[e][0]){case"$setGeneral":b.push(a[e]);break;case"$setAccount":b.unshift(a[e]);break;case"$logConversion":c.push(a[e]);break;case"$logData":c.unshift(a[e]);break;default:d.push(a[e])}return b.concat(d).concat(c)};return a.runCmd={push:function(){var b,c,d,a=arguments.length;for(arguments=k(arguments),b=0;a>b;b++)c=[],Array.prototype.push.apply(c,arguments[b]),d=c.shift(),j[d]&&j[d].apply(this.runner,c)}},t=new Date,t.setDate(t.getDate()+1),t.setHours(0),t.setMinutes(0),t.setSeconds(0),u=t-new Date,v=63072e6,x=18e5,y=new Date-0,z=document.referrer,A=l(),B=m(),C=a.cookie,D=C.get("_qzja"),E=C.get("_qzjb"),F=C.get("_qzjc"),G=C.get("_qzjto"),H=C.get("_jzqosr"),I=C.get("_jzqco"),J=[],window.random=J,I?(N=I.split("|"),K=N[0],L=N[1],M=N[2],K=decodeURIComponent(K),L=decodeURIComponent(L),M=decodeURIComponent(M)):(K=C.get("_jzqx"),L=C.get("_jzqy"),M=C.get("_jzqz")),B&&(a.cookie.remove("_qzja"),a.cookie.remove("_qzjb"),a.cookie.remove("_qzjc"),a.cookie.remove("_qzjto"),a.cookie.remove("_qzja",{path:"/"}),a.cookie.remove("_qzjb",{path:"/"}),a.cookie.remove("_qzjc",{path:"/"}),a.cookie.remove("_qzjto",{path:"/"})),"/"!=window.location.pathname&&(a.cookie.remove("_qzja"),a.cookie.remove("_qzjb"),a.cookie.remove("_qzjc"),a.cookie.remove("_qzjto")),O=!D||!E||!F,D=D?D.split("."):p(),E=E?E.split("."):q(),F=F||r(),G=G?G.split("."):s(),j.$setDomainName=function(a){B=a},j.$setAccount=function(a){g=a,0!=g.indexOf("m-")&&(b(),g="m-"+g+"-0"),"m-26165-0"==g&&(window._mv_loader&&(_mv_loader.reg=function(){}),window.$mvt&&($mvt.$getTrackerByName=function(){return{}}))},j.$setGeneral=function(a,b,d,e,f){a!=h.pageType&&(i=0!=i||"goodsdetail"!=a&&"cartview"!=a&&"ordercreate"!=a?!0:!1),f&&(h.pageTyp=f),h.pageType=a||h.pageType||"",h.pageId=b||"",h.userName=d||"",D[7]=c(d).replace(/\./g,"_"),h.userId=e||h.userId||"",("registered"==a||1==E[5]&&d&&1!=D[8])&&(j.$logOrder(e||"rad"+new Date-0,0,d||"","","","0"),D[8]=1,E[5]=1,E[6]=1,R()),"cartview"==a&&(j["$addItem"]=function(){if(arguments[3])j["$addGoods"].apply(j,arguments);else for(var a=0,b=arguments.length;b>a;a++)arguments[a]&&(h.goodsId?h.goodsId+=","+arguments[a]:h.goodsId=arguments[a]);j["$logData"]("&")})},j.$logConversion=function(a){i||a?h.pageType?S():setTimeout(function(){S()},10):window["_mv_loader"]&&window["_mv_loader"].getRandom&&window["_mv_loader"].getRandom("mba"),i=!1},j.$setRef=function(b){a.ref=b},j.$log=function(a){S(a,1)},j.$logData=function(a){var b,d,f,i,j;try{for(b=["qzjecom=1&logtype=ecom"],d=0,f=V.length;f>d;d++)i=V[d],j=U[i],j&&b.push(e(i)+"="+j),"qzjor"==i&&delete U[i],"qzjgo"!=i||h.sign||(h.sign=T(g,j,h.pageUrl));if(a&&b.push(a),1==b.length&&!h.goodsId)return;h.ref&&b.push("ref="+c(h.ref)),V=[],S(b)}catch(k){throw k}},j.$logAction=function(a){var f=["&qzjecom=1&logtype=ecom"];"regbtnclick"==a&&(E[5]=1,R(),f.push("qzjregc=1"),S(f))},U={},V=[],j["custom"]=function(){var e,f,h,i,k,l,a=arguments[0],b=arguments,d=[];for(e=1,f=b.length;f>e;e++)try{d[e-1]=null==b[e]?"0":(b[e]+"").replace(/\|/g," ")}catch(g){}""==d[d.length-1]&&(d[d.length-1]="-"),h=c(d.shift()),i=c(d.shift()),k=d.join("|"),l=W(U,a),V.push("jzqval"),U["jzqval"]=encodeURIComponent(k),j["$logData"]("&jzqotp=5&jzqt=tran&jzqkey="+l+"&jzqo="+h+"&jzqot="+i)},Y=function(){var a=document.domain.indexOf("yougou")>=0;return a}(),X("$addBrand","qzjbr",null,function(a,b){h.pageId=b}),X("$addCategory","qzjca"),X("$addGoods",Y?"qzjgono":"qzjgo",0,null,function(b,c,d,e,f){var i,j;h.pageId=e,h.goodsId=e,f=f?parseFloat(f.toString().replace(/[^0-9.]+/g,"")):f,a.ref&&(i=document.location.href.split("#")[0],j=a.ref.replace("#{url}",i),h.ref=j)},function(){var a=Array.prototype.slice.apply(arguments),b=a[11];return b&&isNaN(b)&&(b=b.replace(/-/g,"/"),a[11]=parseInt((new Date(b)-0)/1e3)),a}),X("$addPricing","qzjpricing"),X("$addCartGoods","qzjcag",0),X("$addCartPackage","qzjcap",0),X("$addCartPackageGoods","qzjcapg",0),X("$addOrderInner","qzjor",0,null,function(a){h.pageId=a;try{f(D,9),f(E,3),f(G,2),R()}catch(b){}},function(a,b){return[a,b]}),j["$logOrder"]=function(a,b,d,e,f,g){a+="";var i=["jzqt=tran"];return i.push("jzqo="+c(a)),i.push("jzqot="+c(b)),d=d||h.userName,e=e||h.userId,d&&i.push("jzqo1="+c(d)),e&&i.push("jzqo2="+c(e)),f&&i.push("jzqo3="+c(f)),g&&i.push("jzqo4="+c(g)),j.$log(i),"0"==g+""?(D[8]=1,E[5]=1,void 0):(""!=a&&"0"!=a&&(j.$addOrderInner(a,b,d,e,f,g),j.$logData()),void 0)},j["$addOrder"]=j["$logOrder"],j["$logItem"]=function(a,b,d,e,f){var g=["jzqt=item"];g.push("jzqo="+c(a)),g.push("jzqix="+c(b)),g.push("jzqin="+c(d)),g.push("jzqip="+c(e)),g.push("jzqiq="+c(f)),j.$log(g)},j["$addSign"]=function(a){h.sign=a,h.ss=!0},X("$addOrderPackage","qzjorp",0),X("$addOrderPackageGoods","qzjorpg",0),X("$addItem","qzjorg",0,null,null,function(a,b,c,d,e){var f,g,h;for(document.domain.indexOf("banggo.com")>=0&&(b=(""+b).substr(0,6)),f=[],g=0,h=arguments.length;h>g;g++)f[g]=arguments[g];return f[4]=f[4]-0,isNaN(f[4])&&(f[4]=0),f[5]&&0!=f[5].indexOf("http")&&(f[5]="http://"+window.location.hostname+f[5]),j.$logItem(a,b,c,d,e),f}),X("$addSearchResult","qzjse"),X("$addComparedGoods","qzjcog",0),X("$addGoodsFavorite","qzjgof",0,null,function(a){h.pageType="concern",h.goodsId=a}),X("$setPageUrl","qzjurl",0,null,function(a){return a?(h.pageUrl=a,void 0):!0}),X("setPageUrl","qzjurl",0,null,function(a){return a?(h.pageUrl=a,void 0):!0}),X("$addGift","qzjgi",0),X("$addHistory","qzjorg",0),X("$addOrderDetail","qzjord"),X("$addRecentOrderedGoods","qzjreog"),window._MBAInit=!1,window._MBAInit?void 0:(Q(),R(),window._MBAInit=!0,Z=window._mvq,window["_mv_loader"]?($=window["_mv_loader"],_=$.cmdList,$.reg(a.runCmd,a.runCmd.push),a.runCmd.push.apply(a.runCmd,_),void 0):(Z instanceof Array&&a.runCmd.push.apply(a.runCmd,Z),window._mvq=a.runCmd,void 0))}()}();   (function(){var a=window.mvdsp||{};window.mvdsp=a;a.paramFilter=function(g,c,f){if(document.domain.indexOf("jiuxian")>=0&&c.pageType=="cartview"){for(var e=0,b=g.length;e<b;e++){var d=g[e].split("=")[0];if(d=="qzjgo"){g[e]=g[e].replace("qzjgo","qzjgono")}}}if(f=="m-6-0"||f=="m-21037-0"||f=="m-21039-1"){for(var e=0,b=g.length;e<b;e++){var d=g[e].split("=")[0];if(d=="qzjgo"){g[e]=g[e].replace("qzjgo","qzjgono")}}}if(f=="m-214-0"){g.push("qzjurl="+encodeURIComponent(window.location.href))}}})();(function(){try{var a=window.mvdsp||{};window.mvdsp=a;var c=document.location.protocol;a.test=function(d){};if(window.mba_dsp){return}window.mba_dsp=1;window.$mat=1;a.cookie={};a.$version="1.0";a.cookie._isValidKey=function(d){return(new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24')).test(d)};if(window._mv_loader&&!window._mv_loader.$version&&window._mv_loader.getRandom){(function(){var d=new Date()-0;window._mv_loader.getRandom=function(f){var e;if(f=="mv"){_mv_loader.mv++;e=_mv_loader.mv}else{_mv_loader.mba++;e=_mv_loader.mba}return _mv_loader.random&&_mv_loader.random[e]||(d+""+e)}})()}a.cookie.getRaw=function(e){if(a.cookie._isValidKey(e)){var f=new RegExp("(^| )"+e+"=([^;]*)(;|\x24)"),d=f.exec(document.cookie);if(d){return d[2]||null}}return null};a.cookie.get=function(d){var f=a.cookie.getRaw(d);if("string"==typeof f){try{f=decodeURIComponent(f)}catch(g){}return f}return null};a.cookie.setRaw=function(f,g,e){e=e||{};var d=e.expires;if("number"==typeof e.expires){d=new Date();d.setTime(d.getTime()+e.expires)}document.cookie=f+"="+g+(e.path?"; path="+e.path:"/")+(d?"; expires="+d.toGMTString():"")+(e.domain?"; domain="+e.domain:"")+(e.secure?"; secure":"")};a.cookie.remove=function(e,d){d=d||{};d.expires=new Date(0);a.cookie.setRaw(e,"",d)};a.cookie.set=function(e,f,d){a.cookie.setRaw(e,encodeURIComponent(f),d)};a.oOrganic=function(e,d){this.srcName=e;this.keyword=d};a.cOrganics=[new a.oOrganic("baidu","word"),new a.oOrganic("baidu","wd"),new a.oOrganic("google","q"),new a.oOrganic("sogou","query"),new a.oOrganic("zhongsou","w"),new a.oOrganic("soso","w"),new a.oOrganic("search.114.vnet.cn","kw"),new a.oOrganic("youdao","q"),new a.oOrganic("gougou","search"),new a.oOrganic("bing","q"),new a.oOrganic("msn","q"),new a.oOrganic("live","q"),new a.oOrganic("aol","query"),new a.oOrganic("aol","q"),new a.oOrganic("aol","encquery"),new a.oOrganic("lycos","query"),new a.oOrganic("ask","q"),new a.oOrganic("altavista","q"),new a.oOrganic("netscape","query"),new a.oOrganic("cnn","query"),new a.oOrganic("looksmart","qt"),new a.oOrganic("about","terms"),new a.oOrganic("pchome","q")];a.queryToJson=function(f){var h={};var m=f.split("?");m.shift();var k=m.shift();if(m.length>=1){var j=m.join("?")}var k=f.split("?")[1];if(k){k=k.split("&");for(var g=0,d=k.length;g<d;g++){var e=k[g].split("=");h[e[0]]=e[1];if(j&&g==d-1){h[e[0]]=e[1]+"?"+j}}}return h};a.jsonp=function(g,d){var f=(new Date).getTime();var j="jsonp"+f+Math.floor(Math.random()*10000);g=g+"&cb="+j;window[j]=window[j]||function(k){i(k);window[j]=undefined;try{delete window[j]}catch(l){}if(h){h.removeChild(e)}};var h=document.getElementsByTagName("head")[0]||document.documentElement;var e=document.createElement("script");e.src=g;h.insertBefore(e,h.firstChild);function i(k){if(typeof(d)=="function"){d(k)}}};a.truncation=function(g,d,e){for(var f=0,h=0;f<g.length&&h<d;f++){h++;if(g.charCodeAt(f)>128){h+=8}}return g.substr(0,f)+((e&&g.length)>f?"":"")};a.sendRequestByJsonp=function(d,e){a.jsonp(d,e)};a.createCampaignSource=function(e){var d=e["_mvsrc"]||e["_mvmix"];var f=e["_mvcam"];if(d){return new a.sourceX("(camp)",d,f)}};a.createSearchSource=function(d){if(d==null||d.indexOf("://")<0){return}var m=function(l){var i="";i=l.split("://")[1];if(i){(i.indexOf("/")>=0)&&(i=i.split("/")[0])}return i};var k=m(d);var n=a.cOrganics;var e=a.queryToJson(d);for(var g=0,f=n.length;g<f;g++){var j=n[g];if(k.indexOf(j.srcName)>=0){var h=e[j.keyword];if(h){return new a.sourceX("(search)",j.srcName,h)}}}};a.createRefSource=function(d){if(d==null||d.indexOf("://")<0){return}var f=d.split("://")[1].toLowerCase();if(f.indexOf("/")>=0){var e=f.substring(f.indexOf("/"));if(e.indexOf("?")>=0){e=e.split("?")[0]}f=f.split("/")[0]}if(0==f.indexOf("www.")){f=f.substring(4)}return new a.sourceX("(ref)",f,e)};a.sourceX=function(e,d,f){this.srcName=d;this.content=f};a.updateSingleSource=function(e,i,d,g,j){if(!d){return}var f="jzqsr="+d.srcName+"|"+"jzqct="+d.content;var h=i.split(".");if(h.length<6){h[0]=1;h[1]=g;h[2]=g;h[3]=1;h[4]="jzqsr="+d.srcName+"|"+"jzqct="+d.content;h[5]=h[4]}else{if(h[4]!=f){h[3]=h[3]-0+1;h[2]=g;h[5]=f}}return h.join(".")};a.sendRequest=function(e,f){var d=new Image(1,1);d.onload=function(){d.onload=null;f&&f()};d.src=e;window["mv_"+(new Date()-0)]=d};a.sendByAjaxRequest=function(g,h,d){var f,e=window.XDomainRequest;if(e){f=new e;f.open("POST",d)}else{if(e=window.XMLHttpRequest){e=new e;if("withCredentials" in e){f=e;f.open("POST",d,true);
f.setRequestHeader("Content-Type","text/plain")}}}if(f){f.onreadystatechange=function(){if(f.readyState==4){h&&h();f=null}};f.send(g);return true}return false}}catch(b){a.test("t3=error1"+b.type)}(function(){function y(){if(window.$mv_fpass){return}var m=document.createElement("script");m.type="text/javascript";m.async=true;m.src="https://material-ssl.mvdsp.com/bjjs/fpass.js";var q=document.getElementsByTagName("script")[0];q.parentNode.insertBefore(m,q)}function H(m){return encodeURIComponent(m)}var af=new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)","g");function ad(m){return String(m).replace(af,"")}function f(q,m){q[m]=""+(q[m]?q[m]*1+1:1)}var l;var x={};var E=true;var r=a.commands={};var j=function(ai){ai=[].slice.call(ai,0);var ah=[],q=[],m=[];for(var ag=0;ai[ag];ag++){switch(ai[ag][0]){case"$setGeneral":ah.push(ai[ag]);break;case"$setAccount":ah.unshift(ai[ag]);break;case"$logConversion":q.push(ai[ag]);break;case"$logData":q.unshift(ai[ag]);break;default:m.push(ai[ag])}}return ah.concat(m).concat(q)};a.runCmd={push:function(){var q=arguments.length;arguments=j(arguments);for(var ag=0;ag<q;ag++){var m=[];Array.prototype.push.apply(m,arguments[ag]);var ah=m.shift();r[ah]&&r[ah].apply(this.runner,m)}}};function C(){var m=window.location.host;return m}function I(){if(document.domain.indexOf("banggo.com")>=0){return".banggo.com"}if(document.domain.indexOf("xueersi.com")>=0){return".xueersi.com"}if(document.domain.indexOf("cn100.com")>=0){return".cn100.com"}if(document.domain.indexOf("shangpin.com")>=0){return".shangpin.com"}return""}function Z(ah){var ag=1,q=0,m;if(ah){ag=0;for(m=ah.length-1;m>=0;m--){q=ah.charCodeAt(m);ag=(ag<<6&268435455)+q+(q<<14);q=ag&266338304;ag=q!=0?ag^q>>21:ag}}return ag}function U(){return Math.round(Math.random()*2147483647)^Z(s+t)&2147483647}function N(){var m=(new Date()-0);return[1,U(),m,m,m,m,m,0,0,0,0,0]}function L(){var m=(new Date()-0);return[1,m,0,0,1,0]}function J(){return 1}function g(){return[0,0,0]}var aa=new Date();aa.setDate(aa.getDate()+1);aa.setHours(0);aa.setMinutes(0);aa.setSeconds(0);var u=aa-new Date();var A=63072000000;var w=15768000000;var P=1800000;var h=new Date()-0;var s=document.referrer;var t=C();var v=I();var G=a.cookie;var O=G.get("_qzja_dsp");var M=G.get("_qzjb_dsp");var K=G.get("_qzjc_dsp");var ab=G.get("_qzjto_dsp");var i=G.get("_jzqosr_dsp");var B=G.get("_jzqco_dsp");var D=[];window.random=D;if(!B){var p=G.get("_jzqx");var o=G.get("_jzqy");var n=G.get("_jzqz")}else{var Y=B.split("|");p=Y[0];o=Y[1];n=Y[2];p=decodeURIComponent(p);o=decodeURIComponent(o);n=decodeURIComponent(n)}if(v){a.cookie.remove("_qzja_dsp");a.cookie.remove("_qzjb_dsp");a.cookie.remove("_qzjc_dsp");a.cookie.remove("_qzjto_dsp");a.cookie.remove("_qzja_dsp",{path:"/"});a.cookie.remove("_qzjb_dsp",{path:"/"});a.cookie.remove("_qzjc_dsp",{path:"/"});a.cookie.remove("_qzjto_dsp",{path:"/"})}if(window.location.pathname!="/"){a.cookie.remove("_qzja_dsp");a.cookie.remove("_qzjb_dsp");a.cookie.remove("_qzjc_dsp");a.cookie.remove("_qzjto_dsp")}var ac=!O||!M||!K;O=O?O.split("."):N();M=M?M.split("."):L();K=K||J();ab=ab?ab.split("."):g();var S;function e(){var m=new Date()-0;if(ac){O[3]=O[4];O[4]=m;M[4]=1;f(O,11);f(ab,1)}else{M[4]=0}O[5]=O[6];O[6]=m;f(O,10);f(M,2);f(ab,0)}function T(){G.set("_qzja_dsp",O.join("."),{expires:A,domain:v,path:"/"});G.set("_qzjb_dsp",M.join("."),{expires:P,domain:v,path:"/"});G.set("_qzjc_dsp",K,{domain:v,path:"/"});G.set("_qzjto_dsp",ab.join("."),{expires:u,domain:v,path:"/"});var m=encodeURIComponent(p||"")+"|"+encodeURIComponent(o||"")+"|"+encodeURIComponent(n||"")}function ae(ah,ag){try{if(M[5]&&x.userName){O[8]=1;T()}var ak=[O[0],O[1],(O[2]+"").substring(0,10),(O[3]+"").substring(0,10),(O[4]+"").substring(0,10),O[10]].join(".");var ai=["_jzqa="+ak];p&&(ai.push("_jzqx="+p));o&&(ai.push("_jzqy="+o));n&&(ai.push("_jzqz="+n));ai=encodeURIComponent(ai.join(";+"));ah=ah||[];ah.push("type=3&db=none");if(!ag){ah.push("qzja="+O.join("."),"qzjb="+M.join("."),"qzjto="+ab.join("."));ah.push("jzqh="+t);ah.push("jzqpt="+H(x.pageTitle||a.truncation(document.title,400)));ah.push("jzqre="+H(s.substr(0,400)));O[7]&&ah.push("qzjhn="+O[7]);x.userId&&ah.push("qzjui="+H(x.userId));x.userName&&ah.push("qzjun="+H(x.userName));x.pageType&&ah.push("qzjpt="+H(x.pageType));x.pageId&&ah.push("qzjpi="+H(x.pageId))}i&&ah.push("jzqosr="+i);ah.push("jzqc="+ai);ah.push("jzqs="+l);ah.push("jzqv="+a.$version);if(ah[0].indexOf("logtype")<0){ah.push("jzqrd="+((window["_mv_loader"]&&window["_mv_loader"].getRandom&&window["_mv_loader"].getRandom("mba"))||(new Date()-0)))}else{if(x.goodsId){ah.push("qzjgoi="+x.goodsId)}if(x.sign){ah.push(x.ss?"qzjcode=":"qzjsign="+x.sign)}ah.push("jzqrd="+"0"+h+(new Date()-0))}if(a.paramFilter){a.paramFilter(ah,x,l)}var aj=ah.join("&").replace(/%0A|%0D|%09/g,"")}catch(al){a.test("t3=err3"+al.type)}var m="https://secure.dsp.com/t?"+aj;if(m.length<2036){if(aj.indexOf("logtype=ecom")<0&&aj.indexOf("jzqt=")<0){m=m.replace("type=3&db=none","type=6&db=none");
a.sendRequestByJsonp(m,function(aq){aq="?status="+aq.replace("_mvctn=","");var au=a.queryToJson(aq);var an=au.status;if(an=="0"){var ap=au.time;var at=au.rdom;i=au.osr;var ao=a.createCampaignSource(au);n=a.updateSingleSource("_jzqz=",n,ao,ap);try{at=decodeURIComponent(at)}catch(ar){}if(at!=""){ao=a.createSearchSource(at);if(ao){o=a.updateSingleSource("_jzqy=",o,ao,ap)}else{ao=a.createRefSource(at);p=a.updateSingleSource("_jzqx=",p,ao,ap)}}}if(M[4]==0){return}M[4]=0;T()})}else{a.sendRequest(m,function(){if(M[4]==0){return}M[4]=0;T()})}}else{var m="https://secure.dsp.com/t?";a.sendByAjaxRequest(aj,function(){if(aj.indexOf("logtype=ecom")>=0||M[4]==0){return}M[4]=0;T()},"https://secure.dsp.com/t?")}function am(an){var ao=document.createElement("iframe");ao.style.width="1px";ao.style.border=0;ao.style.position="absolute";ao.style.left="-100px";ao.style.top="-100px";ao.style.height="1px";ao.src=an;ao.id="mediav_cookiemapping";document.body.insertBefore(ao,document.body.childNodes[0])}var q=document["cookie"];if(!(q.indexOf("_jzqckmp_v2=")>-1)){am(document.location.protocol+"//ckmap.dsp.com/b?type=10&jzqs="+l);a.cookie.set("_jzqckmp_v2",1,{expires:86400000})}if(!(q.indexOf("_jzqckmp=")>-1)){am(document.location.protocol+"//ckmap.mediav.com/b?type=10&jzqs="+l);a.cookie.set("_jzqckmp",1,{expires:86400000})}}function V(q,m,ag){m=m.replace(/%0A|%0D|%09/g,"");var ah=q+m+(ag||"");return Z(ah)}r.$setDomainName=function(m){v=m};r.$setAccount=function(m){l=m;if(l.indexOf("m-")!=0){y();l="m-"+l+"-0"}if(l=="m-26165-0"){window._mv_loader&&(_mv_loader.reg=function(){});window.$mvt&&($mvt.$getTrackerByName=function(){return{}})}};r.$setGeneral=function(q,m,ai,ag,ah){if(q!=x.pageType){if(E==false&&(q=="goodsdetail"||q=="cartview"||q=="ordercreate")){E=false}else{E=true}}ah&&(x.pageTyp=ah);x.pageType=q||x.pageType||"";x.pageId=m||"";x.userName=ai||"";O[7]=H(ai).replace(/\./g,"_");x.userId=ag||x.userId||"";if(q=="registered"||(M[5]==1&&ai&&O[8]!=1)){r.$logOrder(ag||("rad"+new Date()-0),0,ai||"","","","0");O[8]=1;M[5]=1;M[6]=1;T()}if(q=="cartview"){r["$addItem"]=function(){if(arguments[3]){r["$addGoods"].apply(r,arguments)}else{for(var ak=0,aj=arguments.length;ak<aj;ak++){if(arguments[ak]){x.goodsId?(x.goodsId+=","+arguments[ak]):(x.goodsId=arguments[ak])}}}r["$logData"]("&")}}};r.$logConversion=function(m){if(E||m){if(x.pageType){ae()}else{setTimeout(function(){ae()},10)}}else{window["_mv_loader"]&&window["_mv_loader"].getRandom&&window["_mv_loader"].getRandom("mba")}E=false};r.$setRef=function(m){a.ref=m};r.$log=function(m){ae(m,1)};r.$logData=function(ah){try{var ak=["qzjecom=1&logtype=ecom"];for(var ag=0,m=d.length;ag<m;ag++){var q=d[ag],ai=z[q];if(ai){ak.push(ad(q)+"="+ai)}if(q=="qzjor"){delete z[q]}if(q=="qzjgo"&&!x.sign){x.sign=V(l,ai,x.pageUrl)}}if(ah){ak.push(ah)}if(ak.length==1&&!x.goodsId){return}if(x.ref){ak.push("ref="+H(x.ref))}d=[];ae(ak)}catch(aj){throw (aj)}};r.$logAction=function(m,aj,ah,ag,q){var ai=["&qzjecom=1&logtype=ecom"];if(m=="regbtnclick"){M[5]=1;T();ai.push("qzjregc=1");ae(ai)}};var z={};var d=[];function k(ag,q){var m=q;while(ag[m]){m=m+" "}return m}function W(ai,ag,ah,q,aj,m){q=q||"|";r[ai]=function(){if(aj){if(aj.apply(window,arguments)===true){return}}var ap=[];var al=m?m.apply(window,arguments):arguments;for(var an=0,ak=al.length;an<ak;an++){try{ap[an]=al[an]==null?"0":(al[an]+"").replace(/\|/g," ")}catch(aq){}}if(ap[ap.length-1]==""){ap[ap.length-1]="-"}if(ag=="qzjgo"){ap[4]=ap[4]?parseFloat(ap[4].toString().replace(/[^0-9.]+/g,"")):ap[4]}var ao=ap.join(q);if(ag=="qzjgo"&&!arguments[2]){return}var am=k(z,ag);d.push(am);z[am]=encodeURIComponent(ao)}}r["custom"]=function(){var ag=arguments[0];var ak=arguments;var ai=[];for(var aj=1,q=ak.length;aj<q;aj++){try{ai[aj-1]=ak[aj]==null?"0":(ak[aj]+"").replace(/\|/g," ")}catch(al){}}if(ai[ai.length-1]==""){ai[ai.length-1]="-"}var m=H(ai.shift());var ah=H(ai.shift());var am=ai.join("|");var an=k(z,ag);d.push("jzqval");z["jzqval"]=encodeURIComponent(am);r["$logData"]("&jzqotp=5&jzqt=tran&jzqkey="+an+"&jzqo="+m+"&jzqot="+ah)};var F=(function(){var m=document.domain.indexOf("yougou")>=0;return m})();W("$addBrand","qzjbr",null,function(m,q){x.pageId=q});W("$addCategory","qzjca");W("$addGoods",F?"qzjgono":"qzjgo",0,null,function(aj,al,m,ag,ai,ak){x.pageId=ag;x.goodsId=ag;ai=ai?parseFloat(ai.toString().replace(/[^0-9.]+/g,"")):ai;if(a.ref){var q=document.location.href.split("#")[0];var ah=a.ref.replace("#{url}",q);x.ref=ah}},function(){var m=Array.prototype.slice.apply(arguments);var q=m[11];if(q&&isNaN(q)){q=q.replace(/-/g,"/");m[11]=parseInt((new Date(q)-0)/1000)}return m});W("$addPricing","qzjpricing",0);W("$addCartGoods","qzjcag",0);W("$addCartPackage","qzjcap",0);W("$addCartPackageGoods","qzjcapg",0);W("$addOrderInner","qzjor",0,null,function(q){x.pageId=q;try{f(O,9);f(M,3);f(ab,2);T()}catch(m){}},function(m,ag,aj,ai,ah,q){return[m,ag]});r["$logOrder"]=function(m,ag,ak,ai,ah,q){m=m+"";var aj=["jzqt=tran"];aj.push("jzqo="+H(m));aj.push("jzqot="+H(ag));ak=ak||x.userName; 
ai=ai||x.userId;ak&&aj.push("jzqo1="+H(ak));ai&&aj.push("jzqo2="+H(ai));ah&&aj.push("jzqo3="+H(ah));q&&aj.push("jzqo4="+H(q));r.$log(aj);if(q+""=="0"){O[8]=1;M[5]=1;return}if(m==""||m=="0"){return}r.$addOrderInner(m,ag,ak,ai,ah,q);r.$logData()};r["$addOrder"]=r["$logOrder"];r["$logItem"]=function(m,aj,q,ag,ah){var ai=["jzqt=item"];ai.push("jzqo="+H(m));ai.push("jzqix="+H(aj));ai.push("jzqin="+H(q));ai.push("jzqip="+H(ag));ai.push("jzqiq="+H(ah));r.$log(ai)};r["$addSign"]=function(m){x.sign=m;x.ss=true};W("$addOrderPackage","qzjorp",0);W("$addOrderPackageGoods","qzjorpg",0);W("$addItem","qzjorg",0,null,null,function(m,al,ah,aj,ak){if(document.domain.indexOf("banggo.com")>=0){al=(""+al).substr(0,6)}var ag=[];for(var ai=0,q=arguments.length;ai<q;ai++){ag[ai]=arguments[ai]}ag[4]=ag[4]-0;isNaN(ag[4])&&(ag[4]=0);if(ag[5]&&ag[5].indexOf("http")!=0){ag[5]="http://"+window.location.hostname+ag[5]}r.$logItem(m,al,ah,aj,ak);return ag});W("$addSearchResult","qzjse");W("$addComparedGoods","qzjcog",0);W("$addGoodsFavorite","qzjgof",0,null,function(m){x.pageType="concern";x.goodsId=m});W("$setPageUrl","qzjurl",0,null,function(m){if(!m){return true}x.pageUrl=m});W("setPageUrl","qzjurl",0,null,function(m){if(!m){return true}x.pageUrl=m});W("$addGift","qzjgi",0);W("$addHistory","qzjorg",0);W("$addOrderDetail","qzjord");W("$addRecentOrderedGoods","qzjreog");window._MBAInit=false;if(!window._MBAInit){e();T()}else{return}window._MBAInit=true;var Q=window._mvq_dsp;if(window["_mv_loader"]){var R=window["_mv_loader"],X=R.cmdList;R.reg(a.runCmd,a.runCmd.push);a.runCmd.push.apply(a.runCmd,X);return}else{if(Q instanceof Array){a.runCmd.push.apply(a.runCmd,Q)}window._mvq_dsp=a.runCmd}})()})();
(function(){var _ozclick="0";var _oziframe="0";var _oz_updatetail="0";var _ozpoc="";var _ozrec="ozrec";var _ozjcnt_type="__COUNT__";var G=undefined;G={dQ:function(){this.cu="2345.oadz.com";this.dv="s.oadz.com";this.af="cnt;C1;2345;.banggo.com;dygIGYooEQr0bLNPKIge6mwrGeM=;";this.cI="jcnt;C1;2345;.banggo.com;V+VU5ZfIjXUfcGYDp5+1sKLEuqY=;";this.dK="0F50E";this.cr="";this.aA=50;if(_ozjcnt_type==1){this.aA=5;}this.F=window;this.aI=this.F.top;this.bD=this.F.screen;this.ba=this.F.document;this.dc=navigator;this.cf=(this.dc.appName=='Microsoft Internet Explorer');this.cl=new Image();this.db=new Image();this.aF=this.af.split(";")[2];this.ac=undefined;this.aB=undefined;this.V=undefined;this.aw=undefined;this.bn=undefined;this.bf=undefined;this.bz=undefined;this.aZ=undefined;this.as=undefined;this.O=0;this.bi=0;this.cF=1024;this.aJ=512;this.bY=2048;this.dw=3;this.dR="\x49\x4e\x50\x55\x54";this.dJ="\x62\x75\x74\x74\x6f\x6e";this.dg="\x69\x6d\x61\x67\x65";this.cS="\x73\x75\x62\x6d\x69\x74";this.bW="\x62\x6f\x64\x79";this.cK="\x68\x74\x6d\x6c";this.cG="\x46\x4c\x41\x53\x48";this.bo="\x4f\x5a\x5f\x30\x61\x5f"+this.aF;this.bk="\x4f\x5a\x5f\x31\x55\x5f"+this.aF;this.bO="\x4f\x5a\x5f\x31\x59\x5f"+this.aF;this.cX="\x4f\x5a\x5f\x31\x4b\x5f"+this.aF;this.du="\x4f\x5a\x5f\x31\x53\x5f"+this.aF;},dI:function(){if(!this.ac){if(this.ao().indexOf("https")==0){this.ac="https://"+this.dv+"/"+this.af;}else{this.ac="http://"+this.cu+"/"+this.af;}}return this.ac;},aX:function(){if(!this.aB){if(this.ao().indexOf("https")==0){this.aB="https://"+this.dv+"/"+this.cI;}else{this.aB="http://"+this.cu+"/"+this.cI;}}return this.aB;},bc:function(be,L,bb,aZ){var j="";if(bb&&bb>0)j=be+"="+L+";expires="+bb.toGMTString()+";path=/;domain="+aZ;else j=be+"="+L+";path=/;domain="+aZ;this.ba.cookie=j;},ai:function(be){var j=this.ba.cookie,aG,aS,cT=j.indexOf(be+"=");if(cT!= -1){aG=cT+be.length+1;aS=j.indexOf(";",aG);if(aS== -1){aS=j.length;}return j.substring(aG,aS);}return null;},bF:function(){var aU=undefined;if(!this.aZ){this.aZ=this.ba.domain;if(this.aZ.indexOf(".")> -1){var R=this.aZ.split(".");this.aZ=R[R.length-2]+"."+R[R.length-1];if(R.length>2&&R[R.length-3]!="www"){aU=R[R.length-2];if(aU.length<=2||(aU=="com"||aU=="edu"||aU=="gov"||aU=="net"||aU=="org"||aU=="mil")){this.aZ=R[R.length-3]+"."+aU+"."+R[R.length-1];}}}}return this.aZ;},ao:function(){var H="";try{try{H=this.aI.location.href;}catch(ex){H=this.F.location.href;}}catch(ex){}if(!H){H="-";}if(H.length>this.aJ){H=H.substring(0,this.aJ);}H=escape(H);return H;},dH:function(){var aj="";try{aj=this.F.location.href;}catch(ex){}if(!aj){aj="-";}if(aj.length>this.aJ){aj=aj.substring(0,this.aJ);}aj=escape(aj);return aj;},bu:function(){if(!this.V){try{try{this.V=this.aI.document.referrer;}catch(ex){this.V=this.ba.referrer;}if(!this.V){this.V=this.aI.opener.location.href;}}catch(ex){}if(!this.V){this.V="-";}if(this.V.length>this.bY){this.V=this.V.substring(0,this.bY);}this.V=escape(this.V);}return this.V;},bj:function(h,au){try{if(h&&au&&h.getAttribute(au)){return h.getAttribute(au).toString();}}catch(ex){}return null;},bP:function(h){if(h&&h.name){return h.name.toString();}else if(this.bj(h,"name")){return this.bj(h,"name");}else if(h&&h.id){return h.id.toString();}else{return "-";}},cV:function(h){var t=1,aW=0;while(h&&t<=50){h=h.parentNode;t++;if(h&&h.tagName=="DIV"){var bV=this.bP(h);if(bV&&bV.indexOf("__")==0&&bV.length>2){aW=1;break;}}}if(aW==1){return h;}else{return null;}},dM:function(h,bK){if(!h.onclick){h.onclick=bK;}else{if(this.cf){h.attachEvent("onclick",bK);}else{h.addEventListener("click",bK,false);}}},da:function(){var t=0;if(typeof(G.F.frames)!="undefined"&&G.F.frames){for(t=0;t<G.F.frames.length;t++){try{G.dM(G.F.frames[t].document,G.bq);}catch(ex){}}}if(G.F["__99_929_pageonload"]){G.F["__99_929_pageonload"]();}},dA:function(h){var t=1;while(h&&h.tagName!="A"&&h.tagName!="AREA"&&t<=10){h=h.parentNode;t++;}if(h&&(h.tagName=="A"||h.tagName=="AREA")){return h;}else{return null;}},cJ:function(h){var t=1,az=undefined,C=undefined;if(_ozclick==1){C=this.bP(h);while(h&&t<=5&& !(C&&C.indexOf("__")==0&&C.length>2&&h.onclick)){h=h.parentNode;C=this.bP(h);t++;}if(h&&h.onclick&&C&&C.indexOf("__")==0&&C.length>2){return h;}}else{if(h&&h.tagName){az=h.tagName.toLowerCase();}while(h&& !h.onclick&&t<=5&&az!=this.bW&&az!=this.cK){if(h.parentNode&&h.parentNode.tagName){h=h.parentNode;az=h.tagName.toLowerCase();t++;}else{return null;}}if(h&&h.onclick&&az!=this.bW&&az!=this.cK){return h;}}return null;},bq:function(k){if(G.O<G.aA){var J=null,by="-",ah=null,C="-",l=null,aY=null,ax=null,aa=null,bg=0,bB=0,bA=0,i=0;if(!k){if(G.F.event){k=G.F.event;J=k.srcElement;}else{try{for(i=0;i<G.F.frames.length;i++){if(G.F.frames[i].event){k=G.F.frames[i].event;J=k.srcElement;}}}catch(ex){}}}else{if(k.target){J=k.target;}else if(k.srcElement){J=k.srcElement;}}if(k&&J){aY=G.dA(J);if(aY&&aY.href){l=aY;ah="A";C=escape(G.bP(l));by=escape(l.href);if(!by){by="-";}}else if(J.tagName==G.dR&&(J.type==G.dJ||J.type==G.dg||J.type==G.cS)){l=J;ah=G.dR;C=escape(G.bP(l));}else{l=G.cJ(J);if(l){ah=l.tagName;C=escape(G.bP(l));}}if(l){if(ah&&ah!="-"){aa=G.cV(l);G.bC=G.bj(l,_ozpoc);G.as=G.bj(l,_ozrec);if(typeof(k.pageX)!='undefined'){bB=k.pageX;bA=k.pageY;}else if(typeof(k.x)!='undefined'){bB=k.x;bA=k.y;}if(aa){var ds=escape(G.bP(aa));ax=ah+"*"+C+"*"+bB+"*"+bA+"*"+ds;}else{ax=ah+"*"+C+"*"+bB+"*"+bA;}bg=Math.floor((new Date()).getTime()/1000);if(C.toLowerCase().indexOf("__ad_")==0||C.toLowerCase().indexOf("__zntg_")==0){G.cq(C,bg,by);}else if(aa){C=escape(G.bP(aa));if(C.toLowerCase().indexOf("__ad_")==0||C.toLowerCase().indexOf("__zntg_")==0){G.cq(C,bg,by);}}}if(ah&&G.aX()!=''){try{if(G.O==0&&G.bi==1){G.O=1;G.bi=G.O+1;}else{if(G.bi==1){G.O=2;}else{G.O=G.bi;}G.bi=G.O+1;}}catch(ex){G.O=99;}G.cv(ax,G.O,by);G.cc(100);}}}}},cc:function(bv){var cP=(new Date()).getTime();while(((new Date()).getTime()-cP)<bv){}},cD:function(type){var bv=(new Date()).getTime();if(type==1){bv=Math.floor(bv/1000);}return "ozrand="+bv;},cv:function(ax,O,by){if(this.aX()!=''&&this.ao()&&this.aw&&this.bz&&ax&&O>0&&by){this.db.src=this.aX()+"?"+O+"&"+this.ao()+"&"+this.aw+"&"+this.bz+"&"+ax+"&"+by+"&"+this.cW()+"&"+this.cD(1);}},cs:function(bS,ar){var ae;try{if(typeof(bS)!="undefined"){if(bS.length>this.cF){bS=bS.substring(0,this.cF);}ae=escape("&"+bS);}}catch(ex){}if(typeof(ae)=="undefined"){ae="-";}if(ar){this.bf=ae;}return ae;},cE:function(al,ar){var aC;try{if(typeof(al)!="undefined"&&al.indexOf("#")==0&&al.length>1){aC=escape(al);}}catch(ex){}if(typeof(aC)=="undefined"){aC="-";}if(ar){this.bz=aC;}return aC;},cp:function(ck){try{var v=/^\d+$/;return v.test(ck);}catch(ex){}return false;},dE:function(){var bJ=undefined;try{bJ=this.dc.userAgent;if(bJ&&bJ.toLowerCase().indexOf("alexa")> -1){return 1;}}catch(ex){}return 0;},ct:function(){var aQ=0,bH=0;if(this.bD){aQ=this.bD.width;bH=this.bD.height;if(aQ&&bH&&this.cp(aQ)&&this.cp(bH)){return aQ+"*"+bH;}}return "0*0";},dp:function(){var bI="-";try{bI=escape(this.ba.title.substring(0,30));}catch(ex){}if(!bI){bI="-";}var ak=undefined;try{if(_ozuid){ak=escape(_ozuid);}}catch(ex){}if(!ak){ak="-";}var bU=this.bZ();if(!bU){bU="-";}var bG=0;try{var bb=new Date().getTime();if(_oztime&&bb>_oztime){bG=bb-_oztime;}}catch(ex){}var aN=undefined;try{if(_oznvs){aN=escape(_oznvs);}}catch(ex){}if(!aN){aN="-";}var T=Math.floor(new Date().getTime()/1000);var K=this.aM(T);var df="0";if(K.indexOf("&ltime=")!= -1){df=K.substr(K.indexOf("&ltime=")+7);}var ad=this.co(true,T);var av=this.cN();var bQ=this.dC();return "ozlvd="+df+"&ozept="+bI+"&ozsru="+ak+"&ozsat="+escape("-")+"&ozver="+escape("-")+"&ozscr="+this.ct()+"&ozplt="+bG+"&ozos="+escape("-")+"&ozalx="+this.dE()+"&oznvs="+aN+"&ozsac="+bU+"&ozccu="+escape(K)+"&ozccy="+escape(ad)+"&ozcck="+escape(av)+"&ozccs="+escape(bQ);},cW:function(){var ak=undefined;try{if(_ozuid){ak=escape(_ozuid);}}catch(ex){}if(!ak){ak="-";}if(!this.bC)this.bC="-";if(!this.as)this.as="-";if(!this.bf)this.bf="-";var aN=undefined;try{if(_oznvs){aN=escape(_oznvs);}}catch(ex){}if(!aN){aN="-";}var T=Math.floor(new Date().getTime()/1000);var K=this.aM(T);var ad=this.co(false,T);var av=this.cN();var bQ=this.dC();return "ozsru="+ak+"&ozscr="+this.ct()+"&ozpoc="+escape(this.bC)+"&ozprm="+this.bf+"&oznvs="+aN+"&ozrec="+escape(this.as)+"&ozccu="+escape(K)+"&ozccy="+escape(ad)+"&ozcck="+escape(av)+"&ozccs="+escape(bQ);},dm:function(bz,bf,aH){var H=undefined;if(_oziframe==0){H=this.ao();}else{H=this.dH();}if(this.bn&&this.bn!="-"){this.aw=this.bn;}else{this.aw=this.bu();}var aL=H;var aD=this.aw;if(typeof(aH)!="undefined"&&aH==1){aL=this.ci(aL,"ozs");aD=this.ci(aD,"ozs");}this.cl.src=this.dI()+"?1&"+aL+"&"+aD+"&"+bz+"&"+bf+"&"+this.dp();if(bz=="-"){this.bn=H;}else{this.bn=H+bz;}},ci:function(bw,ag){var v;var cY=0;while(cY<this.dw){v=new RegExp("%26"+ag+"%3D(.+?)%26","g");if(bw.match(v)){bw=bw.replace(v,"%26");cY++;}else break;}v=new RegExp("%26"+ag+"%3D(.+?)$","i");bw=bw.replace(v,"");v=new RegExp("%3F"+ag+"%3D(.+?)%26");bw=bw.replace(v,"%3F");v=new RegExp("%3F"+ag+"%3D(.+?)$");bw=bw.replace(v,"");return bw;},di:function(k){var ca=1;try{if(k.eventPhase&&k.eventPhase==0){ca=0;}}catch(ex){}if(ca){if(!this.F.event){this.bq(k);}else{this.bq();}}},bX:function(C){var ax="";if(C&&C!=''){if(this.O<this.aA){this.O++;ax=this.cG+"*"+C+"*0*0";this.cv(ax,this.O,'-');this.cc(100);}}},cw:function(aE,aV,aH){var ar=0;if(typeof(_oz_updatetail)!="undefined"&&_oz_updatetail==1){ar=1;this.O=0;this.bi=1;}var ae=this.cs(aE,ar);var aC=this.cE(aV,ar);this.dm(aC,ae,aH);},cq:function(C,bg,ay){var H=this.ao(),j=this.ai(this.bo),t=0,bM=0,aP=0;C=escape(C);if(j){for(t=0;t<j.length;t++){if(j.charAt(t)=='&'){bM++;if(bM==1){aP=t+1;}}}if(bM<4){j=j+"&"+C+"*"+bg+"*"+H+"*"+ay;}else if(bM==4&&aP>0){j=j.substr(aP)+"&"+C+"*"+bg+"*"+H+"*"+ay;}}else{j=C+"*"+bg+"*"+H+"*"+ay;}this.bc(this.bo,j,0,this.bF());},bZ:function(){var L=undefined,T=Math.floor((new Date()).getTime()/1000),j="",aK=undefined,bs=undefined,t=0;try{aK=this.ai(this.bo).split("&");for(t=0;t<aK.length;t++){bs=aK[t].split("*");if((T-bs[1])<900&&bs[2]==escape(this.bu())&&bs[3]==this.ao()){L=bs[0];}else{j+=(j==""?"":"&")+aK[t];}}this.bc(this.bo,j,0,this.bF());}catch(ex){}return L;},aM:function(T){var j="-";try{j=this.ai(this.bk);var aO=new Date();var an=0;if(!j){var ce=Math.round(aO.getTime()/1000);var bm=ce.toString(16);var cb=bm.length;bm=bm.substring(cb-7,cb);var de="";for(var t=0;t<3;t++){var dr=Math.floor(Math.random()*255);var dn=dr.toString(16);de+=(dn.length==1?"0":"")+dn;}var cA="v"+bm+de+".0";j="vid="+cA+"&ctime="+T+"&ltime="+an;}else{if(j&&j.indexOf("ctime=")!= -1){var bd=j.substr(j.indexOf("ctime=")+6);var aq=bd.indexOf("&");if(aq!= -1){bd=bd.substring(0,aq);}if(bd.match(/^\d*$/)){an=new Number(bd);}}j=j.substring(0,j.lastIndexOf("&ctime"))+"&ctime="+T+"&ltime="+an;}this.bc(this.bk,j,new Date(aO.getTime()+252288000000),this.bF());}catch(ex){}return j;},co:function(dB,T){var j="-";try{var ad=this.ai(this.bO);var K=this.ai(this.bk);if(ad){j=ad;j=j.substring(0,j.lastIndexOf("&ctime"))+K.substring(K.lastIndexOf("&ctime"))+"&compid="+this.aF;this.bc(this.bO,j,0,this.bF());}if(dB){var aT=0;var bE="-";var bh="-";var H=this.ao();var am=this.bu();var cQ=1;var aW=0;if(am!="-"){var dh=this.dI().split(";")[3].split(":");for(var t=0;t<dh.length;t++){if(am.indexOf(dh[t])!= -1){cQ=0;}}if(cQ==1){aT=1;}}var aR=H.lastIndexOf("%3Fozu_sid%3D");if(aR== -1){aR=H.lastIndexOf("%26ozu_sid%3D");}var bp=H.lastIndexOf("%3Fozs%3D");if(bp== -1){bp=H.lastIndexOf("%26ozs%3D");}if(aR!= -1&&aR>bp){aT=1;var dP=H.split(/%3Fozu_sid%3D|%26ozu_sid%3D/);if(dP.length>1){var bN=dP[1];var aS=bN.indexOf("%26");if(aS!= -1){bN=bN.substr(0,aS);}bE=bN;aW=1;}}if(bp!= -1&&bp>aR){aT=1;var ap=H.split(/%3Fozs%3D|%26ozs%3D/);for(var t=1;t<ap.length&&t<4;t++){var bx=ap[t];var aS=bx.indexOf("%26");if(aS!= -1){bx=bx.substr(0,aS);}if(bx.indexOf("-")== -1){bh=bx;aW=2;break;}else{var ab=bx.split("-");if(ab.length==2&&ab[1]==this.aF){bh=ab[0];aW=2;break;}}}}if(!ad&&am=="-"){aT=1;}if(aT){j="erefer="+am+"&eurl="+H+"&etime="+T+K.substring(K.lastIndexOf("&ctime"))+"&compid="+this.aF;this.bc(this.bO,j,0,this.bF());if(bE!="-"||bh!="-"){var av="";var cZ=j.indexOf("&etime=");if(cZ!= -1){av="etime="+T+"&ozu_sid="+bE+"&ozs="+bh+"&flag="+aW+"&compid="+this.aF;this.bc(this.cX,av,new Date(new Date().getTime()+30*86400*1000),this.bF());this.bc(this.du,av,0,this.bF());}}}}}catch(ex){}return j;},cN:function(){var av="-",L=null;try{L=this.ai(this.cX);if(L){av=L;}}catch(ex){}return av;},dC:function(){var bQ="-",L=null;try{L=this.ai(this.du);if(L){bQ=L;}}catch(ex){}return bQ;},cB:function(){try{if(typeof(this.bL)=="undefined"){this.dQ();this.bL=1;this.bi=1;this.cL=1;}else{this.bL=2;this.cL=2;}if(this.cL==1){this.cs(this.F._ozprm,1);this.cE(this.F._ozurltail,1);if(this.F.onload){this.F["__99_929_pageonload"]=this.F.onload;}this.F.onload=this.da;this.dM(this.ba,this.bq);this.dm(this.bz,this.bf);}}catch(ex){}return this;}};if(typeof(_99_929)=="undefined"){_99_929=G.cB();__ozflash=function(C){_99_929.bX(C);};__ozclk=function(){try{var k=_99_929.F.event||arguments.callee.caller.arguments[0];_99_929.di(k);}catch(e){}};__ozfac2=function(aE,aV,aH){_99_929.cw(aE,aV,aH);};}})(); (function() {
	var eh = {
		addHandler: function(t, n, h) {
			t.addEvenListener ? t.addEvenListener(n, h, false) : t.attachEvent ? t.attachEvent("on" + n, h) : t["on" + n] = h;
		},
		removeHandler: function(t, n, h) {
			t.addEvenListener ? t.removeEventListener(n, h, false) : t.attachEvent ? t.detachEvent("on" + n, h) : t["on" + n] = null;
		},
		getEvent: function(e) {
             return e ? e : window.event
        },
        getTarget: function(e) {
             return e.target || e.srcElement
        },
		preventDefault: function(t) {
			t.preventDefault ? t.preventDefault() : t.returnValue = false;
		},
		stopPropagation: function(t) {
			t.stopPropagaiton ? t.stopPropagaiton() : t.cancelBubble = true;
        }
	};
	var statDomain = 'banggo.com';
	var statURI = 'stat';
	var BGI = {
		getUniqueId: function(){
			var name = 'bgi_unique_id';
			var v = BGI.getCookie(name);
			if (v) {
				return v;
			}
			v = new Date().getTime() + '' + parseInt(Math.random() * 10000);
			BGI.setCookie(name, v, 3600 * 24 * 360);
			return v;
		},
		getSessionId: function(){
			return BGI.getCookie('PHPSESSID');
		},
		getUserId: function(){
			return BGI.getCookie('uid');
		},
		getCpsVerify: function(){
			return BGI.getCookie('cpsVerify');
		},
		image: new Image(),
		getData: function(){
			if (BGI.data == null) {
				BGI.data = {
					'h' : BGI.getUniqueId(),
					'sessionId' : BGI.getSessionId(),
					'r' : encodeURIComponent(document.referrer),
					'u' : BGI.getUserId(),
					'url' : encodeURIComponent(document.location.href),
					'c' : (typeof appName !== 'undefined') ? appName : 'bgweb',
					'title':encodeURIComponent(document.title),
					'openid':BGI.getCookie('openid'),
				};
				var cps = BGI.getCookie('cpsVerify');
				if (cps) {
					BGI.data.sc = cps;
				}
			}
			return BGI.data;
		},
		data: null,
		url: null,
		stringify: function(data){
			var str = '{';
			var i = 0;
			for (var x in data) {
				str += (i == 0 ? '"' :',"') + x + '":"' + data[x] + '"';
				i++;
			}
			str += '}';
			return str;
		},
		send: function(data) {
			var src = BGI.url + '?json=' + BGI.stringify(data) + '&t=' + Math.random();
			BGI.image.src = src;
		},
		getLink: function(n){
			var i = 1;
			while (n && n.nodeName != 'A' && n.nodeName != 'AREA' && n.nodeType === 1 && i <= 5) {
				n = n.parentNode;
				i++;
			}
			if (n && (n.nodeName == 'A' || n.nodeName == 'AREA')) {
				return n;
			}
			return null;
			
		},
		h: function(e) {
			var ev = eh.getEvent(e);
			var target = eh.getTarget(ev);
			target = BGI.getLink(target);
			if (!target) {
				return;
			}
			var attr = target.getAttribute('data-bgtj');
			if (attr === null) {
				var p = BGI.getParent(target, 'data-bgtj');
				if (!p) {
					return;
				}
				attr = p.getAttribute('data-bgtj');
			}
			if (attr === null) {
				return;
			}
			var data = BGI.getData();
			data['content'] = attr;
			//data['href'] = target.getAttribute('href') || '';
			data['href'] = target.getAttribute('href') ? encodeURIComponent(target.getAttribute('href')) : '';
			BGI.send(data);
		},
		getParent: function(n, attr){
			var i = 1;
			var p = n.parentNode;
			while (p && p.nodeType === 1 && p.parentNode && i <= 10 && (p.nodeName.toLowerCase() !== 'body')) {
				if (p.getAttribute(attr) !== null) {
					return p;
				}
				i++;
				p = p.parentNode;
			}
			return null;
		},
		pageLoad: function(){
			var data = BGI.getData();
			setTimeout(function(){
				BGI.send(data);
			}, 500);
		},
		init: function() {
			setTimeout(function(){
				var currentDomain = document.domain;
				if (currentDomain.indexOf('banggo.com') != -1) {
					statDomain = 'banggo.com';
				} else {
					statDomain = 'banggo.tn';
				}
                BGI.url = BGI.url || ('http://stat.' + statDomain + '/logs.' + statURI);
				eh.addHandler(document, 'click', BGI.h);
				BGI.pageLoad();
			}, 100);
		},
		getCookie: function(a) {
            var b = a + "=";
            var c = document.cookie.split(";");
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                for (;
                " " == e.charAt(0);) e = e.substring(1, e.length);
                if (0 == e.indexOf(b)) return e.substring(b.length, e.length);
            }
            return null
        },
        setCookie: function(name, value, expires, domain, path){
        	var e = expires || (30 * 60);
        	var d = new Date();
        	d.setTime(d.getTime() + e * 1000);
        	domain = '.' + statDomain;
        	path = '/';
        	document.cookie = name + "=" + value + ";expires=" + d.toGMTString() + ";domain=" + domain + ";path=" + path;
        }
	};
	
	try {
		if (typeof jQuery !== 'undefined') {
			jQuery(document).ready(function(){
				BGI.init();
			});
		} else if (typeof KISSY !== 'undefined') {
			KISSY.ready(function(S){
				BGI.init();
			});
		} else {
			eh.addHandler(window, 'load', BGI.init);
		}
	} catch(err){
		
	}
	window.BGI =  BGI;
})(window);
(function(){function ua(a){function e(a){function w(){e.onreadystatechange=e.onload=null;a.callback&&a.callback.apply(a)}var e=document.createElement("script");"undefined"!=typeof a.id&&(e.id=a.id);e.setAttribute("type","text/javascript");e.setAttribute("src",a.url);e.setAttribute("charset","utf-8");document.getElementsByTagName("head")[0].appendChild(e);e.onreadystatechange=function(){"loaded"!=this.readyState&&"complete"!=this.readyState||w()};e.onload=e.onerror=w}function f(){for(g.zid=g.zid||
"";g.funList[0];){var a=g.funList.shift();a&&a(g.zid)}}var g=window.__zpCMSDCB;g||(g=window.__zpCMSDCB=function(a){g.zid||g.bw||(g.bw=g.zid=g.zid||g.bw||a&&a.data||"")});g.funList=g.cE=g.funList||g.cE||[];g.bw=g.zid=g.zid||g.bw||a.zid;g.funList.push(a.fun);(g.isGet||g.ds||g.zid)&&f();g.zid||g.isTouch||g.dj||(g.isTouch=1,g.dj=1,e({url:H("//cms.gtags.net/g?z=__zpCMSDCB")+"&a="+a.a,callback:function(){g.isGet=1;g.ds=1;f()}}))}function W(){var a=navigator.userAgent||"";return-1<a.indexOf("MSIE 8.0")||
-1<a.indexOf("MSIE 7.0")||-1<a.indexOf("MSIE 6.0")?!0:!1}function la(a){for(var e in a)return!1;return!0}var M=navigator.userAgent.toLowerCase()||"";if(-1<M.indexOf("spider")||-1<M.indexOf("msnbot")||-1<M.indexOf("networkbench"))return!1;var t=document,p=window,ma=navigator,R=Image,N=Array,k=encodeURIComponent,a=decodeURIComponent,X="",I="",Y="",na,Z=0,oa=function(w){w=k(w)+"=";var e=t.cookie.indexOf(w),f="";-1<e&&(f=t.cookie.indexOf(";",e),-1==f&&(f=t.cookie.length),f=a(t.cookie.substring(e+w.length,
f)));return f},S=function(a){var e={};if(0<a.indexOf("?")){a=a.substring(a.indexOf("?")+1);0<a.indexOf("#")&&(a=a.substring(0,a.indexOf("#")));a=a.split("&");for(var f=0;f<a.length;f++)e[a[f].split("=")[0]]=a[f].split("=")[1]}if(void 0==e.zpclkid||""==e.zpclkid)e.zpclkid=window.__zpclkid;return e},aa=function(a,e,f){a.addEventListener?a.addEventListener(e,f,!1):a.attachEvent?a.attachEvent("on"+e,f):a["on"+e]=f},H=function(a){var e="";try{e="https:"==t.location.protocol?"https:":"http:"}catch(f){}return e+
a},pa=function(){var a=p.location.href;return a&&""!=a?a.replace(/\s/g," "):""},ba=function(){var a="";try{a=t.referrer}catch(e){}if(""==a)try{opener&&opener.location&&(a=opener.location.href)}catch(e){}return a&&""!=a?a.replace(/\s/g," "):a},va=function(a){return a?a:(a=pa().match(/[\w-]+\.(com|net|org|gov|cc|biz|info|cn|cc|tv|hk|biz|asia|me|mobi|name|info|so|co|in|la)(\.(cn|hk))*/))&&0<a.length?a[0]:null},m=function(a){a&&(a=a.replace(/[\s#,|]/g," "));return a},G=function(a){a&&"string"==typeof a&&
(a=a.replace(/^(\s|\u00A0)+/,"").replace(/(\s|\u00A0)+$/,""));return a},D=[["m.baidu","word"],["wap.baidu","word"],["opendata.baidu","wd"],["baidu","word"],["baidu","wd"],["baidu","q1"],["baidu","kw"],["google","q"],["soso","w"],["sogou","query"],["youdao","q"],["bing","q"],["yahoo","p"],["so.360.cn","q"],["360so","q"],["360sou","q"],["so.com","q"],["ask","q"],["3721","name"],["vent","kw"],["ucweb","keyword"],["ucweb","word"],["114so","kw"],["haosou","q"],["chinaso","q"],["zhongsou","w"],["etao.com",
"q"],[".sm.cn","q"]],ca=function(a){var e=/^https?:\/\/(.*?)($|\/.*)/.exec(a);if(null!=e){var f="",f=e[1];a=S(a);for(e=0;e<D.length;e++)if(0<=f.indexOf(D[e][0])&&"undefined"!=typeof a[D[e][1]])return[2,m(f),"","",m(a[D[e][1]]),""];return[3,m(f),"","","",""]}return[3,m(a),"","","",""]};(new function(){function w(a,c){var b="rid="+c+"&zid="+I;a=0<=a.indexOf("?")?a+("&"+b):a+("?"+b);var d=document.createElement("iframe");d.setAttribute("scrolling","no");d.frameBorder="0";d.src=a;d.style.cssText="width:1px;height:1px;position:fixed;_position:absolute;left:0px;top:0px;margin:0px;padding:0px;z-index:2147483648";
setTimeout(function(){try{document.body&&document.body.insertBefore(d,document.body.firstChild)}catch(b){setTimeout(arguments.callee,13)}},13);setTimeout(function(){try{d.parentNode.removeChild(d)}catch(b){}},1E4)}var e=!1,f=!1,g=null,L=0,V=0,Q=0,K=0,h=4,q="",E="",n="",F="",z="",T=0,M=0,A="",u="",J="",v="w",B=function(a){return a instanceof N&&2==a.length?a[1]:""},r="",da=va(),O="",l="",P="",ea="",d="",fa="",U={},qa={_addOrganic:function(a){a instanceof N&&3==a.length&&D.push([a[1],a[2]])},_setAccount:function(a){Y=
r=B(a)},_setDomain:function(a){da=B(a)},_setPageID:function(a){l=B(a)},_setPageType:function(a){P=B(a)},_setParams:function(a){if(a instanceof N){var c=a.length;16<c&&(c=16);for(var b=1,e=[];b<c;)e.push(k(G(a[b]))),b++;d=e.join(",")}},_setUserID:function(a){O=B(a)},_setMType:function(a){a instanceof N&&2==a.length&&("p"==a[1]?v="p":""==a[1]&&(v=""))},_setSiteID:function(a){ea=B(a)}},C="",ga="",ha="",ia="",ja="",aa=function(){if(""!=v&&!p.__zp_smartpixel_list[v+"_"+r]){var a=H("//cms.gtags.net/"+v)+
"?a="+r,a=a+("&zid="+I);""!=O&&(a+="&xid="+O);if("w"==v){p.__zp_smartpixel_list[v+"_"+r]=!0;var c=t.createElement("iframe");c.setAttribute("scrolling","no");c.frameBorder="0";c.src=a;c.style.cssText="width:1px;height:1px;position:fixed;_position:absolute;left:0px;top:0px;margin:0px;padding:0px;z-index:2147483648";var b=t.createElement("iframe");b.setAttribute("scrolling","no");b.frameBorder="0";b.src="about:blank";b.style.cssText="width:1px;height:1px;position:fixed;_position:absolute;left:0px;top:0px;margin:0px;padding:0px;z-index:2147483648";
setTimeout(function(){try{t.body.insertBefore(c,t.body.firstChild),t.body.insertBefore(b,t.body.firstChild)}catch(a){setTimeout(arguments.callee,13)}},13);setTimeout(function(){try{c.parentNode.removeChild(c),b.parentNode.removeChild(b)}catch(a){}},1E4)}else if("p"==v){var d=new R;d.src=a;p.__zp_smartpixel_list[v+"_"+r]=d}}},ra=function(a){var c="",b="a="+r,b=b+("&zid="+I);""!=J&&(b=b+"&rid="+k(J));""!=O&&(b=b+"&uid="+k(O));if(2==a)c="imp/dasp",""!=l&&(b=b+"&pi="+l),""!=P&&(b=b+"&pt="+P),""!=d&&(b=
b+"&args="+d);else if(3==a){c="imp/dasp3";p.zamplus_tag_params||(p.zamplus_tag_params={});var b=b+"&ext_args=",e;a=p.zamplus_tag_params;a=na||a;C="";if("object"==typeof a)for(e in a)if(a.hasOwnProperty(e)){var g=G(e),f=a[e];if("p_zp_type"==g){if("string"==typeof f||"number"==typeof f)ga=k(G(f))}else if("p_zp_uuid"==g){if("string"==typeof f||"number"==typeof f)ha=k(G(f))}else if("p_zp_conversion"==g){if("string"==typeof f||"number"==typeof f)ia=k(G(f))}else if("p_zp_convinfo"==g){if("string"==typeof f||
"number"==typeof f)ja=k(G(f))}else if("p_zp_prodstype"==g){if("string"==typeof f||"number"==typeof f)fa=k(G(f))}else if("p_zp_prods"==g){if(!("object"!=typeof f||f instanceof Array||la(f)))for(var w in f)""!=f[w]&&(U[w]=f[w])}else if(f instanceof N){for(var m in f)f.hasOwnProperty(m)&&(f[m]=k(G(f[m])));C+=k(g)+"="+f.join(",")+";"}else if("string"==typeof f||"number"==typeof f||"boolean"==typeof f)C+=k(g)+"="+k(G(f))+";"}e=""!=C?C.substring(0,C.length-1):C;b+=k(e)}""!=ga&&(b=b+"&type="+ga);""!=ha&&
(b=b+"&uuid="+ha);""!=ea&&(b=b+"&siteid="+k(ea));b=b+"&vc="+L+"&vt="+V+"&vpc="+K+"&rvt="+Q+"&fr="+T+"&vrt="+M+"&ot="+h;""!=q&&(b=b+"&os="+k(q));""!=E&&(b=b+"&om="+k(E));""!=n&&(b=b+"&oc="+k(n));""!=F&&(b=b+"&ok="+k(F));""!=z&&(b=b+"&oa="+k(z));""!=u&&(b=b+"&u="+k(u));e=p.screen;b=b+"&sc="+k(e.width+"x"+e.height)+"&ch="+k(t.characterSet||t.charset)+"&la="+k(ma.language||ma.userLanguage)+"&ti="+k(t.title)+"&v=3.1.0.15";""!=A&&(b=b+"&ru="+k(A));b=b+"&t=1&r="+Math.random();e=H("//dat.gtags.net/"+c)+"?"+
b;2084<e.length&&W()&&(b=b.replace("&u="+k(u),""),e=(H("//dat.gtags.net/"+c)+"?argserror=true&"+b).substring(0,2084));return[c,e]},sa=function(a,c){try{6<=c.length&&(h=c[0],q=c[1],E=c[2],n=c[3],F=c[4],z=c[5])}catch(d){}var b=[],b=S(u);return"undefined"!=typeof b.zpclkid||"undefined"!=typeof b.utm_source&&"undefined"!=typeof b.utm_campaign&&"undefined"!=typeof b.utm_medium?("undefined"!=typeof b.zpclkid?(E=q="zampda",n=m(b.zpclkid),F=ca(A)[4],z=""):(q=m(b.utm_source),E=m(b.utm_medium),n=m(b.utm_campaign),
F="undefined"!=typeof b.utm_term?m(b.utm_term):ca(A)[4],z="undefined"!=typeof b.utm_content?m(b.utm_content):""),h=1,[!0,[h,q,E,n,F,z].join("|")]):""==A||null==A||"undefined"==A||(new RegExp("^https?://[\\w\\.]*?"+da+"($|/.*|:.*)")).test(A)?a&&0==c.length?(h=4,q=E=n=F=z="",[!0,[h,"||||"].join("|")]):[!1,c.join("|")]:(b=ca(A),2==b[0]||3==b[0]&&a?(h=b[0],q=b[1],F=b[4],E=n=z="",[!0,b.join("|")]):[!1,c.join("|")])},ta=function(a){a=S(u);return"undefined"!=typeof a.zpclkid?a.zpclkid:""},ka=function(a){if(0==
a.length)return!1;for(i in a)if(a.hasOwnProperty(i)&&qa.hasOwnProperty(a[i][0]))qa[a[i][0]](a[i]);return""==r?!1:!0};this.pageView=function(){"undefined"!=typeof _zpq&&(f=ka(_zpq));"undefined"!=typeof _zampq&&(e=ka(_zampq));window.__zpSMConfig=window.__zpSMConfig||[];if(!e&&!f){for(;!e&&0<__zpSMConfig.length;){var h=__zpSMConfig.shift();h&&(e=ka(h.query||[]),na=h.args,Z=h.nosp)}if(!e)return}p.__zp_smartpixel_list||(p.__zp_smartpixel_list={accout_map:{}});0<arguments.length?(A=u,u=arguments[0],u=u.replace(/\t|\n|\r/g,
"")):(u=pa(),A=ba());ua({fun:function(c){I=c;c=new Date;c.setTime(c.getTime()+63072E6);var b=V=L=0,h=Q=0;K=0;var q;q=String(Date.parse(new Date));q=q.substr(0,q.length-3);var F="",E=ta(u),z="",m=oa("__xsptplus"+r).split("#"),n=!1,v=[],C=0;if(!m||5>m.length)n=!0;else{var F=m[2],z=m[4],B=m[0].split("."),v=m[1].split("|");if(5!=B.length||6!=v.length)n=!0;else{L=B[1];b=B[2];h=B[3];K=B[4];try{C=(new Date(parseInt(h+"000"))).getDate()}catch(N){}1800<=q-h&&(n=!0);C!=(new Date(parseInt(q+"000"))).getDate()&&
(n=!0)}}m=[!0,""];0<h&&(M=parseInt((q-h)/86400));n?(L++,T=1,J=E,K=0,b=q,m=sa(n,v)):(m=sa(n,v),p.__zp_smartpixel_list.accout_map&&"undefined"!=typeof p.__zp_smartpixel_list.accout_map[r]&&(m[0]=!1),(n=m[0])?(L++,T=1,J=E,K=0,b=q):(J=F,V=q-b,Q=q-h));h=S(u);h.zpclkid&&h.zpdl&&decodeURIComponent(h.zpdl)&&z!=h.zpclkid&&(z=h.zpclkid,X=decodeURIComponent(h.zpdl));K++;h=r+"."+L+"."+b+"."+q+"."+K+"#"+m[1]+"#"+J+"#"+I+"#"+z;b=da;h=k("__xsptplus"+r)+"="+k(h);c instanceof Date&&(h+="; expires="+c.toGMTString());
h+="; path=/";b&&(h+="; domain="+b);t.cookie=h;p.__zp_smartpixel_list.accout_map||(p.__zp_smartpixel_list.accout_map={});p.__zp_smartpixel_list.accout_map[r]=1;X&&w(X,ta(u));if(!Z){b=b=c="";if(e)b=ra(3);else if(f){c={};if("240"==l)c.ptype="homepage";else if("241"==l)c.ptype="regpage";else if("242"==l)""!=d&&(c.userid=a(d)),c.ptype="regSuccPage";else if("243"==l)""!=d&&(b=d.split(","),3<=b.length&&(c.productId_list=a(b[0]),c.totalPrice=a(b[1]),c.totalNum=a(b[2]))),c.ptype="mycartPage";else if("244"==
l)""!=d&&(b=d.split(","),3<=b.length&&(c.productId_list=a(b[0]),c.totalPrice=a(b[1]),c.totalNum=a(b[2]))),c.ptype="orderInfoPage";else if("245"==l)""!=d&&(b=d.split(","),3<=b.length&&(c.productId_list=a(b[0]),c.totalPrice=a(b[1]),c.totalNum=a(b[2]))),c.ptype="orderInfoPage";else if("246"==l)""!=d&&(b=d.split(","),3<=b.length&&(c.productId=a(b[0]),c.inStock=a(b[1]),c.isWine=a(b[2]))),c.ptype="productPage";else if("247"==l)""!=d&&(b=d.split(","),4<=b.length&&(c.productId_list=a(b[0]),c.catname=a(b[1]),
c.catid=a(b[2]),c.orderby=a(b[3]))),c.ptype="categoryPage";else if("248"==l)""!=d&&(b=d.split(","),3<=b.length&&(c.productId_list=a(b[0]),c.keyword=a(b[1]),c.orderby=a(b[2]))),c.ptype="searchPage";else if("358"==l)""!=d&&(c.cityid=a(d)),c.ptype="homepage";else if("360"==l)""!=d&&(b=d.split(","),2<=b.length&&(c.channelid=a(b[0]),c.categoryid=a(b[1]))),c.ptype="category";else if("361"==l)""!=d&&(c.productid=a(d)),c.ptype="detailpage";else if("362"==l)""!=d&&(c.productid=a(d)),c.ptype="shoppingcart";
else if("457"==l)c.ptype="orderinfo";else if("809"==l)c.ptype="homepage";else if("810"==l)c.ptype="logregpage",""!=d&&(c.action=a(d));else if("811"==l)c.ptype="regSuccPage",""!=d&&(c.userid=a(d));else if("812"==l)c.ptype="searchPage",""!=d&&(b=d.split(","),3<=b.length&&(c.productId_list=a(b[0]),c.keyword=a(b[1]),c.orderby=a(b[2])));else if("813"==l)c.ptype="categoryPage",""!=d&&(b=d.split(","),4<=b.length&&(c.productId_list=a(b[0]),c.catname=a(b[1]),c.catid=a(b[2]),c.orderby=a(b[3])));else if("814"==
l)c.ptype="topicPage",""!=d&&(b=d.split(","),2<=b.length&&(c.productId_list=a(b[0]),c.topicName=a(b[1])));else if("815"==l)c.ptype="productPage",""!=d&&(b=d.split(","),2<=b.length&&(c.productId=a(b[0]),c.inStock=a(b[1])));else if("816"==l)c.ptype="mycartPage",""!=d&&(b=d.split(","),3<=b.length&&(c.productId_list=a(b[0]),c.totalPrice=a(b[1]),c.totalNum=a(b[2])));else if("817"==l)c.ptype="orderInfoPage",""!=d&&(b=d.split(","),3<=b.length&&(c.productId_list=a(b[0]),c.totalPrice=a(b[1]),c.totalNum=a(b[2])));
else if("818"==l)c.ptype="orderSuccPage",""!=d&&(b=d.split(","),3<=b.length&&(c.productId_list=a(b[0]),c.totalPrice=a(b[1]),c.totalNum=a(b[2])));else if("752"==l)c.ptype="homepage";else if("753"==l)c.ptype="regpage";else if("754"==l)c.ptype="regSuccPage";else if("755"==l)c.ptype="familysalesPage";else if("756"==l)c.ptype="chanelPage",""!=d&&(c.chanelName=a(d));else if("757"==l)c.ptype="searchPage",""!=d&&(b=d.split(","),3<=b.length&&(c.productId_list=a(b[0]),c.keyword=a(b[1]),c.orderby=a(b[2])));
else if("758"==l)c.ptype="categoryPage",""!=d&&(b=d.split(","),4<=b.length&&(c.productId_list=a(b[0]),c.catname=a(b[1]),c.brand=a(b[2]),c.orderby=a(b[3])));else if("759"==l)c.ptype="productPage",""!=d&&(b=d.split(","),4<=b.length&&(c.productId=a(b[0]),c.inStock=a(b[1]),c.inventoryDiv=a(b[2]),c.flashBuyTime=a(b[3])));else if("760"==l)c.ptype="mycartPage",""!=d&&(b=d.split(","),3<=b.length&&(c.productId_list=a(b[0]),c.totalPrice=a(b[1]),c.totalNum=a(b[2])));else if("761"==l)c.ptype="orderInfoPage",
""!=d&&(b=d.split(","),3<=b.length&&(c.productId_list=a(b[0]),c.totalPrice=a(b[1]),c.totalNum=a(b[2])));else if("762"==l)c.ptype="orderSuccPage",""!=d&&(b=d.split(","),3<=b.length&&(c.productId_list=a(b[0]),c.totalPrice=a(b[1]),c.totalNum=a(b[2])));else if("854"==l)c.ptype="homepage";else if("855"==l)c.ptype="logregpage",""!=d&&(c.action=a(d));else if("856"==l)c.ptype="regSuccPage",""!=d&&(c.userid=a(d));else if("857"==l)c.ptype="specialPage",""!=d&&(b=d.split(","),3<=b.length&&(c.productId_list=
a(b[0]),c.keyword=a(b[1]),c.orderby=a(b[2])));else if("858"==l)c.ptype="promotionsPage",""!=d&&(b=d.split(","),2<=b.length&&(c.productId_list=a(b[0]),c.orderby=a(b[1])));else if("859"==l)c.ptype="topicPage",""!=d&&(b=d.split(","),2<=b.length&&(c.productId_list=a(b[0]),c.topicName=a(b[1])));else if("860"==l)c.ptype="productPage",""!=d&&(b=d.split(","),2<=b.length&&(c.productId=a(b[0]),c.inStock=a(b[1])));else if("861"==l)c.ptype="mycartPage",""!=d&&(b=d.split(","),3<=b.length&&(c.productId_list=a(b[0]),
c.totalPrice=a(b[1]),c.totalNum=a(b[2])));else if("862"==l)c.ptype="orderInfoPage",""!=d&&(b=d.split(","),3<=b.length&&(c.productId_list=a(b[0]),c.totalPrice=a(b[1]),c.totalNum=a(b[2])));else if("863"==l)c.ptype="orderSuccPage",""!=d&&(b=d.split(","),3<=b.length&&(c.productId_list=a(b[0]),c.totalPrice=a(b[1]),c.totalNum=a(b[2])));else if(c.pagetype=P,""!=d)for(b=d.split(","),h=0;h<b.length;h++)c[P+"_k"+(h+1)]=a(b[h]).split(",");p.zamplus_tag_params=c;b=ra(3)}c=b[0];b=b[1];g=new R;p.__zp_smartpixel_list[c]||
(p.__zp_smartpixel_list[c]=[]);p.__zp_smartpixel_list[c].push(g);g.src=b;T=0}aa();""!=ia&&(b="a="+r+"&c="+ia+"&zid="+I+"&allow=0&type=23",""!=J&&(b=b+"&i="+k(J)),""!=ja&&(b=b+"&info="+ja),""!=u&&(b=b+"&u="+k(u)),""!=A&&(b=b+"&ru="+k(A)),b+="&r="+Math.random(),c=H("//ut.gtags.net/imp/conv")+"?"+b,2084<c.length&&W()&&(b=b.replace("&u="+k(u),""),c=(H("//ut.gtags.net/imp/conv")+"?argserror=true&"+b).substring(0,2084)),b=new R,p.__zp_smartpixel_list["//ut.gtags.net/imp/conv_"+r]=b,b.src=c);if(""!=fa&&
!la(U)){c="a="+r+"&t="+fa;for(var D in U)c+="&"+D+"="+k(G(U[D]));c+="&_="+(Math.random()+"").substr(2);D=H("//ut.gtags.net/imp/material")+"?"+c;2084<D.length&&W()||(c=new R,p.__zp_smartpixel_list["//ut.gtags.net/imp/material"]=c,c.src=D)}},a:r,zid:oa("__xsptplus"+r).split("#")[3]});f&&(_zpq=[]);e&&(_zampq=[])}}).pageView();window.__zampBroadcast||(window.__zampBroadcast=function(){try{var a=function(e,f){f=f||"opener.top";m[f]||k.push(e);for(var h=0,g;h<e.frames.length&&(g=e.frames[h]);h++)a(g,f+
".frames["+h+"]")},e=function(a,g){g=g||"opener.top";if(a==opener)f=g;else for(var h=0,k;h<a.frames.length&&(k=a.frames[h]);h++)e(k,g+".frames["+h+"]")},f="",g=opener.top,k=[],m={};e(g);(function(a,e){var f=arguments.callee;k.push(a);m[e]=1;a.parent!=a&&f(a.parent,e.replace(/\.[^\.]+$/i,""))})(opener,f);a(g,"");(function(){if(k[0]){var a=k.shift();try{a.postMessage({token:"catchLanding",landing:document.location.href,sourceUrl:ba(),sourceFramePath:f},"*")}catch(e){}setTimeout(arguments.callee,1)}})()}catch(Q){}},
window.__zampBroadcast());(function(){function a(){k||(k=1,clearInterval(g),g=setInterval(function(){null!=I&&null!=Y&&(clearInterval(g),(new Image).src=H("//dat.gtags.net/imp/hm")+"?zid="+I+"&a="+Y+"&u="+encodeURIComponent(document.location)+"&ru="+encodeURIComponent(ba())+"&_="+Math.random())},50))}function e(){try{var e=function(e){try{var g=e.accelerationIncludingGravity;h=g.x;_y=g.y;_z=g.z;if(Math.abs(h-_lastX)>f||Math.abs(_y-_lastY)>f||Math.abs(_z-_lastZ)>f)m=1,a();_lastX=h;_lastY=_y;_lastZ=
_z}catch(k){}};if(!m&&(top.addEventListener||top.removeEventListener)){top.DeviceMotionEvent&&(top.addEventListener("devicemotion",e,!1),top.addEventListener("devicemotion",e,!1),top.addEventListener("devicemotion",e,!1));var f=.04,h=_y=_z=_lastX=_lastY=_lastZ=0}}catch(g){}}function f(e){function f(n){clearTimeout(m);m=setTimeout(function(){for(var m=0;m<g.length-1;m++){var n=g[m],p=g[m+1];if(null==n||null==p)return;if(n[0]!=p[0]||n[1]!=p[1]){m=e;n=f;m.removeEventListener?m.removeEventListener("mousemove",
n,!1):m.detachEvent?m.detachEvent("onmousemove",n):m.onmousemove=null;a();return}}g=[];k=null},30);document.all?(x=n.clientX,y=n.clientY):(x=n.pageX,y=n.pageY);k&&g.push([x-k[0],y-k[1]]);k=[x,y]}var g=[],k,m;aa(e,"mousemove",f)}if(!Z){var g,k=0,m=0;e();f(document.body)}})()})();
(function(){function _getProtocol(){return window.location&&window.location.protocol&&window.location.protocol.toString()=="https:"?"https:":"http:"}function _getLocation(){var a=window.location.href;if(a&&a!=""){return a.replace(/\s/g," ")}return""}function _getReferrer(){var a="";try{a=document.referrer}catch(ex){}if(a==""){try{if(opener&&opener.location){a=opener.location.href}}catch(ex){}}if(a&&a!=""){return a.replace(/\s/g," ")}return a}function _setVals(a,b){var c=[];var j=self._zp_conversion_query.length;var i=0;while(i<j){var d=self._zp_conversion_query[i];if(d instanceof Array&&d.length==2){c.push(encodeURIComponent(d[0])+"="+encodeURIComponent(d[1]))}i++}for(var e in b){if(b.hasOwnProperty(e)){var f=b[e];c.push(encodeURIComponent(e)+"="+encodeURIComponent(f))}}if(a.indexOf("?")==-1){return a+"?"+c.join("&")}else{return a+"&"+c.join("&")}}try{do{if((typeof self._zp_conversion_query=="undefined")||!(self._zp_conversion_query instanceof Array)){break}if(typeof self._zp_flags=="undefined"){self._zp_flags={}}if(typeof self._zp_flags[self._zp_conversion_query]=="undefined"){self._zp_flags[self._zp_conversion_query]=0}else{break}var g=_setVals(_getProtocol()+"//ut.gtags.net/imp/conv",{"u":_getLocation(),"ru":_getReferrer(),"r":Math.random()});if(!window.__zp_trackingList){window.__zp_trackingList=[]}var h=window.__zp_trackingList;h[h.push(new Image())-1].src=g}while(false)}catch(ex){if(typeof console!="undefined"){if(typeof console.error!="undefined"){console.error(ex.message)}else if(typeof console.log!="undefined"){console.log(ex.message)}}}})();
/*!
 * jQuery Form Plugin
 * version: 2.67 (12-MAR-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {

/*
	Usage Note:
	-----------
	Do not use both ajaxSubmit and ajaxForm on the same form.  These
	functions are intended to be exclusive.  Use ajaxSubmit if you want
	to bind your own submit handler to the form.  For example,

	$(document).ready(function() {
		$('#myForm').bind('submit', function(e) {
			e.preventDefault(); // <-- important
			$(this).ajaxSubmit({
				target: '#output'
			});
		});
	});

	Use ajaxForm when you want the plugin to manage all the event binding
	for you.  For example,

	$(document).ready(function() {
		$('#myForm').ajaxForm({
			target: '#output'
		});
	});

	When using ajaxForm, the ajaxSubmit function will be invoked for you
	at the appropriate time.
*/

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
	// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
	if (!this.length) {
		log('ajaxSubmit: skipping submit process - no element selected');
		return this;
	}

	if (typeof options == 'function') {
		options = { success: options };
	}

	var action = this.attr('action');
	var url = (typeof action === 'string') ? $.trim(action) : '';
	if (url) {
		// clean url (don't include hash vaue)
		url = (url.match(/^([^#]+)/)||[])[1];
	}
	url = url || window.location.href || '';

	options = $.extend(true, {
		url:  url,
		type: this[0].getAttribute('method') || 'GET', // IE7 massage (see issue 57)
		iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
	}, options);

	// hook for manipulating the form data before it is extracted;
	// convenient for use with rich editors like tinyMCE or FCKEditor
	var veto = {};
	this.trigger('form-pre-serialize', [this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
		return this;
	}

	// provide opportunity to alter form data before it is serialized
	if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSerialize callback');
		return this;
	}

	var n,v,a = this.formToArray(options.semantic);
	if (options.data) {
		options.extraData = options.data;
		for (n in options.data) {
			if(options.data[n] instanceof Array) {
				for (var k in options.data[n]) {
					a.push( { name: n, value: options.data[n][k] } );
				}
			}
			else {
				v = options.data[n];
				v = $.isFunction(v) ? v() : v; // if value is fn, invoke it
				a.push( { name: n, value: v } );
			}
		}
	}

	// give pre-submit callback an opportunity to abort the submit
	if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSubmit callback');
		return this;
	}

	// fire vetoable 'validate' event
	this.trigger('form-submit-validate', [a, this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
		return this;
	}

	var q = $.param(a);

	if (options.type.toUpperCase() == 'GET') {
		options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
		options.data = null;  // data is null for 'get'
	}
	else {
		options.data = q; // data is the query string for 'post'
	}

	var $form = this, callbacks = [];
	if (options.resetForm) {
		callbacks.push(function() { $form.resetForm(); });
	}
	if (options.clearForm) {
		callbacks.push(function() { $form.clearForm(); });
	}

	// perform a load on the target only if dataType is not provided
	if (!options.dataType && options.target) {
		var oldSuccess = options.success || function(){};
		callbacks.push(function(data) {
			var fn = options.replaceTarget ? 'replaceWith' : 'html';
			$(options.target)[fn](data).each(oldSuccess, arguments);
		});
	}
	else if (options.success) {
		callbacks.push(options.success);
	}

	options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
		var context = options.context || options;   // jQuery 1.4+ supports scope context 
		for (var i=0, max=callbacks.length; i < max; i++) {
			callbacks[i].apply(context, [data, status, xhr || $form, $form]);
		}
	};

	// are there files to upload?
	var fileInputs = $('input:file', this).length > 0;
	var mp = 'multipart/form-data';
	var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

	// options.iframe allows user to force iframe mode
	// 06-NOV-09: now defaulting to iframe mode if file input is detected
   if (options.iframe !== false && (fileInputs || options.iframe || multipart)) {
	   // hack to fix Safari hang (thanks to Tim Molendijk for this)
	   // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
	   if (options.closeKeepAlive) {
		   $.get(options.closeKeepAlive, fileUpload);
		}
	   else {
		   fileUpload();
		}
   }
   else {
		$.ajax(options);
   }

	// fire 'notify' event
	this.trigger('form-submit-notify', [this, options]);
	return this;


	// private function for handling file uploads (hat tip to YAHOO!)
	function fileUpload() {
		var form = $form[0];

		if ($(':input[name=submit],:input[id=submit]', form).length) {
			// if there is an input with a name or id of 'submit' then we won't be
			// able to invoke the submit fn on the form (at least not x-browser)
			alert('Error: Form elements must not have name or id of "submit".');
			return;
		}
		
		var s = $.extend(true, {}, $.ajaxSettings, options);
		s.context = s.context || s;
		var id = 'jqFormIO' + (new Date().getTime()), fn = '_'+id;
		var $io = $('<iframe id="' + id + '" name="' + id + '" src="'+ s.iframeSrc +'" />');
		var io = $io[0];

		$io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

		var xhr = { // mock object
			aborted: 0,
			responseText: null,
			responseXML: null,
			status: 0,
			statusText: 'n/a',
			getAllResponseHeaders: function() {},
			getResponseHeader: function() {},
			setRequestHeader: function() {},
			abort: function() {
				log('aborting upload...');
				var e = 'aborted';
				this.aborted = 1;
				$io.attr('src', s.iframeSrc); // abort op in progress
				xhr.error = e;
				s.error && s.error.call(s.context, xhr, 'error', e);
				g && $.event.trigger("ajaxError", [xhr, s, e]);
				s.complete && s.complete.call(s.context, xhr, 'error');
			}
		};

		var g = s.global;
		// trigger ajax global events so that activity/block indicators work like normal
		if (g && ! $.active++) {
			$.event.trigger("ajaxStart");
		}
		if (g) {
			$.event.trigger("ajaxSend", [xhr, s]);
		}

		if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
			if (s.global) { 
				$.active--;
			}
			return;
		}
		if (xhr.aborted) {
			return;
		}

		var timedOut = 0;

		// add submitting element to data if we know it
		var sub = form.clk;
		if (sub) {
			var n = sub.name;
			if (n && !sub.disabled) {
				s.extraData = s.extraData || {};
				s.extraData[n] = sub.value;
				if (sub.type == "image") {
					s.extraData[n+'.x'] = form.clk_x;
					s.extraData[n+'.y'] = form.clk_y;
				}
			}
		}

		// take a breath so that pending repaints get some cpu time before the upload starts
		function doSubmit() {
			// make sure form attrs are set
			var t = $form.attr('target'), a = $form.attr('action');

			// update form attrs in IE friendly way
			form.setAttribute('target',id);
			if (form.getAttribute('method') != 'POST') {
				form.setAttribute('method', 'POST');
			}
			if (form.getAttribute('action') != s.url) {
				form.setAttribute('action', s.url);
			}

			// ie borks in some cases when setting encoding
			if (! s.skipEncodingOverride) {
				$form.attr({
					encoding: 'multipart/form-data',
					enctype:  'multipart/form-data'
				});
			}

			// support timout
			if (s.timeout) {
				setTimeout(function() { timedOut = true; cb(); }, s.timeout);
			}

			// add "extra" data to form if provided in options
			var extraInputs = [];
			try {
				if (s.extraData) {
					for (var n in s.extraData) {
						extraInputs.push(
							$('<input type="hidden" name="'+n+'" value="'+s.extraData[n]+'" />')
								.appendTo(form)[0]);
					}
				}

				// add iframe to doc and submit the form
				$io.appendTo('body');
                io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
				form.submit();
			}
			finally {
				// reset attrs and remove "extra" input elements
				form.setAttribute('action',a);
				if(t) {
					form.setAttribute('target', t);
				} else {
					$form.removeAttr('target');
				}
				$(extraInputs).remove();
			}
		}

		if (s.forceSync) {
			doSubmit();
		}
		else {
			setTimeout(doSubmit, 10); // this lets dom updates render
		}
	
		var data, doc, domCheckCount = 50;

		function cb() {
			if (xhr.aborted) {
				return;
			}
			
			var doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
			if (!doc || doc.location.href == s.iframeSrc) {
				// response not received yet
				return;
			}
            io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

			var ok = true;
			try {
				if (timedOut) {
					throw 'timeout';
				}

				var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
				log('isXml='+isXml);
				if (!isXml && window.opera && (doc.body == null || doc.body.innerHTML == '')) {
					if (--domCheckCount) {
						// in some browsers (Opera) the iframe DOM is not always traversable when
						// the onload callback fires, so we loop a bit to accommodate
						log('requeing onLoad callback, DOM not available');
						setTimeout(cb, 250);
						return;
					}
					// let this fall through because server response could be an empty document
					//log('Could not access iframe DOM after mutiple tries.');
					//throw 'DOMException: not available';
				}

				//log('response detected');
				xhr.responseText = doc.body ? doc.body.innerHTML : doc.documentElement ? doc.documentElement.innerHTML : null; 
				xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
				xhr.getResponseHeader = function(header){
					var headers = {'content-type': s.dataType};
					return headers[header];
				};

				var scr = /(json|script)/.test(s.dataType);
				if (scr || s.textarea) {
					// see if user embedded response in textarea
					var ta = doc.getElementsByTagName('textarea')[0];
					if (ta) {
						xhr.responseText = ta.value;
					}
					else if (scr) {
						// account for browsers injecting pre around json response
						var pre = doc.getElementsByTagName('pre')[0];
						var b = doc.getElementsByTagName('body')[0];
						if (pre) {
							xhr.responseText = pre.textContent;
						}
						else if (b) {
							xhr.responseText = b.innerHTML;
						}
					}			  
				}
				else if (s.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
					xhr.responseXML = toXml(xhr.responseText);
				}
				
				data = httpData(xhr, s.dataType, s);
			}
			catch(e){
				log('error caught:',e);
				ok = false;
				xhr.error = e;
				s.error && s.error.call(s.context, xhr, 'error', e);
				g && $.event.trigger("ajaxError", [xhr, s, e]);
			}
			
			if (xhr.aborted) {
				log('upload aborted');
				ok = false;
			}

			// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
			if (ok) {
				s.success && s.success.call(s.context, data, 'success', xhr);
				g && $.event.trigger("ajaxSuccess", [xhr, s]);
			}
			
			g && $.event.trigger("ajaxComplete", [xhr, s]);

			if (g && ! --$.active) {
				$.event.trigger("ajaxStop");
			}
			
			s.complete && s.complete.call(s.context, xhr, ok ? 'success' : 'error');

			// clean up
			setTimeout(function() {
				$io.removeData('form-plugin-onload');
				$io.remove();
				xhr.responseXML = null;
			}, 100);
		}

		var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
			if (window.ActiveXObject) {
				doc = new ActiveXObject('Microsoft.XMLDOM');
				doc.async = 'false';
				doc.loadXML(s);
			}
			else {
				doc = (new DOMParser()).parseFromString(s, 'text/xml');
			}
			return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
		};
		var parseJSON = $.parseJSON || function(s) {
			return window['eval']('(' + s + ')');
		};
		
		var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4
			var ct = xhr.getResponseHeader('content-type') || '',
				xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
				data = xml ? xhr.responseXML : xhr.responseText;

			if (xml && data.documentElement.nodeName === 'parsererror') {
				$.error && $.error('parsererror');
			}
			if (s && s.dataFilter) {
				data = s.dataFilter(data, type);
			}
			if (typeof data === 'string') {
				if (type === 'json' || !type && ct.indexOf('json') >= 0) {
					data = parseJSON(data);
				} else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
					$.globalEval(data);
				}
			}
			return data;
		};
	}
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *	is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *	used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
	// in jQuery 1.3+ we can fix mistakes with the ready state
	if (this.length === 0) {
		var o = { s: this.selector, c: this.context };
		if (!$.isReady && o.s) {
			log('DOM not ready, queuing ajaxForm');
			$(function() {
				$(o.s,o.c).ajaxForm(options);
			});
			return this;
		}
		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	}
	
	return this.ajaxFormUnbind().bind('submit.form-plugin', function(e) {
		if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
			e.preventDefault();
			$(this).ajaxSubmit(options);
		}
	}).bind('click.form-plugin', function(e) {
		var target = e.target;
		var $el = $(target);
		if (!($el.is(":submit,input:image"))) {
			// is this a child element of the submit el?  (ex: a span within a button)
			var t = $el.closest(':submit');
			if (t.length == 0) {
				return;
			}
			target = t[0];
		}
		var form = this;
		form.clk = target;
		if (target.type == 'image') {
			if (e.offsetX != undefined) {
				form.clk_x = e.offsetX;
				form.clk_y = e.offsetY;
			} else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
				var offset = $el.offset();
				form.clk_x = e.pageX - offset.left;
				form.clk_y = e.pageY - offset.top;
			} else {
				form.clk_x = e.pageX - target.offsetLeft;
				form.clk_y = e.pageY - target.offsetTop;
			}
		}
		// clear form vars
		setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
	});
};

// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
	return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic) {
	var a = [];
	if (this.length === 0) {
		return a;
	}

	var form = this[0];
	var els = semantic ? form.getElementsByTagName('*') : form.elements;
	if (!els) {
		return a;
	}
	
	var i,j,n,v,el,max,jmax;
	for(i=0, max=els.length; i < max; i++) {
		el = els[i];
		n = el.name;
		if (!n) {
			continue;
		}

		if (semantic && form.clk && el.type == "image") {
			// handle image inputs on the fly when semantic == true
			if(!el.disabled && form.clk == el) {
				a.push({name: n, value: $(el).val()});
				a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
			}
			continue;
		}

		v = $.fieldValue(el, true);
		if (v && v.constructor == Array) {
			for(j=0, jmax=v.length; j < jmax; j++) {
				a.push({name: n, value: v[j]});
			}
		}
		else if (v !== null && typeof v != 'undefined') {
			a.push({name: n, value: v});
		}
	}

	if (!semantic && form.clk) {
		// input type=='image' are not found in elements array! handle it here
		var $input = $(form.clk), input = $input[0];
		n = input.name;
		if (n && !input.disabled && input.type == 'image') {
			a.push({name: n, value: $input.val()});
			a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
		}
	}
	return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
	//hand off to jQuery.param for proper encoding
	return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
	var a = [];
	this.each(function() {
		var n = this.name;
		if (!n) {
			return;
		}
		var v = $.fieldValue(this, successful);
		if (v && v.constructor == Array) {
			for (var i=0,max=v.length; i < max; i++) {
				a.push({name: n, value: v[i]});
			}
		}
		else if (v !== null && typeof v != 'undefined') {
			a.push({name: this.name, value: v});
		}
	});
	//hand off to jQuery.param for proper encoding
	return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *	  <input name="A" type="text" />
 *	  <input name="A" type="text" />
 *	  <input name="B" type="checkbox" value="B1" />
 *	  <input name="B" type="checkbox" value="B2"/>
 *	  <input name="C" type="radio" value="C1" />
 *	  <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *	   array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
	for (var val=[], i=0, max=this.length; i < max; i++) {
		var el = this[i];
		var v = $.fieldValue(el, successful);
		if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
			continue;
		}
		v.constructor == Array ? $.merge(val, v) : val.push(v);
	}
	return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
	var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
	if (successful === undefined) {
		successful = true;
	}

	if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
		(t == 'checkbox' || t == 'radio') && !el.checked ||
		(t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
		tag == 'select' && el.selectedIndex == -1)) {
			return null;
	}

	if (tag == 'select') {
		var index = el.selectedIndex;
		if (index < 0) {
			return null;
		}
		var a = [], ops = el.options;
		var one = (t == 'select-one');
		var max = (one ? index+1 : ops.length);
		for(var i=(one ? index : 0); i < max; i++) {
			var op = ops[i];
			if (op.selected) {
				var v = op.value;
				if (!v) { // extra pain for IE...
					v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
				}
				if (one) {
					return v;
				}
				a.push(v);
			}
		}
		return a;
	}
	return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function() {
	return this.each(function() {
		$('input,select,textarea', this).clearFields();
	});
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function() {
	return this.each(function() {
		var t = this.type, tag = this.tagName.toLowerCase();
		if (t == 'text' || t == 'password' || tag == 'textarea') {
			this.value = '';
		}
		else if (t == 'checkbox' || t == 'radio') {
			this.checked = false;
		}
		else if (tag == 'select') {
			this.selectedIndex = -1;
		}
	});
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
	return this.each(function() {
		// guard against an input with the name of 'reset'
		// note that IE reports the reset function as an 'object'
		if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
			this.reset();
		}
	});
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
	if (b === undefined) {
		b = true;
	}
	return this.each(function() {
		this.disabled = !b;
	});
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
	if (select === undefined) {
		select = true;
	}
	return this.each(function() {
		var t = this.type;
		if (t == 'checkbox' || t == 'radio') {
			this.checked = select;
		}
		else if (this.tagName.toLowerCase() == 'option') {
			var $sel = $(this).parent('select');
			if (select && $sel[0] && $sel[0].type == 'select-one') {
				// deselect all other options
				$sel.find('option').selected(false);
			}
			this.selected = select;
		}
	});
};

// helper fn for console logging
// set $.fn.ajaxSubmit.debug to true to enable debug logging
function log() {
	if ($.fn.ajaxSubmit.debug) {
		var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
		if (window.console && window.console.log) {
			window.console.log(msg);
		}
		else if (window.opera && window.opera.postError) {
			window.opera.postError(msg);
		}
	}
};

})(jQuery);

/**
 * jQuery Validation Plugin 1.8.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

;(function($) {

$.extend($.fn, {
	// http://docs.jquery.com/Plugins/Validation/validate
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if (!this.length) {
			options && options.debug && window.console && console.warn( "nothing selected, can't validate, returning nothing" );
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data(this[0], 'validator');
		if ( validator ) {
			return validator;
		}

		validator = new $.validator( options, this[0] );
		$.data(this[0], 'validator', validator);

		if ( validator.settings.onsubmit ) {

			// allow suppresing validation by adding a cancel class to the submit button
			this.find("input, button").filter(".cancel").click(function() {
				validator.cancelSubmit = true;
			});

			// when a submitHandler is used, capture the submitting button
			if (validator.settings.submitHandler) {
				this.find("input, button").filter(":submit").click(function() {
					validator.submitButton = this;
				});
			}

			// validate the form on submit
			this.submit( function( event ) {
				if ( validator.settings.debug )
					// prevent form submit to be able to see console output
					event.preventDefault();

				function handle() {
					if ( validator.settings.submitHandler ) {
						if (validator.submitButton) {
							// insert a hidden input as a replacement for the missing submit button
							var hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
						}
						validator.settings.submitHandler.call( validator, validator.currentForm );
						if (validator.submitButton) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						return false;
					}
					return true;
				}

				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}

		return validator;
	},
	// http://docs.jquery.com/Plugins/Validation/valid
	valid: function() {
        if ( $(this[0]).is('form')) {
            return this.validate().form();
        } else {
            var valid = true;
            var validator = $(this[0].form).validate();
            this.each(function() {
				valid &= validator.element(this);
            });
            return valid;
        }
    },
	// attributes: space seperated list of attributes to retrieve and remove
	removeAttrs: function(attributes) {
		var result = {},
			$element = this;
		$.each(attributes.split(/\s/), function(index, value) {
			result[value] = $element.attr(value);
			$element.removeAttr(value);
		});
		return result;
	},
	// http://docs.jquery.com/Plugins/Validation/rules
	rules: function(command, argument) {
		var element = this[0];

		if (command) {
			var settings = $.data(element.form, 'validator').settings;
			var staticRules = settings.rules;
			var existingRules = $.validator.staticRules(element);
			switch(command) {
			case "add":
				$.extend(existingRules, $.validator.normalizeRule(argument));
				staticRules[element.name] = existingRules;
				if (argument.messages)
					settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
				break;
			case "remove":
				if (!argument) {
					delete staticRules[element.name];
					return existingRules;
				}
				var filtered = {};
				$.each(argument.split(/\s/), function(index, method) {
					filtered[method] = existingRules[method];
					delete existingRules[method];
				});
				return filtered;
			}
		}

		var data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.metadataRules(element),
			$.validator.classRules(element),
			$.validator.attributeRules(element),
			$.validator.staticRules(element)
		), element);

		// make sure required is at front
		if (data.required) {
			var param = data.required;
			delete data.required;
			data = $.extend({required: param}, data);
		}

		return data;
	}
});

// Custom selectors
$.extend($.expr[":"], {
	// http://docs.jquery.com/Plugins/Validation/blank
	blank: function(a) {return !$.trim("" + a.value);},
	// http://docs.jquery.com/Plugins/Validation/filled
	filled: function(a) {return !!$.trim("" + a.value);},
	// http://docs.jquery.com/Plugins/Validation/unchecked
	unchecked: function(a) {return !a.checked;}
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

$.validator.format = function(source, params) {
	if ( arguments.length == 1 )
		return function() {
			var args = $.makeArray(arguments);
			args.unshift(source);
			return $.validator.format.apply( this, args );
		};
	if ( arguments.length > 2 && params.constructor != Array  ) {
		params = $.makeArray(arguments).slice(1);
	}
	if ( params.constructor != Array ) {
		params = [ params ];
	}
	$.each(params, function(i, n) {
		source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
	});
	return source;
};

$.extend($.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: [],
		ignoreTitle: false,
		onfocusin: function(element) {
			this.lastActive = element;

			// hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
				this.settings.unhighlight && this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				this.addWrapper(this.errorsFor(element)).hide();
			}
		},
		onfocusout: function(element) {
			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
				this.element(element);
			}
		},
		onkeyup: function(element) {
			if ( element.name in this.submitted || element == this.lastElement ) {
				this.element(element);
			}
		},
		onclick: function(element) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted )
				this.element(element);
			// or option elements, check parent select in that case
			else if (element.parentNode.name in this.submitted)
				this.element(element.parentNode);
		},
		highlight: function(element, errorClass, validClass) {
			if (element.type === 'radio') {
				this.findByName(element.name).addClass(errorClass).removeClass(validClass);
			} else {
				$(element).addClass(errorClass).removeClass(validClass);
			}
		},
		unhighlight: function(element, errorClass, validClass) {
			if (element.type === 'radio') {
				this.findByName(element.name).removeClass(errorClass).addClass(validClass);
			} else {
				$(element).removeClass(errorClass).addClass(validClass);
			}
		}
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
	setDefaults: function(settings) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		accept: "Please enter a value with a valid extension.",
		maxlength: $.validator.format("Please enter no more than {0} characters."),
		minlength: $.validator.format("Please enter at least {0} characters."),
		rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
		range: $.validator.format("Please enter a value between {0} and {1}."),
		max: $.validator.format("Please enter a value less than or equal to {0}."),
		min: $.validator.format("Please enter a value greater than or equal to {0}.")
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $(this.settings.errorLabelContainer);
			this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
			this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = (this.groups = {});
			$.each(this.settings.groups, function(key, value) {
				$.each(value.split(/\s/), function(index, name) {
					groups[name] = key;
				});
			});
			var rules = this.settings.rules;
			$.each(rules, function(key, value) {
				rules[key] = $.validator.normalizeRule(value);
			});

			function delegate(event) {
				var validator = $.data(this[0].form, "validator"),
					eventType = "on" + event.type.replace(/^validate/, "");
				validator.settings[eventType] && validator.settings[eventType].call(validator, this[0] );
			}
			$(this.currentForm)
				.validateDelegate(":text, :password, :file, select, textarea", "focusin focusout keyup", delegate)
				.validateDelegate(":radio, :checkbox, select, option", "click", delegate);

			if (this.settings.invalidHandler)
				$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/form
		form: function() {
			this.checkForm();
			$.extend(this.submitted, this.errorMap);
			this.invalid = $.extend({}, this.errorMap);
			if (!this.valid())
				$(this.currentForm).triggerHandler("invalid-form", [this]);
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
				this.check( elements[i] );
			}
			return this.valid();
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/element
		element: function( element ) {
			element = this.clean( element );
			this.lastElement = element;
			this.prepareElement( element );
			this.currentElements = $(element);
			var result = this.check( element );
			if ( result ) {
				delete this.invalid[element.name];
			} else {
				this.invalid[element.name] = true;
			}
			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/showErrors
		showErrors: function(errors) {
			if(errors) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[name],
						element: this.findByName(name)[0]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function(element) {
					return !(element.name in errors);
				});
			}
			this.settings.showErrors
				? this.settings.showErrors.call( this, this.errorMap, this.errorList )
				: this.defaultShowErrors();
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/resetForm
		resetForm: function() {
			if ( $.fn.resetForm )
				$( this.currentForm ).resetForm();
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			this.elements().removeClass( this.settings.errorClass );
		},

		numberOfInvalids: function() {
			return this.objectLength(this.invalid);
		},

		objectLength: function( obj ) {
			var count = 0;
			for ( var i in obj )
				count++;
			return count;
		},

		hideErrors: function() {
			this.addWrapper( this.toHide ).hide();
		},

		valid: function() {
			return this.size() == 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if( this.settings.focusInvalid ) {
				try {
					$(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
					.filter(":visible")
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger("focusin");
				} catch(e) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep(this.errorList, function(n) {
				return n.element.name == lastActive.name;
			}).length == 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// select all valid inputs inside the form (no submit or reset buttons)
			return $(this.currentForm)
			.find("input, select, textarea")
			.not(":submit, :reset, :image, [disabled]")
			.not( this.settings.ignore )
			.filter(function() {
				!this.name && validator.settings.debug && window.console && console.error( "%o has no name assigned", this);

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength($(this).rules()) )
					return false;

				rulesCache[this.name] = true;
				return true;
			});
		},

		clean: function( selector ) {
			return $( selector )[0];
		},

		errors: function() {
			return $( this.settings.errorElement + "." + this.settings.errorClass, this.errorContext );
		},

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $([]);
			this.toHide = $([]);
			this.currentElements = $([]);
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor(element);
		},

		check: function( element ) {
			element = this.clean( element );

			// if radio/checkbox, validate first element in group instead
			if (this.checkable(element)) {
				element = this.findByName( element.name ).not(this.settings.ignore)[0];
			}

			var rules = $(element).rules();
			var dependencyMismatch = false;
			for (var method in rules ) {
				var rule = { method: method, parameters: rules[method] };
				try {
					var result = $.validator.methods[method].call( this, element.value.replace(/\r/g, ""), element, rule.parameters );

					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result == "dependency-mismatch" ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result == "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor(element) );
						return;
					}

					if( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch(e) {
					this.settings.debug && window.console && console.log("exception occured when checking element " + element.id
						 + ", check the '" + rule.method + "' method", e);
					throw e;
				}
			}
			if (dependencyMismatch)
				return;
			if ( this.objectLength(rules) )
				this.successList.push(element);
			return true;
		},

		// return the custom message for the given element and validation method
		// specified in the element's "messages" metadata
		customMetaMessage: function(element, method) {
			if (!$.metadata)
				return;

			var meta = this.settings.meta
				? $(element).metadata()[this.settings.meta]
				: $(element).metadata();

			return meta && meta.messages && meta.messages[method];
		},

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[name];
			return m && (m.constructor == String
				? m
				: m[method]);
		},

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for(var i = 0; i < arguments.length; i++) {
				if (arguments[i] !== undefined)
					return arguments[i];
			}
			return undefined;
		},

		defaultMessage: function( element, method) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customMetaMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[method],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message == "function" ) {
				message = message.call(this, rule.parameters, element);
			} else if (theregex.test(message)) {
				message = jQuery.format(message.replace(theregex, '{$1}'), rule.parameters);
			}
			this.errorList.push({
				message: message,
				element: element
			});

			this.errorMap[element.name] = message;
			this.submitted[element.name] = message;
		},

		addWrapper: function(toToggle) {
			if ( this.settings.wrapper )
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			return toToggle;
		},

		defaultShowErrors: function() {
			for ( var i = 0; this.errorList[i]; i++ ) {
				var error = this.errorList[i];
				this.settings.highlight && this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				this.showLabel( error.element, error.message );
			}
			if( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if (this.settings.success) {
				for ( var i = 0; this.successList[i]; i++ ) {
					this.showLabel( this.successList[i] );
				}
			}
			if (this.settings.unhighlight) {
				for ( var i = 0, elements = this.validElements(); elements[i]; i++ ) {
					this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not(this.invalidElements());
		},

		invalidElements: function() {
			return $(this.errorList).map(function() {
				return this.element;
			});
		},

		showLabel: function(element, message) {
			var label = this.errorsFor( element );
			if ( label.length ) {
				// refresh error/success class
				label.removeClass().addClass( this.settings.errorClass );

				// check if we have a generated label, replace the message then
				label.attr("generated") && label.html(message);
			} else {
				// create label
				label = $("<" + this.settings.errorElement + "/>")
					.attr({"for":  this.idOrName(element), generated: true})
					.addClass(this.settings.errorClass)
					.html(message || "");
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
				}
				if ( !this.labelContainer.append(label).length )
					this.settings.errorPlacement
						? this.settings.errorPlacement(label, $(element) )
						: label.insertAfter(element);
			}
			if ( !message && this.settings.success ) {
				label.text("");
				typeof this.settings.success == "string"
					? label.addClass( this.settings.success )
					: this.settings.success( label );
			}
			this.toShow = this.toShow.add(label);
		},

		errorsFor: function(element) {
			var name = this.idOrName(element);
    		return this.errors().filter(function() {
				return $(this).attr('for') == name;
			});
		},

		idOrName: function(element) {
			return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
		},

		checkable: function( element ) {
			return /radio|checkbox/i.test(element.type);
		},

		findByName: function( name ) {
			// select by name and filter by form for performance over form.find("[name=...]")
			var form = this.currentForm;
			return $(document.getElementsByName(name)).map(function(index, element) {
				return element.form == form && element.name == name && element  || null;
			});
		},

		getLength: function(value, element) {
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				return $("option:selected", element).length;
			case 'input':
				if( this.checkable( element) )
					return this.findByName(element.name).filter(':checked').length;
			}
			return value.length;
		},

		depend: function(param, element) {
			return this.dependTypes[typeof param]
				? this.dependTypes[typeof param](param, element)
				: true;
		},

		dependTypes: {
			"boolean": function(param, element) {
				return param;
			},
			"string": function(param, element) {
				return !!$(param, element.form).length;
			},
			"function": function(param, element) {
				return param(element);
			}
		},

		optional: function(element) {
			return !$.validator.methods.required.call(this, $.trim(element.value), element) && "dependency-mismatch";
		},

		startRequest: function(element) {
			if (!this.pending[element.name]) {
				this.pendingRequest++;
				this.pending[element.name] = true;
			}
		},

		stopRequest: function(element, valid) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if (this.pendingRequest < 0)
				this.pendingRequest = 0;
			delete this.pending[element.name];
			if ( valid && this.pendingRequest == 0 && this.formSubmitted && this.form() ) {
				$(this.currentForm).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest == 0 && this.formSubmitted) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
				this.formSubmitted = false;
			}
		},

		previousValue: function(element) {
			return $.data(element, "previousValue") || $.data(element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		}

	},

	classRuleSettings: {
		required: {required: true},
		email: {email: true},
		url: {url: true},
		date: {date: true},
		dateISO: {dateISO: true},
		dateDE: {dateDE: true},
		number: {number: true},
		numberDE: {numberDE: true},
		digits: {digits: true},
		creditcard: {creditcard: true}
	},

	addClassRules: function(className, rules) {
		className.constructor == String ?
			this.classRuleSettings[className] = rules :
			$.extend(this.classRuleSettings, className);
	},

	classRules: function(element) {
		var rules = {};
		var classes = $(element).attr('class');
		classes && $.each(classes.split(' '), function() {
			if (this in $.validator.classRuleSettings) {
				$.extend(rules, $.validator.classRuleSettings[this]);
			}
		});
		return rules;
	},

	attributeRules: function(element) {
		var rules = {};
		var $element = $(element);

		for (var method in $.validator.methods) {
			var value = $element.attr(method);
			if (value) {
				rules[method] = value;
			}
		}

		// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
		if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
			delete rules.maxlength;
		}

		return rules;
	},

	metadataRules: function(element) {
		if (!$.metadata) return {};

		var meta = $.data(element.form, 'validator').settings.meta;
		return meta ?
			$(element).metadata()[meta] :
			$(element).metadata();
	},

	staticRules: function(element) {
		var rules = {};
		var validator = $.data(element.form, 'validator');
		if (validator.settings.rules) {
			rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
		}
		return rules;
	},

	normalizeRules: function(rules, element) {
		// handle dependency check
		$.each(rules, function(prop, val) {
			// ignore rule when param is explicitly false, eg. required:false
			if (val === false) {
				delete rules[prop];
				return;
			}
			if (val.param || val.depends) {
				var keepRule = true;
				switch (typeof val.depends) {
					case "string":
						keepRule = !!$(val.depends, element.form).length;
						break;
					case "function":
						keepRule = val.depends.call(element, element);
						break;
				}
				if (keepRule) {
					rules[prop] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[prop];
				}
			}
		});

		// evaluate parameters
		$.each(rules, function(rule, parameter) {
			rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
		});

		// clean number parameters
		$.each(['minlength', 'maxlength', 'min', 'max'], function() {
			if (rules[this]) {
				rules[this] = Number(rules[this]);
			}
		});
		$.each(['rangelength', 'range'], function() {
			if (rules[this]) {
				rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
			}
		});

		if ($.validator.autoCreateRanges) {
			// auto-create ranges
			if (rules.min && rules.max) {
				rules.range = [rules.min, rules.max];
				delete rules.min;
				delete rules.max;
			}
			if (rules.minlength && rules.maxlength) {
				rules.rangelength = [rules.minlength, rules.maxlength];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		// To support custom messages in metadata ignore rule methods titled "messages"
		if (rules.messages) {
			delete rules.messages;
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function(data) {
		if( typeof data == "string" ) {
			var transformed = {};
			$.each(data.split(/\s/), function() {
				transformed[this] = true;
			});
			data = transformed;
		}
		return data;
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/addMethod
	addMethod: function(name, method, message) {
		$.validator.methods[name] = method;
		$.validator.messages[name] = message != undefined ? message : $.validator.messages[name];
		if (method.length < 3) {
			$.validator.addClassRules(name, $.validator.normalizeRule(name));
		}
	},

	methods: {

		// http://docs.jquery.com/Plugins/Validation/Methods/required
		required: function(value, element, param) {
			// check if dependency is met
			if ( !this.depend(param, element) )
				return "dependency-mismatch";
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				// could be an array for select-multiple or a string, both are fine this way
				var val = $(element).val();
				return val && val.length > 0;
			case 'input':
				if ( this.checkable(element) )
					return this.getLength(value, element) > 0;
			default:
				return $.trim(value).length > 0;
			}
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/remote
		remote: function(value, element, param) {
			if ( this.optional(element) )
				return "dependency-mismatch";

			var previous = this.previousValue(element);
			if (!this.settings.messages[element.name] )
				this.settings.messages[element.name] = {};
			previous.originalMessage = this.settings.messages[element.name].remote;
			this.settings.messages[element.name].remote = previous.message;

			param = typeof param == "string" && {url:param} || param;

			if ( this.pending[element.name] ) {
				return "pending";
			}
			if ( previous.old === value ) {
				return previous.valid;
			}

			previous.old = value;
			var validator = this;
			this.startRequest(element);
			var data = {};
			data[element.name] = value;
			$.ajax($.extend(true, {
				url: param,
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				success: function(response) {
					validator.settings.messages[element.name].remote = previous.originalMessage;
					var valid = response === true;
					if ( valid ) {
						var submitted = validator.formSubmitted;
						validator.prepareElement(element);
						validator.formSubmitted = submitted;
						validator.successList.push(element);
						validator.showErrors();
					} else {
						var errors = {};
						var message = response || validator.defaultMessage( element, "remote" );
						errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
						validator.showErrors(errors);
					}
					previous.valid = valid;
					validator.stopRequest(element, valid);
				}
			}, param));
			return "pending";
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/minlength
		minlength: function(value, element, param) {
			return this.optional(element) || this.getLength($.trim(value), element) >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/maxlength
		maxlength: function(value, element, param) {
			return this.optional(element) || this.getLength($.trim(value), element) <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/rangelength
		rangelength: function(value, element, param) {
			var length = this.getLength($.trim(value), element);
			return this.optional(element) || ( length >= param[0] && length <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/min
		min: function( value, element, param ) {
			return this.optional(element) || value >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/max
		max: function( value, element, param ) {
			return this.optional(element) || value <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/range
		range: function( value, element, param ) {
			return this.optional(element) || ( value >= param[0] && value <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/email
		email: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
			return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/url
		url: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
			return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/date
		date: function(value, element) {
			return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/dateISO
		dateISO: function(value, element) {
			return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/number
		number: function(value, element) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/digits
		digits: function(value, element) {
			return this.optional(element) || /^\d+$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/creditcard
		// based on http://en.wikipedia.org/wiki/Luhn
		creditcard: function(value, element) {
			if ( this.optional(element) )
				return "dependency-mismatch";
			// accept only digits and dashes
			if (/[^0-9-]+/.test(value))
				return false;
			var nCheck = 0,
				nDigit = 0,
				bEven = false;

			value = value.replace(/\D/g, "");

			for (var n = value.length - 1; n >= 0; n--) {
				var cDigit = value.charAt(n);
				var nDigit = parseInt(cDigit, 10);
				if (bEven) {
					if ((nDigit *= 2) > 9)
						nDigit -= 9;
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return (nCheck % 10) == 0;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/accept
		accept: function(value, element, param) {
			param = typeof param == "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
			return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/equalTo
		equalTo: function(value, element, param) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $(param).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
				$(element).valid();
			});
			return value == target.val();
		}

	}

});

// deprecated, use $.validator.format instead
$.format = $.validator.format;

})(jQuery);

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
;(function($) {
	var pendingRequests = {};
	// Use a prefilter if available (1.5+)
	if ( $.ajaxPrefilter ) {
		$.ajaxPrefilter(function(settings, _, xhr) {
			var port = settings.port;
			if (settings.mode == "abort") {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = xhr;
			}
		});
	} else {
		// Proxy ajax
		var ajax = $.ajax;
		$.ajax = function(settings) {
			var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
				port = ( "port" in settings ? settings : $.ajaxSettings ).port;
			if (mode == "abort") {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				return (pendingRequests[port] = ajax.apply(this, arguments));
			}
			return ajax.apply(this, arguments);
		};
	}
})(jQuery);

// provides cross-browser focusin and focusout events
// IE has native support, in other browsers, use event caputuring (neither bubbles)

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
;(function($) {
	// only implement if not provided by jQuery core (since 1.4)
	// TODO verify if jQuery 1.4's implementation is compatible with older jQuery special-event APIs
	if (!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener) {
		$.each({
			focus: 'focusin',
			blur: 'focusout'
		}, function( original, fix ){
			$.event.special[fix] = {
				setup:function() {
					this.addEventListener( original, handler, true );
				},
				teardown:function() {
					this.removeEventListener( original, handler, true );
				},
				handler: function(e) {
					arguments[0] = $.event.fix(e);
					arguments[0].type = fix;
					return $.event.handle.apply(this, arguments);
				}
			};
			function handler(e) {
				e = $.event.fix(e);
				e.type = fix;
				return $.event.handle.call(this, e);
			}
		});
	};
	$.extend($.fn, {
		validateDelegate: function(delegate, type, handler) {
			return this.bind(type, function(event) {
				var target = $(event.target);
				if (target.is(delegate)) {
					return handler.apply(target, arguments);
				}
			});
		}
	});
})(jQuery);
//表单提交方法
function fromvalidate ( formid, btnid, Response, Request ) {
	var formid = $(formid), errorsite = '.errorinfo', tips = '.tips', rules = '', messages = '';

	//注册表单提交事件
	$(btnid).click(function(){
		$(tips).hide();//提示框内容清空
		$(formid).submit();
	});

	//报错信息和提示信息
	formid.find(":input").each(function(){
		rules = rules + $(this).attr('name') + ':' + $(this).attr('rules') + ',';
		messages = messages + $(this).attr('name') + ':' + $(this).attr('messages') + ',';
		$(this).blur(function(){
			if($(this).parent().find(errorsite).html()==''){
				$(this).parent().find(errorsite).html('&nbsp;');
			}
			$(this).parent().find(tips).hide()
		}).focus(function(){
			if($(this).parent().find(errorsite).html()=='&nbsp;'){
				$(this).parent().find(errorsite).html('');
				$(this).parent().find(tips).show()
			}
		});
	});
	//表单验证
	// console.log(rules);
	$(formid).validate({
		rules : eval('({'+rules+'})'),
		messages : eval('({'+messages+'})'),		
		errorPlacement : function(error, element) {
			// 显示错误提示信息
			element.parent().find(errorsite).html("&nbsp;");
			error.prependTo(element.parent().find(errorsite));
		},
		submitHandler : function() {
			// 验证后提交动作（AJAX表单提交）
			var options = {
				beforeSubmit : Request,
				success : Response,
				url : formid.attr('formaction') + "?time="+Math.random()+"&callback=?",
				type : 'get',
				dataType : 'json'
			};
			$(formid).ajaxSubmit(options);
		},
		errorClass : "invalid",
		focusInvalid : false,
		onkeyup : false
	});

	// 用户名验证/^[A-Za-z\u4e00-\u9fa5]+\d+[\w\u4e00-\u9fa5]*$|[\w\u4e00-\u9fa5]+$/
	jQuery.validator.addMethod("useridCheck", function(value, element) {
		  var len = value.replace(/[^\x00-]xff]/g,"xx").length;
		  if(len>20 && len<5)return false;//条件3 没办法判断实际长度只能用这个方法
		  if(/^[A-Za-z\u4e00-\u9fa5]+[\w\u4e00-\u9fa5]*$/.test(value))return true;//条件1~2
		  return false;
	}, "以中、英文开头，与数字、下划线组合为5-20字节");

	// 字符验证
	jQuery.validator.addMethod("stringCheck", function(value, element) {
		return this.otional(element) || /^[\u0391-\uFFE5\w]+$/.test(value);
	}, "只能包括中文字、英文字母、数字和下划线");

	// 中文字两个字节
	jQuery.validator.addMethod("byteRangeLength", function(value, element, param) {
		var length = value.length;
		for ( var i = 0; i < value.length; i++) {
			if (value.charCodeAt(i) > 127) {
				length++;
			}
		}
		return this.optional(element)
				|| (length >= param[0] && length <= param[1]);
	}, "请确保输入的值在3-15个字节之间(一个中文字算2个字节)");

	// 密码安全
	jQuery.validator.addMethod("isPassword", function(value, element) {
		  if(/^[A-Za-z0-9]+$/.test(value))return true;
		  return false;
	}, "只能为数字、字母");

	// 身份证号码验证
	jQuery.validator.addMethod("isIdCardNo", function(value, element) {
		return this.optional(element) || isIdCardNo(value);
	}, "请正确输入您的身份证号码");

	// 手机号码验证
	jQuery.validator.addMethod("isMobile", function(value, element) {
		var length = value.length;
		var mobile = /^13[0-9]{9}$|15[0-9]{9}$|18[0-9]{9}$|14[0-9]{9}$|17[0-9]{9}$/;
		return this.optional(element) || (length == 11 && mobile.test(value));
	}, "请正确填写您的手机号码");

	// 电话号码验证
	jQuery.validator.addMethod("isTel", function(value, element) {
		var area = /^\d{3,4}$/;
		var tel = /(^\d{7,8})$/; // 电话号码格式010-12345678
		return this.optional(element) || (tel.test(value)||(area.test(value)));
	}, "请正确填写您的电话号码");

	// 联系电话(手机/电话皆可)验证
	jQuery.validator.addMethod("isPhone", function(value, element) {
		var length = value.length;
		var mobile = /^1{10}$/;
		var tel = /^\d{3,4}-?\d{7,9}$/;
		return this.optional(element) || (tel.test(value) || mobile.test(value));
	}, "请正确填写您的联系电话");

	// 邮政编码验证
	 jQuery.validator.addMethod("isZipCode", function(value, element) {
		 var tel = /^[0-9]{6}$/;
		 return this.optional(element) || (tel.test(value));
	 }, "请正确填写您的邮政编码");

	 //邮箱验证
	  jQuery.validator.addMethod("isEmail", function(value, element) {
		 var email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		 return this.optional(element) || (email.test(value));
	 }, "请正确填写您的邮箱");

	 //尺码转换器男士高度验证
	jQuery.validator.addMethod("isHeight", function(value, element) {
		if( value >= 148 && value <= 192 )return true;
		else return false;
	 }, "请填写适当范围身高(148CM - 192CM)");

	//输入框字数限制
	jQuery.validator.addMethod("isNum", function(value, element) {
		var length = value.length;
		if( length< 140 )return true;
		else return false;
	 }, "请勿超过规定字数");
	
	// 尺码转换器数值验证：3位数值
	jQuery.validator.addMethod("isSizeVal", function(value, element) {
		  var len = value.length;
		  if( value <= 0  )return false;
		  if(len<0 && len>4)return false;//条件3 没办法判断实际长度只能用这个方法
		  if(/^\d{1,3}$|\d.\d$/.test(value))return true;//条件1~2
		  return false;
	}, "请输入最大3位数值,且大于0");

	//数值，大于0
	jQuery.validator.addMethod("isIntVal", function(value, element) {
		  if( value <= 0  )return false;
		  if(/^\d+$/.test(value))return true;//条件1~2
		  return false;
	}, "请输入数值,且大于0");

	//密码不允许空格
	jQuery.validator.addMethod("spacePass", function(value, element) {
		  if(! /\s/g.test(value))return true;
		  return false;
	}, "密码不允许输入空格");
}


function Request(formData, jqForm, options) {
	var queryString = $.param(formData);
	return true;
}

//默认语言设置
$.extend($.validator.messages, {
	required: "这是必填字段",
	remote: "请修正此字段",
	email: "请输入有效的电子邮件地址",
	url: "请输入有效的网址",
	date: "请输入有效的日期",
	dateISO: "请输入有效的日期 (YYYY-MM-DD)",
	number: "请输入有效的数字",
	digits: "只能输入数字",
	creditcard: "请输入有效的信用卡号码",
	equalTo: "你的输入不相同",
	extension: "请输入有效的后缀",
	maxlength: $.validator.format("最多可以输入 {0} 个字符"),
	minlength: $.validator.format("最少要输入 {0} 个字符"),
	rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符串"),
	range: $.validator.format("请输入范围在 {0} 到 {1} 之间的数值"),
	max: $.validator.format("请输入不大于 {0} 的数值"),
	min: $.validator.format("请输入不小于 {0} 的数值")
});