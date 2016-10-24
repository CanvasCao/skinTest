/**
 * Created by Administrator on 2016/6/17.
 */
(function (w, d, $, undefined) {
    var controller = {};

    controller.ifAjaxing = false;

    controller.postSkinTest = function (params, callback) {
        console.log(params.result);
        $.ajax({
            type: "post",
            url: jimiHost + '/caculateNewSkin.php',
//                url: 'package.json',
            data: params,
            dataType: "jsonp",
            jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            jsonpCallback: "jsonpcallback",
            success: function (data) {
                console.log(JSON.stringify(data));
            },
            error: function (err) {
                console.log('ERROR!');
                console.log(err);
            }
        });
    };

    controller.getSkinTestResult = function (uid, callback) {
        $.ajax({
            type: "get",
            url: jimiHost + '/caculateNewSkin.php?uid=' + uid,
            //url: 'result.js',
            dataType: "jsonp",
            jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            jsonpCallback: "jsonpcallback",
            success: function (data) {
                console.log(JSON.stringify(data));

                var uname = data.uname + '的' || ''
                $('title').html(uname + '肌秘检测');

                $resultLoading = $('.resultLoading');
                $resultLoaded = $('.resultLoaded');
                $resultImgCon = $('.resultImgCon');

                //loading消失 出现结果................................
                $resultLoading.fadeOut();

                setTimeout(function () {
                    $resultLoaded.fadeIn();
                }, 600);


                AppendFlower();
                //设置图片位置.........................................
                var products = data.products;
                var desc = data.desc;
                var asc = data.asc;
                setPosition(Adapter(desc, asc));

                //appendProductImg...........................
                callback(products);

            },
            error: function (err) {
                console.log('ERROR!');
                console.log(err);
            }
        });
    }
    function AppendFlower() {
        $resultImgCon = $('.resultImgCon');

        var str = '';
        for (i = 1; i <= 5; i++) {
            str += "<img src=img/result/flower/" + i + ".png id=flower" + i + " / >"
        }
        $resultImgCon.append(str);

        var positionArr = [
            null,//0
            {width: '8%', top: '5%', left: '7%', rotateZ: 0},//1
            {width: '8%', top: '8%', left: '82%', rotateZ: 0},
            {width: '8%', top: '55%', left: '50%', rotateZ: 0},
            {width: '8%', top: '40%', left: '85%', rotateZ: 0},
            {width: '8%', top: '67%', left: '80%', rotateZ: 0},//5
        ]
        for (i = 1; i <= 5; i++) {
            $('#flower' + i).velocity(positionArr[i], 0);
        }

    }

    //将后端返回的
    function Adapter(typeArr, featureArr) {
        var result = [3, 6, 9, 11, 15, 16, 19];
        [].forEach.call(typeArr, function (e, i, arr) {
            if (e.type <= 7 && e.type >= 1) {
                result[e.type - 1] = e.id;
            }
        });
        [].forEach.call(featureArr, function (e, i, arr) {
            if (i > 4) {
                return;
            }
            result.push(e.id);

        });

        //console.log(result);
        return result;
    }

    function setPosition(imgArr) {
        var positionArr = [
            {width: '86%', top: '58%', left: '7%', rotateZ: 5},//1
            {width: '75%', top: '42%', left: '12%', rotateZ: 0},
            {width: '72%', top: '7%', left: '10%', rotateZ: 0},
            {width: '80%', top: '25%', left: '10%', rotateZ: 0},
            {width: '28%', top: '15%', left: '60%', rotateZ: 0},//5
            {width: '48%', top: '49%', left: '13%', rotateZ: 0},
            {width: '78%', top: '70%', left: '10%', rotateZ: -5},//7.......必返
            {width: '40%', top: '16%', left: '10%', rotateZ: -8},
            {width: '50%', top: '35%', left: '10%', rotateZ: 0},
            {width: '40%', top: '66%', left: '10%', rotateZ: 0},//10
            {width: '28%', top: '52%', left: '65%', rotateZ: 5},
            {width: '28%', top: '35%', left: '65%', rotateZ: 8},//12
        ]


        $resultImgCon = $('.resultImgCon');

        var str = '';
        [].forEach.call(imgArr, function (e, i, arr) {
            str += "<img src=img/result/" + e + ".png id=result" + i + " / >"
        })
        $resultImgCon.append(str);

        $resultImgs = $resultImgCon.find('img');
        resultImgsLength = $resultImgs.length;
        $resultImgs.css({display: 'block', 'position': 'absolute'});
        for (i = 0; i <= imgArr.length; i++) {
            $('#result' + i).velocity(positionArr[i], 0);
        }
    }

    w.controller = controller;
})(window, document, $)
