<!DOCTYPE html>
<html><#include "/end/include/head.ftl"/>
<body style='overflow:scroll;overflow-x:hidden'>
	<div class="container bs-docs-container" style="width:100%;">
		<div class="row">
			<div class="panel panel-default">
				<div class="panel-heading">新增</div>
				<div class="panel-body">
					<form class="form-horizontal" role="form" id="dailogForm" action="${basePath}/user/doAdd.do" method="POST">
						<input type="hidden" id="btn_sub" class="btn_sub" />
									<div class="form-group mno">
										<label for="username" class="col-sm-2 control-label" style="text-align:left;">用户名</label>
										<div class="col-sm-8">
											<input type="text"  name="username" id="username" class="form-control"  datatype="*" />
										</div>
									</div>
									<!--<div class="form-group mno">
										<label for="inputEmail3" class="col-sm-2 control-label" style="text-align:left;">盐值</label>
										<div class="col-sm-8">
											<input type="text" value="$!{bptUser.salt}" name="salt" id="salt" class="form-control" />
										</div>
									</div>-->
									<div class="form-group mno">
										<label for="password" class="col-sm-2 control-label" style="text-align:left;">密码</label>
										<div class="col-sm-8">
											<input type="text" name="password" id="password" class="form-control" datatype="*6-18"/>
										</div>
									</div>
									<div class="form-group mno">
										<label for="confirmPassword" class="col-sm-2 control-label" style="text-align:left;">确认密码</label>
										<div class="col-sm-8">
											<input type="text" name="confirmPassword" id="confirmPassword" class="form-control" recheck="password" datatype="*6-18" errormsg="两次输入的密码不一致！"/>
										</div>
									</div>

									<div class="form-group mno">
										<label for="roleId" class="col-sm-2 control-label" style="text-align:left;">所选角色</label>
										<div class="col-sm-8">
											<select id="roleId" class="form-control">
												<#list roleList as role>
												<option value="${role.id}">${role.roleName}</option>
												</#list>
											</select>
										</div>
									</div>
									<div class="form-group mno">
										<label for="realName" class="col-sm-2 control-label" style="text-align:left;">真实姓名</label>
										<div class="col-sm-8">
											<input type="text" name="realName" id="realName" class="form-control" />
										</div>
									</div>
									<div class="form-group mno">
										<label for="status" class="col-sm-2 control-label" style="text-align:left;">用户状态</label>
										<div class="col-sm-8">
											<input type="text" name="status" id="status" class="form-control" />
										</div>
									</div>
									<div class="form-group mno">
										<label for="email" class="col-sm-2 control-label" style="text-align:left;">邮箱</label>
										<div class="col-sm-8">
											<input type="text" name="email" id="email" class="form-control" />
										</div>
									</div>
									<div class="form-group mno">
										<label for="birthday" class="col-sm-2 control-label" style="text-align:left;">生日</label>
										<div class="col-sm-8">
											<input type="text" name="birthday" id="birthday" class="form-control" th:value="${#dates.format(date, 'dd/MMM/yyyy HH:mm')}" onFocus="WdatePicker({dateFmt:'yyyy-MM-dd'})"   th:style="'background: url(' + @{/plug-in-ui/images/datetime.png} + ') no-repeat scroll right center transparent;'" />
										</div>
									</div>
									<div class="form-group mno">
										<label for="sex" class="col-sm-2 control-label" style="text-align:left;">性别</label>
										<div class="col-sm-8">
											<input type="text"  name="sex" id="sex" class="form-control" />
										</div>
									</div>
									<div class="form-group mno">
										<label for="mobilePhone" class="col-sm-2 control-label" style="text-align:left;">手机号码</label>
										<div class="col-sm-8">
											<input type="text" name="mobilePhone" id="mobilePhone" class="form-control" />
										</div>
									</div>
									<div class="form-group mno">
										<label for="officePhone" class="col-sm-2 control-label" style="text-align:left;">办公室电话</label>
										<div class="col-sm-8">
											<input type="text" name="officePhone" id="officePhone" class="form-control" />
										</div>
									</div>

						<div class="form-group mno">
							<div class="col-sm-offset-1 col-sm-6">
								<button type="button" class="btn btn-default" id="formReturn" data-dismiss="modal" onclick="${basePath}/user/list.do">返回</button>
								<button type="button" class="btn btn-primary" id="formSubmit">提交</button>
							 </div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
<script type="text/javascript" src="${base}/plug-in-ui/project/js/Validform_v5.3.2.js"></script>
<script type="text/javascript" src="${base}/plug-in-ui/project/js/forminit.p3.js"></script>
