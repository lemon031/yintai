//兼容IE6的XHR对象
function createXHR() {
	if(window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}

	return new ActiveXObject('Microsoft.XMLHTTP');
}

//封装一个方法,把对象转化为提交给服务器参数的字符串形式
function addParams(obj) {
	var paramArr = [];
	for(var key in obj) {
		var str = encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
		paramArr.push(str);
	}
	return paramArr.join('&');
}

//封装一个Ajax的通用请求函数
function Ajax(obj) {

	//创建一个XHR对象
	var xhr = createXHR();
	//重新拼接参数
	var parmasString = addParams(obj.data);//username=laoWang&password=1234
	//判断是post还是get请求
	if(/^get$/i.test(obj.method)) {

		xhr.open(obj.method, obj.oUrl + '?' + parmasString, obj.async);
		xhr.send(null);

	} else if(/^post$/i.test(obj.method)) {

		xhr.open(obj.method, obj.oUrl, obj.async);
		//添加一个特殊的请求头键值对
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.send(parmasString);

	}

	if(obj.async) {
		//异步
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				complete()
			}
		}

	} else {
		//同步
		complete()
	}
	
	//请求完成之后调用的函数
	function complete(){
		if(xhr.status == 200) {
			//请求成功就调用成功的回调函数			
			obj.success(xhr.responseText);
		} else {
			//请求失败就调用失败的回调函数			
			obj.faliure(xhr.status, xhr.statusText);
		}
	}
	

}