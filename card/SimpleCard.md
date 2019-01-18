# SimpleCard 
  
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



