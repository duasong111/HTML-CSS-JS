<!DOCTYPE html>
<html>
    <head>
        <title>js</title>
    </head>
    <body>
       <script>  // 这个有个狗屁用 啊！！！
       var timer;
                function clock(){
                    var timestr="";
                    var now     = new Date();
                    var hours   = now.getHours();
                    var minutes = now.getMinutes();
                    var seconds  = now.setSeconds();
                    timestr += hours; //这个的目的是什么啊？？？
                    timestr += ((minutes<10)? ":0":":") + minutes;
                    timestr += ((seconds<10)?  ":0":":") + seconds;
                    window.document.frmclock.txttime.value = timestr;
                }
                timer = setInterval(clock(), 1000);
                function stopit(){
                    clearInterval(timer);
                }

       </script>
      <form action="" method="post" name="frmclock" id="frmclock">
          <p>当前时间：<input name="txttime" type="text" id="textime">
            <input type="button" name="Submit2" value="停止时钟" onclick="stopit()">
          </p>
      </form>
    </body>
</html>
