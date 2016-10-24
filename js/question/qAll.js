;
(function () {
    var $container = $('.container');
    GM.$container = $container;


    var questionNum = 1;
    var questionIndex = questionNum - 1;
    var $container = GM.$container.eq(questionIndex);


    var q1 = new NormalQuestion($container.find('.q1'), {
        title: '请描述一下自己',
        sections: [
            {
                question: '你的年龄',
                options: [
                    {content: '25+', type: 5, score: 2},
                    {content: '25-',},
                ],
            },
            {
                question: '你的性别',
                options: [
                    {content: '男', imgUrl: 'img/man.png'},
                    {content: '女', imgUrl: 'img/woman.png'},
                ],
            }],
        colNum: 2,
        selectType: 'single'
    })

})(1)
;
(function () {
    var questionNum = 2;
    var questionIndex = questionNum - 1;
    var $container = GM.$container.eq(questionIndex);

    $container.html("<div class='title'>" +
        "<div class='titleDes'>勾出你的肌肤问题（可多选）</div>" +
        "</div>" +

        "<div class='faceDemo'>" +
        '<img src="img/q2/smile.png" width="50%" class="face"/>' +
        '<img src="img/q2/handL.png" width="10%" class="handL"/>' +
        '<img src="img/q2/handR.png" width="10%" class="handR"/>' +

        "<div class='problem9'>" +
        '<img src="img/q2/9/taitou.png" class="taitou" width="10%" style="display: none;"/>' +
        '<img src="img/q2/9/lunkuo.png" class="lunkuo" width="15%" style="display: none;"/>' +
        '<img src="img/q2/9/heitou.png" class="heitou" width="1.5%" style="display: none;"/>' +
        '<img src="img/q2/9/doudou.png" class="doudou" width="2%" style="display: none;"/>' +
        '<img src="img/q2/9/maokong.png" class="maokong" width="12%" style="display: none;"/>' +
        '<img src="img/q2/9/faling.png" class="faling" width="12%" style="display: none;"/>' +
        '<img src="img/q2/9/yandai.png" class="yandai" width="10%" style="display: none;"/>' +
        '<img src="img/q2/9/lianjiaL.png" class="lianjia lianjiaL" width="5.6%" style="display: none;"/>' +
        '<img src="img/q2/9/lianjiaR.png" class="lianjia lianjiaR" width="5.6%" style="display: none;"/>' +
        '<img src="img/q2/9/yuwei.png" class="yuwei" width="10%" style="display: none;"/>' +
        '<img src="img/q2/faguang.png" width="68%" class="faguang" style="display: none;"/>' +
        '</div>' +

        '<img src="img/q2/glass.png" width="40%" class="glass"/>' +
        '</div>' +
        '<div class="answer">' +
            //<!--1 肤质甘油  1干 2油 3混-->
            //<!--2 敏-->
            //<!--3 痘-->
            //<!--4 黑-->
            //<!--5 熟-->
            //<!--6 干油发质  1干 2油-->
            //<!--7 受损-->
        "<div class='option' data-name='taitou' data-type='5' data-score='1' data-fid='5718'><span>抬头纹</span></div>" +
        "<div class='option' data-name='lunkuo'><span>轮廓线不清晰</span></div>" +

            //<!--黑头的  data-score2不是两分 是油性-->
        "<div class='option' data-name='heitou' data-type='1' data-score='2' data-cid='190'>" +
        "<span>黑头</span>" +
        "</div>" +
        "<div class='option' data-name='doudou' data-type='3' data-score='2'><span>痘痘</span></div>" +
        "<div class='option' data-name='maokong' data-fid='96933'><span>毛孔粗大</span></div>" +
        "<div class='option' data-name='faling' data-type='5' data-score='1' data-fid='5718'><span>法令纹</span></div>" +
        "<div class='option' data-name='yandai' data-cid='72' data-fid='88107'><span>眼袋</span></div>" +
        "<div class='option' data-name='lianjia' data-type='2' data-score='1'><span>脸颊发红</span></div>" +
        "<div class='option' data-name='yuwei' data-type='5' data-score='1' data-cid='73' data-fid='5718'>" +
        "<span>鱼尾纹</span></div>" +
        "<div class='option optionPerfect' data-fid='5715'><span>完美肌肤</span></div>" +
        "</div>" +

        "<div class='clearBoth'></div>"
    )

    var $options = $container.find('.option');
    var $optionPerfect = $container.find('.optionPerfect');
    var $face = $container.find('.face');
    var $problem9 = $container.find('.problem9');


    //一般选项占1/3行
    $options
        .css({
            width: (100 / 3 - 2) + '%',
        })

        //点击事件.............................
        .click(function () {
            //图片切换.............................
            var dataName = $(this).attr('data-name');
            $('.' + dataName).toggle();


            $(this).toggleClass('optionChoosed');

            //选中状态代码.....................................
            //如果点击的是完美肤质 ..................
            if ($(this).hasClass("optionPerfect")) {

                $options.removeClass('optionChoosed');
                $optionPerfect.addClass('optionChoosed');
                $problem9.find('img').hide();
                $container.find('.faguang').show();
            } else {
                $optionPerfect.removeClass('optionChoosed');
                $container.find('.faguang').hide();

            }

            //3个变哭脸..........................
            var len = $('.optionChoosed').length;
            if (len >= 3 && len < 6) {
                $face.attr({src: 'img/q2/cry3.png'});
            }
            else if (len >= 6) {
                $face.attr({src: 'img/q2/cry6.png'});
            }
            else {
                $face.attr({src: 'img/q2/smile.png'});
            }
        })

    //其他选项占1行
    $optionPerfect.css({
        width: (100 / 1 - 2) + '%',
    });

    //这一页的文字选项缩小
    $options.find('span').css({'font-size': '1.1rem'});


    //手部移动.............................
    $container.find('.handL')
        .velocity({translateX: '-1rem'}, 0)
        .velocity({translateX: '1rem'}, {loop: true, duration: 2000})
    $container.find('.handR')
        .velocity({translateX: '-1rem'}, 0).delay(500)
        .velocity({translateX: '1rem'}, {loop: true, duration: 2000})

    $container.find('.glass')
        .velocity({translateY: '-0.1rem'}, 0)
        .velocity({translateY: '0.1rem'}, {loop: true, duration: 2000})
})(2)
;
(function () {
    var questionNum = 3;
    var questionIndex = questionNum - 1;
    var $container = GM.$container.eq(questionIndex);


    $container.html("<div class='title'>" +
        "<div class='titleDes'>以下场景中你的皮肤状况是？</div>" +
        "<div class='titleTab'>" +
        "<span class='titleTabOption titleTabOptionCurrent'>洗完脸后</span>" +
        "<span>></span>" +
        "<span class='titleTabOption'>干燥环境</span>" +
        "<span>></span>" +
        "<span class='titleTabOption'>潮湿环境</span>" +
        "</div>" +
        "</div>" +

        "<div class='questionUl'>" +
        "<div class='questionLi'>" +
        "<div class=answerImg>" +
        "<img src='img/q3/q3-1.jpg' width='100%' />" +
        "</div>" +
        "<div class='answer'>" +
        "<div class='option' data-type='1' data-score='1' data-fid='5715'><span>觉得有些干</span></div>" +
        "<div class='option' data-type='1' data-score='3'><span>不干也不油</span></div>" +
        "<div class='option' data-type='1' data-score='3'><span>T油U干</span></div>" +
        "<div class='option' data-type='1' data-score='2' data-fid='5722'><span>明显觉得油腻了</span></div>" +
        "<div class='optionClearBoth'></div>" +
        "</div>" +
        "</div>" +
        "<div class='questionLi'>" +
        "<div class=answerImg>" +
        "<img src='img/q3/q3-2.jpg' width='100%'/>" +
        "</div>" +
        "<div class='answer'>" +
        "<div class='option' data-type='1' data-score='1' data-fid='5715'><span>觉得有些干</span></div>" +
        "<div class='option' data-type='1' data-score='3'><span>不干也不油</span></div>" +
        "<div class='option' data-type='1' data-score='3'><span>T油U干</span></div>" +
        "<div class='option' data-type='1' data-score='2' data-fid='5722'><span>明显觉得油腻了</span></div>" +
        "<div class='optionClearBoth'></div>" +
        "</div>" +
        "</div>" +
        "<div class='questionLi'>" +
        "<div class=answerImg>" +
        "<img src='img/q3/q3-3.jpg' width='100%'/>" +
        "</div>" +
        "<div class='answer'>" +
        "<div class='option' data-type='1' data-score='1' data-fid='5715'><span>觉得有些干</span></div>" +
        "<div class='option' data-type='1' data-score='3'><span>不干也不油</span></div>" +
        "<div class='option' data-type='1' data-score='3'><span>T油U干</span></div>" +
        "<div class='option' data-type='1' data-score='2' data-fid='5722'><span>明显觉得油腻了</span></div>" +
        "<div class='optionClearBoth'></div>" +
        "</div>" +
        "</div>" +
        "</div>" +

        "<div class='clearBoth'></div>");


    //jqObj......................................
    var $questionLis = $container.find('.questionLi');
    var $titleTabOptions = $container.find('.titleTabOption');
    var $options = $container.find('.option');

    //init....................................
    var qIndex = 0;
    var qLen = $questionLis.length;
    $questionLis.eq(qIndex).show().siblings().hide();


    //绑定tab......................................
    $titleTabOptions.click(function () {
        qIndex = $(this).index('.titleTabOption');

        tabQuestion();

    });

    $options
        .css({
            width: (100 / 1 - 2) + '%',
        })
        .click(function () {
            var $parent = $(this).closest('.questionLi');
            var questionLiIndex = $parent.index();
            qIndex = questionLiIndex + 1;
            tabQuestion();
            $(this).addClass('optionClicked').siblings().removeClass('optionClicked');

        })

    function tabQuestion() {
        $titleTabOptions.eq(qIndex).addClass('titleTabOptionCurrent').siblings().removeClass('titleTabOptionCurrent');

        $questionLis.eq(qIndex).siblings().hide(0, 'swing', function () {
            $questionLis.eq(qIndex).fadeIn(150);

        })


    }
})(3)
;
(function () {
    var questionNum = 4;
    var questionIndex = questionNum - 1;
    var $container = GM.$container.eq(questionIndex);


    var q1 = new NormalQuestion($container.find('.q1'), {
        title: '使用以下哪种保湿产品让你的皮肤感到舒适？',
        sections: {
            question: null,
            options: [
                {content: '滋润度高的面霜或润肤油', cid: '61', 'data-fid': '87964'},
                {content: '一般滋润度的面霜', cid: '61'},
                {content: '凝霜或凝乳', cid: '60'},
                {content: '清爽的啫喱或乳液', cid: '60'},
            ],
        },
        colNum: 1,
        selectType: 'single'
    })

})(4)
;
(function () {
    var questionNum = 5;
    var questionIndex = questionNum - 1;
    var $container = GM.$container.eq(questionIndex);

    var q1 = new NormalQuestion($container.find('.q1'), {
        title: '以下哪个选项曾让你的皮肤感到刺痛、发红或者发痒？（可多选）',
        sections: {
            question: null,
            options: [
                {content: '接触花粉', type: 2, score: 1,},
                {content: '接触挥发性物质', type: 2, score: 1,},
                {content: '佩戴合金首饰', type: 2, score: 1,},
                {content: '饮酒、抽烟', type: 2, score: 1,},
                {content: '长期待在干燥机舱', type: 2, score: 1,},
                {content: '使用化学防晒剂', type: 2, score: 1,},
                {content: '接触宾馆的床单被套', type: 2, score: 1,},
                {content: '季节变换', type: 2, score: 1,},
                {content: '都不会'},
            ],
        },
        colNum: 2,
        selectType: 'multi'
    })


    var $options = $container.find('.q1 .option');

    //默认字体是1.5 这个是例外1.1
    $options.find('span').css({'font-size': '1.1rem'});


    //多余事件 本来多选逻辑只是切换toggle 现在最后一个是都不选 区别于其他逻辑
    $options.click(function () {
        //如果是最后一题.......................................
        var that = this;

        if ($(this).index() == ($options.length - 1)) {
            $options.removeClass('optionChoosed');
            $options.eq($options.length - 1).addClass('optionChoosed');
        } else {
            $options.eq($options.length - 1).removeClass('optionChoosed');
        }
    })


})(5)
;
(function () {
    var questionNum = 6;
    var questionIndex = questionNum - 1;
    var $container = GM.$container.eq(questionIndex);

    var q1 = new NormalQuestion($container.find('.q1'), {
        title: '如果长痘，下列哪个描述符合你的痘痘类型？',
        sections: {
            question: null,
            options: [
                {content: '多为红色囊肿型', type: 3, score: 1,},
                {content: '多为白色粉刺型', type: 3, score: 1,},
                {content: '多为闭口型', type: 3, score: 1,},
                {content: '宝宝从不长痘'},
            ],
        },
        colNum: 1,
        selectType: 'single'
    })

    var $options = $container.find('.q1 .option');

})(6)
;
(function () {
    var questionNum = 7;
    var questionIndex = questionNum - 1;
    var $container = GM.$container.eq(questionIndex);


    var q1 = new NormalQuestion($container.find('.q1'), {
        title: '你的防晒习惯是？',
        sections: {
            question: null,
            options: [
                {content: '从不防晒', cid: '69'},
                {content: '偶尔防晒', cid: '69'},
                {content: '经常防晒',},
                {content: '四季防晒',},
            ],
        },
        colNum: 1,
        selectType: 'single'
    })

    var $options = $container.find('.q1 .option');

})(7)
;
(function () {
    var questionNum = 8;
    var questionIndex = questionNum - 1;
    var $container = GM.$container.eq(questionIndex);

    var q1 = new NormalQuestion($container.find('.q1'), {
        title: '如何描述自己的肤色？',
        sections: {
            question: null,
            options: [
                {content: '偏深偏黑', type: 4, score: 2, 'data-fid': '5737'},
                {content: '偏黄偏黯淡', type: 4, score: 1, 'data-fid': '5737'},
                {content: '正常肤色', type: 4, score: 1,},
                {content: '白皙',},
            ],
        },
        colNum: 1,
        selectType: 'single'
    })

    var $options = $container.find('.q1 .option');

})(8)
;
(function () {
    var questionNum = 9;
    var questionIndex = questionNum - 1;
    var $container = GM.$container.eq(questionIndex);

    var q1 = new NormalQuestion($container.find('.q1'), {
        title: '食指按压脸颊皮肤，然后松开，皮肤恢复平滑的时间为？',
        sections: {
            question: null,
            options: [
                {content: '超过4秒', type: 5, score: 2,},
                {content: '3秒左右', type: 5, score: 1,},
                {content: '2秒左右',},
                {content: ' 1秒以内',},
            ],
        },
        colNum: 1,
        selectType: 'single'
    })

    var $options = $container.find('.q1 .option');

})(9)
;
(function () {
    var questionNum = 10;
    var questionIndex = questionNum - 1;
    var $container = GM.$container.eq(questionIndex);

    var q1 = new NormalQuestion($container.find('.q1'), {
        title: '生活是否有规律？',
        sections: {
            question: null,
            options: [
                {content: '几乎完全没有规律可言'},
                {content: '偶尔熬夜',},
                {content: '恪守规律的生物钟',},
            ],
        },
        colNum: 1,
        selectType: 'single'
    })

    var $options = $container.find('.q1 .option');

})(10)
;
(function () {
    var questionNum = 11;
    var questionIndex = questionNum - 1;
    var $container = GM.$container.eq(questionIndex);
    //6 干油发质   1干 2油
    var q1 = new NormalQuestion($container.find('.q1'), {
        title: '通常情况下，你的头发状态是？（可多选）',
        sections: {
            question: null,
            options: [
                {content: '容易打结，难以梳理', type: 6, score: 1,},
                {content: '大油头，头发都快贴到头皮上了', type: 6, score: 2,},
                {content: '经常染发烫发', type: 7, score: 1,},
                {content: ' 有脱发现象', type: 7, score: 1,},
                {content: ' 末梢分叉', type: 6, score: 1,},
                {content: ' 顺滑且没有油腻感',},
                {content: ' 自然卷',},
                {content: ' 黑长直',},
            ],
        },
        selectType: 'multi'
    })

    var $options = $container.find('.q1 .option');

})(11)
;
(function () {
    var questionNum = 12;
    var questionIndex = questionNum - 1;
    var $container = GM.$container.eq(questionIndex);

    var q1 = new NormalQuestion($container.find('.q1'), {
        title: '头屑出现的频率是？',
        sections: {
            question: null,
            options: [
                {content: '按时清洁，基本没有出过头屑'},
                {content: '按时清洁，很少有头屑',},
                {content: '清洁后第三天头发会头屑',},
                {content: ' 满头都是头皮屑', type: 6, score: 2,},
            ],
        },

    })

    var $options = $container.find('.q1 .option');

})(12)