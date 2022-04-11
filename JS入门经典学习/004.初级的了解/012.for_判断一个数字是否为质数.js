<!DOCTYPE html>
<html>
    <head>
        <title>
            for的练习
        </title>
    </head>
    <body>
        <script> 
        /*
        题目：页面接收一个数字，并且判断其是否为质数。
        */
            var num = prompt("请输入一个自然数");
            if(num<=1){
                alert("请输入一个有效值");   //为了的到有效的数值
            }else{

                var flag = true;   //这个起到了判断的作用。
   
                for(var i=2;i<num;i++){
                    if(num % i ==0){ //这个是将能除尽的数字都排除掉，剩下的就是那个质数了
                        flag = false;  
                    }    //这个是从反的方向进行的。
                }
                if(flag){   //在末尾来输出你判断的数字是否是质数。
                   alert(num + "是质数");
                }else{
                    alert(num + "不是质数")  //这个就是为了那个呼应一下而已。
                }

            }

             
        </script>
       
    </body>
</html>
