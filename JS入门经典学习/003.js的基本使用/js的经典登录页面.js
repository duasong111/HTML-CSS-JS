//R-8其实是定义了函数，同时对一些数值的定义
//
<!DOCTYPE html>
<html>
    <head>
        <title>js</title>
        <script>
            function check(){
                if(fr.username.value=="") {   //其实那个十分的像那个“交集选择器”
                alert("用户名不能为空！！！");
                fr.username.focus();  //这个玩意是干啥的
            }
               if(fr.password.value=="")
               alert("密码不能为空！！！");
                fr.password.focus();  //自动对准光标
            }
         </script>
    </head>
    <body>
       <form  action="",method="post" name="fr">  <!--似乎看不到那个method的作用-->
           <p style="text-align: center;">用户名:<input type="text" name="username"></p> <br>
           <p style="text-align: center;">密&nbap码:<input type="password" name="password"></p> <br>
           <input type="button" value="登录" onclick="check()">
           <input type="reset" value="重置" >
        </form>
    </body>
</html>
