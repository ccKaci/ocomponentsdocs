function collapse(){
var x = document.getElementById("collapse");
var y = document.getElementById("bot");
if(x.style.display=='none'){
	x.style.display='block';
	x.style.visiblity='visible';
	y.innerHTML = "<"
}else{
	x.style.display='none';
	y.innerHTML = ">"
}
};
function go() {
var x = document.getElementById("message");
 alert("您搜索的内容："+x.value);
};
function Click() {
	show(event);
};