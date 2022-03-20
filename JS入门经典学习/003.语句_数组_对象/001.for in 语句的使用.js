<!DOCTYPE html>
<html>
    <head>
        <title>js</title>
    </head>
    <body>
       <script>         //string是转换成字符串
           var str = new String("i want flying");
           document.write("<h4> 遍历字符串：</h4>"); //对于那个输出的时候。对于双引号的效果就是相当于那个printf
        for (i in str){  //这个输出的过程不知道是哪里出现了问题。
            document.write(str[i] +" ");
        }
       </script>
      
    </body>
</html>
