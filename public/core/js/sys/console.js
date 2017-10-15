/*
    файл движка консоли
*/


function showConsole() {
    document.querySelector('.input-console').value = '';
    document.querySelector('.console').style.display = 'block';
    $(".side-nav").dropdown('close');
    document.querySelector('.input-console').focus();
}

function output(text, type) {
    if(type == 'info') {
        document.querySelector('#all-commands').innerHTML +='<span class="console-info">APP - ' + text + '</span><br>';
    }
    if(type == 'error') {
        document.querySelector('#all-commands').innerHTML +='<span class="console-error">APP - ' + text + '</span><br>';
    }
}

function addText(text) {
    document.querySelector('#all-commands').innerHTML = '';
    document.querySelector('#all-commands').innerHTML += text + '<br>';
    document.querySelector('.input-console').value = '';
}

function setTextConsole(text) {
        document.querySelector('.input-console').value = text;
    document.querySelector('.input-console').focus();
}
document.querySelector('.input-console').onkeypress = function(e){
    var commands = ['<b><a onclick="setTextConsole(\'/info\')" href="javascript:void(0)">/info</a></b> - информацио о ОС',
                    '<b><a onclick="setTextConsole(\'/console-h\')" href="javascript:void(0)">/console-h</a></b> - скрытие консоли',
                    '<b><a onclick="setTextConsole(\'/reload\')" href="javascript:void(0)">/reload</a></b> - перезагрузка страницы',
                    '<b><a onclick="setTextConsole(\'/close-app\')" href="javascript:void(0)">/close- app</a></b> - закрывает открытое приложение']
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
                    }, 800)
                break;
                case '/help':
                    addText(commands.join('<br>'));
                break;
                case '/reload':
                    location.reload();
                break;
                case '/close-app':
                    document.querySelector('#application-window').src = '';
                break;
                
                default:
                    addText('ERROR - команды не существует. <a onclick="setTextConsole(\'/help\')" href="javascript:void(0)">/help</a>')
                }
                } else {
                    //если не /
                    addText('<b>ERROR</b> - команды начинаются с символа <b>/</b>');
                }
            }
        }
