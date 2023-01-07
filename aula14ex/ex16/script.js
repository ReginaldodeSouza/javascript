function contador() 
{   
   var ini = window.document.getElementById('txtn1')
   var passo = window.document.getElementById('txtn3')
   var res = window.document.getElementById('res')

   var msg = document.createElement('p')    
   msg.appendChild(document.createTextNode('abc'))
   res.replaceChildren(msg)

   if (ini.value.length == 0)
   {
    window.alert('Informe valor inicial')
   } else if (passo.value.length == 0 || Number(passo.value) == 0)
          {
              passo.value = '1'
          }  
           
}
