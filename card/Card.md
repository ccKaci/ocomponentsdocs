  
## SimpleCard   
  
##### 局部注册


  
  <p>   
	import OButton from '../card/SimpleCard'   

	 export default {  
		  components:{  
			SimpleCard  
		  }  
	  }
  </p>
  
  
  ##### 举个例子
<div class="example">
	<div class="textarea">
		<div>
			<div class="left_contain">
			<div class="title" style="display: inline-block;font-size: 13px;margin:0px 5px;color: #666;">精简版输入框模板</div>
			</div>
		</div>
	<textarea class="simple_textarea" rows="3" cols="30" placeholder="精简版输入框模板"></textarea>
	</div>
</div>
  
  ###### 源代码
	 <SimpleCard remark="精简版输入框模板"></SimpleCard>
	
   	

> 以插件形式调用，属性名使用小驼峰式

| 参数 | 说明 | 属性 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| title | 输入框标题 | String | Primary、warn、error、default | default |
| remark | 输入框提示语 | Boolean | | |

  
--------------------------------------------------  
  
  
## BlockCard   
  
   
  ##### 局部注册


  
  <p>   
	import BlockCard from '../card/BlockCard'   

	 export default {  
		  components:{  
			BlockCard  
		  }  
	  }
  </p>
  
  
  ##### 举个例子
  
>可编辑模式：
<div class="example">
<div class="feedback">
    <div class="feedback_top"><i class="fa fa-pencil-square-o fl" aria-hidden="true"></i>输入框模板</div>
  	<textarea class="cell_textarea" rows="6" cols="30" placeholder="请输入文字"></textarea>
  </div>
</div>

>禁用模式：
<div class="example">
<div class="feedback">
    <div class="feedback_top"><i class="fa fa-pencil-square-o fl" aria-hidden="true"></i>输入框模板</div>
  	<textarea readonly class="cell_textarea" rows="6" cols="30" placeholder="请输入文字">哈哈哈</textarea>
  </div>
</div>
	 
###### 源代码
	 <block-card title="输入框模板" :readthis="false" remark="请输入文字" @selectText="selectText"></block-card>
	 <block-card title="输入框模板" :readthis="true" remark="请输入文字" @selectText="selectText">哈哈哈</block-card>




| 参数 | 说明 | 属性 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| title | 输入框标题 | String |  |  |
| remark | 输入框提示语 | String | | |
| readthis | 是否禁用该输入框 | Boolean | | |

  ##### 事件
  @selectText： 保存输入的内容
