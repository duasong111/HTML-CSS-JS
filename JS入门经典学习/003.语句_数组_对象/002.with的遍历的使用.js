<!DOCTYPE html>
<html>
    <head>
        <title>js</title>
    </head>
    <body>
       <script>        
         var date = new Date();
         var d1 = date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日"+date.getHours()+"时"+date.getMinutes()+"分"+date.getSeconds()+"秒";
         document.write("普通的方式显示系统日期："+ d1 +"<br>");
        with(date)
        {
            var t1 = getHours()+"时"+getMinutes()+"分"+getSeconds()+"秒";
            document.write("运用为with语句来显示时间:"+t1+"<br>");
          //其实两个的差距是很大的，普通的时间显示要在每一个上面来加上date.进来来被显示说明了被定义了
          //但是那个with（date）却不用这样麻烦的定义，其实差距真的挺明显的。
        }// getHours()+"时"+getMinutes()+"分"+getSeconds()+"秒";
       </script>
      
    </body>
</html>
