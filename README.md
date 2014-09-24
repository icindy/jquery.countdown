jquery.countdown
================
>	作者：Cindy  博客地址：http://cindyfn.com


jquery countdown plugin. jquery倒计时插件
>	*	支持统一页面多次调用
>	*	通过配置秒数，如180 转换成3:00钟进行倒计时
>	*	多配置选项，具体先下面使用说明
>	*	时间关联事件


使用说明
---------------
引入两个文件
```html
<script src='jquery.js'></script>
<script src='jquery.countdown.js'></script>
```

引入两个文件(可以变更字体)
```html
<link rel="stylesheet" href="countdown/jquery.countdown.css">
```
```css
/*字体*/
@font-face { 
  font-family: pxbus; 
  src: url('../Fonts/6px2bus.ttf'); 
} 
.timedownclass { 
  font-family: pxbus; 
  font-size: 100px; 
}
```
使用及配置选项：
----------------
```javascript
$("#timedown2").countdown({
	time_length: 15, //输入的秒数
	auto_begin: false,//是否自动开始
    begin_btn_id: 'beginBtn2',//开始按钮ID
    stop_btn_id: 'stopBtn2',//停止按钮ID
    reset_btn_id: 'resetBtn2',//重置按钮ID
    time_ding_dang: [10,0],//时间触发事件述责
    bian_se_time: 10,//变色时间点设置
    se_code: "#ff0000",//变色支持16进制颜色如#ff0000也可以是颜色名称如red
    onFlagTime:function(){
        alert("10秒和0秒触发");
    }//当到设定时间时候触发事件
});
```

具体事例（下载可见DEMO）
-------------------
```html
	<div class="timedown">
		<h1 id="timedown1"></h1>
		<button id="beginBtn1">custom Begin1</button>
		<button id="stopBtn1">custom stop1</button>
		<button id="resetBtn1">custom reset1</button>
	</div>
	<script>
			$("#timedown1").countdown({
				time_length: 30, //输入的秒数
                begin_btn_id: 'beginBtn1',
                stop_btn_id: 'stopBtn1',
                reset_btn_id: 'resetBtn1',
                time_ding_dang: [10,0],//时间触发事件述责
                bian_se_time: 10,//变色时间点设置
                se_code: "red",//变色支持16进制颜色如＃ff0000
                onFlagTime:function(){
                }//当到设定时间时候触发事件
			});
	</script>
	<div class="timedown">
		<h1 id="timedown2"></h1>
		<div>
			<button id="beginBtn2">custom Begin2</button>
			<button id="stopBtn2">custom stop2</button>
			<button id="resetBtn2">custom reset2</button>
		</div>
	</div>
	<script>
			$("#timedown2").countdown({
				time_length: 15, //输入的秒数
				auto_begin: false,
                begin_btn_id: 'beginBtn2',
                stop_btn_id: 'stopBtn2',
                reset_btn_id: 'resetBtn2',
                time_ding_dang: [10,0],//时间触发事件述责
                bian_se_time: 10,//变色时间点设置
                se_code: "#ff0000",//变色支持16进制颜色如＃ff0000
                onFlagTime:function(){
                	alert("10秒和0秒触发");
                }//当到设定时间时候触发事件
			});
	</script>
```
说明：上面为两个例子，一个是不自动开始，一个是自动开始


