<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!--支持IE浏览器-->
    <meta name="viewport" content="width=device-width, initial-scale=1">  <!--支持一定中端-->
    
    <title>练习一下响应式布局</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <style>
        .header1{
            background-color: rgb(57, 57, 175);
        }
        .header1 li {
            font-size: 20px;
           
        }
        a {
            color: black;
        }
      #total1{
       margin: 0 auto;
       width: 100%;
       height: 500px;
       border:2px solid rgb(50, 59, 110) ;
       display: -webkit-box;
       background-color: rgb(32, 62, 90);
     }
     #left {
              
               width: 66%;
               -webkit-box-ordinal-group: 1;
               margin-right: 20px;
               border: 0.5px solid black;  
               background-color: rgb(253, 253, 253);   
               /* padding: 20%; */
               margin-top: 4%;
               margin-left: 4%;
               margin-bottom: 4%;
     }
     #right{
               background-color: rgb(250, 246, 246);
               width: 31%;
               /* height: 100px; */
               -webkit-box-ordinal-group: 3;
               margin-right: 20px;
               border: 0.5px solid black;
               margin-top: 4%;
               margin-left: 4%;
               margin-bottom: 4%;
           }
     p{
               text-indent: 1.2cm;  /*运用到了：缩进*/
            font-size: large;
            margin-top: 20px;
       }
      #inner{
        display: -webkit-box;
      }
      .left{
        -webkit-box-ordinal-group: 1;
        border: 1px solid rgb(220, 223, 231); 
        height: 200px; 
        width: 50%;
        margin-right: 20px;
      }
      .right{
        -webkit-box-ordinal-group: 2;
        border: 1px solid rgb(240, 240, 240);
        height: 200px; 
        width: 40%;  
        overflow: hidden;                                             /*这个是一个试验阶段*/
      }
      .arc{
        font-size: small;
      }
      ul{
        font-size: 20px;
        margin-top: 20px; 
        overflow: hidden;  
      }
      span{
        font-size: 20px;
      }
      /*下面开始的是最底下的css模型*/
      #main—bottom{               /*这个是父对象*/
               margin: 0 auto;
               border: 1px solid white; /*整体的边界，不过我设置为白色了*/ 
               width: 660px;
               height: 200px;
               display: -webkit-box;  /*将所有元素放在盒子模型，为了使其等高*/
               text-align: center;   /*增强可读性，文字居中*/
               font-size: 1px;  /*用来设置字体的大小*/
           }

           #left—bottom，#right—bottom，#middle—bottom，#hah—bottom{  /*使用“并集”选择器*/
               border: 5px dashed rgb(182, 163, 163);  /*为这三个添加边框*/
             
           }
           #left—bottom{
               /* background-color: hotpink; */
               width: 150px;
               -webkit-box-ordinal-group: 1;
               margin-right: 20px;
               border: 0.5px solid black;
               
           }
           #right—bottom{
               background-color: while;
               width: 150px;
               -webkit-box-ordinal-group: 3;
               margin-right: 20px;
               border: 0.5px solid black;
           }
           #middle—bottom{
               background-color: rgb(252, 252, 252);
               /* width: 120px; */
               width: 150px;
               margin-right: 20px;
               -webkit-box-ordinal-group: 2;  /*这个是根据数字的大小来进行排列位置*/
               border: 0.5px solid black;
           }
           #hah—bottom{                                    /*这是最右侧的那个表格*/
               background-color: rgb(255, 255, 255);
               width: 150px;
               -webkit-box-ordinal-group: 4;
               border: 0.5px solid black;
           }
           footer{
            margin: 0 auto;                         /*目的：就是使其处于中间的位置，上下无边界，中间的对齐*/
               border: 3px solid rgb(161, 22, 22);
               width: 100%;
               height: 120px;
               margin-top:20px ;
               background-color: rgb(165, 163, 61);
               
               
           }
           p{
               text-indent: 2cm;  /*运用到了：缩进*/
            
           }
           #menu ul {
               list-style: none;
               font-size: 2px;
               margin-top: 10px;  /*使其距离上边框10个像素点*/
               
           }   
           
           a {
               text-decoration: none;   /*去除超链接的下划线*/
           }
           a :hover{                   /*在其上边则会有颜色*/
               color: chartreuse;
           }
           .move0{                    /*板块1*/
               float: left;
               position: relative;
               left: 450px;
            }  
           .move1{                    /*板块2*/
               float: left;
               position: relative;                                 /*！！！！！这三个板块是有待改进的部分*/
               left: 450px;
           } 
           .move2{                   /*板块1*/
               float: left;
               position: relative;
               left: 450px;
           }
            .myContainer ul li a{
                color: #E6E6E6;
            }
            .myContainer ul li a:hover{
                background-color: red;
            } */
            .super_box{
                height: 120px;
                width: 100%;
                background-color: coral;
            } 
            .super_box{
                display: -webkit-box;
            }
            .box3{                
                height: 120px;
                width: 30%px;
                background-color: forestgreen;
                border: 2px solid rgb(241, 241, 241);

                  
            }
            .box4{             
                height: 120px;
                width: 65%px;
                background-color: rgb(245, 245, 245);
                border: 2px solid rgb(253, 251, 251);
                padding-top: 50px;
                padding-right: 220px;
                
            }    
            span{
                font-size: 20px;
                text-indent: 2.5cm;
            }  
            .father{
                width: 1100px;
                height: 300px;
                margin: 0 auto;
                border: 2px solid red;
                overflow: hidden;
            }
            .son{
                width: 220px;
                height: 300px;
                float: left;
                text-align: center;
                line-height: 150px;
                margin-right: 40px;
                margin-left: 70px;
            }
            
         .character{
             font-size: 20px;
         }
        


   </style>
  </head>
  <body>

