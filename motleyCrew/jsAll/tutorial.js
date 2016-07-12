$(function(){
    main();
    function main(){
        var array_hero=['imgAll/img_tutorial/hero1.jpg','imgAll/img_tutorial/hero2.jpg','imgAll/img_tutorial/hero3.jpg','imgAll/img_tutorial/hero4.jpg','imgAll/img_tutorial/hero5.jpg','imgAll/img_tutorial/hero6.jpg','imgAll/img_tutorial/hero7.jpg','imgAll/img_tutorial/hero8.jpg','imgAll/img_tutorial/hero9.jpg','imgAll/img_tutorial/hero10.jpg','imgAll/img_tutorial/hero11.jpg','imgAll/img_tutorial/hero12.jpg','imgAll/img_tutorial/hero13.jpg','imgAll/img_tutorial/hero14.jpg','imgAll/img_tutorial/hero15.jpg','imgAll/img_tutorial/hero16.jpg'];
        //导航栏hover效果
        var string_src1 =  "imgAll/img_tutorial/nav_on.png";
        var string_src2 =  "imgAll/img_tutorial/guide.png";
        active_hover($('.nav1'),0,-1,string_src1);
        active_hover($('.nav2'),0,-91,string_src1);
        active_hover($('.nav3'),0,-183,string_src1);
        active_hover($('.nav4'),0,-275,string_src1);
        active_hover($('.nav5'),0,-367,string_src1);
        active_hover($('.nav6'),0,-460,string_src1);
        //鼠标放上的事件
        function active_hover(obj,num1,num2,src1){
            obj.on('mouseover',function(){
                $(this).parent().children().css({
                    'background-image':'url()'
                })
                $(this).css({
                    'background-image':'url('+src1+')',
                    'background-repeat':'no-repeat',
                    'background-position': num1+'px '+num2+'px',
                    })
            })
        };

        //控制
        $('.con1').show();
        $('.con6 .page_box').show();
        $('.nav_vertical li').on('mouseover',function(){
            $('.content section').hide();
            $('.content section').eq($(this).index()).show();
        });
        //按钮控制属性

        $('.bt1').on('mouseover',function(){
            $(this).parent().children().css({
                "background-position":"-23px -114px",
            })
            $(this).css({
                'background-position':'-153px -114px',
            })
        });
        $('.bt2').on('mouseover',function(){
            $(this).parent().children().css({
                "background-position":"-1px -1px",
            })
            $(this).css({
                'background-position':'-99px -1px',
            })
        })

        $('.con1 .guide .bt1').on('mouseover',function(){
            if(!$('.con1 .page_box').eq($(this).index()).hasClass('show')){
                $('.con1 .page_box').hide();
                $('.con1 .page_box').eq($(this).index()).fadeIn();
                $('.con1 .page_box').removeClass('show');
                $('.con1 .page_box').eq($(this).index()).addClass('show');
            }
        });

        $('.con2 .title_tab .bt1').on('mouseover',function(){
            if(!$('.con2 .page_box').eq($(this).index()).hasClass('show')){
                $('.con2 .page_box').hide();
                $('.con2 .page_box').eq($(this).index()).fadeIn();
                $('.con2 .page_box').removeClass('show');
                $('.con2 .page_box').eq($(this).index()).addClass('show');
            }

        });
        $('.con3 .title_tab .bt1').on('mouseover',function(){
            if(!$('.con3 .page_box').eq($(this).index()).hasClass('show')){
                $('.con3 .page_box').hide();
                $('.con3 .page_box').eq($(this).index()).fadeIn();
                $('.con3 .page_box').removeClass('show');
                $('.con3 .page_box').eq($(this).index()).addClass('show');
            }
        })
        $('.con3 .title_tab .bt1').on('mouseover',function(){
            if(!$('.con3 .page_box').eq($(this).index()).hasClass('show')){
                $('.con3 .page_box').hide();
                $('.con3 .page_box').eq($(this).index()).fadeIn();
                $('.con3 .page_box').removeClass('show');
                $('.con3 .page_box').eq($(this).index()).addClass('show');
            }
        })
        $('.con5 .title_tab .bt1').on('mouseover',function(){
            if(!$('.con5 .page_box').eq($(this).index()).hasClass('show')){
                $('.con5 .page_box').hide();
                $('.con5 .page_box').eq($(this).index()).fadeIn();
                $('.con5 .page_box').removeClass('show');
                $('.con5 .page_box').eq($(this).index()).addClass('show');
            }
        })

        //第四个页面box控制
        $('.bt2').on('mouseover',function(){
            if(!$('.con4 .page_box').eq($(this).index()).hasClass('show')){
                $('.con4 .page_box').hide();
                $('.con4 .page_box').eq($(this).index()).fadeIn();
                $('.con4 .page_box').removeClass('show');
                $('.con4 .page_box').eq($(this).index()).addClass('show');
            }
        })
        $('.m1').on('mouseover',function(){
            $(this).parent().addClass('on');
            $(this).parent().next().removeClass('on');
            $(this).css({
                '-webkit-filter': 'grayscale(0)',
            });
            $('.m2').css({
                '-webkit-filter': 'grayscale()',
            })
        })
        $('.hero_ctrl li').on('mouseover',function(){

            if(!$(this).hasClass('off')){
                $('.hero_ctrl li').children('span').css({
                    '-webkit-filter': 'grayscale(100%)',
                });
                $(this).children('span').css({
                    '-webkit-filter': 'grayscale(0)',
                });
                $('.hero_ctrl li').removeClass('on');
                $(this).addClass('on');
                $(this).parent().parent().parent().css({
                    'transition':'all 0.5s 0s linear',
                    'background':'url('+array_hero[parseInt($(this).attr("data"))-1]+')',
                })

            }

        })










    }
})
