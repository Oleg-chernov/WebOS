function sendHttp(textUser, req){
    var text= textUser;
    $.post(req,{text: text}, function(data){
    
    if(data==='done') {
        console.log("success");
    }
});
}