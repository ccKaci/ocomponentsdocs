# OptionList 下拉列表


##### 局部注册


  
  <p>   
	import OptionList from '../singlelist/OptionList'   

	 export default {  
		  components:{  
			OptionList  
		  }  
	  }
  </p>
  
  
  ##### 举个例子
<div class="example">
<div class="block" >
<div class="block_left">
  <div>
	<i class="fa fa-calendar" aria-hidden="true" style="line-height: 24px;"></i>
	<div class="title_name">类型选择：</div>
  </div>
</div>
<div class="block_right">
  <div>
	<select class="block_select">
		<option value="1">选项1</option>
		<option value="1">选项2</option>
		<option value="1">选项3</option>
	</select>
  </div>
</div>
</div>
</div>
    
	  <option-list title="类型选择：" :list="list" @selectList="selectList" :disable="true" icon="fa-calendar"></option-list>


> 以插件形式调用，属性名使用小驼峰式

| 参数 | 说明 | 属性 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| list | 下拉的选项 | Array |  |  |
| title | 选项名称 | String | | |
| disable | 是否可点击 | Boolean | | |
| icon | 该列的图标 | String | | |


##### 事件

@selectList： 获取选项的值
