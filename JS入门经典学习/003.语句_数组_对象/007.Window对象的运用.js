<!DOCTYPE html>
<html>
    <head>
        <title>js</title>
    </head>
    <body>
       <script> 
      var name=""; //就是一个变量，为了后续的引用。
      name=window.prompt("请输入你的姓名",name);  //prompt是一个文本框. 同时也引用了那个name
      window.alert(name+"您好!欢迎参加这次的补考,请填写你的信息!");
      if(window.confirm("单机 “确认” 将进行正式的考试!")){
          window.location.href="exam.html";
      }   //为啥那个if的结束语句要加双引号表示结束，我真的想不明白啊！！！
       </script>
      
    </body>
</html>
