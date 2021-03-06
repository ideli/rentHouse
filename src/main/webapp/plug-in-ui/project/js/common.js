function remoteUrl(url,title){ 
	if(url.indexOf('?')>-1){
 		url += '&t=' + Math.random(1000);  
 	}else{
 		url += '?t=' + Math.random(1000);  
 	}
 	$('#addOrUpdateModalLabel').html(title);
	$.ajax({
      url: url,
      cache: false,
	  dataType: "html",
      success: function(data){
        $('#addOrUpdateModal .modal-body').html(data); 
      },  
      error: function(data, status, e){  
      	if(data.status == "401"){
				alert("没有权限！");
				return;
			}
      }
    });
	$('#addOrUpdateModal').modal({show:true,backdrop:false}); 
} 

function doUrl(url){
	location.href=url;
}

function dialogDiv(modalId,title){ 
 	$('#'+modalId+'Label').html(title);
	$('#'+modalId).modal({show:true,backdrop:false}); 
}

function detail(url,title){ 
	if(url.indexOf('?')>-1){
 		url += '&t=' + Math.random(1000);  
 	}else{
 		url += '?t=' + Math.random(1000);  
 	}
	$('#detailModalLabel').html(title);
	$.ajax({
      url: url,
      cache: false,
	  dataType: "html",
      success: function(data){
        $('#detailModal .modal-body').html(data); 
      },  
      error: function(data, status, e){  
      	if(data.status == "401"){
				alert("没有权限！");
				return;
			}
      }
    });
	$('#detailModal').modal({show:true,backdrop:false}); 
} 

function showPrivilegeTree(url,title){ 
	if(url.indexOf('?')>-1){
 		url += '&t=' + Math.random(1000);  
 	}else{
 		url += '?t=' + Math.random(1000);  
 	}
 	$('#privilegeTreeModalLabel').html(title);
	$.ajax({
      url: url,
      cache: false,
	  dataType: "html",
      success: function(data){
        $('#privilegeTreeModal .modal-body').html(data); 
      },  
      error: function(data, status, e){  
      	if(data.status == "401"){
				alert("没有权限！");
				return;
			}
      }
    });
	$('#privilegeTreeModal').modal({show:true,backdrop:false});
} 


/**
 * ajax提交FORM
 * 
 * @param url
 * @param gridname
 */
function ajaxdoForm(formId) {
	var url = $('#' + formId).attr("action");
	$('#'+formId).ajaxSubmit({
        url: url,
        type: 'post',
        dataType: 'json',
        success: function(data, status){ 
        	if(data.success){
        		document.getElementById('formSubmit').submit();
        	}else{
        		alert(data.msg);
        	}
        },  
        error: function(data, status, e){  
        	if(data.status == "401"){
				alert("没有权限！");
				return;
			}
        }
	}); 
}

/**
 * ajax提交FORM
 * 
 * @param url
 * @param gridname
 */
function ajaxdoFormSubmit(formId) {
	var url = $('#' + formId).attr("action");
	console.log("formId : " + formId);
	console.log("url : " + url);
	$('#'+formId).ajaxSubmit({
        url: url,
        type: 'post',
        dataType: 'json',
        success: function(data, status){
        	if(data.status == "401"){
				swal("没有权限！");
				return;
			}
        	if(data.success){
				swal(data.msg);
        		//location.reload();
        		$('#formReturn').click();
        	}else{
				swal(data.msg);
        	}
        },  
        error: function(data, status, e){  
        	if(data.status == "401"){
				swal("没有权限！");
				return;
			}
        }
	}); 
}

function sweetSuccess(msg){
	swal({
		title:msg,
		type:"success"
	});
}
function sweetInfo(msg){
	swal({
		title:msg,
		type:"info"
	});
}

function delData(url){
	swal({
			title: "确认提交吗？",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: "#DD6B55",
			confirmButtonText: "确认",
			cancelButtonText: "取消",
			closeOnConfirm: false,
			closeOnCancel: true
		},
		function(isConfirm){
			$.ajax({
				url: url,
				cache: false,
				dataType: "json",
				success: function(data){
					if(data.success){
						sweetSuccess(data.msg);
						setTimeout(function(){
							$('#formSubmit').submit();
						},2000)
					}else{
						sweetInfo(data.msg);
					}
				},
				error: function(data, status, e){
					if(data.status == "401"){
						sweetInfo("没有权限！");
						return;
					}
				}
			});
		}
	)

}

function delDataGrid(url){
	if(confirm("确认删除吗？")){
		$.ajax({
	      url: url,
	      cache: false,
		  dataType: "json",
	      success: function(data){
	    	  	if(data.success){
	        		alert(data.msg);
	        		dateGrid.reload();
	        	}else{
	        		alert(data.msg);
	        	}
	      },  
	        error: function(data, status, e){  
	        	if(data.status == "401"){
					alert("没有权限！");
					return;
				}
	        }
	    });
	}
	
}

function blockUser(id){
	var url = '../rcOperateUser/blockUser.do?id='+id;
	if(confirm("确认停用该用户吗？")){
		$.ajax({
	      url: url,
	      cache: false,
		  dataType: "json",
	      success: function(data){
	    	  	if(data.success){
	        		alert(data.msg);
	        		document.getElementById('formSubmit').submit();
	        	}else{
	        		alert(data.msg);
	        	}
	      },  
	        error: function(data, status, e){  
	        	if(data.status == "401"){
					alert("没有权限！");
					return;
				}
	        }
	    });
	}
	
}

