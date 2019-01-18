# ViewItem 



##### 局部注册

  <p>   
	import ViewItem from '../viewItem/ViewItem'   

	 export default {  
		  components:{  
			ViewItem  
		  }  
	  }
  </p>
  
  
  ##### 举个例子
  
<div style="width: 50%;border: 1px solid #ccc; padding: 5px;">
	<div class="view_item">
		<div class="left_contain">
		  <div class="view_title">
			<div slot="title">标题</div>
		  </div>
		  <div class="view_content">
			<div slot="content">
			  <div class="view_bottom">
				<div class="org_name">说明</div>
			  </div>
			</div>
		  </div>
		  <div slot="bottom">
			<div class="view_bottom">
			  <div class="org_name">集团</div>
			  <div class="view_count">阅读量：150</div>
			  <div class="date">2018-02-28</div>
			</div>
		  </div>
		</div>
		<div class="right_contain">
		  <div class="img_contain">
			<div slot="img">
			  <img src="https://pro.modao.cc/uploads3/images/1715/17155846/raw_1518062241.jpeg" alt="缩略图">
			</div>
		  </div>
		</div>
	</div>
</div>
	 
	 <view-item>
        <div slot="title">标题</div>
        <div slot="content">
          <div class="view_bottom">
            <div class="org_name">集团</div>
          </div>
        </div>
        <div slot="bottom">
          <div class="view_bottom">
            <div class="org_name">集团</div>
            <div class="view_count">阅读量：150</div>
            <div class="date">2018-02-28</div>
          </div>
        </div>
        <div slot="img">
          <img src="https://pro.modao.cc/uploads3/images/1715/17155846/raw_1518062241.jpeg" alt="缩略图">
        </div>
      </view-item> 
	  

##### 可替代的区域

| 名字 | 说明 |
| ------ | ------ |
| title | 标题 |
| content | 中间文字 |
| bottom | 底部文字 |
| img | 右侧图片 |



