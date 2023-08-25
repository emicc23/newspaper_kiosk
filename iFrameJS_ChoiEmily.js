pos=1;
function next(){
    pos+=1;
    if(pos==1){
        var pag="https://www.hoy.com.py/";
    }
    else if(pos==2){
        var pag="https://www.abc.com.py/";
    }
    else if(pos==3){
        var pag="https://www.ultimahora.com/";
    }
    else{
        pos=1;
        var pag="https://www.hoy.com.py/";
    }
    document.getElementById("myFrame").src=pag;
}
function back(){
    pos-=1;
    if(pos==1){
        var pag="https://www.hoy.com.py/";
    }
    else if(pos==2){
        var pag="https://www.abc.com.py/";
    }
    else if(pos==3){
        var pag="https://www.ultimahora.com/";
    }
    else{
        pos=3;
        var pag="https://www.ultimahora.com/";
    }
    document.getElementById("myFrame").src=pag;
}

function popupFunction(){
    var popup=document.getElementById("myPopup");
    popup.classList.toggle("show");
}