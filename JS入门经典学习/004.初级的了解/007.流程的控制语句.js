<!DOCTYPE html>
<html>
    <head>
        <title>
            有关if的语句
        </title>
    </head>
    <body>
       
        <script>
             /*
             语句的类型
             1.语句的判断 
                --if语句 语法 if(条件语句)，在执行的时候进行条件的判断
                --if语句只能控制紧随其后的语句，但是可以用中括号来进行控制
                --只会有一个代码块执行，然后整个语句就结束了。
             2.语句的分支
             3.循环语句
             */
            //prompt函数可弹出提示框，然后可以编辑
            //用户输入的内容可以作为返回值来利用
        //    var age=40;   
        //    if (age >= 60)
        //     {alert("你已经退休了");}
        //     else 
        //   {  alert("你还要继续努力的工作"); }
      var score =   prompt("请输入小明的期末的成绩");
        if (score > 90){
            alert("奖励你一辆宝马车");
        }else if(score > 70){
            alert("奖励你一套皮肤");
        }else {
            alert("等着回家挨揍吧");
        }

       //if的语句的条件可以这样写
       //if(score 》 100 || score 《 0 || isNaN(score))  这个就那个排除他的非法值

             
        </script>
       
    </body>
</html>
