/*!
 * question, a JavaScriptPlugIn v1.0.0
 * http://www.jimi.la/
 *
 * Copyright 2016, CaoYuhao
 * All rights reserved.
 * Date: 2016-8-31 19:01:48
 */

;
(function (w, d, $, undefined) {


    function NormalQuestion(container, data) {
        this.C = this.container = (typeof container == 'string') ? $(container) : container;
        this.data = data;
        this.title = data.title;
        this.sections = data.sections;
        this.colNum = data.colNum || 1;
        this.selectType = data.selectType || 'single';//multi

        this.config = {};
        this.init();
    }

    NormalQuestion.prototype = {
        init: function () {
            this.initConfig();
            this.createDom();
            this.initCSS();
            this.bindEvent();
        },
        initConfig: function () {
            var that = this;
            //console.log((that.sections))

            //适配sections......................  传的对象也将他适配成数组
            if (Object.prototype.toString.call(that.sections) != '[object Array]') {
                var arr = [that.sections];
                that.sections = arr;
            }
            //console.log(that.sections);

        },
        createDom: function () {
            var that = this;
            $(this.C).html("<div class='title'></div>")
            $(this.C).find('.title').html("<div class='titleDes'>" + that.title + "</div>");


            [].forEach.call(that.sections, function (e, i, arr) {
                var str = '';
                var section = e;
                if (section.question) {
                    str += "<div class='question'>" + section.question + "</div>";
                }
                ;
                $(that.C).append(str);

                str = '';
                [].forEach.call(section.options, function (e, i, arr) {
                    var imgStr = (e.imgUrl) ? '<img src=' + e.imgUrl + ' />' : '';
                    var typeScore = (e.type && e.score) ? ' data-type=' + e.type + ' data-score=' + e.score : "";
                    var cid = (e.cid) ? ' data-cid=' + e.cid : '';//cid 是分类
                    var fid = (e.fid) ? ' data-fid=' + e.fid : '';//fid是feature
                    str += "<div class='option'" + typeScore + cid + fid + "><span>" + e.content + imgStr + "</span></div>"
                })
                str += "<div class='optionClearBoth'></div>";
                str = "<div class='answer'>" + str + "</div>";
                $(that.C).append(str);
            });


        },
        initCSS: function () {
            var that = this;

        },
        bindEvent: function () {
            var that = this;

            $(this.C).find('.option')
                .css({
                    width: (100 / that.colNum - 2) + '%',
                })
                .click(function () {
                    if (that.selectType == 'single') {
                        $(this).addClass('optionClicked').siblings().removeClass('optionClicked');

                    } else if (that.selectType == 'multi') {
                        $(this).toggleClass('optionChoosed');
                    }
                })
        }
    }
    w.NormalQuestion = NormalQuestion;
})(window, document, jQuery)


