<!DOCTYPE html>
<html>
    <head>
        <title>
            这是一个新的学习
        </title>
    </head>
    <body>
        <script>
            /*
             ！ 是 非 运算
             --这里指的是滴布尔值来进行取反的操作
                   true变成false ，false变成true
                如果不是那个布尔值的时候，则会转换成布尔值
                这个非的运算可以进行叠加（这个也是那个隐试的数据类型的转换）

             && 与  只要有一个false则就进行返回
                 运算规则，当两个的运算规则一样时，输出一页
                 true && true  ++++输出 true
                 true && false +++++输出那个false
                 Js中的属于“短路的与” 若为false则不看下一个的了  
                 若果第一个是true还会看第二个的值

             || 或  只要有一个true就进行返回
                     只有有对的就是对的
                     -JS中的或是一个"短路的true"
            */
           var a = false;
           a = !a;
            console.log("a = "+a);
             //对于非布尔值的运算 --进行判断，看第一个是不是false，找false呢！
             //两个数字中都是false则返回靠前的false
             //true && true   --true不是0的都是true
             //与运算当中，若两个数值都是true的情况，则返回后边的数值
             //result  23 && 12; 这个则返回的是12


            // || 或  这个值找那个true呢，看第一个是否是true
        </script>
       
    </body>
</html>
