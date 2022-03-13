//js的学习
//首先了解了到了js是车衣穿插在html中，以一个厉害的插件，最后获得了那么棒
//其次，js可以穿插在html的head和body中，但是要有<script></script>来进行保护，就像css的<style>一样的效果，
///<script> var 是设置变量， 想要输出，那就 document.write("")
//以及那个alert是警告，目的就是那个弹出页面，但是你可以对那个页面进行修改
//重点看R-20-24
//首先 onclick="alert('you can clicked th button!')" value="Click Me"，也同样是进行警告的信息，但是你确实能进行修改的（单引号）
// <img src="R-C.jpg" alt ="img1" onmouseout="alert('you entered the image!')  点击这个图片会发生意想不到的效果的，
//其实与之相对应的是onmouseover = alert('you take it');
//以及在R27-28的那个进行两张图片的叠加。
<!DOCTYPE html>
<html>
    <head>
        <title>fashrenherit From  Celsius</title>
        <style>
            img{
                width: 50%;
                height: 50%;
                border: 2px yellow solid;
            }
        </style>
    </head>
    <body>
        <!-- <input type="button" onclick="alert('you can clicked th button!')" value="Click Me"> -->
        <!-- <img src="R-C.jpg" alt ="img1" onmouseout="alert('you entered the image!')"> -->
        <!--onmouseout 和onmouseover 其实是一个超级对称的东西-->
        <img src="R-C.jpg" alt="tick" onmouseover="this.src='tick2.gif'"
        onmouseout="this.src='R-C (1).jpg';"><!--这个就可以实现点击触碰时候来切换图片。-->
        <script>
         document.write("thise is a simple file");
         alert("hello world");
         alert(document.title);
        </script>
    </body>
</html>                      
