

function jumpRe(){
    window.location.href="login.html";
}
function jumpLo(){
    window.location.href="logpage.html";
}
function jumpIntro(){
    window.location.href="introduce.html";
}
function jumpD(){
    window.location.href="dream.html";
}
function jumpL(){
    window.location.href="life.html";
}
function jumpS(){
    window.location.href="study.html";
}

window.onload=function(){
    submit.onclick=function(){
    
        var name1=document.getElementById("uname").value;
        var pass1=document.getElementById("pwd1").value;
       

        if(name1==""||pass1==""){
            alert("姓名/密码不能为空，请重新输入您的姓名/密码！");
            console.log("NULL");
        }else {
            window.location.href="logpage.html";
        }  
         if(window.localStorage){
            localStorage.name1=document.all.name.value;
            localStorage.pass1=document.all.pwd1.value;
            location.href='logpage.html'
            
        }
    }
    login.onclick=function(){
        let name1=localStorage["name1"];
        let pass1=localStorage["pass1"];
        var name2=document.getElementById("uname2").value;
        var pass2=document.getElementById("pwd2").value;
        console.log(name1+name2+pass1+pass2);
         if(name1==name2&&pass1==pass2){
            window.location.href="index.html";
        }else{
            alert("密码错误！");
        }      
    }
}