//那个其实在C中也是可以进行如下的操作的。但是Js就是一种那个网页版的模式。
<!DOCTYPE html>
<html>
    <head>
        <title>
            练习
        </title>
    </head>
    <body>
        <script>
           // var num1;
            // for(var i =1;i<=9;i++){  //控制高度   这个是九九乘法表格
            //    //document.write("*******<br />");
            //    for(var j =1;j<=9;j++)  //控制长度
            //    {
            //        num1 = i * j
            //     document.write(num1 +"&nbsp&nbsp&nbsp");
            //    }
            //    document.write("<br \>")
            // }
            for(var i =0;i<6;i++){  //控制高度
               //document.write("*******<br />");
               for(var j =0;j<( 6 - i);j++)  //控制长度    这个变成了倒三角了
               {
                   //num1 = i * j
                document.write("*&nbsp&nbsp");
               }
               document.write("<br \>")
            }
             
        </script>
       
    </body>
</html>
