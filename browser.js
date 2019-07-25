function hasClass(elements, cName) {
	return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)")); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断 
};

function addClass(elements, cName) {
	if (!hasClass(elements, cName)) {
		elements.className += " " + cName;
	};
};

// 成功提示
function noticeSuccess(markDOM) {
	var markNoticeDOM = document.createElement('div');
	var text = document.createTextNode('添加成功！')
	markNoticeDOM.append(text);
	markNoticeDOM.setAttribute('class', '__Bk_successNotice');
	markDOM.appendChild(markNoticeDOM);
	console.log('p1', markDOM)
}


function main() {
	var body = document.body;
	var markDOM = document.createElement('div');
	var text = document.createTextNode('Mark')
	markDOM.append(text);
	addClass(markDOM, "__Bk_Up __Bk_suspendBall");

	var markNoticeDOM = document.createElement('div');
	var textNotice = document.createTextNode('添加成功！')
	addClass(markNoticeDOM, '__Bk_success')
	markNoticeDOM.append(textNotice);
	markDOM.appendChild(markNoticeDOM);
	body.appendChild(markDOM);

	markDOM.addEventListener('click', function () {
		if (markNoticeDOM.className.indexOf('__Bk_success_AnimationBounceRight') > -1) {
			markNoticeDOM.className = "__Bk_success __Bk_success_AnimationBounceLeft";
		} else {
			markNoticeDOM.className = "__Bk_success __Bk_success_AnimationBounceRight";
		}
	});
}

window.onload = main;