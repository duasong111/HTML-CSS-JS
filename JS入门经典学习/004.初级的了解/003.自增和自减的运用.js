<!DOCTYPE html>
<html>
    <head>
        <title>
           ahhh
        </title>
    </head>
    <body>
        <script>
            //自增的时候，调用完之后就直接自增1
            /*
            a++和++a是不一样的
            a++的值等于原变量的值（自增前的值）
            ++a的值则等于那个原变量的新值
            对于那个减法的是一样的效应的。 
            */
             
            var b  = 20;
            // b++;      20   21++   22
            var result = b++ + b++ + b;  //按照顺序进行执行的
            console.log(result);  //b

            var c  = 20;
            // b++;      20   18   18
            var result1 = c-- + --c  + c ;  //要特别的注意他们的执行的顺序。
            console.log(result1);  //b
           

            var n1 = 10;
            var n  = n1++;  //n = 10, 此时n1=11，则瞬间就自加了。
            console.log("n="+n); // 10
            console.log("n1="+n); // 11
               //要明确谁在谁的基础上来进行运算的，

        </script>
       
    </body>
</html>
