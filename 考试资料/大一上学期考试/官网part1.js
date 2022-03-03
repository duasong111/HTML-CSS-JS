<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Bootstrap 实例 - 默认的导航栏</title>
	<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
	<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <style>
      .father{
                width: 1100px;
                height: 330px;
                margin: 0 auto;
                border: 2px solid rgb(10, 8, 8);
                overflow: hidden;  /*缺少了这个*/
                background-color: rgb(32, 62, 90);
            }
            .son{
                width: 360px;
                height: 300px;
                float: left;
                
                /* line-height: 3px; */
                margin-right: 40px;
                /* margin-left: 70px; */
            }
            .left{
                width: 50%;  
                margin-left: 3%;               
            }  
            p{
               text-indent: 1.2cm;  /*运用到了：缩进*/
            font-size: large;
            margin-top: 10px;
           }   
           .inner
           {
               border: 1px solid rgb(255, 255, 255);
               height: 300px;
               display: -webkit-box;
           }
           img{
               height: 140px;
               width: 280px;
               margin-top: 13px;
           }
           #right{
            height: 140px;
               width: 250px;
               margin-top: 13px;
               border: 2px solid rgb(243, 241, 241);
               margin-left: 17px;
           }
           #right li {
               font-size: small;
               /* overflow: hidden; */
           }
           #right li span{
               font-size:20px;
           }
           #photo{
               height: 30px;
               width: 300px;
           }
           ul li{
               margin-top: 10px;
               font-size: 16px;
           }
           span{
               font-size: 20px;
               text-indent: 20px;
           }
           
       
    </style>
</head>
<body>
<div class="father">
    <div class=" son left"  style="background-color: rgb(248, 245, 245);">
         <p>首义风华</p>
           <hr>
           <div class="btn btn-danger">学校荣光</div>
           <a class="btn btn-default" href="#">科研成果</a>
           <a class="btn btn-default" href="#">竞赛获奖</a>
           <a class="btn btn-default" href="#">优秀师生</a>
           
           <div class="inner">
               <div id="left">
                   <img src="C:\Users\admini\Desktop\html\learn1\20211101062+杜阿松\img\d3.png" >
               </div>
               <div id="right">
                   <ol type="1">
                    <li><a href="#"> <span>17连贯！..</span><br>
                        &nbsp;&nbsp; 11月3日，全国第三方大学评价机构艾瑞德深校友会网（Cuaa.Net)正式发布校友会2021中国.......
                         
                         </a> </li>
                         <li><a href="#"> <span>学省级文明单位...........</span><br>
                           &nbsp;&nbsp;近日，中共湖北省委发布《中国湖北省委会 湖北省人民政府关于命名表彰2017-2019年度湖北省最具有》
                   </ol>
               </div>
           </div>
        
    </div>    
     <div class="son right" style="background-color: rgb(251, 251, 251);" >
        <span>通知公告</span>
        <img src="C:\Users\admini\Desktop\html\learn1\20211101062+杜阿松\img\202112030818045.jpg" style="width: 360px ; height: 90px;">
        <ul>
            <li type="square"><a href="#">关于武昌首义学院的20级....</a></li>
            <li  type="square"><a href="#">关于给予程俞成明等28名....</a></li>
            <li  type="square"><a href="#">武昌首义学院2022-2023....</a></li>
            <li  type="square"><a href="#">2022年美国纽约电影学院....</a></li>
            <li  type="square"><a href="#">机电与自动化学院实验员....</a></li>
            
        </ul>
  
    </div>
     
       
    
</body>
</html>
