# TitleList 
  
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



