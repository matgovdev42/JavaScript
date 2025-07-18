var p0 = window.document.getElementsByTagName('p')[0]
        var p1 = window.document.getElementsByTagName('p')[1]
        window.document.write('Está escrito assim: ' + p0.innerText)
        p0.style.color = 'blue'
        document.write('Está escrito: ' + p1.innerHTML)
        var d = window.document.getElementById('msg')
        d.style.background = 'green'
        //d.innerText = 'Estou no aguardo'
        window.document.getElementById('msg').innerText = 'Olá'
        var dd = window.document.querySelector('div#ex')
        dd.style.background = 'gray'
        var ddd = window.document.querySelector('div.exmsg')
        ddd.style.background = 'Pink'