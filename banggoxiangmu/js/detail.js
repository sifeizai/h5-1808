document.addEventListener("DOMContentLoaded", function(){
    var rexiao=document.querySelector('.rexiao');
    var nanzhuang=document.querySelector('.nanzhuang');
    var hover_wrap=document.querySelector('.category_hover_wrap');
    var datu=document.querySelector(".mbshop_detail_bigPicZoom");
    var mbshop_detail_pdid=document.querySelector('.mbshop_detail_pdid');
    var mbshop_detail_pdbrand=document.querySelector('.mbshop_detail_pdbrand');
    var mbshop_detail_price=document.querySelector('.mbshop_detail_price');
    var color=document.querySelector('.color');
    var mbshop_detail_rebateRule=document.querySelector('.mbshop_detail_rebateRule');
    var showHistory=document.querySelector('#showHistory');
    var detailFloopyfixed_goods=document.querySelector('.detailFloopyfixed_goods');
    var mbshop_detail_rebateRule_open=document.querySelector('.mbshop_detail_rebateRule_open');
    var addcart=document.querySelector('.mbshop_detail_btn_addcart');
    var mbshopOpenpop=document.querySelector('.mbshop_openpop');
    var suoluetu=document.querySelector('.mbshop_detail_smallPicList');
    var mbshop_openpop_btnGoShop=document.querySelector('.mbshop_openpop_btnGoShop');
    var mbshop_openpop_close=document.querySelector('.mbshop_openpop_close');
    var lessBtn=document.querySelector('.mbshop_detail_buyNum_less');
    var addBtn=document.querySelector('.mbshop_detail_buyNum_add');
    var buyNum=document.querySelector('.mbshop_detail_buyNum');
    var mbshop_openpop_btnGoPay=document.querySelector('.mbshop_openpop_btnGoPay');


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
    // 购买数量
    var buynum=buyNum.value;
    addBtn.onclick=function(){
        if(buynum>=50){
            alert("购买数量最高为50")
            return;
        }else{
            ++buynum;
            buyNum.value=buynum;
        }
        
    }
    lessBtn.onclick=function(){
        if(buynum<=1){
            alert("购买数量最低为1")
            return;
        }else{buynum--;

        buyNum.value=buynum;
        } 
    }

    var thisURL = document.URL; 
    var getval =thisURL.split('?')[1]; 
    var showval= getval.split("=")[1];

    
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
            var status = [200,304];

            if(status.indexOf(xhr.status) != -1){
                var goods = JSON.parse(xhr.responseText);

                
                for(let i=0;i<goods.length;i++){
                    if(showval==goods[i].id){
                        

                        datu.innerHTML+=
                            `<img src="${goods[i].url}">`;

                        
                        mbshop_detail_pdid.innerHTML+="商品编号："+goods[i].id;
                        mbshop_detail_pdbrand.innerHTML+=`
                        <a href="#" target="_blank"> ${goods[i].banner_name}</a>${goods[i].names} `;
                        mbshop_detail_price.innerHTML=`
                            <b>售价：</b>                 
                            <strong id="salePriceText">  ￥  ${goods[i].jiage}</strong>                     
                            <input id="_price" type="hidden" value="69.9"> 
                            <i>吊牌价：</i>                     
                            <em>￥ ${goods[i].yuanjia}</em>
                            <span>${goods[i].zhekou}折</span>
                        `;
                        
                        showHistory.innerHTML+=`
                        <h6>最近浏览的商品</h6>
                        <ul>
                            <li>
                                <a class="mbshop_detail_rec_01" href="#" target="_blank">
                                    <img class="goods_history" src="${goods[i].url}" alt="${goods[i].names}" style="display: block;width:120px;height:120px;"></a>
                                <a class="mbshop_detail_rec_02" href="#" target="_blank">${goods[i].names}</a>
                                <b>￥${goods[i].jiage}</b>
                            </li>
                        </ul>
                        `;
                        detailFloopyfixed_goods.innerHTML+=`
                            <div class="detailFloopyfixed_goods_img">
                                <img src="${goods[i].url}">
                            </div>
                            <div class="detailFloopyfixed_goods_info">
                                <h5 title="${goods[i].names}">${goods[i].names}</h5>
                                <p id="floatPrice"> ￥  ${goods[i].jiage}                 </p>
                            </div>
                        `;
                        color.innerHTML+=`
                        <a id="color_00" type="color" attr_value="亮白" goods_attr_sn="661532" code="00" a_type="0" stock_num="1564">
                        <img src="${goods[i].color1}"alt="" id="color11">
                        </a>
                        <a id="color_30" type="color" attr_value="中花灰" goods_attr_sn="661532" code="30" a_type="0" stock_num="1682">
                            <img src="${goods[i].color2}"alt=""id="color12">
                        </a>
                        <a id="color_90" type="color" attr_value="影黑" goods_attr_sn="661532" code="90" a_type="0" stock_num="2263">
                            <img src="${goods[i].color3}"alt=""
                            id="color13">
                        </a>`;
                        suoluetu.innerHTML+=`
                            <ul class="suoluetu0">
                            <li ><img class="mbshop_detail_smallPicHover1" src="${goods[i].url}"></li>
                            <li ><img class="mbshop_detail_smallPicHover2" src="${goods[i].color2}"></li>
                            <li ><img class="mbshop_detail_smallPicHover3" src="${goods[i].color3}"></li>
                            <li ><img class="mbshop_detail_smallPicHover4" src="${goods[i].color1}"></li>
                            <li ><img class="mbshop_detail_smallPicHover5" src="${goods[i].color2}"></li>
                        </ul>
                        `
                        ;
                        
                        var color_00=document.getElementById('color_00');
                        var color_30=document.getElementById('color_30');
                        var color_90=document.getElementById('color_90');
                        var suoluetu0=document.querySelector('.suoluetu0');
                        var suoluetu1=document.querySelector('.mbshop_detail_smallPicHover1');
                        var suoluetu2=document.querySelector('.mbshop_detail_smallPicHover2');
                        var suoluetu3=document.querySelector('.mbshop_detail_smallPicHover3');
                        var suoluetu4=document.querySelector('.mbshop_detail_smallPicHover4');
                        var suoluetu5=document.querySelector('.mbshop_detail_smallPicHover5');

                        color.onclick=function(e){
                            var e = e|| window.event;
                            var target = e.target || e.srcElement;
                            if(target.tagName.toLocaleLowerCase() =='img'){
                             color_00.style.borderWidth="2px";
                             color_00.style.borderColor="red";
                             }
                        }
                        suoluetu1.onclick=function(){
                            datu.innerHTML+=`<img src="${goods[i].url}">`;
                        }
                        suoluetu2.onclick=function(){
                            datu.innerHTML+=`<img src="${goods[i].color2}">`;
                        }
                        suoluetu3.onclick=function(){
                            datu.innerHTML+=`<img src="${goods[i].color3}">`;
                        }
                        suoluetu4.onclick=function(){
                            datu.innerHTML+=`<img src="${goods[i].color1}">`;
                        }
                        suoluetu5.onclick=function(){
                            datu.innerHTML+=`<img src="${goods[i].color2}">`;
                        }
                        
                    }
                }
            }
            
        }
    xhr.open("get","../api/goodlist.php",true);
    xhr.send(null);

    mbshop_detail_rebateRule.onmouseover=function(){
        mbshop_detail_rebateRule_open.style.display="block";
        mbshop_detail_rebateRule.onmouseout=function(){
            mbshop_detail_rebateRule_open.style.display="none";
        }
    }
    list_d();
    function list_d(){
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
                var status = [200,304];

                if(status.indexOf(xhr.status) != -1){
                    var goods = JSON.parse(xhr.responseText);
                    for(let i=0;i<goods.length;i++){
                        if(showval==goods[i].id){
                            datu.innerHTML+=
                                `<img src="${goods[i].url}">`;

                            
                            mbshop_detail_pdid.innerHTML+="商品编号："+goods[i].id;
                            mbshop_detail_pdbrand.innerHTML+=`
                            <a href="#" target="_blank"> ${goods[i].banner_name}</a>${goods[i].names} `;
                            mbshop_detail_price.innerHTML=`
                                <b>售价：</b>                 
                                <strong id="salePriceText">  ￥  ${goods[i].jiage}</strong>                     
                                <input id="_price" type="hidden" value="69.9"> 
                                <i>吊牌价：</i>                     
                                <em>￥ ${goods[i].yuanjia}</em>
                                <span>${goods[i].zhekou}折</span>
                            `;
                            
                            showHistory.innerHTML+=`
                            <h6>最近浏览的商品</h6>
                            <ul>
                                <li>
                                    <a class="mbshop_detail_rec_01" href="#" target="_blank">
                                        <img class="goods_history" src="${goods[i].url}" alt="${goods[i].names}" style="display: block;width:120px;height:120px;"></a>
                                    <a class="mbshop_detail_rec_02" href="#" target="_blank">${goods[i].names}</a>
                                    <b>￥${goods[i].jiage}</b>
                                </li>
                            </ul>
                            `;
                            detailFloopyfixed_goods.innerHTML+=`
                                <div class="detailFloopyfixed_goods_img">
                                    <img src="${goods[i].url}">
                                </div>
                                <div class="detailFloopyfixed_goods_info">
                                    <h5 title="${goods[i].names}">${goods[i].names}</h5>
                                    <p id="floatPrice"> ￥  ${goods[i].jiage}                 </p>
                                </div>
                            `;
                            color.innerHTML+=`
                            <a id="color_00" type="color" attr_value="亮白" goods_attr_sn="661532" code="00" a_type="0" stock_num="1564">
                            <img src="${goods[i].color1}"alt="" id="color11">
                            </a>
                            <a id="color_30" type="color" attr_value="中花灰" goods_attr_sn="661532" code="30" a_type="0" stock_num="1682">
                                <img src="${goods[i].color2}"alt=""id="color12">
                            </a>
                            <a id="color_90" type="color" attr_value="影黑" goods_attr_sn="661532" code="90" a_type="0" stock_num="2263">
                                <img src="${goods[i].color3}"alt=""
                                id="color13">
                            </a>`;
                            suoluetu.innerHTML+=`
                                <ul class="suoluetu0">
                                <li ><img class="mbshop_detail_smallPicHover1" src="${goods[i].url}"></li>
                                <li ><img class="mbshop_detail_smallPicHover2" src="${goods[i].color2}"></li>
                                <li ><img class="mbshop_detail_smallPicHover3" src="${goods[i].color3}"></li>
                                <li ><img class="mbshop_detail_smallPicHover4" src="${goods[i].color1}"></li>
                                <li ><img class="mbshop_detail_smallPicHover5" src="${goods[i].color2}"></li>
                            </ul>
                            `
                            ;
                            
                            var color_00=document.getElementById('color_00');
                            var color_30=document.getElementById('color_30');
                            var color_90=document.getElementById('color_90');
                            var suoluetu0=document.querySelector('.suoluetu0');
                            var suoluetu1=document.querySelector('.mbshop_detail_smallPicHover1');
                            var suoluetu2=document.querySelector('.mbshop_detail_smallPicHover2');
                            var suoluetu3=document.querySelector('.mbshop_detail_smallPicHover3');
                            var suoluetu4=document.querySelector('.mbshop_detail_smallPicHover4');
                            var suoluetu5=document.querySelector('.mbshop_detail_smallPicHover5');

                            color.onclick=function(e){
                                var e = e|| window.event;
                                var target = e.target || e.srcElement;
                                if(target.tagName.toLocaleLowerCase() =='img'){
                                    color_00.style.borderWidth="2px";
                                    color_00.style.borderColor="red";
                                }
                            }
                            suoluetu1.onclick=function(){
                            datu.innerHTML+=`<img src="${goods[i].url}">`;
                            }
                            suoluetu2.onclick=function(){
                                datu.innerHTML+=`<img src="${goods[i].color2}">`;
                            }
                            suoluetu3.onclick=function(){
                                datu.innerHTML+=`<img src="${goods[i].color3}">`;
                            }
                            suoluetu4.onclick=function(){
                                datu.innerHTML+=`<img src="${goods[i].color1}">`;
                            }
                            suoluetu5.onclick=function(){
                                datu.innerHTML+=`<img src="${goods[i].color2}">`;
                            }
                            }
                    }
                }
            }
        xhr.open("get","../api/list.php",true);
        xhr.send(null);
    }

         
   // 加入购物车
    addcart.onclick=function(e){
        mbshopOpenpop.style.display='block';
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
                var status = [200,304];
                if(status.indexOf(xhr.status) != -1){
                    var goods = JSON.parse(xhr.responseText);
                    for(let i=0;i<goods.length;i++){
                        if(showval==goods[i].id){
                            var goodslist=Cookie.getCookie("goodslist") || [];
                            if(typeof goodslist == "string"){
                                goodslist = JSON.parse(goodslist);
                            }
                            
                            goodslist.push(JSON.stringify(goods[i]));

                            document.cookie="goodslist="+JSON.stringify(goodslist);
                            document.cookie="qty="+JSON.stringify(buynum);

                        }
                    }
                }
            }
        xhr.open("get","../api/list.php",true);
        xhr.send(null);
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
                var status = [200,304];
                if(status.indexOf(xhr.status) != -1){
                    var goods = JSON.parse(xhr.responseText);
                    for(let i=0;i<goods.length;i++){
                        if(showval==goods[i].id){
                            var goodslist=Cookie.getCookie("goodslist") || [];
                            if(typeof goodslist == "string"){
                                goodslist = JSON.parse(goodslist);
                            }
                            
                            goodslist.push(JSON.stringify(goods[i]));

                            document.cookie="goodslist="+JSON.stringify(goodslist);
                            document.cookie="qty="+JSON.stringify(buynum);

                        }
                    }
                }
            }
        xhr.open("get","../api/goodlist.php",true);
        xhr.send(null);
    }
    mbshop_openpop_btnGoShop.onclick=function(){
        mbshopOpenpop.style.display='none';
    }
    mbshop_openpop_close.onclick=function(){
        mbshopOpenpop.style.display='none';
    }
    
    
    window.onscroll=function(){
            if(window.innerHeight>=772){
        // console.log(window.innerHeight);
                detailFloopyfixed_goods.className='fixed';
                detailFloopyfixed_goods.style.display='block';
            }else{
                detailFloopyfixed_goods.style.display='none';
                detailFloopyfixed_goods.className='';

            }
        }
})