<nav class="navbar navbar-default header1" role="navigation" >
    <div class="container-fluid">
    <div class="navbar-header">
        <a class="navbar-brand" href="#">
            <ol class="list-inline navbar-text navbar-left" >
                <li><a href="#">信息公开</a></li>
                <li><a href="#">人才招聘</a></li>
                <li><a href="#">学校内网</a></li>
                <li><a href="#">信息门户</a></li>
            </ol> 
        </a>
    </div>
    <div>
        <form class="navbar-form navbar-right" role="search" >
            <div class="form-group">
                <input type="text" class="form-control" placeholder="请输入关键词">
            </div>
            <button type="submit" class="btn btn-default">高级搜索</button>

            <button type="button" class="btn btn-default navbar-btn">
                网站地图
            </button>
        </form>     
    </div>
    </div>
</nav>
  <!--这是第二个部分-->
 <div class="super_box">
    <div class="box3">
        <img src="C:\Users\admini\Desktop\html\learn1\20211101062+杜阿松\img\logo.png">
    </div>
    <div class="box4">
        <div class="header">
      <ol class="list-inline character">
          <li><a href="#">学校概括</a></li>
          <li><a href="#">机构设置</a></li>
          <li><a href="#">师资队伍</a></li>
          <li><a href="#">人才培养</a></li>
          <li><a href="#">招生就业</a></li>
          <li><a href="#">科学研究</a></li>
          <li><a href="#">合作交流</a></li>
          <li><a href="#">文化之窗</a></li>
      </ol>
  </div>

    </div>
 </div>
 <hr>

     <!--这是第三个部分-->
    <div id="myCarousel" class="carousel slide">
        <!-- 轮播（Carousel）指标 -->
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>   
        <!-- 轮播（Carousel）项目 -->
        <div class="carousel-inner">
            <div class="item active">
                <img src="C:\Users\admini\Desktop\html\learn1\20211101062+杜阿松\img\bg1.png" alt="First slide">
            </div>
            <div class="item">
                <img src="C:\Users\admini\Desktop\html\learn1\20211101062+杜阿松\img\bg2.png" alt="Second slide">
            </div>
            <div class="item">
                <img src="C:\Users\admini\Desktop\html\learn1\20211101062+杜阿松\img\bg3.png" alt="third slide">
            </div>
            
        </div>
        <!-- 轮播（Carousel）导航 -->
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div> 
    <hr>
      <!--这是第四个部分-->
    <p>  <ins>学校要闻 </ins></p>
    <hr>
    <div class="father">
        <div class="son son1" style="background-color: pink;">
        <img src=".\img\picture.jpg" height="220px" width="220px">
        在此举行代表的会议
        </div>
        <div class="son son2" style="background-color: rebeccapurple;">
        </div>
        <div class="son son3" style="background-color: sandybrown;">
        <ol>
            <li>[湖北日报]省委宣讲走进首义</li>
            <li>[中国新闻网]京剧进课堂的活动</li>
            <li>[楚天都市报]京剧进入课堂，高校另类</li>
            <li>[湖北日报]嘉鱼高质量的发展的观察，当好配角</li>
            <li>[长江网]首义师生获得湖北省的</li>
        </ol>
        </div>
       
    </div>


    
    <hr>
    <!--这是第五个部分-->

    <div class="container">
      <div id="total1">
        <div id="left">
  
          <p>  首义风华 </p>
              <hr>
              <div class="btn btn-danger">学校荣光</div>
              <a class="btn btn-default" href="#">科研成果</a>
              <a class="btn btn-default" href="#">竞赛获奖</a>
              <a class="btn btn-default" href="#">优秀师生</a>
              <hr>
          <div id="inner">
            <div class="left"><img src="C:\Users\admini\Desktop\html\learn1\20211101062+杜阿松\img\e1.jpg" width="100%" height="100%"></div>
             <div class="right">
               <div class="arc">
                <ol>
                  <li><a href="#"> <span>17连贯！学校雄踞2021“中国最好的民办大学.....</span><br>
                 &nbsp;&nbsp; 11月3日，全国第三方大学评价机构艾瑞德深校友会网（Cuaa.Net)正式发布校友会2021中国.......
                  
                  </a> </li>
                  <li><a href="#"> <span>学校再获“省级文明单位(校园)”称号...........</span><br>
                    &nbsp;&nbsp;近日，中共湖北省委发布《中国湖北省委会 湖北省人民政府关于命名表彰2017-2019年度湖北省最具有》
                    
                    </a> </li>
  
                </ol>
              </div>
  
            </div>
          </div>        
          
        </div>
        <div id="right">
           <p>  通知公告 </p>
           <hr>
          <div id="photo"><img src="C:\Users\admini\Desktop\html\learn1\20211101062+杜阿松\img\202112030818045.jpg" width="350px"></div>  
          <ul style="overflow: hidden;">
            <li type="square"><a href="#">关于武昌首义学院的20级....</a></li>
            <li  type="square"><a href="#">关于给予程俞成明等28名....</a></li>
            <li  type="square"><a href="#">武昌首义学院2022-2023....</a></li>
            <li  type="square"><a href="#">2022年美国纽约电影学院....</a></li>
            <li  type="square"><a href="#">机电与自动化学院实验员....</a></li>
            
        </ul>
  
  
        </div>
      </div>
      
    </div>
    <hr>    <!--此处是个分割线-->
    <hr>
    <p>  <ins>专题网站 </ins></p>
    <hr>

