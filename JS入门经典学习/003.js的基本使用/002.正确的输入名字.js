// R-11 注意观察，当不是这些所控制的符号的时候变回进行alert提醒
//其实这里还有for的大量使用
!DOCTYPE html>
<html>
    <head>
        <title>js</title>
        <script>
            function checkName() {
                var strLoginName=document.fr.logiName.value;
                for(var i=0; i <strLoginName.length;i++){
                    str1=strLoginName.substring(i,i+1);
                    if(!((str1>="0" && str1<="9") ||(str1>="a"&&str1<="z")||(str1=="_"))){
                        alert("登录的名字不能含有特殊的符号");
                        document.fr.logiName.focus();
                    }
                }
            }
        </script>
    </head>
    <body>
     <form  name="fr" method="post" action="">
         输入姓名<input type="text" name="loginname">
         <input type="submit" value="提交" onclick="checkName()"> <!--这个是引入函数-->

     </form>
    </body>
</html>
