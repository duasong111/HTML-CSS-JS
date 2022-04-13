<!DOCTYPE html>
<html>
    <head>
        <title>
            练习
        </title>
    </head>
    <body>
        <script>
        /*break语句的使用范围是在哪个循环语句和那个switch语句当中
        不能在if中使用break和continue
        break会立即终止距离他最近的循环体
    //     */
    //    for(var i =0; i<5;i++){
    //        console.log(i);
    //        if(i ==3){
    //            break;  //这个就断了
    //        }
    //    }
      for(var i =0;i<6;i++){
          document.write("外层循环 " + i);
          for(var j = 0; j < 8;j++){
              break;
              document.write("内层循环 "+ j);
          }
      }
        </script>
       
    </body>
</html>
