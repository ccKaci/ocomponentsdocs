# TextList
  

##### 局部注册


  
  <p>   
	import TextList from '../singlelist/TextList'   

	 export default {  
		  components:{  
			TextList  
		  }  
	  }
  </p>
  
  
  ##### 举个例子
  
>可输入模式
<div class="example">
    <div class="block" >
		<div class="block_left">
      <div>
        <i class="fa fa-user title_i" aria-hidden="true"></i>
			  <div class="title_name">输入文字：</div>
      </div>
    </div>
    <div class="block_right">
      <input class="block_input" type="text">
    </div>
  </div>
</div>
  
>禁止输入模式
<div class="example">
    <div class="block" >
		<div class="block_left">
      <div>
        <i class="fa fa-user title_i" aria-hidden="true"></i>
			  <div class="title_name">输入文字：</div>
      </div>
    </div>
    <div class="block_right">
      <input readonly class="block_input" type="text">
    </div>
  </div>
</div>
	 
	  <TextList title="输入文字：" :readthis="read" @selectInput="selectInput"></TextList>


> 以插件形式调用，属性名使用小驼峰式

| 参数 | 说明 | 属性 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| title | 输入框标题 | String |  |  |
| readthis | 输入框是否为只读 | Boolean | | |
| disable | 是否禁用该输入框 | Boolean | | false |

##### 事件

@selectInput： 获取输入的内容
