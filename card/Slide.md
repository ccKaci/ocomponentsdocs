# Slide

##### 局部注册


  
  <p>   
	import Slide from '../layout/Slide'  

	 export default {  
		  components:{  
			Slide  
		  }  
	  }
  </p>
  
  
  ##### 举个例子
<div class="example" style="height: 350px;">
<div class="slider" style="height: 300px; overflow-x: hidden">
    <div class="list" style="overflow-x: hidden">
      <div class="topTo">
        <div style="padding: 10px 8px;display: flex;color: #fff;">
          <div>123456</div>
        </div>
      </div>
      <div class="middleTo">
        <div id="列表模板1" style="margin: 0px;">
			<div class="weui-cells__title">列表模板1</div>
			<div class="weui-cells">
			  <div class="weui-cell waves">
				<div class="weui-cell__hd"></div>
				<div class="vux-cell-bd vux-cell-primary">
				  <p><label class="vux-label">123</label> </p>
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
				  <p><label class="vux-label">123</label> </p>
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
				  <p><label class="vux-label">123</label> </p>
				  <span class="vux-label-desc"></span>
				</div>
				<div class="weui-cell__ft">
				</div>
			  </div>
			</div>
			<div class="weui-cells__title">列表模板2</div>
			<div class="weui-cells">
			  <div class="weui-cell waves">
				<div class="weui-cell__hd"></div>
				<div class="vux-cell-bd vux-cell-primary">
				  <p><label class="vux-label">456</label> </p>
				  <span class="vux-label-desc"></span>
				</div>
				<div class="weui-cell__ft">
				</div>
			  </div>
			</div>
		  </div>
      </div>
    </div>
  </div>
</div>
	 
	<Slide slide_title="列表模板" >
        ·<div slot="slide_title">123456</div>·
        ·<div slot="slide_body">·
          <title-list title="列表模板1" label="123"></title-list>
          <title-list label="123" @click.native="slideClick"></title-list>
          <title-list label="123" @click.native="slideClick"></title-list>
          <title-list label="123"></title-list>
          <title-list title="列表模板1" label="123"></title-list>
        ·</div>·
      </Slide>

> 以插件形式调用，属性名使用小驼峰式
  
| 参数 | 说明 | 属性 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| slide_title | 列表名称 | String | | |
  
##### 替换
  
| 名称 | 说明 |
| ------ | ------ |
| slide_title | 列表头部 |
| slide_body | 列表内容 |


