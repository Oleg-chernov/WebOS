
function showConsole() {
    document.querySelector('.input-console').value = '';
    document.querySelector('.console').style.display = 'block';
    $(".side-nav").dropdown('close');
    document.querySelector('.input-console').focus();
}
function addText(text) {
    document.querySelector('#all-commands').innerHTML = '';
    document.querySelector('#all-commands').innerHTML += text + '<br>';
    document.querySelector('.input-console').value = '';
}
document.querySelector('.input-console').onkeypress = function(e){
    var commands = ['<b>/info</b> - информацио о ОС',
                    '<b>/console-h</b> - скрытие консоли',
                    '<b>/reload</b> - перезагрузка страницы']
    var t = document.querySelector('.input-console').value;
    var c = document.querySelector('#all-commands');
            
    if(e.key == 'Enter'){
        if(t[0] == '/') {
            switch(t){
                case '/info':
                    addText('<b>/info</b> - v 0.0.1');
                break;
                case '/console-h':
                    addText('<b>OK :-)</b>');
                    setTimeout(function(){
                        document.querySelector('.console').style.display = 'none';
                        document.querySelector('.input-console').value = '';
                         addText('');
                    }, 1000)
                break;
                case '/help':
                    addText(commands.join('<br>'));
                break;
                case '/reload':
                    location.reload();
                break;
                
                default:
                    addText('<b>ERROR</b> - команды не существует.');
                    
                    }
                } else {
                    //если не /
                    addText('<b>ERROR</b> - команды начинаются с символа <b>/</b>');
                }
            }
        }
