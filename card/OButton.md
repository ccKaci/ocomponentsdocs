# OButton 按钮
###### 常用的操作按钮

##### 局部注册


  
  <p>   
    
	import OButton from '../button/Button'   

	 export default {  
		  components:{  
			OButton  
		  }  
	  }
  </p>
  
  ##### 举个例子
	 
	 
  <div style="width:50%;">
  <button class="btn btn_default" onClick="Click();">这是一个按钮</button>
  <button class="btn btn_primary">初始按钮</button>  
  <button class="btn btn_warn">进行中按钮</button>  
  <button class="btn btn_error">错误按钮</button>  
  <button class="btn" disabled>无点击效果</button>  
  <button class="btn btn_error" disabled>错误按钮无点击效果</button>  
  <button class="btn btn_warn" disabled>进行中按钮无点击效果</button> 
  </div>
  
###### 源代码
	 <o-button @click.native="click1">这是一个按钮</o-button>   
      <o-button @click.native="click1" type="primary">初始按钮</o-button>  
      <o-button @click.native="click1" type="warn">进行中按钮</o-button>  
      <o-button @click.native="click1" type="error">错误按钮</o-button>  
      <o-button @click.native="click1" disabled>无点击效果</o-button>  
      <o-button @click.native="click1" type="error" disabled>错误按钮无点击效果</o-button>  
      <o-button @click.native="click1" type="warn" disabled>进行中按钮无点击效果</o-button>  
	 

> 以插件形式调用，属性名使用小驼峰式

| 参数 | 说明 | 属性 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| type | 按钮的显示效果 | String | Primary、warn、error、default | default |
| disabled | 禁用按钮 | Boolean | | |
| text | 按钮上的文字 | String | | |
| actionType | | String | | |



