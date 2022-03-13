//这个让我联想到了那个就是上次那个算命的，他是那个随机函数
//注意那个R10-11这个两行运用了那个时间函数。
//if语句已经不是很稀奇了
<!DOCTYPE html>
<html>
    <head>
        <title>js</title>
    </head>
    <body>
        <script> 
        function check(){
     var now = new Date(); //时间函数
     var hour = now.getHours();  //返回指定的让其和时间的小时数 
     if ((hour > 5) && (hour <= 7))
         alert("早上好，元气满满啊");
      else   if ((hour > 7) && (hour <= 12))
         alert("可以吃饭了");
      else   if ((hour > 7) && (hour <= 12))
         alert("可以吃饭了");
      else   if ((hour > 12) && (hour <= 17))
         alert("放学了，");
         else
    alert("早点睡觉吧！！！")
    //其实我感觉这个超级像那个，好吧就是，你的for语句，或者说是你的那个switch的句型。

}
     </script>
     你想知道现在应干什么吗？？<br><input type="button" onclick="check()" value="click me">
    </body>
</html>
