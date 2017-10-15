/*
    Файл с обработчиками событий для конопок.
*/

document.getElementById('DevNewProject').onclick = function(){
        var text= $("#nameProject").val();;
        $.post('http://localhost:8081/newProject',{text: text}, function(data){
    console.log(text)
        if(data==='done') {
            console.log("success");
        }
        });
}