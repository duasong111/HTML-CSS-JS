<!DOCTYPE html>
<html>
    <header>
        <title>这是一个探索的网页</title>
        <style>
            .father{
         height: 400px;
         /* width: 100%; */
         background-color: chartreuse;
         border: 2px solid black;
     }
     .son{
         border: 2px solid black;
         height: 300px;
         width: 200px;
         margin-left:20% ;
         /* padding: 0 auto; */
         background-color: blue;
         /* display: -webkit-box;          为啥这个没有啥用啊 */
         float: left;
         margin-right: 10%;
         align-items: center;
     }
        </style>
    </header>
    <body>
        <div  class="container father">
            <div class="box1 son">box1</div>
            <div class="box2 son">box2</div>
        </div>   
       
        <!--我这个并没有运用那个响应式的布局啊-->
    </body>
</html>
