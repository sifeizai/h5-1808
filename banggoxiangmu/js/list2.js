document.addEventListener("DOMContentLoaded", function(){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        var status = [200,304];
        if(status.indexOf(xhr.status) != -1){
            var goods = JSON.parse(xhr.responseText);
            var mbshop_listPdBox=document.querySelector('.mbshop_listPdBox');
            var zkbtn=document.querySelector('#zkbtn');
            var jgbtn=document.querySelector('#jgbtn');
                pinjie(goods);

            function pinjie(goods){

                for(let i=0;i<goods.length;i++){
                    mbshop_listPdBox.innerHTML+=`
                    <li class="mbshop_listPdCon" data-icon="" data-site="">
                        <a href="../html/detail.html?id=${goods[i+28].id}" id="mbshop_listPdImg" target="_blank">
                            <img src="${goods[i+28].url}" style="display: block;width: 230px;height: 315px;" >
                        </a>
                        <a class="mbshop_listPdCon_tag" target="_blank" href="../html/detail.html?id=${goods[i+28].id}"><em>1件7折</em></a>
                                <span class="mbshop_listPdText fl goodlist_brandname">
                                    <a href="../html/detail.html?id=${goods[i+28].id}" target="_blank">${goods[i+28].banner_name}</a>
                                    <label class="goodlist_discount">${goods[i+28].zhekou}折</label>
                                </span> 
                        <span class="mbshop_listPdText fl"><a href="../html/detail.html?id=${goods[i+28].id}" target="_blank">${goods[i+28].names}</a></span> 
                        <span class="mbshop_listPdText">
                                <b>￥${goods[i+28].jiage}</b>
                                <i>￥${goods[i+28].yuanjia}</i>
                        </span>
                        <div class="mbshop_listPdColorFrame" id="mbshop_listPdColorId0">
                            <span class="mbshop_listPdColorBtnLf mbshop_disabled" title="向左" style="display: none;"></span>
                            <div class="mbshop_listPdColorScroll">
                                <div class="mbshop_listPdColor">
                                    <input type="hidden" value="#">
                                        <a href="../html/detail.html?id=${goods[i+28].id}"><img src="${goods[i+28].color1}" alt=""></a>
                                        <a href="../html/detail.html?id=${goods[i+28].id}"><img src="${goods[i+28].color2}" alt=""></a>
                                        <a href="../html/detail.html?id=${goods[i+28].id}"><img src="${goods[i+28].color3}" alt=""></a>
                                </div>
                            <span class="mbshop_listPdColorBtnRf" title="向右" style="display: none;"></span>
                        </div>
                    </li>`
                }
            }
                
                var live=true;
                zkbtn.onclick=function(){
                    mbshop_listPdBox.innerHTML='';
                    if(live==true){
                        zkbtn.className="mbshop_pdFilterHover mbshop_pdFilterDown";
                        live=false;
                        var compare = function (prop) { 
                            return function (obj1, obj2) { 
                                var val1 = obj1[prop]; 
                                var val2 = obj2[prop]; 
                                if (!isNaN(Number(val1)) && !isNaN(Number(val2))) 
                                    { val1 = Number(val1); 
                                    val2 = Number(val2); }
                                     if (val1 < val2) { return -1; } else if (val1 > val2) { return 1; } else { return 0; }
                                      } 
                                  }
                                    res=goods.sort(compare("zhekou"))
                                    for(let i=0;i<res.length;i++){
                                        console.log(res[i])
                                        mbshop_listPdBox.innerHTML+=`
                                        <li class="mbshop_listPdCon" data-icon="" data-site="">
                                            <a href="../html/detail.html?id=${res[i].id}" id="mbshop_listPdImg" target="_blank">
                                                <img src="${res[i].url}" style="display: block;width: 230px;height: 315px;" >
                                            </a>
                                            <a class="mbshop_listPdCon_tag" target="_blank" href="../html/detail.html?id=${res[i].id}"><em>1件7折</em></a>
                                                    <span class="mbshop_listPdText fl goodlist_brandname">
                                                        <a href="../html/detail.html?id=${res[i].id}" target="_blank">${res[i].banner_name}</a>
                                                        <label class="goodlist_discount">${res[i].zhekou}折</label>
                                                    </span> 
                                            <span class="mbshop_listPdText fl"><a href="../html/detail.html?id=${res[i].id}" target="_blank">${res[i].names}</a></span> 
                                            <span class="mbshop_listPdText">
                                                    <b>￥${res[i].jiage}</b>
                                                    <i>￥${res[i].yuanjia}</i>
                                            </span>
                                            <div class="mbshop_listPdColorFrame" id="mbshop_listPdColorId0">
                                                <span class="mbshop_listPdColorBtnLf mbshop_disabled" title="向左" style="display: none;"></span>
                                                <div class="mbshop_listPdColorScroll">
                                                    <div class="mbshop_listPdColor">
                                                        <input type="hidden" value="#">
                                                            <a href="../html/detail.html?id=${res[i].id}"><img src="${res[i].color1}" alt=""></a>
                                                            <a href="../html/detail.html?id=${res[i].id}"><img src="${res[i].color2}" alt=""></a>
                                                            <a href="../html/detail.html?id=${res[i].id}"><img src="${res[i].color3}" alt=""></a>
                                                    </div>
                                                <span class="mbshop_listPdColorBtnRf" title="向右" style="display: none;"></span>
                                            </div>
                                        </li>`
                                    }
                    }else{
                        zkbtn.className="mbshop_pdFilterHover mbshop_pdFilterUp";

                        live=true;
                        var compare = function (prop) { 
                            return function (obj1, obj2) { 
                                var val1 = obj1[prop]; 
                                var val2 = obj2[prop]; 
                                if (!isNaN(Number(val1)) && !isNaN(Number(val2))) 
                                    { val1 = Number(val1); 
                                    val2 = Number(val2); }
                                     if (val1 > val2) { return -1; } else if (val1 < val2) { return 1; } else { return 0; }
                                      } 
                                  }
                                    res=goods.sort(compare("zhekou"))
                                    for(let i=0;i<res.length;i++){
                                        console.log(res[i])
                                        mbshop_listPdBox.innerHTML+=`
                                        <li class="mbshop_listPdCon" data-icon="" data-site="">
                                            <a href="../html/detail.html?id=${res[i].id}" id="mbshop_listPdImg" target="_blank">
                                                <img src="${res[i].url}" style="display: block;width: 230px;height: 315px;" >
                                            </a>
                                            <a class="mbshop_listPdCon_tag" target="_blank" href="../html/detail.html?id=${res[i].id}"><em>1件7折</em></a>
                                                    <span class="mbshop_listPdText fl goodlist_brandname">
                                                        <a href="../html/detail.html?id=${res[i].id}" target="_blank">${res[i].banner_name}</a>
                                                        <label class="goodlist_discount">${res[i].zhekou}折</label>
                                                    </span> 
                                            <span class="mbshop_listPdText fl"><a href="../html/detail.html?id=${res[i].id}" target="_blank">${res[i].names}</a></span> 
                                            <span class="mbshop_listPdText">
                                                    <b>￥${res[i].jiage}</b>
                                                    <i>￥${res[i].yuanjia}</i>
                                            </span>
                                            <div class="mbshop_listPdColorFrame" id="mbshop_listPdColorId0">
                                                <span class="mbshop_listPdColorBtnLf mbshop_disabled" title="向左" style="display: none;"></span>
                                                <div class="mbshop_listPdColorScroll">
                                                    <div class="mbshop_listPdColor">
                                                        <input type="hidden" value="#">
                                                            <a href="../html/detail.html?id=${res[i].id}"><img src="${res[i].color1}" alt=""></a>
                                                            <a href="../html/detail.html?id=${res[i].id}"><img src="${res[i].color2}" alt=""></a>
                                                            <a href="../html/detail.html?id=${res[i].id}"><img src="${res[i].color3}" alt=""></a>
                                                    </div>
                                                <span class="mbshop_listPdColorBtnRf" title="向右" style="display: none;"></span>
                                            </div>
                                        </li>`
                                    }
                    }
                    
                }
    
                
                var live1=true;
                jgbtn.onclick=function(){
                    if(live1==true){
                        jgbtn.className="mbshop_pdFilterHover mbshop_pdFilterDown";
                        live1=false;
                    }else{
                        jgbtn.className="mbshop_pdFilterHover mbshop_pdFilterUp";
                        live1=true;
                    }
                }
                
                    
                
            }
            
        

 

    }
           
    xhr.open("get","../api/list.php",true);
    xhr.send(null);

   
})