function unlockUser(id){
	var url = '../rcOperateUser/unlockUser.do?id='+id;
	if(confirm("确认启用该用户吗？")){
		$.ajax({
	      url: url,
	      cache: false,
		  dataType: "json",
	      success: function(data){
	    	  	if(data.success){
	        		alert(data.msg);
	        		document.getElementById('formSubmit').submit();
	        	}else{
	        		alert(data.msg);
	        	}
	      },  
	        error: function(data, status, e){  
	        	if(data.status == "401"){
					alert("没有权限！");
					return;
				}
	        }
	    });
	}
	
	
}


function redirectUrl(url){
	$.ajax({
		      url: url,
		      cache: false,
			  dataType: "json",
		      success: function(data){
		    	  	if(data.success){
		        		alert(data.msg);
		        		document.getElementById('formSubmit').submit();
		        	}else{
		        		alert(data.msg);
		        	}
		      }
		    });

	}

	
//jquery将表单序列化json对象 
$.fn.serializeObject = function () {
    var obj = {};
    var count = 0;
    $.each(this.serializeArray(), function (i, o) {
        var n = o.name, v = o.value;
        count++;
        obj[n] = obj[n] === undefined ? v: $.isArray(obj[n]) ? obj[n].concat(v) : [obj[n], v];
    });
    //obj.nameCounts = count + "";//表单name个数
    //return JSON.stringify(obj);
    return obj;
};


//初始化下标
function resetIndex(idv) {
	$box = $("#"+idv+"");
	$box.find("div[for$='divBox']").each(function(i){
		$(':input, select', this).each(function(){
			var $this = $(this), name = $this.attr('name'), val = $this.val();
			if(name!=null){
				if (name.indexOf("#index#") >= 0){
					$this.attr("name",name.replace('#index#',i));
				}else{
					var s = name.indexOf("[");
					var e = name.indexOf("]");
					var new_name = name.substring(s+1,e);
					$this.attr("name",name.replace(new_name,i));
				}
			}
			$this.parent().parent().find("label[for$='trtitle']").each(function(){
				var $this = $(this);
				var title = $this.html();
				if (title.indexOf("#index#") >= 0){
					$this.html(title.replace('#index#',(i+1)));
				}else{
					var s = title.indexOf("[");
					var e = title.indexOf("]");
					var new_title = title.substring(s+1,e);
					$this.html(title.replace(new_title,(i+1)));
				}
			});
		});
	});
	
	$box.find("div[for$='divBox']").each(function(i){
		$('div>select', this).each(function(){
			var $this = $(this),id = $this.attr('id'),val = $this.val();
			if(id!=null){
				if (id.indexOf("#index#") >= 0){
					$this.attr("id",id.replace('#index#',i));
				}
			}
			$this.parent().parent().find("label[for$='trtitle']").each(function(){
				var $this = $(this);
				var title = $this.html();
				if (title.indexOf("#index#") >= 0){
					$this.html(title.replace('#index#',(i+1)));
				}else{
					var s = title.indexOf("[");
					var e = title.indexOf("]");
					var new_title = title.substring(s+1,e);
					$this.html(title.replace(new_title,(i+1)));
				}
			});
			
			if(id.indexOf("tppCode") >=0){
				$this.bind("change",function(){
	    			changeTpp(i);
	    		});
			}
			if(id.indexOf("pmCode") >=0){
				$this.bind("change",function(){
	    			changePm(i);
	    		});
			}
		});
	});
}


/**
 * 格式化日期时间
 * @param format
 * @returns format
 */
Date.prototype.format = function(format) {
	if (isNaN(this.getMonth())) {
		return '';
	}
	if (!format) {
		format = "yyyy-MM-dd hh:mm:ss";
	}
	var o = {
		/* month */
		"M+" : this.getMonth() + 1,
		/* day */
		"d+" : this.getDate(),
		/* hour */
		"h+" : this.getHours(),
		/* minute */
		"m+" : this.getMinutes(),
		/* second */
		"s+" : this.getSeconds(),
		/* quarter */
		"q+" : Math.floor((this.getMonth() + 3) / 3),
		/* millisecond */
		"S" : this.getMilliseconds()
	};
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for ( var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
};

$.FormatDateTime = function (obj,farmat) { 
	if(obj==null) return "";
    var d = new Date(obj);   
    return d.format(farmat);
}; 


function amountIsNotZero(obj){
	var amount = $(obj).val();
	if(parseFloat(amount)==0){
		$(obj).val("");
		alert("金额不能为0");
		$(obj).focus();
		return false;
	}
	return true;
}

function isAmount(obj){
	var amount = $(obj).val();
	if(amount==""){
		return false;
	}
	var s_currency = /^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/;
	if(parseFloat(amount)==0){
		$(obj).val("");
		alert("金额不能为0");
		$(obj).focus();
		return false;
	}
	if(!s_currency.test(amount)){
		$(obj).val("");
	   alert("请输入正确的数字。");
	   $(obj).focus();
	   return false; 
	}
	return true;
}

$.escapeHTML = function (obj) { 
	if(obj==null) return "";
	var div = document.createElement('div');    
	var text = document.createTextNode(obj);   
	div.appendChild(text);   
	return  div.innerHTML; 
//    return  obj.replace(/&/g, '&').replace(/>/g, '>').replace(/</g, '<').replace(/”/g, '"');
};
