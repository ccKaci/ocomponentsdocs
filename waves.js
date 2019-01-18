/**
 * Created by 立力 on 2017/9/21.
 */
const Waves = module.exports

const duration = 750;

// 样式string拼凑
function forStyle(position){
	const duration = 750;
  var cssStr = '';
  for( var key in position){
    if(position.hasOwnProperty(key)) cssStr += key+':'+position[key]+';';
  };
  return cssStr;
};

// 获取鼠标点击位置
function forRect(target){
	const duration = 750;
  var position = {
    top:0,
    left:0
  }, ele = document.documentElement;
  'undefined' != typeof target.getBoundingClientRect && (position = target.getBoundingClientRect());
  return {
    top: position.top + window.pageYOffset - ele.clientTop,
    left: position.left + window.pageXOffset - ele.clientLeft
  }
};

function show(event){
	const duration = 750;
  var pDiv = event.currentTarget,
    cDiv = document.createElement('div');
  pDiv.appendChild(cDiv);
  var rectObj = forRect(pDiv),
    _height = event.pageY - rectObj.top,
    _left = event.pageX - rectObj.left,
    _scale = 'scale(' + pDiv.clientWidth / 100 * 10 + ')';
  var position = {
    top: _height+'px',
    left: _left+'px'
  };
  cDiv.className = cDiv.className + " waves-animation",
    cDiv.setAttribute("style", forStyle(position)),
    position["-webkit-transform"] = _scale,
    position["-moz-transform"] = _scale,
    position["-ms-transform"] = _scale,
    position["-o-transform"] = _scale,
    position.transform = _scale,
    position.opacity = "1",
    position["-webkit-transition-duration"] = duration + "ms",
    position["-moz-transition-duration"] = duration + "ms",
    position["-o-transition-duration"] = duration + "ms",
    position["transition-duration"] = duration + "ms",
    position["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
    position["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
    position["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
    position["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
    cDiv.setAttribute("style", forStyle(position));
  var finishStyle = {
    opacity: 0,
    "-webkit-transition-duration": duration + "ms",  // 过渡时间
    "-moz-transition-duration": duration + "ms",
    "-o-transition-duration": duration + "ms",
    "transition-duration": duration + "ms",
    "-webkit-transform" : _scale,
    "-moz-transform" : _scale,
    "-ms-transform" : _scale,
    "-o-transform" : _scale,
    top: _height + "px",
    left: _left + "px",
  };
  setTimeout(function(){
	  const duration = 750;
    cDiv.setAttribute("style", forStyle(finishStyle));
    setTimeout(function(){
      pDiv.removeChild(cDiv);
    },duration);
  },100)
};
