# Scroller 

##### 局部注册


  
  <p>   
	import OButton from '../scroller/Scroller'   

	 export default {  
		  components:{  
			Scroller  
		  }  
	  }
  </p>
  
  
  ##### 举个例子
<div class="example" style="height: 100px;">
  <div class="scroller">
	<div class="top_sign"></div>
	<div class="scroller_contain">
		<div>
		  <div style="height:50px;">1</div>
		  <div style="height:50px;">2</div>
		  <div style="height:50px;">3</div>
		  <div style="height:50px;">4</div>
		  <div style="height:50px;">5</div>
		</div>
		<div class="bottom_sign"><i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i>加载中</div>
	</div>
  </div>
</div>
  
 ###### 源代码：
	 <scroller ref="scroller" :ukey="1" :height="300" @scrollTouchBottom="touchBottom" :pullDown="true"  @refresh="refresh">  
        <div>  
          <div style="height:50px;" v-for="item in items" @click="go">{{item}}</div>  
        </div>  
      </scroller>  

> 以插件形式调用，属性名使用小驼峰式

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| height | 列表高度 | Number| | 窗口高度 |
| ukey |  | Number | | |
| bounce |  | Boolean | | |
| pullUp | | Boolean | | |
| pullDown | | Boolean | | |


