function verificar() {    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano)
    {
        window.alert ('Verifique os dados e tente novamente!')
    }
    else
       {
          var idade = ano - Number(fano.value)          
          var sexo = window.document.getElementsByName('radsex')
          var gen = ''
          var img = window.document.createElement('img')
          img.setAttribute('id','foto')
          if (sexo[0].checked)
          {
             gen = 'Homem'
             if (idade >=0 && idade < 10)
             {
                img.setAttribute('src','bebehomem.jpg')
             }
             else if (idade < 22)
                  {
                    img.setAttribute('src','jovemhomem.jpg')
                  }
                  else if (idade < 50)
                       {
                        img.setAttribute('src','adultohomem.jpg')
                       }
                       else 
                          {
                            img.setAttribute('src','idosohomem.jpg')
                          }
          }
          else
            {
                gen = 'Mulher'
                if (idade >=0 && idade < 10)
                {
                    img.setAttribute('src','bebemulher.jpg')
                }
                else if (idade < 22)
                    {
                        img.setAttribute('src','jovemmulher.jpg')
                    }
                    else if (idade < 50)
                        {
                            img.setAttribute('src','adultomulher.jpg')
                        }
                        else 
                            {
                                img.setAttribute('src','idosomulher.jpg')
                            }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `${gen} com ${idade} anos!</br>`
            res.appendChild(img)
       }
}