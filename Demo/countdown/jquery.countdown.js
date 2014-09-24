/* 
* countdownDown 0.1 
* Copyright (c) 2014 Zhangdi http://cindyfn.com/ 
* Date: 2014-09-16 
* 输入秒数，转换成分钟＋秒，然后进行倒计时
* 主要方法:时间转换，倒计时，暂停计时，启动计时，声音点设置。
* * git地址:  https://github.com/icindy/jquery.countdown ;
*/ 

            /* 创建一个闭包 */
            ;(function ($) {
                /* 插件的定义 */
                console.log("作者：Cindy，个人博客：http://cindyfn.com");
                console.log("作者：Cindy，Git地址：https://github.com/icindy/jquery.countdown");
                $.fn.countdown = function (options) {
                    debug(this);
                    var altolTime;//总时间和剩余事件
                    var autoBegin;
                    var stimeClock;//timeOut循环记录
                    var beginBtn;//开始按钮id
                    var stopBtn;//停止按钮id
                    var resetBtn;//重置按钮id
                    var timeDingDang = [];//事件出发点数组
                    var bianSeTime;//变色开始时间
                    var seCode;//这是色彩代码
                    var content;


                    // build main options before element iteration
                    var opts = $.extend({}, $.fn.countdown.defaults, options);
                    // iterate and reformat each matched element
                    
                    return this.each(function () {
                        content = $(this);
                        // build element specific options
                        var o = $.meta ? $.extend({}, opts, content.data()) : opts;
                        // update element styles
                        altolTime = o.time_length;
                        autoBegin = o.auto_begin;
                        timeDingDang = o.time_ding_dang;
                        // if(o.begin_btn_id == 'default_beginBtn'){
                        //     content.parent().append('<button id="default_beginBtn">Begin</div>');
                        // }
                        // if(o.stop_btn_id == 'default_stopBtn'){
                        //     content.parent().append('<button id="default_stopBtn">Stop</div>');
                        // }
                        // if(o.reset_btn_id == 'default_resetBtn'){
                        //     content.parent().append('<button id="default_resetBtn">Reset</div>');
                        // }
                        content.addClass('timedownclass');
                        beginBtn = $("#"+o.begin_btn_id);
                        stopBtn = $("#"+o.stop_btn_id);
                        resetBtn = $("#"+o.reset_btn_id);
                        bianSeTime = o.bian_se_time;
                        seCode = o.se_code;
                        content.html(sencondToTimer(o.time_length));//显示在容器中的内容


                        //开始的按钮绑定事件
                        beginBtn.on('click',function(){
                            if(altolTime < bianSeTime){
                                content.css({"color":seCode});
                            }
                            clearTimeout(stimeClock);
                            stimeClock = setTimeout(timeDownFn,1000);

                        });
                        //停止的按钮绑定事件
                        stopBtn.on('click',function(){
                            if(altolTime < bianSeTime){
                                content.css({"color":seCode});
                            }
                            clearTimeout(stimeClock);
                        });

                        //重置参数
                        resetBtn.on('click',function(){
                            if(altolTime < bianSeTime){
                                content.css({"color":seCode});
                            }
                            altolTime = o.time_length;
                            content.html(sencondToTimer(altolTime));//显示在容器中的内容
                            clearTimeout(stimeClock);
                        });
                        if(autoBegin == true){
                            beginBtn.click();
                        }
                        function sencondToTimer(sec){
                            var s = parseInt(sec);
                            minuite = parseInt(s/60);
                            if(minuite < 10){
                                minuite = "0"+minuite;
                            }
                            second = parseInt(s%60);
                            if(second < 10){
                                second = "0"+second;

                            }
                            return minuite+" : "+ second;
                        }
                        //循环倒计时
                        function timeDownFn(){
                            if(timeDingDang.indexOf(altolTime)>=0){
                                o.onFlagTime();
                            }
                            if(altolTime<=0){
                                clearTimeout(stimeClock);
                                return false;
                            }

                            altolTime = altolTime -1;
                            if(altolTime < 10){
                                content.css({"color":"red"});
                            }
                            content.html(sencondToTimer(altolTime));//显示在容器中的内容
                            stimeClock = setTimeout(timeDownFn,1000);
                        }
                    });
                };
                // 私有函数：debugging
                function debug($obj) {
                    if (window.console && window.console.log)
                        window.console.log('obj size: ' + $obj.size());
                }

                /* 定义暴露format函数 */
                $.fn.countdown.format = function (txt) {
                };
                // 插件的defaults
                $.fn.countdown.defaults = {
                    time_length: 180, //输入的秒数
                    auto_begin: true,
                    begin_btn_id: 'default_beginBtn',
                    stop_btn_id: 'default_stopBtn',
                    reset_btn_id: 'default_resetBtn',
                    time_ding_dang: [30,0],//时间触发事件述责
                    bian_se_time: 10,//变色时间点设置
                    se_code: "red",//变色支持16进制颜色如＃ff0000
                    onFlagTime:function(){}//当到设定时间时候触发事件
                };
                /* 设置版本号 */
                $.fn.countdown.version = 1.0;
                //  时间转换函数
                
            })(jQuery);
