/*!
 * RoshanAlwaysBB, a JavaScriptPlugIn v1.0.0
 * http://www.jimi.la/
 *
 * Copyright 2016, CaoYuhao
 * All rights reserved.
 * Date: 2016-6-13 20:46:54
 */
;
(function ($) {
    'use strict';
    $.fn.RoshanBB = function (data) {
        var jqObj = this.eq(0);
        console.log(jqObj);
        console.log(jqObj.css('height'));
        console.log(jqObj.css('width'));
        console.log(jqObj);
        var par = jqObj.parent();
        if (jqObj.css('position') == 'static') {
            jqObj.css({position: 'relative'});
        }

        var id = new Date().getTime() + parseInt(Math.random() * 10000);
        jqObj.append('<a id=RoshanBB' + id + '></a>');


        var $tagA = jqObj.find('#RoshanBB' + id)
        $tagA.css({
            'position': 'absolute',
            'width': '100%',
            'height': jqObj.css('height'),
            'left': 0,
            'top': 0,
        }).attr({'href': data});
    }
})(jQuery);