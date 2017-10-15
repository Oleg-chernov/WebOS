/*
    Файл с обработчиками событий для конопок.
*/

document.getElementById('DevNewProject').onclick = function(){
        var text= $("#nameProject").val();
        if(text != '') {
            $.post('http://localhost:8081/newProject',{text: text}, function(data){
            if(data==='done') {
                console.log("success");
            }});
        } else {
            alert('Заполните поле');
        }
}