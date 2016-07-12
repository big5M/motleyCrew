
    $(function(){
        $('.loading_centent').backstretch(['imgAll/img_intro/loading.jpg']);
        var n= 1;

        loading({
            'btn_order':'imgAll/img_intro/btn_order.png',
            'h_nav1':'imgAll/img_intro/h_nav1.png',
            'h_nav1_hover':'imgAll/img_intro/h_nav1_hover.png',
            'h_nav2':'imgAll/img_intro/h_nav2.png',
            'h_nav2_hover':'imgAll/img_intro/h_nav2_hover.png',
            'h_nav3':'imgAll/img_intro/h_nav3.png',
            'h_nav3_hover':'imgAll/img_intro/h_nav3_hover.png',
            'h_nav4':'imgAll/img_intro/h_nav4_hover.png',
            'h_nav4_hover':'imgAll/img_intro/h_nav4_hover.png',
            'logo':'imgAll/img_intro/logo.png',
            'main':'imgAll/img_intro/main.jpg',
            'nav_hover':'imgAll/img_intro/nav_hover.png',
            'nav1_hover':'imgAll/img_intro/nav1_hover.png',
            'nav1':'imgAll/img_intro/nav1.png',
            'nav2':'imgAll/img_intro/nav2.png',
            'nav3_hover':'imgAll/img_intro/nav3_hover.png',
            'nav3':'imgAll/img_intro/nav3.png',
            'nav3_hover':'imgAll/img_intro/nav3_hover.png',
            'nav4':'imgAll/img_intro/nav4.png',
            'nav4_hover':'imgAll/img_intro/nav4_hover.png',
            'next':'imgAll/img_intro/next.png',
            'order_bg':'imgAll/img_intro/order_bg.jpg',
            'prev':'imgAll/img_intro/prev.png',
            'spec01':'imgAll/img_intro/spec01.jpg',
            'spec02':'imgAll/img_intro/spec02.jpg',
            'spec03':'imgAll/img_intro/spec03.jpg',
            'spec04':'imgAll/img_intro/spec04.jpg',
            'spec05':'imgAll/img_intro/spec05.jpg',
            'box1':'imgAll/img_intro/box1.png',
            'box2':'imgAll/img_intro/box2.png',
            'engine':'imgAll/img_intro/engine.jpg',
            'k1-1':'imgAll/img_intro/k1-1.png',
            'game1':'imgAll/img_intro/game1.jpg',
            'game1':'imgAll/img_intro/game1.gif',
            'game2':'imgAll/img_intro/game2.jpg',
            'game2':'imgAll/img_intro/game2.gif',
            'game3':'imgAll/img_intro/game3.jpg',
            'game3':'imgAll/img_intro/game3.gif',
            'game4':'imgAll/img_intro/game4.jpg',
            'game4':'imgAll/img_intro/game4.gif',
            'honor':'imgAll/img_intro/honor.jpg',
            'next2':'imgAll/img_intro/next2.png',
            'prev2':'imgAll/img_intro/prev2.png',
            'btn_close':'imgAll/img_intro/btn_close.png',
            'honor1':'imgAll/img_intro/honor1.png',
            'honor2':'imgAll/img_intro/honor2.png',
            'honor3':'imgAll/img_intro/honor3.png',
            'honor4':'imgAll/img_intro/honor4.png',
            'honor5':'imgAll/img_intro/honor5.png',
            'honor6':'imgAll/img_intro/honor6.png',
            'honor7':'imgAll/img_intro/honor7.png',
            'honor8':'imgAll/img_intro/honor8.png',
            'honor9':'imgAll/img_intro/honor9.png',
            'btn_time':'imgAll/img_intro/btn_time.png',
            'btn_time_hover':'imgAll/img_intro/btn_time_hover.png',
            'timeBar':'imgAll/img_intro/timeBar.png',
            'text':'imgAll/img_intro/text.png',
            'timeBar2':'imgAll/img_intro/timeBar2.png',
            'review1':'imgAll/img_intro/review1.jpg',
            'l':'imgAll/img_intro/l.png',
            },{
            done:main,
        }
    );



    function main(){
        var timer = setInterval(function(){
            if(n*277<7757){
                n++;
            }

            $('.loading').css({
                'background-position':-n*277+'px -1px',
            })
            var num = parseInt((n/parseInt(8034/277)*100).toFixed(2));
            $('.loading_centent span').html(+num+'%');
            if(num == 100){
                clearInterval(timer);
                video_home();
            }
        },1)

        function video_home(){
            $('.loading_centent').html('<div id="enterVideo">'+
            	'<video id="cg"  width="1920" height="910" preload="auto" autoplay="true">'+
            		'<source type="video/mp4" src="http://s1.pkey.cn/badguy/cg.mp4"/>'+
            		'<source type="video/webm" src="http://s1.pkey.cn/badguy/cg.webm"/>'+
            	'</video>'+
                '<div class="skip">skip</div>'+
            '</div>'
            )
            setTimeout(function(){
                $('.loading_centent').hide();
                $('.loading_centent').empty();
                $('.container').show();
                $(".home_page").backstretch(["imgAll/img_intro/main.jpg"]);

            },20000)
            $('.skip').on('click',function(){
                $('.loading_centent').hide();
                $('.loading_centent').empty();
                $('.container').show();
                $(".home_page").backstretch(["imgAll/img_intro/main.jpg"]);

            })
        }
        var num = 0;
        var number3 = 0;
        var src = ['http://s2.pkey.cn/badguy/20160119/01/Crysis3.webmhd.webm','http://s2.pkey.cn/badguy/20160119/01/StarCitizen.webmhd.webm','http://s2.pkey.cn/badguy/20160119/01/StarCitizen.webmhd.webm','http://s2.pkey.cn/badguy/20160119/01/Homefront.The%20Revolution.webmhd.webm'];
        var arrayNav_h_hover =['imgAll/img_intro/h_nav1_hover.png','imgAll/img_intro/h_nav2_hover.png'," ",'imgAll/img_intro/h_nav3_hover.png','imgAll/img_intro/h_nav4_hover.png'];
        var arrayNav_h =['imgAll/img_intro/h_nav1.png','imgAll/img_intro/h_nav2.png',"",'imgAll/img_intro/h_nav3.png','imgAll/img_intro/h_nav4.png'];
            function show_bg(){
                $('.page_intro').eq(2).backstretch(["imgAll/img_intro/order_bg.jpg"]);
                $('.page_intro').eq(1).backstretch(["imgAll/img_intro/engine.jpg"]);
                $('.page_intro').eq(3).backstretch(['imgAll/img_intro/honor.jpg']);
            }


            //主页面的导航栏控制
            $('.nav_page').on('click',function () {
                if($(this).index()==2){
                    $('.page_all').show();
                    $('.home_page').hide();
                    $('.page_intro').hide();
                    $('.order').show();
                    return;
                }
                $('.home_page').hide();
                $('.page_all').show();
                $('.page_intro').hide();
                $('.page_intro').eq($(this).index()).fadeIn();

                num = $(this).index();
                nav_hover_tab(num);
                page_fell(num);
            })
            //在进入游戏页面导航栏控制

            $('.nav_content').on('click','.nav_main_page',function(){
                console.log($(this).index)
                if($(this).index() == 2){
                    $('.page_all').hide();
                    $('.order ').hide();
                    $('.page_intro').hide();
                    $('.home_page').show();
                    show_bg();
                    return;
                }
                    $('.page_intro').hide();
                    $('.page_intro').eq($(this).index()).show();

                    show_bg();
                    num =$(this).index();
                    nav_hover_tab($(this).index())


            });
            //返回首页

            //关闭扫描码
            $('.close_act_code').on('click',function(){
                $(this).parent().fadeOut();
            });
            $('.back_to_home').on('click',function(){
                $('.page_all').hide();
                $('.home_page').show();
            })
        //游戏视频弹出动画
        $('.game').on('click',function(){
            $('.content_video').show();

            $('.content_video').append($('<div class="box_video box1">'+
                '<div class="video_ct">'+
                    '<video controls="controls" >'+
                    ' <source'+" "+ 'src="'+src[$(this).index()]+'" type="video/mp4" />'+
                    '</video>'+
                '</div><span class="close_btn" ></span></div>'
            ));

            $('.box_video').eq($(this).index()).show();
            $('.box_video').eq($(this).index()).append($('<video'+ 'src='+ src[$(this).index()]+'type="video/mp4"'+
            'id="player1" poster=""'+
            'controls="controls" preload="none" >'+
            '</video>'+'<a class="close_btn">'+
            '</a>'))
            $('.close_btn').on('click',function(){
                $('.content_video').hide();
                $('.content_video').empty();
            });
        });


        //外层切换隐藏或显示
        function showout_next_prev(){
            $('.button_nex').show();
            $('.button_prv').show();
        }
        function hideout_next_prev(){
            $('.button_nex').hide();
            $('.button_prv').hide();
        }


        //第三页 见证荣耀
        $('.content>.btn_honor').on('click',function(){
            $(' .honor_content').fadeIn('slow');
            $('.honor_box').eq($(this).index()).fadeIn();
            $('.navigation span').eq($(this).index()).addClass('active');
            hideout_next_prev();
            return false;
        });
        $('.close_honor').on('click',function(){
            $('.honor_content').fadeOut();
            $('.honor_box').fadeOut();
            $('.navigation span').removeClass('active');
            showout_next_prev();
            return false;
        })
        // 上下页切换 分页器函数
        $('.next_honor_box').on('click',function(){
            var first_num=$('.active').index()+1;
            if(first_num>=$('.honor_box').length){
                first_num = 0;
            }
            $('.honor_box').hide();
            $('.honor_box').eq(first_num).fadeIn();
            $('.navigation span').removeClass('active');
            $('.navigation span').eq(first_num).addClass('active');
        })
        $('.prev_honor_box').on('click',function(){Ω
            var first_num=$('.active').index()-1;
            if(first_num<0){
                first_num = $('.honor_box').length-1;
            }
            $('.honor_box').hide();
            $('.honor_box').eq(first_num).fadeIn();
            $('.navigation span').removeClass('active');
            $('.navigation span').eq(first_num).addClass('active');
        });
        $('.navigation span').on('click',function(){
            $('.honor_box').hide();
            $('.honor_box').eq($(this).index()).fadeIn();
            $('.navigation span').removeClass('active');
            $('.navigation span').eq($(this).index()).addClass('active');
        });

        //邂逅伟大动画
        $('.button_nav_box ').on('click','.button_number',function(){
            $('.meet .meet_page').hide();
            $('.meet .meet_page').eq($(this).index()/2).show();
            if($(this).hasClass('last_one')){
                reback_nav();
                return;
            }
            if($(this).index()/2==5){
                $('.button_number').css({
                    'transition':'all 0.5s linear',
                    'width':0,
                });
                $(this).css({
                    'width':'73px',
                });
                $('.button_nav_box span').css({
                    'transition':'all 0.5s linear',
                    'width':0,
                });
                $('.button_nav_box em').hide();
                $('.button_nav_box i').hide();
                $(this).addClass('last_one');
                return;
            }
            $('.button_number_active').children().show();
            $('.button_number').css({
                'width':'73px',
            });

                $('.button_number').show();
                $('button_nav_box span').show();
                $('button_nav_box em').show();
                $('.button_number').removeClass('button_number_active');
                $(this).addClass('button_number_active');
                $('.button_number').children('i').hide();

                $('.button_number_active').children('i').show();
                $('.button_number_active').css({
                    'width':'125px',
                })
        })



        //meet 页面，第六个隐藏
        function reback_nav(){
            $('.button_number').css({
                'transition':'all 0.5s linear',
                'width':'73px',
            });
            $('.button_nav_box span').css({
                'transition':'all 0.5s linear',
                'width':'60px',
            });
            $('.button_nav_box em').show();
            $('.button_number').removeClass('last_one');
            $('.button_number').removeClass('button_number_active');
            $('.button_number').eq(0).addClass('button_number_active');
            $('.button_number').eq(0).css({
                'width':'125px',
            });
            $('.button_number').eq(0).children('i').show();
        }



        //第一页函数封装
        function page_fell(count){

            var num = 0;
            if(count == 0){
                num = 0;
            }
            if(count == 1){
                num = 5
            }
            if(count == 3){
                num = 6;
            }
            if(count ==4 ){
                num = 7;
            }
                change(num);
                $('.button_prv').on('click',function(){
                    var num1 = num;
                    if(num<4){
                        num1 = 0;
                    }
                    num1 = charkNum(num1);

                    num--;
                    console.log('num='+num)
                    if(num<0){
                        num=$('.carousel').length-1;
                    }

                    if(num <=4 ){
                        count = 0;
                    }
                    if(num == 5){
                        count = 1
                    }
                    if(num == 6){
                        count = 3;
                    }
                    if(num ==7 ){
                        count = 4;
                    }
                    number3 = count;
                    nav_hover_tab(count);
                    if(0<=num&&num<=4){
                        change(num);
                    }else{
                        $('.feel').hide();
                        $('.carousel').hide();
                        $('.carousel').eq(num).show();
                    }
                })
                $('.button_nex').on('click',function(){
                    var num1 = num;
                    num1 = charkNum(num1);
                    num++;
                    if(num>=$('.carousel').length){
                        num = 0;
                    }
                    if(num == 0){
                        count = 0;
                    }
                    if(num == 5){
                        count = 1
                    }
                    if(num == 6){
                        count = 3;
                    }
                    if(num ==7 ){
                        count = 4;
                    }
                    number3 = count;
                    nav_hover_tab(count);
                    if(0<=num&&num<=4){
                        change(num);

                    }else{
                        $('.feel').hide();
                        $('.carousel').hide();
                        $('.carousel').eq(num).show();
                    }
                });

                function charkNum(num){
                    var count =0;
                    if(num == 0){
                        count = 0;
                    }
                    if(num == 5){
                        count = 1
                    }
                    if(num == 6){
                        count = 3;
                    }
                    if(num ==7 ){
                        count = 4;
                    }
                    return count
                }
                function change(num){
                    $('.page_intro').hide();
                    $('.feel').show();
                    $('.list').show();
                    show_bg();
                    var count = num;
                    if(count<0){
                        count=$('.list').length-1
                    }
                    if(count>=$('.list').length){
                        count = 0;
                    }
                    $('.list').eq(count).css({
                        'opacity':1
                    });
                    var count_uu = count-2;
                    var count_u = count-1;
                    var count_d = count+1;
                    var count_dd = count+2;
                    if(count_uu == -2){
                        count_uu = $('.list').length-2;
                        count_u = $('.list').length-1;
                    }
                    if(count_uu == -1){
                        count_uu = $('.list').length -1;
                    }
                    if(count_dd == $('.list').length+1){
                        count_dd = 1;
                        count_d = 0;
                    }
                    if(count_dd == $('.list').length){
                        count_dd = 0;
                    }
                    if(count<$('.list').length){
                        $('.list').eq(count).css({
                            'transform':'translate3d(0,0,0)',
                            'opacity': 1,
                            'z-index':3
                        })
                        $('.list').eq(count_uu).css({
                            'transform':'translate3d(-100px,0,0)',
                            'opacity': 0.3,
                            'z-index':1
                        })
                        $('.list').eq(count_u).css({
                            'transform':'translate3d(-50px,0,0)',
                            'opacity': 0.6,
                            'z-index':2
                        })
                        $('.list').eq(count+2).css({
                            'transform':'translate3d(100px,0,0)',
                            'opacity': 0.3,
                            'z-index':1
                        })
                        $('.list').eq(count+1).css({
                            'transform':'translate3d(50px,0,0)',
                            'opacity': 0.6,
                            'z-index':2
                        })
                    }
                    if(count>=$('.list').length/2){
                        $('.list').eq(count).css({
                            'transform':'translate3d(0,0,0)',
                            'opacity': 1,
                            'z-index':3
                        })
                        $('.list').eq(count_dd).css({
                            'transform':'translate3d(-100px,0,0)',
                            'opacity': 0.3,
                            'z-index':1
                        })
                        $('.list').eq(count_d).css({
                            'transform':'translate3d(-50px,0,0)',
                            'opacity': 0.6,
                            'z-index':2
                        })
                        $('.list').eq(count-2).css({
                            'transform':'translate3d(100px,0,0)',
                            'opacity': 0.3,
                            'z-index':1
                        })
                        $('.list').eq(count-1).css({
                            'transform':'translate3d(50px,0,0)',
                            'opacity': 0.6,
                            'z-index':2
                        })
                    }
                    $('.list').css({
                        'transition':'all 0.2s 0s linear',
                    })

                //函数判断切换键以后导航条的hover效果

             }
        }

        //里层导航栏的hover效果
        function nav_hover_tab(number1){
            //所有的都没有hover效果
            $('.nav_main_page').children('em').css({
                'color':'#ffffff',
            });
            $('.nav_main_page').eq(0).children('i').css({
                'background': "url('imgAll/img_intro/h_nav1.png') center center no-repeat",
            });
            $('.nav_main_page').eq(1).children('i').css({
                'background': "url('imgAll/img_intro/h_nav2.png') center center no-repeat",
            });
            $('.nav_main_page').eq(3).children('i').css({
                'background': "url('imgAll/img_intro/h_nav3.png') center center no-repeat",
            });
            $('.nav_main_page').eq(4).children('i').css({
                'background': "url('imgAll/img_intro/h_nav4.png') center center no-repeat",
            })
            $('.nav_main_page').children('em').eq(number1).css({
                'color':'#e5d093',
            });
            $('.nav_main_page').children('i').eq(number1).css({
                'background':'url('+arrayNav_h_hover[number1]+') center center no-repeat',
            });
        };
    }

    })
