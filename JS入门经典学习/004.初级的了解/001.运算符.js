<!DOCTYPE html>
<html>
    <head>
        <title>
           重新回归了。加油
        </title>
    </head>
    <body>
        <script>
            var  a = 122;
            a + 2;
            var result ;
            result = a + 2 ;
           result = true + false;  //加法符号将会进行拼接为一个字符串并返回。
           var str = "年后啊很多事电算化兑换的"+"<br>"+"dhusdhsuds"+"<br>"
            console.log(result);
            console.log(a);    //任何值和字符串加法则都变成字符串。 但是其他的不是，剩下的都转化为num型
            console.log(typeof result);//空的字符串也是字符串
            console.log(str);

            //其他的形式
            var a = 1 + 2 + "3";
            console.log(a);  //输出是33
            var b = "1" + 2 + 3;
            console.log(b);// 输出是123
            //这个格局字符串的那个谁在前边谁就优先运算的。
            var c ;
            c = 2 * "122";
            console.log(c);
            //隐式转换的类型
            var s = "123";
            s = s - 0;
            //但是之前的转换类型是 s = Num(s)
            console.log(typeof s);

        </script>
        
    </body>
</html>
