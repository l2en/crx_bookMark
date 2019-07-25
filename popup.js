
function main(){
        var body = document.body;
        var markDOM = document.createElement('div');
        var text = document.createTextNode('Mark')
        markDOM.append(text);
        markDOM.setAttribute('class', '__Bk_suspendBall');
        addClass(markDOM, "__Bk_Up");
        body.appendChild(markDOM)
}
function hasClass(elements, cName) {
	return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)")); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断 
};
function addClass(elements, cName) {
	if (!hasClass(elements, cName)) {
		elements.className += " " + cName;
	};
};

window.onload = main;

// window.onload = function () {
// 	var markNoticeDOM = document.createElement('div');
// 	var text = document.createTextNode('添加成功！')
// 	markNoticeDOM.append(text);
// 	markNoticeDOM.setAttribute('class', '__Bk_successNotice');

// 	// var markNoticeDOM = document.getElementById('__Bk_successNotice');
// 	markNoticeDOM.addEventListener('click', function () {
// 		if (markNoticeDOM.className.indexOf('__Bk_success_AnimationBounceRight') > -1) {
// 			markNoticeDOM.className = "__Bk_success";
// 			markNoticeDOM.className += " " + '__Bk_success_AnimationBounceLeft';
// 		} else {
// 			markNoticeDOM.className = "__Bk_success";
// 			markNoticeDOM.className += " " + '__Bk_success_AnimationBounceRight';
// 		}
// 	});
// }