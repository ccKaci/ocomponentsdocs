# Search
  
##### 局部注册


  
  <p>   
	import Search from '../search/Search'   

	 export default {  
		  components:{  
			Search  
		  }  
	  }
  </p>
  
  
  ##### 举个例子
<div class="example">
<div class="cd_search_group">
    <div class="cd_search_content_padding">
      <div class="cd_search_content_input">
        <input id="message" type="search" placeholder="搜索框模板"/>
		<button id="cd_btn_search" class="btn btn_primary" onClick="go()">搜索框</button>
      </div>
    </div>
  </div>
</div>

	 
	  <Search remark="搜索框模板" name="搜索框" @search="searchThis"></Search>


> 以插件形式调用，属性名使用小驼峰式

| 参数 | 说明 | 属性 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| remark | 搜索框提示语 | String |  | 请输入搜索内容··· |
| name | 按钮文字 | String | | 搜索 |


##### 事件
@search： 获取搜索框内输入的内容
