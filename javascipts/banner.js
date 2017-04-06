window.onload = function () {
	var oDiv = document.getElementById("banner");
	var oUl = document.getElementById("pic_list");
	var aLi = oUl.getElementsByTagName("li");
	var aLnk = oUl.getElementsByTagName("a");
	var aImg = oUl.getElementsByTagName("img");
	var oPrevMask = getElementsByClassName(oDiv, "mask")[0];
	var oNextMask = getElementsByClassName(oDiv, "mask")[1];
	var oBtnPrev = getElementsByClassName(oDiv, "prev")[0];
	var oBtnNext = getElementsByClassName(oDiv, "next")[0];
	var oPrevIco = getElementsByClassName(oBtnPrev, "ico")[0];
	var oPrevIco1 = getElementsByClassName(oBtnPrev, "ico1")[0];
	var oPrevTxt = getElementsByClassName(oBtnPrev, "txt")[0];
	var oNextIco = getElementsByClassName(oBtnNext, "ico")[0];
	var oNextIco1 = getElementsByClassName(oBtnNext, "ico1")[0];
	var oNextTxt = getElementsByClassName(oBtnNext, "txt")[0];
	var iInterval = 45;
	var attr = [];
	var oTimer = null;

	for(var i=0; i<aLi.length; i++) {
		var sPost = getElementStyle(aLi[i],"position");
		var iLeft = parseInt(aLi[i].offsetLeft);
		var iTop = parseInt(aLi[i].offsetTop);
		var iZindex = getElementStyle(aLi[i],"zIndex");
		var iOpacity = getElementStyle(aLi[i],"opacity")*100;
		var vWidth = parseInt(getElementStyle(aLnk[i],"width"));
		var vHeight = parseInt(getElementStyle(aLnk[i],"height"));
		var iWidth = parseInt(getElementStyle(aImg[i],"width"));

		attr.push([sPost, iLeft, iTop, iZindex, iOpacity, vWidth, vHeight, iWidth]);
	}

	for(var i=0; i<aLi.length; i++) {
		aLi[i].style.position = attr[i][0];
		aLi[i].style.left = attr[i][1]+'px';
		aLi[i].style.top = attr[i][2]+'px';
		aLi[i].style.zIndex = attr[i][3];

		toActive(aLi[i], aImg[i], aLnk[i]);

	}
	
	autoSwitching();

	function autoSwitching() {
		oTimer = setInterval(function () {
			imgSwitch(true);
		}, 5000);
	}

	oPrevMask.onmouseover = function () {
		startMove(oPrevTxt, {opacity: "100",left: "47"});
		startMove(oPrevIco1, {opacity: "100",left: "9"});
		startMove(oPrevIco, {opacity: "0",left: "9"});

		clearInterval(oTimer);
	};

	oPrevMask.onmouseout = function () {
		startMove(oPrevTxt, {opacity: "0",left: "68"});
		startMove(oPrevIco1, {opacity: "0",left: "0"});
		startMove(oPrevIco, {opacity: "100",left: "0"});

		autoSwitching();	
	};

	oPrevMask.onclick = function () {
		imgSwitch(true);
	};

	oNextMask.onmouseover = function () {
		startMove(oNextTxt, {opacity: "100",right: "47"});
		startMove(oNextIco1, {opacity: "100",right: "10"});
		startMove(oNextIco, {opacity: "0",right: "10"});

		clearInterval(oTimer);
	};

	oNextMask.onmouseout = function () {
		startMove(oNextTxt, {opacity: "0",right: "69"});
		startMove(oNextIco1, {opacity: "0",right: "0"});
		startMove(oNextIco, {opacity: "100",right: "0"});

		autoSwitching();
	};

	oNextMask.onclick = function () {
		imgSwitch(false);
	};

	function imgSwitch(bPrev) {
		if(bPrev) {
			attr.push(attr.shift());
		}else {
			attr.unshift(attr.pop());
		}

		for(var i=0; i<aLi.length; i++) {
			aLi[i].style.zIndex = attr[i][3];

			toActive(aLi[i], aImg[i], aLnk[i]);

			startMove(aLi[i], {position: attr[i][0], left: attr[i][1], top: attr[i][2], opacity: attr[i][4]}, iInterval);
			startMove(aLnk[i], {width: attr[i][5], height: attr[i][6]}, iInterval);
			startMove(aImg[i], {width: attr[i][7]}, iInterval);
		}
	}

	function toActive(obj, val1, val2) {
		if(obj.style.zIndex == 4) {
			val1.onmouseover = function () {
				this.previousSibling.style.zIndex = "3";

				clearInterval(oTimer);
			}

			val2.onmouseout = function () {
				this.style.zIndex = "1";

				autoSwitching();
			}
		}else {
			val1.onmouseover = null;
			val2.onmouseout = null;
		}
	}
};
		
		
function startMove(obj, aParams, iTime, fnCallBack) {
	clearInterval(obj.timer);
	var iInterval = iTime=="number" ? iTime : 30; 

	obj.timer = setInterval(function () {
		var bStop = true;

		for(var attr in aParams) {
			var iValue = null;

			if(attr == "opacity") {
				iValue = parseInt(getElementStyle(obj, attr)*100);

			}else {
				iValue = parseInt(getElementStyle(obj, attr));
			}

			var iSpeed = (aParams[attr] - iValue) / 8;
			iSpeed = iSpeed>0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

			if(iValue != aParams[attr]) {
				bStop = false;
			}

			switch(attr) {
				case 'opacity':
					obj.style.filter = 'alpha(opacity:'+(iValue+iSpeed)+')';
					obj.style.opacity =(iValue+iSpeed) / 100;
					break;

				case 'zIndex':
					obj.style.zIndex = iValue+iSpeed;
					break;

				case 'position':
					obj.style.position = aParams[attr];
					break;

				default:
					obj.style[attr] = iValue+iSpeed+'px';
			}
		}

		if(bStop) {
			clearInterval(obj.timer);

			if(fnCallBack) {
				fnCallBack();
			}
		}
	}, iInterval)
}

function getElementStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	}else {
		return getComputedStyle(obj, false)[attr];
	}
}

function getElementsByClassName(oParent, sClassName) {
	var aElement = oParent.getElementsByTagName("*");
	var oReg = new RegExp('\\b'+sClassName+'\\b', 'i');
	var aResult = [];

	for(var i=0; i<aElement.length; i++) {
		if(oReg.test(aElement[i].className)) {
			aResult.push(aElement[i]);
		}
	}

	return aResult;
}