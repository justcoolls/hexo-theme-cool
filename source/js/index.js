$(window).load(function(){
    $('.articleIndex').slideDown(1000);
    // $('.articleIndex').fadeIn(1000);
    //侧边栏
    $('.navbar').on('click', function(){
		$('#leftside').css({
			"transform":"translateX(0%)",
			"-ms-transform":"translateX(0%)",
			"-moz-transform":"translateX(0%)",
			"-webkit-transform":"translateX(0%)",
            "box-shadow": "2px 0 15px rgba(0,0,0,.35)",
            "-webkit-box-shadow": "2px 0 15px rgba(0,0,0,.35)"
		})
		$('.shade').show();
    });
    $(".shade, .leftside-h b").click(function(){
        $(".shade").hide();
        $('.leftside').css({
            "transform": "translateX(-100%)",
            "-ms-transform":"translateX(-100%)",
            "-moz-transform":"translateX(-100%)",
            "-webkit-transform":"translateX(-100%)",
            "box-shadow": "2px 0 15px rgba(0,0,0,0)",
            "-webkit-box-shadow": "2px 0 15px rgba(0,0,0,0)"
        })
    });
    //share
    $(".shareout .shareout-but").click(function () {
        const sharebod=$(".shareout .shareout-bod");
        const temp=sharebod.is(":hidden");

            if (sharebod.width()==0){
                sharebod.css({
                    "width":"300px"
                })
            }else {
                sharebod.css({
                    "width":"0"
                })
            }


    });
//	标签
	$(".article-tag-list li").on('mouseenter', function(){
		$(this).css("background-color","#00bcd4");
		$(this).children("a").css("color","#fff");
	});
	$(".article-tag-list li").on('mouseleave', function(){
        $(this).css("background-color","#eee");
        $(this).children("a").css("color","#808080");
	});
//	title
    var matterBodys=$("#main").children("div").attr("class");
    if(matterBodys=="matterBody"){
        console.log("true")
        var mytitle=$(".article-title").text().trim()||$("title").text();
        $("title").text(mytitle);
    }

//share
    var share_url = encodeURIComponent(location.href);
    var share_title = encodeURIComponent($(".article-title").text().trim());
    var share_pic = window.location.host+$("#post-restart img").first().attr("src");
    var share_from = encodeURIComponent(document.title);

    //Qzone
    $('.shareout .icon-weixintubiao').click(function(e) {
        window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+share_url+"&title="+share_title+"&pics="+share_pic+"&site="+share_from,"newwindow");
    });
    //Sina Weibo
    $('.shareout .icon-weibo').click(function(e) {
        var param = {
            url:share_url ,
            // appkey:'',
            title:share_title,
            pic:share_pic,
            // ralateUid:'',
            rnd:new Date().valueOf()
        }
        var temp = [];
        for( var p in param ){
            temp.push(p + '=' + encodeURIComponent( param[p] || '' ) )
        }
        window.open('http://v.t.sina.com.cn/share/share.php?' + temp.join('&'));
    });

    //weixin
    $("#code").qrcode({
        // render: "table", //table方式
        width: 230, //宽度
        height:230, //高度
        // width: 300, //宽度
        // height:300, //高度
        text: location.href,
    });
    $('.shareout .icon-weixin').click(function() {
        $("#qcode").slideDown(500);

    });
    $("#qcode b").click(function () {
        $("#qcode").hide();
    });

    //
    $('.shareout .icon-qq').click(function(e) {
        window.open("http://connect.qq.com/widget/shareqq/index.html?url="+share_url+"&title="+share_title+"&pics="+share_pic+"&site="+share_from,"newwindow");
    });
    //
    $('.shareout .icon-douban').click(function(e) {
        window.open("http://www.douban.com/recommend/?url="+share_url+"&name="+share_title+"&pics="+share_pic+"&site="+share_from,"newwindow");
    });
//
    $('.shareout .icon-renren').click(function(e) {
        // window.open('http://share.v.t.qq.com/index.php?c=share&a=index&title='+share_title+'&site='+share_from+'&pic='+share_pic+'&url='+share_url+'','newwindow');
        window.open('http://widget.renren.com/dialog/share?resourceUrl='+share_url+'&title='+share_title+'&images='+share_pic+'','newwindow');
    });


});