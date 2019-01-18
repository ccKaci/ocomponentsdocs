# CollapseItem 
  
##### 局部注册


  
  <p>   
    
	import CollapseItem from '../collapse/Collapse'  
	import CollapseItem from '../collapse/CollapseItem'	

	 export default {  
		  components:{  
			Collapse,
			CollapseItem  
		  }  
	  }
  </p>
  
  
  ##### 举个例子
  <div style="width: 50%;height:110px; border: 1px solid #ccc;">
	<div>
		<div class="collapse_item_title" onClick="collapse()">
		  <div class="title_area">
			<div>标题</div>
		  </div>
		  <span class="collapse_item_title_down" id="bot" style="cursor:pointer;"><</span>
		</div>
		<div class="collapse_item_content" id="collapse" style="visiblity:visible;">
		  <div>
			<div>例子1</div>
			<div>例子2</div>
			<div>例子3</div>
		  </div>
		</div>
	 </div>
  </div>
	 
	 <p>`<collapse>`  
			`<collapse-item :colspan="true">`  
			  `<div slot="title">标题</div>`  
			  `<div slot="content">`  
				`<div>例子1</div>`  
				`<div>例子2</div>`  
				`<div>例子3</div>`   
			  `</div>`  
            `</collapse-item>`  
		`</collapse>`  

> 需要配合collapse一起使用

| 属性 | 参数 | 说明 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| colspan | 默认列表展开，为true时下拉列表折叠起来 | Boolean |  | false |

##### 可替换区域

| 名字 | 说明 |
| ------ | ------ |
| title | 折叠列表的标题 |
| content | 折叠列表的列 |
