$(function(){
    //图片加载完成以后执行边框加入。否则资源报错
    loading({
        'icon':'imgAll/img_main/icon.png',
        'guide1':'imgAll/img_main/guide1.png',
        'guide2':'imgAll/img_main/guide2.png',
        'guide3':'imgAll/img_main/guide3.png',
        'mod-inews':'imgAll/img_main/mod-inews.jpg',
        'mod-inews_hover':'imgAll/img_main/mod-inews_hover.png',

    },{
        done:main
    })
    function main(){
        var img = new Image();
        img.src="imgAll/img_main/icon.png";
            down_background($('.out_line'),852,298,-1,-95);
            down_background($('.download_dif_phone'),299,358,-459,-495);
            down_background($('.iPad'),92,98,-966,-295);
            down_background($('.iphone'),92,98,-1,-395);
            down_background($('.android'),92,98,-966,-95)
            down_background($('.android'),92,98,-966,-95);
            down_background($('.down_path'),280,115,-1,-898);
            down_background($('.QRcode'),299,305,-760,-495);
            down_background($('.associated_Media'),299,126,-760,-802);
            down_background($('.select_arrow'),25,14,-1008,-1);


            function down_background(obj,num1,num2,num3,num4){
                obj.css({

                    'background-image': "url('imgAll/img_main/icon.png')",
                    'width': num1+'px',
                    'height': num2+'px',
                    'background-position': num3+'px '+num4+'px',
                    'background-repeat':'no-repeat',
                })
            };
            down_hover($('.iPad'),-966,-395,-966,-295);
            down_hover($('.iphone'),-95,-395,-1,-395);
            down_hover($('.android'),-966,-195,-966,-95);


            //加载背景元素
            function down_hover(obj,num1,num2,num3,num4){
                obj.on('mouseover',function(){
                    obj.css({
                        'background-position': num1+'px '+num2+'px',
                    })
                })
                obj.on('mouseout',function(){
                    obj.css({
                        'background-position': num3+'px '+num4+'px',
                    })
                })
            }

        $('#fullpage').fullpage({
            verticalCentered:false,
        });
        $(".container").backstretch(["imgAll/img_index/index_bg.jpg"]);
        // main主页函数
        $('.up_big_img').backstretch([
            'imgAll/img_main/hd1.jpg',
            'imgAll/img_main/hd2.jpg',
            'imgAll/img_main/hd3.jpg',
        ]);
        $(window).on("backstretch.after", function (e, instance, index) {
            $('.up_big_img').children('.backstretch').children('img').css({
                'transition':'1.5s linear',
                'transform':'scale(1.05)'
            });
            $('.up_big_img h3 img').hide();
            if(index==0){
                $('.up_big_img h3 .text1').show();
                $('.up_big_img h3 .text1').addClass('animated fadeInDown ')
            }
            if(index == 1){
                $('.up_big_img h3 .text2').show();
                $('.up_big_img h3 .text2').addClass('animated fadeInUp ')
            }
            if(index == 2){
                $('.up_big_img h3 .text3').show();
                $('.up_big_img h3 .text3').addClass('animated fadeInLeft ')
            }
        });
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                speed:1000,
                autoplay:4000,
                 autoplayDisableOnInteraction:false,

                //开启分页起
                pagination: '.swiper-pagination',
                paginationClickable:true,
                onImagesReady:function(Swiper){
                    styleChange();
                },
                onSlideChangeStart:function(Swiper){
                    styleChange();
                }
            })
            function styleChange(){
                $('.swiper-pagination-bullets').css({
                    'left':'40%',
                });
                $('.swiper-pagination-bullets').children().css({
                   'border-radius':0,
                   'transform':'rotateZ(45deg)',
                   'background':'white',
                   'opacity':1,
                })
                $('.swiper-pagination-bullets').children('.swiper-pagination-bullet-active').css({
                    'background':'yellow',
                    'opacity':1
                })
                window.onresize=function(){
                    styleChange();
                }
            }

            $('.select_arrow').on('click',function(){
                $('.company_media').show();
            })

            

    }

});
