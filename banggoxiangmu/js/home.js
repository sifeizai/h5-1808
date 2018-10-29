document.addEventListener("DOMContentLoaded", function(){
    var rexiao=document.querySelector('.rexiao');
    var nanzhuang=document.querySelector('.nanzhuang');

    var hover_wrap=document.querySelector('.category_hover_wrap');

    rexiao.onmouseover=function(){
        hover_wrap.style.display='block';
        hover_wrap.style.opacity='1';
        rexiao.onmouseout=function(){
            hover_wrap.style.display='none';
        }
    }

    var textbox=document.querySelector("#input_textbox");
    textbox.onclick=function(){
        textbox.value="";  
    }
    var themeName1=document.querySelector("#themeName1");
    var themeName2=document.querySelector("#themeName2");
    var themeName3=document.querySelector("#themeName3");
    themeName1.onmouseover=function(){
        themeName1.style.opacity='0.8';
        themeName1.onmouseout=function(){
            themeName1.style.opacity='1';
        }
    }
    themeName2.onmouseover=function(){
        themeName2.style.opacity='0.8';
        themeName2.onmouseout=function(){
            themeName2.style.opacity='1';
        }
    }
    themeName3.onmouseover=function(){
        themeName3.style.opacity='0.8';
        themeName3.onmouseout=function(){
            themeName3.style.opacity='1';
        }
    }

      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        autoplay:true,
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        },
      }) 

    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
            var status = [200,304];

            if(status.indexOf(xhr.status) != -1){
                var goods = JSON.parse(xhr.responseText);
                var jrtm=document.querySelector('.jrtm');

                    for(let i=0;i<goods.length;i++)(function(n){

                        jrtm.innerHTML+=`
                        <div class="goods_box fl" data-guid="${goods[i].id}">
                            <div class="goods_img_box" >
                                <a href="../html/detail.html?id=${goods[i].id} " target="_blank" >
                                    <img class="goods_img" src="${goods[i].zhuurl}">
                                </a>
                            </div>
                            <div class="name">
                                <label class="goodlist_discount"> ${goods[i].zhekou}折</label>
                                <a class="brand_name" href="../html/detail.html?id=${goods[i].id}" target="_blank">${goods[i].banner_name}</a>
                                <span >
                                    <a class="goods_name"  href="../html/detail.html?id=${goods[i].id}" target="_blank">${goods[i].names}</a>
                                </span>
                            </div>
                            <div class="price">
                              <b>￥${goods[i].jiage}</b>
                              <i>￥${goods[i].yuanjia}</i>
                            </div>
                            

                        </div>

                        `
                        })(i);
                    }
                }
            
    xhr.open("get","../api/goodlist.php",true);
    xhr.send(null);



})
