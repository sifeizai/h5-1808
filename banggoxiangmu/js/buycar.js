document.addEventListener("DOMContentLoaded", function(){
    var buybox=document.querySelector('.mbshop_cart_1127_single_warp_box');
    var go_to_balance_left_alg=document.querySelector('.go_to_balance_left_alg');
    var go_to_balance_left_total=document.querySelector('.go_to_balance_left_total');
    var xunhuan=document.querySelector('.xunhuan');
    var goodslist = Cookie.getCookie("goodslist") || [];
        if(typeof goodslist == "string"){
            goodslist = JSON.parse(goodslist);
            for(var i=0;i<goodslist.length;i++){
                var good = JSON.parse(goodslist[i]);
                var qty=Cookie.getCookie("qty");
                var qtys = JSON.parse(qty);

                console.log(qtys)
                buybox.innerHTML+=`
                    <ul list-tag="list" id="756617bb-62f8-430c-a896-f5d854835814" name="4530" storeid="HQ01S116" class="mbshop_cart_1127_single_goods ">  
                    <li class="mbshop_cart_1127_single_01">      
                        <p>       
                            <label class="mbshop_checkbox mbshop_cart_allSelect_list">        
                                <input type="checkbox" name="status" class="mbshop_cart_1127_single_goods_checkbox" checked="true">            
                                <i class="iconfont icon-dagou" style="color:red;box-sizing: border-box;border:1px solid red;"></i>               
                            </label>      
                        </p>     
                    </li>     
                     
                    <li class="mbshop_cart_1127_single_02">      
                        <dl>       
                            <dt><a href="#"><img src="${good.url}" ></a></dt>       
                            <dd>        
                                <a href="#">
                                    <p title="${good.names}">
                                    【${good.banner_name}】${good.names}
                                    </p>
                                </a>        
                                <i>商品编号：${good.id}</i>         
                                <div class="mbshop_cart_1127_b">   
                                    <b class="icon_grey">
                                    <i class="iconfont"> <img style="float:left" src="../images/14tui.png"></i>该商品支持14天退换货</b>  
                                </div> 
                            </dd>      
                        </dl>     
                    </li>     
                       
                    <li class="mbshop_cart_1127_single_03">      
                        <p>颜色：亮白</p>      
                        <p>尺码：M:170/92A</p>     
                    </li>     
                     
                    <li class="mbshop_cart_1127_single_04">      
                        <i>￥${good.yuanjia}</i>      
                        <em>￥${good.jiage}</em>              
                        <ul id="main_box">          
                            <li class="select_box">            
                                <div>修改优惠</div>                
                                <ul class="son_ul" style="display: none;">
                                    <li version="1" value="满1件总价7.0折" title="满1件总价7.0折" class="mbshop_cart_1127_single_06_chose">
                                        <label class="mbshop_radio">               
                                            <input value="${qtys}" checked="" type="radio">                             
                                            <i class="iconfont iconfontselect"></i>                              
                                            <b>满1件总价7.0折</b>             
                                        </label>                 
                                    </li>                                 
                                    <li version="-1" value="不使用活动优惠" title="不使用活动优惠" class="mbshop_cart_1127_single_06_chose">
                                        <label class="mbshop_radio">               
                                            <input type="radio">                              
                                            <i class="iconfont"></i>                              
                                            <b>不使用活动优惠</b>             
                                        </label>                 
                                    </li>                                             
                                </ul>           
                            </li>       
                        </ul>            
                    </li>     
                       
                    <li class="mbshop_cart_1127_single_05">            
                        <span name="num-edit-cut" class="mbshop_cart_1127_single_label_left">-</span>      
                        <input type="text" value="${qtys}" name="numEdit" class="mbshop_cart_1127_single_goods_num">     
                        <span name="num-edit-add" class="mbshop_cart_1127_single_label_right">+</span>      
                        <p>                                             </p>     
                    </li>     
                    
                        
                    <li class="mbshop_cart_1127_single_07">￥${good.jiage}</li>     
                       
                    <li class="mbshop_cart_1127_single_09">      
                        <a href="#" class="in_favorites" name="661532">移入收藏夹</a>      
                        <a href="#" class="delete_goods">删除</a>     
                    </li>    
                </ul>
                `;
                go_to_balance_left_alg.innerHTML+=`
                    商品总价<i>￥${good.jiage}</i> - 优惠<em>￥0</em>
                `;
                go_to_balance_left_total.innerHTML+=`
                    合计(不含运费)：<i>￥${good.jiage*qtys}</i>
                `;
                xunhuan.innerHTML+=`
                 <li class="mbshop_cartListPdCon">
                
                    <a href="../html/detail.html?id=${good.id}">
                    <img id="mainPic661532" src="${good.url}">
                    </a>
                    <p class="mbshop_cartListPdText">${good.names}</p>
                    <p class="mbshop_cartListPdText">
                        <b>￥${good.jiage}</b>
                        <i>￥${good.yuanjia}</i>
                        <a href="javascript:void(0);" class="veo_to_shop mbshop_cartAddItem" quickaddcartid="661532">加入购物袋</a>
                </p>
            </li>
                
                `
            }
        }
})