# RadioList
  
##### 局部注册


  
  <p>   
	import RadioList from '../singlelist/RadioList'   

	 export default {  
		  components:{  
			RadioList  
		  }  
	  }
  </p>
  
  
  ##### 举个例子
<div class="example">
<div class="block" >
    <div class="block_left" style="max-width: 30%;">
        <div class="title_name">单选框</div>
    </div>
    <div class="block_right">
      <label>
        <span><input type="radio" name="radio" value="1">晴天</span>
		<span><input type="radio" name="radio" value="1">雨天</span>
		<span><input type="radio" name="radio" value="1">下雪</span>
      </label>
    </div>
  </div>
</div>
	 
	  <RadioList title="单选框" :list="radiolist" @selectRadio="selectRadio"></RadioList>


> 以插件形式调用，属性名使用小驼峰式

| 参数 | 说明 | 属性 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| title | 选项标题 | String |  |
| list | 单选的选项 | Array | | |
| disable | 是否禁用单选 | Boolean | | false |

##### 事件
@selectRadio： 获取被选择的单选的值

