<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:th="http://www.thymeleaf.org">
<head th:include="end/include/head">
</head>
<link th:href="@{/plug-in-ui/treetable/default/treeTable.css}" rel="stylesheet" type="text/css" />
<body style='overflow:scroll;overflow-x:hidden'>
<div class="container bs-docs-container" style="width:100%;">
    <div class="row">
        <form role="form" class="form-inline" action="${lowerName}/list.html" th:action="@{/${lowerName}/list.do}" method="post"  id="formSubmit">
            <div  class="col-md-10" style="width:100%">
                <div class="panel panel-default">
                    <div class="panel-heading">列表</div>
                    <div class="panel-body">
                        <input name="pageNo" id="pageNo" value="1" th:value="${pageNo}" type="hidden">
                        <input name="pageSize" id="pageSize" value="10" th:value="${pageSize}" type="hidden">
                        <div class="search">
                        <#list columnDatas as item>
                            <#if item.domainPropertyName != 'id'>
                            <div class="form-group col-sm-3">
                                <label for="roleCode" class="control-label col-sm-3 line34">${item.columnComment}</label>
                                <div class="col-sm-8">
                                    <input type="text" name="${item.domainPropertyName}" id="${item.domainPropertyName}" th:value="${query.${item.domainPropertyName}}" class="form-control">
                                </div>
                            </div>
                            </#if>
                        </#list>

                            <button type="submit" class="btn btn-primary">搜  索</button>
                            <div class="clearfix"></div>
                        </div>

                        <div id="legend">
                            <legend  class="le"><button type="button" shiro:hasPermission="${package}.${lowerName}.add" class="btn btn-primary" th:onclick="'javascript:doUrl(\'' + ${basePath} +'/${lowerName}/toAdd.do\');'" >新增</button></legend>
                        </div>
                        <table class="table table-striped">
                            <thead>
                            <#list columnDatas as item>
                                <#if item.domainPropertyName != 'id'>
                                    <th>${item.columnComment}</th>
                                </#if>
                            </#list>
                            <th>操作</th>
                            </thead>
                            <tbody>
                            <tr th:each ="info :${list}">
                            <#list columnDatas as item>
                                <#if item.domainPropertyName != 'id'>
                                    <td th:text="${info.${item.domainPropertyName}}"></td>
                                </#if>
                            </#list>
                                <td class="last">
                                    <a shiro:hasPermission="${package}.${lowerName}.edit" href="javascript:void(0)" th:onclick="'javascript:doUrl(\'' + ${basePath} + '/${lowerName}/toEdit.do?id='+${info.id} + '\')'" >编辑</a>
                                    <a shiro:hasPermission="${package}.${lowerName}.delete" th:onclick="'javascript:delData(\'' + ${basePath} + '/${lowerName}/doDelete.do?id=' + ${info.id} + '\')'">删除</a>
                                    <a shiro:hasPermission="${package}.${lowerName}.detail" th:onclick="'javascript:doUrl(\'' + ${basePath} + '/${lowerName}/toDetail.do?id=' + ${info.id} + '\')'">详情</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="text-right">
                            <ul class="pagination" id="pagination1"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
</body>
<script type="text/javascript" th:src="@{/plug-in-ui/treetable/jquery.treeTable.min.js}"></script>
<script type="text/javascript">
    //当前页码
    var pageNo = [[${pageNo}]];
    //当前页数
    var pages = [[${pages}]];

    var visiblePages = pages;
    if (pages >= 10) {
        visiblePages = 10;
    }

    $.jqPaginator('#pagination1', {
        totalPages: pages,
        visiblePages: visiblePages,
        currentPage: pageNo,
        prev: '<li class="prev"><a href="javascript:;">上一页</a></li>',
        next: '<li class="next"><a href="javascript:;">下一页</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        first: '<li class="next"><a href="javascript:;">首页</a></li>',
        last: '<li class="next"><a href="javascript:;">末页</a></li>',
        onPageChange: function (num, type) {
            console.log("num : " + num);
            console.log("type : " + type);
            if (type != "init") {
                //$('#p1').text(type + '：' + num);
                document.getElementById('pageNo').value = num;
                document.getElementById('formSubmit').submit();
            }
        }
    });
    $(function(){
        var option = {
            theme:'default',
            expandLevel : 3,
            beforeExpand : function($treeTable, id) {
            },
            onSelect : function($treeTable, id) {
                window.console && console.log('onSelect:' + id);
            }

        };
        $('#treeTable1').treeTable(option);
    });
</script>
</html>