function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var dataatual = new Date()
    var minutos = dataatual.getMinutes()

    var min = minutos.toString().padStart(2,'0')
  
    var hora = dataatual.getHours()
    //hora = 19

    msg.innerHTML = `Agora são ${hora}:${min} horas.`
    if (0 <= hora && hora < 12)
    {
        img.src = 'manha.jpg'
        window.document.body.style.backgroundColor = '#e2cd9f'
    }
    else if (hora < 18)
       {
        img.src = 'tarde.jpg'
        window.document.body.style.backgroundColor = '#b9846f'
       }
       else
       {
          img.src = 'noite.jpg'
          window.document.body.style.backgroundColor = '#515154'
       }
}