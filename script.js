window.onscroll = function(){
    scroll();
}
function scroll(){
    var btn = document.getElementById("btnTop");
    if(document.documentElement.scrollTop > 400){
        btn.style.display = "block";
    }
    else{
        btn.style.display = "none";
    }
}

function backToTop(){
    document.getElement.scrollTop = 0;
}