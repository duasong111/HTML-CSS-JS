<!DOCTYPE html>
<html>
    <head>
        <title>js</title>
    </head>
    <body>
       <script> 
      document.write("最大值Max(1,2):"+Math.max(1,2)+"<br>");
      document.write("最小值Max(1,2):"+Math.min(1,2)+"<br>");
      document.write("将9开方的数是:"+Math.sqrt(9)+"<br>");  //在三角函数中，是要求那个特定的数值的
      document.write("这个是看那个四舍五入的数字的："+Math.round(2.55)+"<br>");//那个round中要添加数字的
      document.write("计算正弦30度的值:"+Math.sin(90)+"<br>"); //这个是明显有问题的
      document.write("计算n的m次幂的数值是:"+Math.pow(2,5)+"<hr>");
      document.write("来一堆那个随机数："+Math.random()+"<br>");  //那这个随机数我不能限制位数吗
      var ran = Math.round(Math.random() * 100);
      document.write(ran);
       </script> 
      
    </body>
</html>
