<!DOCTYPE html>
<html>
    <head>
        <title>
           for循环的练习
        </title>
    </head>
    <body>
        <script>
           /*
           for(初始化表达式;条件表达式;更新表达式){
               语句。。。。
           }
           --第一步是执行初始化的表达式，这个只是执行一次。
           --第二部条件表达式。若为true则执行循环，若为false是则终止循环
           --第三部则是执行更新表达式，更新表达式结束后则对此循环继续执行循环体

           i = 0;
           for(;i<10;){
               i++
           } //则这个其实是可以写到外侧的。
           */
          //练习-计算所有0--100的所有奇数之和
          var sum= 0;
          var i ;
          for(i=-1;i<100;i++){
             // i+=2;
              if(i%2 != 0){
                  sum = sum + i;
              }
           //sum = sum + i;
        //    console.log(i);
          }
          /*
          方法二，这个是不正当的手段哈
          for(i=-1;i<99;){
              i+=2;
              sum = sum + i;
              }
          */
          console.log("奇数的和是 :"+sum);

             
        </script>
       
    </body>
</html>
