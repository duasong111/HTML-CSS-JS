//注意观察
//其中这里运用了两次的脚本,
//你要是我那个那个函数里添加参数的时候，你就要用return 值了，如果不加的话，则不需要。
<!DOCTYPE html>
<html>
    <head>
        <title>js</title>
        <script>
           function v(r,h){
               return Math.PI*r*r*h;
           }  //那个特别长的一大串子其实就是一个函数名称而已，不是所谓的默认函数
        </script>
    </head>
    <body>
      <script> //这个是调用了两个函数，这个没有使用哪个html的基础定义
          var m =v(5,8);
          document.write("半径为5,高为8的圆柱体体积是:"+m);
      </script>
    </body>
</html>
