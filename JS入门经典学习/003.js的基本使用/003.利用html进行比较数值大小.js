//我贼喜欢这个
//其实我还可以用css来进行对那个框框来进行限制，更改，甚至调色。
<!DOCTYPE html>
<html>
    <head>
    <title>
        比较数值的大小
    </title>
    <style>
        input{
            width: 50px;
        }
    </style>
    <script>
        function maxnumber() {
            var x = Number(fr.num1.value);  //括号的那些是为了精准的找的数值的
            var y =Number(fr.num2.value);
            var maxnum;
            if (x > y)
            maxnum = x;
            else
                maxnum = y;
            
            fr.max.value = maxnum;
            // return maxnumber; //这个和c还是有点不一样的
        }
        function check(){
            if (fr.num1.value ==""){
                alert("不要搞事情！！！");
                fr.num1.focus();
            }
        }
    </script>
    </head>
    <body>
        <form action="" method="post" name="fr">
            请输入第一个数字：<input type="text" name="num1" placeholder="数字"> <br>
            请输入第二个数字：<input type="text" name="num2"> <br>
            两个数字的最大值是：<input type="text" name="max"> <br>
            <input type="button" value="最大值" onClick="maxnumber()" onClick="check()"/>
            <input type="reset" value="重置">   <!-- 只能调用一个函数！！！-->  
        </form>
    </body>
</html>
