/*大屏*/
$(function () {
    pyechart_map();
    line0();
    line1();
    line2();
    line3();
    line4();
    line5();
    line6();
    line7();
    line8();
    line9();
    line10();
    line11();
    line12();
    line13();
    line14();
    line15();
    line16();
    line17();
    line18();
    line19();
    line20();
    line21();
    line22();
    line23();
    line24();
    line25();
    line26();
    line27();
    line28();
    line29();








    // echart_map中国地图
    function pyechart_map() {
        // 基于准备好的dom，初始化echarts实例
        var chart_cfbba7ae25fa4f5d89cb5d7151a4b043 = echarts.init(
            document.getElementById('map'), 'white', {renderer: 'canvas'});
        var option_cfbba7ae25fa4f5d89cb5d7151a4b043 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "map",
            "label": {
                "show": false,
                "margin": 8
            },
            "map": "china",
            "data": [
                {
                    "name": "\u5317\u4eac\u5e02",
                    "value": 905052.8557600753
                },
                {
                    "name": "\u5929\u6d25\u5e02",
                    "value": 5834614.434755686
                },
                {
                    "name": "\u6cb3\u5317\u7701",
                    "value": 15840001.63019593
                },
                {
                    "name": "\u5c71\u897f\u7701",
                    "value": 454588.2673368581
                },
                {
                    "name": "\u5185\u8499\u53e4\u81ea\u6cbb\u533a",
                    "value": 22729090.421593864
                },
                {
                    "name": "\u8fbd\u5b81\u7701",
                    "value": 10442513.226010796
                },
                {
                    "name": "\u5409\u6797\u7701",
                    "value": 7243156.177829932
                },
                {
                    "name": "\u9ed1\u9f99\u6c5f\u7701",
                    "value": 12314111.649637753
                },
                {
                    "name": "\u4e0a\u6d77\u5e02",
                    "value": 2662163.978751365
                },
                {
                    "name": "\u6c5f\u82cf\u7701",
                    "value": 12397474.670660917
                },
                {
                    "name": "\u6d59\u6c5f\u7701",
                    "value": 7590747.838142294
                },
                {
                    "name": "\u5b89\u5fbd\u7701",
                    "value": 17663784.120457925
                },
                {
                    "name": "\u798f\u5efa\u7701",
                    "value": 8162883.643815486
                },
                {
                    "name": "\u6c5f\u897f\u7701",
                    "value": 4575385.677432278
                },
                {
                    "name": "\u5c71\u4e1c\u7701",
                    "value": 25464378.72826361
                },
                {
                    "name": "\u6cb3\u5357\u7701",
                    "value": 20533926.885351207
                },
                {
                    "name": "\u6e56\u5317\u7701",
                    "value": 17663784.120457925
                },
                {
                    "name": "\u6e56\u5357\u7701",
                    "value": 5255725.0212187655
                },
                {
                    "name": "\u5e7f\u4e1c\u7701",
                    "value": 12837629.22729355
                },
                {
                    "name": "\u5e7f\u897f\u58ee\u65cf\u81ea\u6cbb\u533a",
                    "value": 6996571.811875255
                },
                {
                    "name": "\u6d77\u5357\u7701",
                    "value": 2121655.953511635
                },
                {
                    "name": "\u91cd\u5e86\u5e02",
                    "value": 2262045.857967835
                },
                {
                    "name": "\u56db\u5ddd\u7701",
                    "value": 2528687.988135004
                },
                {
                    "name": "\u8d35\u5dde\u7701",
                    "value": 4947866.220148339
                },
                {
                    "name": "\u4e91\u5357\u7701",
                    "value": 2756961.0088425656
                },
                {
                    "name": "\u897f\u85cf\u81ea\u6cbb\u533a",
                    "value": 23006546.656897776
                },
                {
                    "name": "\u9655\u897f\u7701",
                    "value": 3195547.2441632124
                },
                {
                    "name": "\u7518\u8083\u7701",
                    "value": 8751108.319188552
                },
                {
                    "name": "\u9752\u6d77\u7701",
                    "value": 6508540.777775336
                },
                {
                    "name": "\u5b81\u590f\u56de\u65cf\u81ea\u6cbb\u533a",
                    "value": 16312008.090077095
                },
                {
                    "name": "\u65b0\u7586\u7ef4\u543e\u5c14\u81ea\u6cbb\u533a",
                    "value": 13573414.713590685
                },
                {
                    "name": "\u53f0\u6e7e\u7701",
                    "value": 0
                }
            ],
            "roam": true,
            "aspectScale": 0.75,
            "nameProperty": "name",
            "selectedMode": false,
            "zoom": 1,
            "mapValueCalculation": "sum",
            "showLegendSymbol": false,
            "emphasis": {},
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                ""
            ],
            "selected": {
                "": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "title": [
        {
            "show": true,
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false
        }
    ],
    "visualMap": {
        "show": true,
        "type": "piecewise",
        "min": 0,
        "max": 100,
        "text": [
            "\u9ad8(\u767e\u4e07\u5428)",
            "\u4f4e"
        ],
        "textStyle": {
            "color": "#ffffff",
            "fontSize": 16
        },
        "inRange": {
            "color": [
                "#50a3ba",
                "#eac763",
                "#d94e5d"
            ]
        },
        "calculable": true,
        "inverse": false,
        "splitNumber": 5,
        "hoverLink": true,
        "orient": "vertical",
        "padding": 5,
        "showLabel": true,
        "itemWidth": 20,
        "itemHeight": 14,
        "borderWidth": 0,
        "pieces": [
            {
                "min": 22000000,
                "color": "#22486E"
            },
            {
                "min": 19000000,
                "max": 21999999,
                "color": "#101566"
            },
            {
                "min": 15000000,
                "max": 18999999,
                "color": "#646AE4"
            },
            {
                "min": 12000000,
                "max": 14999999,
                "color": "#5785E3"
            },
            {
                "min": 8000000,
                "max": 11999999,
                "color": "#47A4E1"
            },
            {
                "min": 4000000,
                "max": 7999999,
                "color": "#224E9E"
            },
            {
                "min": 1000000,
                "max": 3999999,
                "color": "#0D557D"
            },
            {
                "min": 0,
                "max": 999999,
                "color": "#325C86"
            }
        ]
    }
};
        chart_cfbba7ae25fa4f5d89cb5d7151a4b043.setOption(option_cfbba7ae25fa4f5d89cb5d7151a4b043);

        chart_cfbba7ae25fa4f5d89cb5d7151a4b043.on('click', function (param){
            var selected = param.name;
                if (selected) {

                    document.getElementById('ln0').style.display = 'none';
                    document.getElementById('ln1').style.display = 'none';
                    document.getElementById('ln2').style.display = 'none';
                    document.getElementById('ln3').style.display = 'none';
                    document.getElementById('ln4').style.display = 'none';
                    document.getElementById('ln5').style.display = 'none';
                    document.getElementById('ln6').style.display = 'none';
                    document.getElementById('ln7').style.display = 'none';
                    document.getElementById('ln8').style.display = 'none';
                    document.getElementById('ln9').style.display = 'none';
                    document.getElementById('ln10').style.display = 'none';
                    document.getElementById('ln11').style.display = 'none';
                    document.getElementById('ln12').style.display = 'none';
                    document.getElementById('ln13').style.display = 'none';
                    document.getElementById('ln14').style.display = 'none';
                    document.getElementById('ln15').style.display = 'none';
                    document.getElementById('ln16').style.display = 'none';
                    document.getElementById('ln17').style.display = 'none';
                    document.getElementById('ln18').style.display = 'none';
                    document.getElementById('ln19').style.display = 'none';
                    document.getElementById('ln20').style.display = 'none';
                    document.getElementById('ln21').style.display = 'none';
                    document.getElementById('ln22').style.display = 'none';
                    document.getElementById('ln23').style.display = 'none';
                    document.getElementById('ln24').style.display = 'none';
                    document.getElementById('ln25').style.display = 'none';
                    document.getElementById('ln26').style.display = 'none';
                    document.getElementById('ln27').style.display = 'none';
                    document.getElementById('ln28').style.display = 'none';
                    document.getElementById('ln29').style.display = 'none';
                    document.getElementById('ln30').style.display = 'none';
                    document.getElementById('ln31').style.display = 'none';




                    document.getElementById('line0').style.display = 'none';
                    document.getElementById('line1').style.display = 'none';
                    document.getElementById('line2').style.display = 'none';
                    document.getElementById('line3').style.display = 'none';
                    document.getElementById('line4').style.display = 'none';
                    document.getElementById('line5').style.display = 'none';
                    document.getElementById('line6').style.display = 'none';
                    document.getElementById('line7').style.display = 'none';
                    document.getElementById('line8').style.display = 'none';
                    document.getElementById('line9').style.display = 'none';
                    document.getElementById('line10').style.display = 'none';
                    document.getElementById('line11').style.display = 'none';
                    document.getElementById('line12').style.display = 'none';
                    document.getElementById('line13').style.display = 'none';
                    document.getElementById('line14').style.display = 'none';
                    document.getElementById('line15').style.display = 'none';
                    document.getElementById('line16').style.display = 'none';
                    document.getElementById('line17').style.display = 'none';
                    document.getElementById('line18').style.display = 'none';
                    document.getElementById('line19').style.display = 'none';
                    document.getElementById('line20').style.display = 'none';
                    document.getElementById('line21').style.display = 'none';
                    document.getElementById('line22').style.display = 'none';
                    document.getElementById('line23').style.display = 'none';
                    document.getElementById('line24').style.display = 'none';
                    document.getElementById('line25').style.display = 'none';
                    document.getElementById('line26').style.display = 'none';
                    document.getElementById('line27').style.display = 'none';
                    document.getElementById('line28').style.display = 'none';
                    document.getElementById('line29').style.display = 'none';
                    document.getElementById('line30').style.display = 'none';
                    document.getElementById('line31').style.display = 'none';

                    document.getElementById('p0').style.display = 'none';
                    document.getElementById('p1').style.display = 'none';
                    document.getElementById('p2').style.display = 'none';
                    document.getElementById('p3').style.display = 'none';
                    document.getElementById('p4').style.display = 'none';
                    document.getElementById('p5').style.display = 'none';
                    document.getElementById('p6').style.display = 'none';
                    document.getElementById('p7').style.display = 'none';
                    document.getElementById('p8').style.display = 'none';
                    document.getElementById('p9').style.display = 'none';
                    document.getElementById('p10').style.display = 'none';
                    document.getElementById('p11').style.display = 'none';
                    document.getElementById('p12').style.display = 'none';
                    document.getElementById('p13').style.display = 'none';
                    document.getElementById('p14').style.display = 'none';
                    document.getElementById('p15').style.display = 'none';
                    document.getElementById('p16').style.display = 'none';
                    document.getElementById('p17').style.display = 'none';
                    document.getElementById('p18').style.display = 'none';
                    document.getElementById('p19').style.display = 'none';
                    document.getElementById('p20').style.display = 'none';
                    document.getElementById('p21').style.display = 'none';
                    document.getElementById('p22').style.display = 'none';
                    document.getElementById('p23').style.display = 'none';
                    document.getElementById('p24').style.display = 'none';
                    document.getElementById('p26').style.display = 'none';
                    document.getElementById('p27').style.display = 'none';
                    document.getElementById('p28').style.display = 'none';
                    document.getElementById('p29').style.display = 'none';
                    document.getElementById('p30').style.display = 'none';
                    document.getElementById('p31').style.display = 'none';
                    document.getElementById('p32').style.display = 'none';




                    document.getElementById('0').style.display = 'none';
                    document.getElementById('1').style.display = 'none';
                    document.getElementById('2').style.display = 'none';
                    document.getElementById('3').style.display = 'none';
                    document.getElementById('4').style.display = 'none';
                    document.getElementById('5').style.display = 'none';
                    document.getElementById('6').style.display = 'none';
                    document.getElementById('7').style.display = 'none';
                    document.getElementById('8').style.display = 'none';
                    document.getElementById('9').style.display = 'none';
                    document.getElementById('10').style.display = 'none';
                    document.getElementById('11').style.display = 'none';
                    document.getElementById('12').style.display = 'none';
                    document.getElementById('13').style.display = 'none';
                    document.getElementById('14').style.display = 'none';
                    document.getElementById('15').style.display = 'none';
                    document.getElementById('16').style.display = 'none';
                    document.getElementById('17').style.display = 'none';
                    document.getElementById('18').style.display = 'none';
                    document.getElementById('19').style.display = 'none';
                    document.getElementById('20').style.display = 'none';
                    document.getElementById('21').style.display = 'none';
                    document.getElementById('22').style.display = 'none';
                    document.getElementById('23').style.display = 'none';
                    document.getElementById('24').style.display = 'none';
                    document.getElementById('25').style.display = 'none';
                    document.getElementById('26').style.display = 'none';
                    document.getElementById('27').style.display = 'none';
                    document.getElementById('28').style.display = 'none';
                    document.getElementById('29').style.display = 'none';
                    document.getElementById('30').style.display = 'none';
                    document.getElementById('31').style.display = 'none';

                    document.getElementById('t0').style.display = 'none';
                    document.getElementById('t1').style.display = 'none';
                    document.getElementById('t2').style.display = 'none';
                    document.getElementById('t3').style.display = 'none';
                    document.getElementById('t4').style.display = 'none';
                    document.getElementById('t5').style.display = 'none';
                    document.getElementById('t6').style.display = 'none';
                    document.getElementById('t7').style.display = 'none';
                    document.getElementById('t8').style.display = 'none';
                    document.getElementById('t9').style.display = 'none';
                    document.getElementById('t10').style.display = 'none';
                    document.getElementById('t11').style.display = 'none';
                    document.getElementById('t12').style.display = 'none';
                    document.getElementById('t13').style.display = 'none';
                    document.getElementById('t14').style.display = 'none';
                    document.getElementById('t15').style.display = 'none';
                    document.getElementById('t16').style.display = 'none';
                    document.getElementById('t17').style.display = 'none';
                    document.getElementById('t18').style.display = 'none';
                    document.getElementById('t19').style.display = 'none';
                    document.getElementById('t20').style.display = 'none';
                    document.getElementById('t21').style.display = 'none';
                    document.getElementById('t22').style.display = 'none';
                    document.getElementById('t23').style.display = 'none';
                    document.getElementById('t24').style.display = 'none';
                    document.getElementById('t25').style.display = 'none';
                    document.getElementById('t26').style.display = 'none';
                    document.getElementById('t27').style.display = 'none';
                    document.getElementById('t28').style.display = 'none';
                    document.getElementById('t29').style.display = 'none';
                    document.getElementById('t30').style.display = 'none';
                    document.getElementById('t31').style.display = 'none';






                    switch(selected){
                        case '北京市':
                            document.getElementById('ln0').style.display = 'block';
                            document.getElementById('line0').style.display = 'block';
                            document.getElementById('p0').style.display = 'block';
                            document.getElementById('0').style.display = 'block';
                            document.getElementById('t0').style.display = 'block';
                            break;
                        case '天津市':
                            document.getElementById('ln1').style.display = 'block';
                            document.getElementById('line1').style.display = 'block';
                            document.getElementById('p1').style.display = 'block';
                            document.getElementById('1').style.display = 'block';
                            document.getElementById('t1').style.display = 'block';

                            break;

                        case '河北省':
                            document.getElementById('ln2').style.display = 'block';
                            document.getElementById('line2').style.display = 'block';
                            document.getElementById('p2').style.display = 'block';
                            document.getElementById('2').style.display = 'block';
                            document.getElementById('t2').style.display = 'block';
                            
                            
                            break;
                            
                        case '山西省':
                            document.getElementById('ln3').style.display = 'block';
                            document.getElementById('line3').style.display = 'block';
                            document.getElementById('p3').style.display = 'block';
                            document.getElementById('3').style.display = 'block';
                            document.getElementById('t3').style.display = 'block';
                            
                            
                            break;
                        case '内蒙古自治区':
                            document.getElementById('ln4').style.display = 'block';
                            document.getElementById('line4').style.display = 'block';
                            document.getElementById('p4').style.display = 'block';
                            document.getElementById('4').style.display = 'block';
                            document.getElementById('t4').style.display = 'block';
                            
                            
                            break;
                            
                        case '辽宁省':
                            document.getElementById('ln5').style.display = 'block';
                            document.getElementById('line5').style.display = 'block';
                            document.getElementById('p5').style.display = 'block';
                            document.getElementById('5').style.display = 'block';
                            document.getElementById('t5').style.display = 'block';
                            
                            
                            break;
                            
                        case '吉林省':
                            document.getElementById('ln6').style.display = 'block';
                            document.getElementById('line6').style.display = 'block';
                            document.getElementById('p6').style.display = 'block';
                            document.getElementById('6').style.display = 'block';
                            document.getElementById('t6').style.display = 'block';
                            
                            break;
                            
                        case '黑龙江省':
                            document.getElementById('ln7').style.display = 'block';
                            document.getElementById('line7').style.display = 'block';
                            document.getElementById('p7').style.display = 'block';
                            document.getElementById('7').style.display = 'block';
                            document.getElementById('t7').style.display = 'block';
                            
                            
                            break;
                            
                        case '上海市':
                            document.getElementById('ln8').style.display = 'block';
                            document.getElementById('line8').style.display = 'block';
                            document.getElementById('p8').style.display = 'block';
                            document.getElementById('8').style.display = 'block';
                            document.getElementById('t8').style.display = 'block';
                            
                            
                            break;
                            
                        case '江苏省':
                            document.getElementById('ln9').style.display = 'block';
                            document.getElementById('line9').style.display = 'block';
                            document.getElementById('p9').style.display = 'block';
                            document.getElementById('9').style.display = 'block';
                            document.getElementById('t9').style.display = 'block';
                            
                            
                            break;
                            
                        case '浙江省':
                            document.getElementById('ln10').style.display = 'block';
                            document.getElementById('line10').style.display = 'block';
                            document.getElementById('p10').style.display = 'block';
                            document.getElementById('10').style.display = 'block';
                            document.getElementById('t10').style.display = 'block';
                            
                            
                            break;
                            
                        case '安徽省':
                            document.getElementById('ln11').style.display = 'block';
                            document.getElementById('line11').style.display = 'block';
                            document.getElementById('p11').style.display = 'block';
                            document.getElementById('11').style.display = 'block';
                            document.getElementById('t11').style.display = 'block';
                            
                            
                            break;
                            
                        case '福建省':
                            document.getElementById('ln12').style.display = 'block';
                            document.getElementById('line12').style.display = 'block';
                            document.getElementById('p12').style.display = 'block';
                            document.getElementById('12').style.display = 'block';
                            document.getElementById('t12').style.display = 'block';
                            
                            
                            break;
                            
                        case '江西省':
                            document.getElementById('ln13').style.display = 'block';
                            document.getElementById('line13').style.display = 'block';
                            document.getElementById('p13').style.display = 'block';
                            document.getElementById('13').style.display = 'block';
                            document.getElementById('t13').style.display = 'block';
                            
                            
                            break;
                            
                        case '山东省':
                            document.getElementById('ln14').style.display = 'block';
                            document.getElementById('line14').style.display = 'block';
                            document.getElementById('p14').style.display = 'block';
                            document.getElementById('14').style.display = 'block';
                            document.getElementById('t14').style.display = 'block';
                            
                            
                            break;
                            
                        case '河南省':
                            document.getElementById('ln15').style.display = 'block';
                            document.getElementById('line15').style.display = 'block';
                            document.getElementById('p15').style.display = 'block';
                            document.getElementById('15').style.display = 'block';
                            document.getElementById('t15').style.display = 'block';
                            
                            
                            break;
                            
                        case '湖北省':
                            document.getElementById('ln16').style.display = 'block';
                            document.getElementById('line16').style.display = 'block';
                            document.getElementById('p16').style.display = 'block';
                            document.getElementById('16').style.display = 'block';
                            document.getElementById('t16').style.display = 'block';
                            
                            
                            break;
                            
                        case '湖南省':
                            document.getElementById('ln17').style.display = 'block';
                            document.getElementById('line17').style.display = 'block';
                            document.getElementById('p17').style.display = 'block';
                            document.getElementById('17').style.display = 'block';
                            document.getElementById('t17').style.display = 'block';
                            
                            
                            break;
                            
                        case '广东省':
                            document.getElementById('ln18').style.display = 'block';
                            document.getElementById('line18').style.display = 'block';
                            document.getElementById('p18').style.display = 'block';
                            document.getElementById('18').style.display = 'block';
                            document.getElementById('t18').style.display = 'block';
                            
                            
                            break;
                            
                        case '广西壮族自治区':
                            document.getElementById('ln19').style.display = 'block';
                            document.getElementById('line19').style.display = 'block';
                            document.getElementById('p19').style.display = 'block';
                            document.getElementById('19').style.display = 'block';
                            document.getElementById('t19').style.display = 'block';
                            
                            
                            break;
                            
                        case '海南省':
                            document.getElementById('ln20').style.display = 'block';
                            document.getElementById('line20').style.display = 'block';
                            document.getElementById('p20').style.display = 'block';
                            document.getElementById('20').style.display = 'block';
                            document.getElementById('t20').style.display = 'block';
                            
                            
                            break;
                            
                        case '重庆市':
                            document.getElementById('ln21').style.display = 'block';
                            document.getElementById('line21').style.display = 'block';
                            document.getElementById('p21').style.display = 'block';
                            document.getElementById('21').style.display = 'block';
                            document.getElementById('t21').style.display = 'block';
                            
                            
                            break;
                            
                        case '四川省':
                            document.getElementById('ln22').style.display = 'block';
                            document.getElementById('line22').style.display = 'block';
                            document.getElementById('p22').style.display = 'block';
                            document.getElementById('22').style.display = 'block';
                            document.getElementById('t22').style.display = 'block';
                            
                            break;
                            
                        case '贵州省':
                            document.getElementById('ln23').style.display = 'block';
                            document.getElementById('line23').style.display = 'block';
                            document.getElementById('p23').style.display = 'block';
                            document.getElementById('23').style.display = 'block';
                            document.getElementById('t23').style.display = 'block';
                            
                            break;
                            
                        case '云南省':
                            document.getElementById('ln24').style.display = 'block';
                            document.getElementById('line24').style.display = 'block';
                            document.getElementById('p24').style.display = 'block';
                            document.getElementById('24').style.display = 'block';
                            document.getElementById('t24').style.display = 'block';
                            
                            
                            break;
                            
                        case '陕西省':
                            document.getElementById('ln25').style.display = 'block';
                            document.getElementById('line25').style.display = 'block';
                            document.getElementById('p26').style.display = 'block';
                            document.getElementById('25').style.display = 'block';
                            document.getElementById('t25').style.display = 'block';
                            
                            break;
                            
                        case '甘肃省':
                            document.getElementById('ln26').style.display = 'block';
                            document.getElementById('line26').style.display = 'block';
                            document.getElementById('p27').style.display = 'block';
                            document.getElementById('26').style.display = 'block';
                            document.getElementById('t26').style.display = 'block';

                            break;
                            
                        case '青海省':
                            document.getElementById('ln27').style.display = 'block';
                            document.getElementById('line27').style.display = 'block';
                            document.getElementById('p28').style.display = 'block';
                            document.getElementById('27').style.display = 'block';
                            document.getElementById('t27').style.display = 'block';
                            
                            break;
                            
                        case '宁夏回族自治区':
                            document.getElementById('ln28').style.display = 'block';
                            document.getElementById('line28').style.display = 'block';
                            document.getElementById('p29').style.display = 'block';
                            document.getElementById('28').style.display = 'block';
                            document.getElementById('t28').style.display = 'block';

                            break;
                            
                        case '新疆维吾尔自治区':
                            document.getElementById('ln29').style.display = 'block';
                            document.getElementById('line29').style.display = 'block';
                            document.getElementById('p30').style.display = 'block';
                            document.getElementById('29').style.display = 'block';
                            document.getElementById('t29').style.display = 'block';

                            break;

                        case '西藏自治区':
                            document.getElementById('p31').style.display = 'block';
                            document.getElementById('line30').style.display = 'block';
                            document.getElementById('t30').style.display = 'block';
                            document.getElementById('30').style.display = 'block';
                            document.getElementById('ln30').style.display = 'block';
                            break;

                        case '台湾省':
                            document.getElementById('t31').style.display = 'block';
                            document.getElementById('ln31').style.display = 'block';
                            document.getElementById('line31').style.display = 'block';
                            document.getElementById('31').style.display = 'block';
                            document.getElementById('p32').style.display = 'block';

                            break;


                        default:
                            break;
                    }
                }
        })
    }

    //北京
    function line0(){
        var chart_line0 = echarts.init(
            document.getElementById('line0'), 'white', {renderer: 'canvas'});
        var option_line0 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    6997.422130024052
                ],
                [
                    "2025",
                    8239.036133566353
                ],
                [
                    "2030",
                    9050.528557600752
                ],
                [
                    "2035",
                    8839.036133566353
                ],
                [
                    "2040",
                    8739.036133566353
                ],
                [
                    "2045",
                    8645.036136766354
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u5317\u4eac\u5e02",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line0.setOption(option_line0);
    }

    function line1(){
         var chart_line1 = echarts.init(
            document.getElementById('line1'), 'white', {renderer: 'canvas'});
        var option_line1 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    17489.434408952464
                ],
                [
                    "2025",
                    45904.738468524294
                ],
                [
                    "2030",
                    58346.14434755686
                ],
                [
                    "2035",
                    57620.024599567776
                ],
                [
                    "2040",
                    49347.11017509262
                ],
                [
                    "2045",
                    41407.08855494936
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u5929\u6d25\u5e02",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line1.setOption(option_line1);

    }

    function line2(){
            var chart_line2 = echarts.init(
            document.getElementById('line2'), 'white', {renderer: 'canvas'});
        var option_line2 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    69725.91339834007
                ],
                [
                    "2025",
                    150808.35809035093
                ],
                [
                    "2030",
                    158400.01630195932
                ],
                [
                    "2035",
                    166304.7685626971
                ],
                [
                    "2040",
                    160024.96419011618
                ],
                [
                    "2045",
                    149846.8569049953
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u6cb3\u5317\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line2.setOption(option_line2);
    }

    function line3(){
            var chart_line3 = echarts.init(
            document.getElementById('line3'), 'white', {renderer: 'canvas'});
        var option_line3 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    1279.9414279677421
                ],
                [
                    "2025",
                    1845.1404350608227
                ],
                [
                    "2030",
                    4545.882673368581
                ],
                [
                    "2035",
                    3268.2741093928385
                ],
                [
                    "2040",
                    2657.3092802881597
                ],
                [
                    "2045",
                    1517.1236772581788
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u5c71\u897f\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line3.setOption(option_line3);
    }

    function line4(){
            var chart_line4 = echarts.init(
            document.getElementById('line4'), 'white', {renderer: 'canvas'});
        var option_line4 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    112167.61336230584
                ],
                [
                    "2025",
                    195107.64349871606
                ],
                [
                    "2030",
                    227290.90421593864
                ],
                [
                    "2035",
                    231536.47977898893
                ],
                [
                    "2040",
                    221149.62374271385
                ],
                [
                    "2045",
                    207728.4733353136
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u5185\u8499\u53e4\u81ea\u6cbb\u533a",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line4.setOption(option_line4);
    }

    function line5(){
        var chart_line5 = echarts.init(
            document.getElementById('line5'), 'white', {renderer: 'canvas'});
        var option_line5 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    66610.05485700419
                ],
                [
                    "2025",
                    94293.25114302445
                ],
                [
                    "2030",
                    104425.13226010796
                ],
                [
                    "2035",
                    100312.85940442681
                ],
                [
                    "2040",
                    92832.57751333842
                ],
                [
                    "2045",
                    86695.86996110165
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u8fbd\u5b81\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line5.setOption(option_line5);

    }

    function line6(){
            var chart_line6 = echarts.init(
            document.getElementById('line6'), 'white', {renderer: 'canvas'});
        var option_line6 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    24407.87589757479
                ],
                [
                    "2025",
                    58058.561055102495
                ],
                [
                    "2030",
                    72431.56177829932
                ],
                [
                    "2035",
                    68610.15866242428
                ],
                [
                    "2040",
                    57763.8261095196
                ],
                [
                    "2045",
                    48594.62178494995
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u5409\u6797\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line6.setOption(option_line6);
    }

    function line7(){
            var chart_line7 = echarts.init(
            document.getElementById('line7'), 'white', {renderer: 'canvas'});
        var option_line7 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    42109.47866355934
                ],
                [
                    "2025",
                    109067.01025835537
                ],
                [
                    "2030",
                    123141.11649637754
                ],
                [
                    "2035",
                    104328.33053263547
                ],
                [
                    "2040",
                    75951.84483502535
                ],
                [
                    "2045",
                    56107.655919492085
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u9ed1\u9f99\u6c5f\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line7.setOption(option_line7);
    }

    function line8(){
            var chart_line8 = echarts.init(
            document.getElementById('line8'), 'white', {renderer: 'canvas'});
        var option_line8 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    12366.1748804498
                ],
                [
                    "2025",
                    23917.489008925244
                ],
                [
                    "2030",
                    26621.63978751365
                ],
                [
                    "2035",
                    23196.601271507203
                ],
                [
                    "2040",
                    18081.679700732595
                ],
                [
                    "2045",
                    14221.069669592718
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u4e0a\u6d77\u5e02",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line8.setOption(option_line8);
    }

    function line9(){
            var chart_line9 = echarts.init(
            document.getElementById('line9'), 'white', {renderer: 'canvas'});
        var option_line9 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    72956.50806346026
                ],
                [
                    "2025",
                    116990.4873483748
                ],
                [
                    "2030",
                    123974.74670660916
                ],
                [
                    "2035",
                    108769.18008954376
                ],
                [
                    "2040",
                    88704.35791034557
                ],
                [
                    "2045",
                    73798.03612475605
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u6c5f\u82cf\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line9.setOption(option_line9);
    }

    function line10(){
            var chart_line10 = echarts.init(
            document.getElementById('line10'), 'white', {renderer: 'canvas'});
        var option_line10 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    46169.50690409725
                ],
                [
                    "2025",
                    74519.3935511439
                ],
                [
                    "2030",
                    75907.47838142294
                ],
                [
                    "2035",
                    63794.5895974772
                ],
                [
                    "2040",
                    49656.751986882955
                ],
                [
                    "2045",
                    39833.742494887505
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u6d59\u6c5f\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line10.setOption(option_line10);
    }

    function line11(){
                var chart_line11 = echarts.init(
            document.getElementById('line11'), 'white', {renderer: 'canvas'});
        var option_line11 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    51318.122884261764
                ],
                [
                    "2025",
                    140146.74411955194
                ],
                [
                    "2030",
                    176637.84120457925
                ],
                [
                    "2035",
                    158572.93889038317
                ],
                [
                    "2040",
                    123603.6501591261
                ],
                [
                    "2045",
                    97063.0222606011
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u5b89\u5fbd\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line11.setOption(option_line11);
    }

    function line12(){
            var chart_line12 = echarts.init(
            document.getElementById('line12'), 'white', {renderer: 'canvas'});
        var option_line12 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    32932.62731122207
                ],
                [
                    "2025",
                    71098.72849809742
                ],
                [
                    "2030",
                    81628.83643815486
                ],
                [
                    "2035",
                    70965.68567070042
                ],
                [
                    "2040",
                    55004.76628295109
                ],
                [
                    "2045",
                    43350.50169176332
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u798f\u5efa\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line12.setOption(option_line12);
    }

    function line13(){
                var chart_line13 = echarts.init(
            document.getElementById('line13'), 'white', {renderer: 'canvas'});
        var option_line13 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    21629.76775201096
                ],
                [
                    "2025",
                    38303.08046610795
                ],
                [
                    "2030",
                    45753.85677432278
                ],
                [
                    "2035",
                    45520.22780640125
                ],
                [
                    "2040",
                    42242.33795062292
                ],
                [
                    "2045",
                    39018.629396056116
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u6c5f\u897f\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line13.setOption(option_line13);
    }

    function line14(){
                var chart_line14 = echarts.init(
            document.getElementById('line14'), 'white', {renderer: 'canvas'});
        var option_line14 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    134356.123931514
                ],
                [
                    "2025",
                    228667.11542216118
                ],
                [
                    "2030",
                    254643.7872826361
                ],
                [
                    "2035",
                    251156.2758390194
                ],
                [
                    "2040",
                    231022.0856813715
                ],
                [
                    "2045",
                    209967.2606078928
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u5c71\u4e1c\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line14.setOption(option_line14);
    }

    function line15(){
                var chart_line15 = echarts.init(
            document.getElementById('line15'), 'white', {renderer: 'canvas'});
        var option_line15 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    65030.0845185066
                ],
                [
                    "2025",
                    173421.99828525083
                ],
                [
                    "2030",
                    205339.26885351207
                ],
                [
                    "2035",
                    173825.40154559695
                ],
                [
                    "2040",
                    128250.98491451348
                ],
                [
                    "2045",
                    97017.1268883472
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u6cb3\u5357\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line15.setOption(option_line15);
    }

    function line16(){
                var chart_line16 = echarts.init(
            document.getElementById('line16'), 'white', {renderer: 'canvas'});
        var option_line16 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    52318.122884261764
                ],
                [
                    "2025",
                    140146.74411955194
                ],
                [
                    "2030",
                    176637.84120457925
                ],
                [
                    "2035",
                    158572.93889038317
                ],
                [
                    "2040",
                    123603.6501591261
                ],
                [
                    "2045",
                    97063.0222606011
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u6e56\u5317\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line16.setOption(option_line16);

    }

    function line17(){
                var chart_line17 = echarts.init(
            document.getElementById('line17'), 'white', {renderer: 'canvas'});
        var option_line17 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    27928.30254695729
                ],
                [
                    "2025",
                    45032.695400925644
                ],
                [
                    "2030",
                    52557.25021218765
                ],
                [
                    "2035",
                    50400.0422292423
                ],
                [
                    "2040",
                    45435.328661756124
                ],
                [
                    "2045",
                    41045.26877241207
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u6e56\u5357\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line17.setOption(option_line17);
    }

    function line18(){
            var chart_line18 = echarts.init(
            document.getElementById('line18'), 'white', {renderer: 'canvas'});
        var option_line18 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    61631.06932067995
                ],
                [
                    "2025",
                    107153.01004336357
                ],
                [
                    "2030",
                    128376.29227293549
                ],
                [
                    "2035",
                    130072.60358434165
                ],
                [
                    "2040",
                    121844.19130557386
                ],
                [
                    "2045",
                    110735.2937911817
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u5e7f\u4e1c\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line18.setOption(option_line18);
    }

    function line19(){
        var chart_line19 = echarts.init(
            document.getElementById('line19'), 'white', {renderer: 'canvas'});
        var option_line19 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    26192.4294700409
                ],
                [
                    "2025",
                    58538.65903775747
                ],
                [
                    "2030",
                    69965.71811875254
                ],
                [
                    "2035",
                    62958.09856677655
                ],
                [
                    "2040",
                    50482.71774787613
                ],
                [
                    "2045",
                    40839.49835328586
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u5e7f\u897f\u58ee\u65cf\u81ea\u6cbb\u533a",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line19.setOption(option_line19);
    }

    function line20(){
            var chart_line20 = echarts.init(
            document.getElementById('line20'), 'white', {renderer: 'canvas'});
        var option_line20 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    7892.477736930981
                ],
                [
                    "2025",
                    18065.08979289897
                ],
                [
                    "2030",
                    21216.55953511635
                ],
                [
                    "2035",
                    17394.13366334139
                ],
                [
                    "2040",
                    12755.08015927108
                ],
                [
                    "2045",
                    9695.187480248904
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u6d77\u5357\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line20.setOption(option_line20);
    }

    function line21(){
                var chart_line21 = echarts.init(
            document.getElementById('line21'), 'white', {renderer: 'canvas'});
        var option_line21 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    14119.72549394426
                ],
                [
                    "2025",
                    20649.018986967214
                ],
                [
                    "2030",
                    22620.45857967835
                ],
                [
                    "2035",
                    14609.752441934741
                ],
                [
                    "2040",
                    9528.428220872585
                ],
                [
                    "2045",
                    6680.463456501905
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u91cd\u5e86\u5e02",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};

        chart_line21.setOption(option_line21);
    }


    function line22(){
                var chart_line22 = echarts.init(
            document.getElementById('line22'), 'white', {renderer: 'canvas'});
        var option_line22 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    22145.07973300706
                ],
                [
                    "2025",
                    23362.028072139634
                ],
                [
                    "2030",
                    25286.87988135004
                ],
                [
                    "2035",
                    16464.63857760461
                ],
                [
                    "2040",
                    12491.21608258024
                ],
                [
                    "2045",
                    10034.467440582044
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u56db\u5ddd\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line22.setOption(option_line22);
    }

    function line23(){

                var chart_line23 = echarts.init(
            document.getElementById('line23'), 'white', {renderer: 'canvas'});
        var option_line23 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    34560.231812456084
                ],
                [
                    "2025",
                    45103.479315045326
                ],
                [
                    "2030",
                    49478.66220148339
                ],
                [
                    "2035",
                    45660.455313036226
                ],
                [
                    "2040",
                    41126.5891294225
                ],
                [
                    "2045",
                    37821.27988616626
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u8d35\u5dde\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line23.setOption(option_line23);
    }

    function line24(){
                var chart_line24 = echarts.init(
            document.getElementById('line24'), 'white', {renderer: 'canvas'});
        var option_line24 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    20553.751961511447
                ],
                [
                    "2025",
                    23398.78039981234
                ],
                [
                    "2030",
                    27569.610088425656
                ],
                [
                    "2035",
                    24289.678297366714
                ],
                [
                    "2040",
                    23701.821129189815
                ],
                [
                    "2045",
                    23608.786579519594
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u4e91\u5357\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line24.setOption(option_line24);
    }

    function line25(){
                var chart_line25 = echarts.init(
            document.getElementById('line25'), 'white', {renderer: 'canvas'});
        var option_line25 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    75269.596981675
                ],
                [
                    "2025",
                    155625.09626068696
                ],
                [
                    "2030",
                    230065.46656897775
                ],
                [
                    "2035",
                    203469.73287131422
                ],
                [
                    "2040",
                    224948.95919650552
                ],
                [
                    "2045",
                    228174.2420713899
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u9655\u897f\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line25.setOption(option_line25);
    }

    function line26(){
                var chart_line26 = echarts.init(
            document.getElementById('line26'), 'white', {renderer: 'canvas'});
        var option_line26 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    19920.10527119396
                ],
                [
                    "2025",
                    27594.71399164834
                ],
                [
                    "2030",
                    31955.472441632122
                ],
                [
                    "2035",
                    31409.358152925055
                ],
                [
                    "2040",
                    29713.762926375675
                ],
                [
                    "2045",
                    28077.134668407485
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u7518\u8083\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line26.setOption(option_line26);

    }

    function line27(){
                var chart_line27 = echarts.init(
            document.getElementById('line27'), 'white', {renderer: 'canvas'});
        var option_line27 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    7823.2450342428965
                ],
                [
                    "2025",
                    48147.434249905426
                ],
                [
                    "2030",
                    87511.08319188553
                ],
                [
                    "2035",
                    135458.8286196722
                ],
                [
                    "2040",
                    135081.62715169293
                ],
                [
                    "2045",
                    121413.26238188818
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u9752\u6d77\u7701",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line27.setOption(option_line27);
    }


    function line28(){
                var chart_line28 = echarts.init(
            document.getElementById('line28'), 'white', {renderer: 'canvas'});
        var option_line28 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    28184.669434016752
                ],
                [
                    "2025",
                    51457.82586836425
                ],
                [
                    "2030",
                    65085.40777775336
                ],
                [
                    "2035",
                    63123.1264208708
                ],
                [
                    "2040",
                    63883.9684921654
                ],
                [
                    "2045",
                    62003.31246961998
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u5b81\u590f\u56de\u65cf\u81ea\u6cbb\u533a",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line28.setOption(option_line28);
    }

    function line29(){
                    var chart_line29 = echarts.init(
            document.getElementById('line29'), 'white', {renderer: 'canvas'});
        var option_line29 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "line",
            "name": "\u9884\u6d4b\u503c",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "stack": "\u603b\u91cf",
            "data": [
                [
                    "2020",
                    60398.359354414606
                ],
                [
                    "2025",
                    133344.26114547218
                ],
                [
                    "2030",
                    163120.08090077096
                ],
                [
                    "2035",
                    159164.55614697447
                ],
                [
                    "2040",
                    153040.90532558007
                ],
                [
                    "2045",
                    140671.54435448107
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "margin": 8
            },
            "logBase": 10,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.5
            },
            "itemStyle": {
                "color": "#0B93E7"
            },
            "zlevel": 0,
            "z": 0,
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u9884\u6d4b\u503c"
            ],
            "selected": {
                "\u9884\u6d4b\u503c": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false,
                "length": 2
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "boundaryGap": false,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2020",
                "2025",
                "2030",
                "2035",
                "2040",
                "2045"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "\u767e\u4e07\u5428",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#ffffff",
                "fontSize": 10
            },
            "gridIndex": 0,
            "axisTick": {
                "show": true,
                "alignWithLabel": false,
                "inside": false
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "\u65b0\u7586\u7ef4\u543e\u5c14\u81ea\u6cbb\u533a",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "color": "#ffffff",
                "fontSize": 15
            }
        }
    ]
};
        chart_line29.setOption(option_line29);

    }


});
