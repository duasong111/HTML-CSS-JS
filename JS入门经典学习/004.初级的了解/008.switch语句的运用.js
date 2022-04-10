//注意
// 来进行取整数，利用那个 parseInt(score / 10) 这个是进行取整的,这个是取整符号的利用。

<!DOCTYPE html>
<html>
    <head>
        <title>
            switch语句的运用。
        </title>
    </head>
    <body>
        <script>
            /*
            Switch语句的运用
            --case 表达式
               语句--
               break;
               最后的那个default的作用是前边的都不满足，然后输出default
               我感觉那个switch的作用在求余，或者是那个其他的多数判断中，则效果或更好。
               */
            //   var num = 23;
            //   var n2 = num % 3;
            var insult = prompt("请输入一个数字")
             switch (insult){
                 case 1: alert("1"); break;
                 case 2: alert("2"); break;
                 case 3: alert("3"); break;
                 default : alert("非法数字"); break;
                }

                /**
                 *  这个是那个js中独有的其他院没有的操作。
                 * var score = 50；
                 * switch(ture){
                 * case score >= 50: console.log("合格");  break;
                 * default : console.log("不合格")；  break;
                 * }
                 * 
                 * 
                 * 
                 */
        </script>
       
    </body>
</html>
