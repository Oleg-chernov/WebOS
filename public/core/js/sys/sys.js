/*

*/

//функция отправки запроса на сервер
function sendHttp(textUser, req){
    var text= textUser;
    $.post(req,{text: text}, function(data){
    
    if(data==='done') {
        console.log("success");
    }
});
}

//функция инициализации приложения
function createApp(sett) {
    var menu = document.getElementById('item-all');
    if(!sett.nameApp){
        console.error('Error type 2: name application')
    } else {        
        menu.innerHTML += '<li><a href="javascript:void(0)" onclick="' + sett.func + '">' + sett.nameApp + '</a></li>';
    }
}
