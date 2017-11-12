/*
    Файл с обработчиками событий для конопок.
*/

document.getElementById('DevNewProject').onclick = function(){
        var text= $("#nameProject").val();
        if(text != '') {
            $.post('http://localhost:8081/newProject',{text: text}, function(data){
            if(data==='done') {
                console.log("success");
                swal(
                    'Готово',
                    'Папка с приложением создана. Внесите правки в index.html',
                    'success'
                    );
            }});
        } else {
            swal(
                'ОЙ...',
                'Кажется, что вы забыли ввести  имя приложения!',
                'error'
                );
        }
}