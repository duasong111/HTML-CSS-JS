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
             关系运算符。
              -大于号 > 如果关系成立的话返回true 否则则返回false
                      <
                      >=
                      <=         这些都是同样的效果

               *
               对于非数值的时候则转换成数值再进行比较   
               
               如果两端的都是字符串时，则不会比较，他们比较的是字符串的编码
               //比较字符串的编码时只是进行一位一位的比较，若两位相同，则比较下一位
               //作用是对于一些东西的序列排列
               //字符串的比较的时候一定要进行转型 
            */
           var result = 5 > 12;
           console.log("result = "+result);
           console.log("\u2620")  //进行输出转移字符的格式，前边是那个\u就行了，然后加上那个他们编码
             



            //对于那个相等运算符-'=='的时候 ，那个不相等的符号是''!='
            //   === 称之为全等    ·区别的是不会进行数据类型的自动转换。
            //   !== 称之不全等    .和不等类型类似，但是也是不进行数据类型的转换
            //这个还是进行转换的
            //特殊情况
            // console.log(null == 0); //false
            //undefine 衍生值是 NaN
            //NaN不和任何的数值相等，包括他自身

            console.log(true =="1" );



             // console.log(1 >= ture); //true
             // console.log(1 > '0'); //true
             // console.log(1 >= ture); //true
                    </script> <!--这个是在那个html中输出的那个unicode码的格式“&#---;”-->
                    <h1 style="font-size: 100px;">&#9760;</h1>
       
    </body>
</html>
