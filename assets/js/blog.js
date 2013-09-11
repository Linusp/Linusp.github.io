function getElementsByClassName( className, tagName ){ 
    var elements = [], all = document.getElementsByTagName( tagName || "*" ); 
    for(var i=0; i < all.length; i++){ 
        if(all[i].className == className){ 
            elements[elements.length] = all[i]; 
        } 
    } 
    return elements; 
}

// ---------------- 文章底部导航条 ---------------------
// 为选中 h3 添加 padding-top: 50px; 并清除其余 h3 的 padding-top
function add_h3_padding(item) {
    var h3_titles = document.getElementsByTagName("h3");
    for(var i = 0; i < h3_titles.length; i++ ){
        h3_titles[i].style.paddingTop = "0px";
        if(item.innerHTML == h3_titles[i].innerHTML){
            h3_titles[i].style.paddingTop = "50px";
        }
    }
}

// 底部文章导航目录自动现实隐藏
function toggle_bottom_catelog(){
    window.onscroll = function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var bottom_nav = document.getElementById("nav-fix-bottom");
        if( bottom_nav != null ){
            if( scrollTop >= 200 ) { 
                bottom_nav.style.display = "block"; 
            } else { 
                bottom_nav.style.display = "none"; 
            }
        }
    }
}

// 填充底部文章导航目录
function fill_bottom_navbar () {
    var nav_bar = document.getElementById("page-nav-list");
    if(nav_bar != null) {
        var h3_titles = document.getElementsByTagName("h3");
        var str = '<ul>';
        for(var i = 0; i < h3_titles.length; i++ ){
            h3_titles[i].id = 'subnav-' + i;
            str += '<li><a href="#subnav-' + i + '" onclick="add_h3_padding(this)">'
                + h3_titles[i].innerHTML + '</a></li>';
        }
        nav_bar.innerHTML = str + '</ul>';
    }
    toggle_bottom_catelog();
}

// ---------------- 分类 或 标签 ---------------------
// 单击 topic_list 中的 分类 或 标签 时，显示对应的 topic
function show_topic( topic ) {
    var topics = getElementsByClassName("hide");
    for( i = 0; i < topics.length; i++ ){
        topics[i].style.display = "none";
        if(topic.innerHTML == topics[i].id){
            topics[i].style.display = "block";
        }
    }
}

// 把页面中的 标签 和 分类 选出，并放在 topic_list 中
function fill_topic( topic_list ) {
    var topics = getElementsByClassName("hide");
    var str = '';

    for( i = 0; i < topics.length; i++ ){
        str += '<a href="#" class="badge badge-list" onclick="show_topic(this)">'
            + topics[i].id + '</a>'
    }
    if(topic_list != null) {
        topic_list.innerHTML = str;
    }
}

// 点击 Post 页面标签，或者分类时，根据 锚链接 跳转到相对应的位置
function anchor_redirect(){
    var topics = getElementsByClassName("hide");
    for( i = 0; i < topics.length; i++ ){
        topics[i].style.display = "none";
        if( window.location.hash.substr(7) == topics[i].id){
            topics[i].style.display = "block";
        }
    }
}

// ---------------- 页面加载完成后 ---------------------
window.onload = function(){
    fill_bottom_navbar();
    fill_topic( document.getElementById("topic-list") );
    anchor_redirect();
}
