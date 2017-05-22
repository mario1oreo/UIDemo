
function OnloadInitMenu(data,urid) {
console.log(9);
    var result = '';
    $.each(data, function (index) {
        //循环获取数据
        var Name = data[index].name;
        var ID = data[index].id;
        var parentName = data[index].parent_name;
        var parentId = data[index].parent_id;
        var pagePath = data[index].page_path;
        var level = data[index].level;
        var indexNum = data[index].index_num;
        var menuLi = '<li id = "'+ID+'"><a href="javascript:void(0);" attr-href="'+pagePath+'"><i class="fa fa-th-large"></i> <span class="nav-label">'+Name+'</span> </a></li>'
        var menuUl = '';
        if (level == '1'){
            $("#"+urid).append(menuLi);
        }else if (level == '2'){
            if (indexNum == '1'){
                menuUl = '<ul class="nav nav-second-level collapse" id = "ul'+ID+'">';
                menuLi = menuUl +menuLi+'</ul>';
            } else{
                parentId = 'ul'+parentId;
            }
        }else if(level == '3'){
            if (indexNum == '1'){
                menuUl = '<ul class="nav nav-third-level collapse" id = "ul'+ID+'">';
                menuLi = menuUl +menuLi+'</ul>';
            } else{
                parentId = 'ul'+parentId;
            }
        }else if(level == '4'){
            if (indexNum == '1'){
                menuUl = '<ul class="nav nav-third-level collapse" id = "ul'+ID+'">';
                menuLi = menuUl +menuLi+'</ul>';
            } else{
                parentId = 'ul'+parentId;
            }
        }
        $("#"+parentId).append(menuLi);
        result += menuLi + "\n";
    });
    console.log(result);
}

/**
 * 栈的构造函数
 */
function Stack() {

 // 用数组来模拟栈
 var item = [];

/**
 * 将元素送入栈，放置于数组的最后一位
 * @param {Any} element 接受的元素，不限制类型
 */
this.push = function(element) {
 items.push(element);
};

/***
 * 确定栈是否为空
 * @return {Boolean} 若栈为空则返回true,不为空则返回false
 */
this.isAmpty = function() {
 return items.length === 0
};

/**
 * 清空栈中所有内容
 */
this.clear = function() {
 items = [];
};

/**
 * 返回栈的长度
 * @return {Number} 栈的长度
 */
this.size = function() {
 return items.length;
};

/**
 * 以字符串显示栈中所有内容
 */
this.print = function() {
 console.log(items.toString());
};

}