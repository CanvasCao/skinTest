/**
 * Created by Administrator on 2016/9/14.
 */
/**
 * Created by Administrator on 2016/8/4.
 */
function Resources(resourceJson, callback) {
    this.imgs = [];
    this.audios = [];
    this.resourceJson = resourceJson;
    this.callback = callback;

    this.init();
}


Resources.prototype = {
    init: function () {
        var that = this;

        $.ajax({
            type: "get",
            url: that.resourceJson,
            success: function (data) {
                //data直接是对象 不需要json.parse
                console.log(JSON.stringify(data));

                var totalLength = data.images.length ;
                var alreayLoadNumber = 0;
                [].forEach.call(data.images, function (e, i, array) {

                    var imgObj = e;
                    var image = new Image();
                    image.src = imgObj.src;
                    image.index = i;

                    image.onload = function () {
                        alreayLoadNumber++;
                        that.imgs[imgObj.name] = this;//this指image对象

                        //回调逻辑在外部 内部不做判断.....
                        //console.log(alreayLoadNumber);
                        that.callback(alreayLoadNumber, totalLength, that.imgs);

                    }
                });
            },
            error: function () {
                console.log('ERROR');

            }
        })
    }
}