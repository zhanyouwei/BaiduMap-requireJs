/**
 * Created by Mrzhan on 14-7-21.
 */
'use strict';
require.config({
    baseUrl: "javascript",
    paths: {
        domReady: 'libs/require/domReady',
        async: 'libs/require/async',
        BMap: 'libs/map/BMap'
    }
});
require([
    "domReady!",
    "BMap"
],
    function (domReady, BMap) {
        var map = new BMap.Map("bmap");
        var point = new BMap.Point(118.32457, 32.317351);
        map.centerAndZoom(point, 15);
    });
