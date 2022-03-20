<!DOCTYPE html>
<html>
    <head>
        <title>js</title>
    </head>
    <body>
       <script>         
           var stus= new Array("张三","李四","陈武","王二麻子");
           var str1 ="";
           var x;
           for(var i=0;i<stus.length;i++){
               str1= str1+" "+stus[i];//这是将那个stus的数值转移到了那个str1了吗？？
           }
           document.write("利用for循环来进行输出学生姓名:"+str1);//那个“+”我感觉就是那个“,”一样
           document.write("<br>运用for-in语句输出姓名:<br>");
           for(x in stus){
               document.write("第"+(parseInt(x)+1)+"个姓名是:"+stus[x]+"<br>");
           }//(parseInt(x)+1)：函数解析字符串并返回整数
       </script>
      
    </body>
</html>
