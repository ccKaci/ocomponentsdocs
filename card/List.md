
## OptionList 下拉列表


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

-----------------------  

## CheckList 多选框模板
  
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

--------------------  

## RadioList 单选框模板
  
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
		<span><input type="radio" name="radio" value="2">雨天</span>
		<span><input type="radio" name="radio" value="3">下雪</span>
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

-----------------------------------  

## TextList 输入框模板
  

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

-------------------------  

## TitleList 标题模板
  
##### 局部注册


  
  <p>   
	import TitleList from '../singlelist/TitleList'  

	 export default {  
		  components:{  
			TitleList  
		  }  
	  }
  </p>
  
  
  ##### 举个例子
  >有标题
<div class="example">
<div id="title" style="margin: 0px;">
    <div class="weui-cells__title">水果类</div>
    <div class="weui-cells">
      <div class="weui-cell waves">
        <div class="weui-cell__hd"></div>
        <div class="vux-cell-bd vux-cell-primary">
          <p><label class="vux-label">苹果</label> </p>
          <span class="vux-label-desc"></span>
        </div>
        <div class="weui-cell__ft">
        </div>
      </div>
    </div>
	<div class="weui-cells">
      <div class="weui-cell waves">
        <div class="weui-cell__hd"></div>
        <div class="vux-cell-bd vux-cell-primary">
          <p><label class="vux-label">梨子</label> </p>
          <span class="vux-label-desc"></span>
        </div>
        <div class="weui-cell__ft">
        </div>
      </div>
    </div>
	<div class="weui-cells">
      <div class="weui-cell waves">
        <div class="weui-cell__hd"></div>
        <div class="vux-cell-bd vux-cell-primary">
          <p><label class="vux-label">香蕉</label> </p>
          <span class="vux-label-desc"></span>
        </div>
        <div class="weui-cell__ft">
        </div>
      </div>
    </div>
  </div>
</div>

>无标题
<div class="example">
<div id="title" style="margin: 0px;">
    <div class="weui-cells">
      <div class="weui-cell waves">
        <div class="weui-cell__hd"></div>
        <div class="vux-cell-bd vux-cell-primary">
          <p><label class="vux-label">无花果</label> </p>
          <span class="vux-label-desc"></span>
        </div>
        <div class="weui-cell__ft">
        </div>
      </div>
    </div>
	<div class="weui-cells">
      <div class="weui-cell waves">
        <div class="weui-cell__hd"></div>
        <div class="vux-cell-bd vux-cell-primary">
          <p><label class="vux-label">菠萝</label> </p>
          <span class="vux-label-desc"></span>
        </div>
        <div class="weui-cell__ft">
        </div>
      </div>
    </div>
  </div>
</div>
	 
	<title-list></title-list>

> 以插件形式调用，属性名使用小驼峰式

| 参数 | 说明 | 属性 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| title | 细项标题 | String | Primary、warn、error、default | 细项模板 |
| label | 细项内容 | String | | 细项模板 |

---------------------------  

## BackList大组件模板

### 局部注册


  
  <p>   
	import BackList from '../group/List'

	 export default {  
		  components:{  
			BackList  
		  }  
	  }
  </p>
  
  
### 举个例子  
  
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

### 解释说明  

| 参数 | 说明 | 属性 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| title | 大组件标题 | String |  |  |

  ##### 替换
  | 名字 | 说明 |
| ------ | ------ |
| body | 大组件内部的内容 |

------------------------------  
