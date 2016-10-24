/*!
 * jimiAlert, a JavaScriptPlugIn v1.0.0
 * http://www.jimi.la/
 *
 * Copyright 2016, CaoYuhao
 * All rights reserved.
 * Date: 2016-9-14 16:21:24
 */

;
(function (w, d, $, undefined) {
    var jimiAlertBox = null;

    function alert(str) {
        if (jimiAlertBox) {

        }
        else {
            jimiAlertBox = new JimiAlertBox(null, null);
        }
        jimiAlertBox.alert(str);
    }

    function JimiAlertBox(container, data) {
        this.data = data;
        this.config = {};
        this.JM = this.jqueryMap = {};
        this.init();
    }

    JimiAlertBox.prototype = {
        init: function () {
            this.initConfig();
            this.createDom();
            this.initCSS();
            this.bindEvent();
        },
        initConfig: function () {

        },
        createDom: function () {
            $('body').append('<div id="alertBox"><div id="alertBoxTxt"></div></div>');
            this.JM.alertBox = $('#alertBox');
            this.JM.alertBoxTxt = $('#alertBoxTxt');
        },
        initCSS: function () {
            var that = this;
            this.JM.alertBox.css({
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'none',
                //'background': 'rgba(0,0,0,0.5)'
            });

            this.JM.alertBoxTxt.css({
                position: 'absolute',
                top: '80%',
                left: '50%',
                transform:'translateX(-50%)',
                'box-sizing': 'border-box',
                padding: '20px 25px',
                'background': 'white',
                'border-radius': '10px',
                'border':'1px solid #f4f4f4'
            })

        },
        bindEvent: function () {
            var that = this;
            this.JM.alertBox.click(function () {
                $(this).hide();
            })
        },
        alert: function (txt) {
            this.JM.alertBoxTxt.html(txt);
            this.JM.alertBox.show();
        }
    }

    w.JimiAlertBox = JimiAlertBox;
    w.alert = alert;
})(window, document, jQuery)


