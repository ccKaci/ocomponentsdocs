# BackList

##### 局部注册


  
  <p>   
	import BackList from '../group/List'

	 export default {  
		  components:{  
			BackList  
		  }  
	  }
  </p>
  
  
  ##### 举个例子
<div class="example" style="width: 60%;">
<div class="stepGroup">
    <div class="stepTitle">
      <div class="titleDescript">大组件模板</div>
    </div>
    <div class="bodyContent">
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
  <div class="block" >
    <div class="block_left" style="max-width: 30%;">
	<i class="fa fa-user title_i" aria-hidden="true"></i>
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
</div>
	 
	<BackList title="大组件模板">
        ·<div slot="body">·
          <OptionList title="类型选择：" :list="list" @selectList="selectList"></OptionList>
          <CheckList title="复选框：" :list="checklist" @selectCheck="selectCheck"></CheckList>
          <RadioList title="单选框" :list="radiolist" @selectRadio="selectRadio"></RadioList>
          <TextList title="輸入文字：" :readthis="read" @selectInput="selectInput"></TextList>
        ·</div>·
      </BackList>
> 以插件形式调用，属性名使用小驼峰式

| 参数 | 说明 | 属性 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| title | 大组件标题 | String |  |  |

  ##### 替换
  | 名字 | 说明 |
| ------ | ------ |
| body | 大组件内部的内容 |


