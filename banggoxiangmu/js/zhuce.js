jQuery(function($){
    var validname = false;
        var validpwd = false;
        var validrpwd=false;
        var $username=$('#username');
        var $password=$('#password');
        var $btn = $(".btn");
        var $user_message=$('#user_message');
        var $pwd_message=$('#pwd_message');
        var $rpassword=$('#rpassword');
        var $rpwd_message=$('#rpwd_message');
        // 用户名验证
        $username.on('blur',function(){
            var _username = $username.val()
            if(_username==''){
                $user_message.html("用户名不合法");
                validname = false;
            }else{
                 $user_message.html("用户名可用");
                $user_message.css("color","green");
                validname = true;


            }
        })
        //密码验证
        $password.on("blur",function(){
            var _password = $password.val();
            if(_password == ''){
                $pwd_message.html("密码不合法");
                
                validpwd = false;
            }else{
                $pwd_message.html("密码合法");
                $pwd_message.css("color","green");
                validpwd = true;
            }
        })
        //密码再次确认
        $rpassword.on("blur",function(){
            var _rpassword = $rpassword.val();
            var _password = $password.val();

            if(_rpassword !=_password){
                $rpwd_message.html("密码不一致");
                
                validpwd = false;
            }else{
                $rpwd_message.html("密码一致");
                $rpwd_message.css("color","green");
                validrpwd = true;
            }
        })
        
        
     
          $btn.on('click',function(){

            if(validname&&validpwd&&validrpwd){
                var _password = $password.val();
                var _username = $username.val();


                $.ajax({
                type: "POST",
                url: "../api/zhuce.php",
                data:"username="+_username+'&password='+_password,
                success:function(msg){
                        alert(msg)
                        location.href = '../html/denglu.html';

                    }
                })
            }})
    
       
        
        
     
      
     
     
     
        
        
        
            
            
        
        
     
       
        
})