<div id="main—bottom">
    

<div id="left—bottom">  <img src="C:\Users\admini\Desktop\html\learn1\20211101062+杜阿松\img\d1.gif" width="150px" height="50px"></a>
    建档学习<br>
    学校高度重视党建思政工作，坚持围绕中心工作抓党建，努力探索党建与思政工作长效机制。坚持以社会主义核心价值观教育为引领，不断加强和改进大学生思想政治教育，注重学生心理健康教

</div>
<div id="middle—bottom">
    <img src="C:\Users\admini\Desktop\html\learn1\20211101062+杜阿松\img\d2.png" width="150px" height="50px"></a>
    党史学习教育<br>
    在全党开展党史学习教育，是党中央立足党的百年历史新起点、统筹中华民族伟大复兴战略全局和世界百年未有之大变局、为动员全党全国满怀信心投身全面建设社会主义现代化国家而作出的重

</div>
<div id="right—bottom">
    <img src="C:\Users\admini\Desktop\html\learn1\20211101062+杜阿松\img\d3.png" width="150px" height="50px"></a>
    探寻首义<br>
    武昌首义，除旧开新，时人敢为天下先，功若丘山永著竹帛；首义之地，先贤宏愿，志创大学慰青史，遂有武昌首义学院。

</div>
<div id="hah—bottom">
    <img src="C:\Users\admini\Desktop\html\learn1\20211101062+杜阿松\img\d4.gif" width="150px" height="50px"></a>
    创新创业<br>
    学校2006年即将“致力实践创新”作为办学特色培育，坚持将创新创业教育融入人才培养，以培养学生创新创业能力为核心，以创业带动就业为目标，加强双创课程体系建设

</div>
    </div>
 <footer>
  <div id="menu" >
      <ul class="move0">
          <li><a href="#">常用链接</a></li>
          <li><a href="#">教务系统（新</a>）</li>
          <li><a href="#">校友会</a></li>
          <li><a href="#">招标投标</a></li>
          <li><a href="#">校长信箱</a></li>
      </ul>
      <ul class="move1">
          <li><a href="#">学校邮箱</a></li>
          <li><a href="#">图书馆</a></li>
          <li><a href="#">电子校报</a></li>
      </ul>
      <ul class="move2">
          <li> <a href="#">在线导览</a></li>
          <li> <a href="#">教学校历</a></li>
          <li> <a href="#">在线办理</a></li>
          <li> <a href="#">咨询服务</a></li>
          <li> <a href="#">下载专区</a></li>
          <li> <a href="#">价格服务</a></li>
      </ul>
  </div>

 </footer>  
      
   
  </body>
 </html>
