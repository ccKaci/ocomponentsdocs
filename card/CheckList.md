# CheckList
  
##### 局部注册


  
  <p>   
	import CheckList from '../singlelist/CheckList'   

	 export default {  
		  components:{  
			CheckList  
		  }  
	  }
  </p>
  
  
  ##### 举个例子
<div class="example">
<div class="block">
  	<div class="block_left">
  		<div>
        <i class="fa fa-user title_i" aria-hidden="true"></i>
  			<div class="title_name">复选框：</div>
  		</div>
  	</div>
  	<div class="block_right">
      <span><input id="1" type="checkbox" value="1"><label>苹果</label></span>
	  <span><input id="2" type="checkbox" value="2"><label>橘子</label></span>
	  <span><input id="3" type="checkbox" value="3"><label>香蕉</label></span>
  	</div>
  </div>
</div>
  
	  <check-list title="复选框：" :list="checklist" @selectCheck="selectCheck"></check-list>


> 以插件形式调用，属性名使用小驼峰式

| 参数 | 说明 | 属性 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| list | 复选框选项 | Array |  |  |
| title | 复选框标题 | String | | |
| disable | 是否禁用复选 | Boolean | | false |
| icon | 选项的图标 | String | | |

##### 事件

@selectCheck： 获取被选择的选项的值

