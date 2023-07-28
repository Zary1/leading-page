/* inicio mudar a cor da letra do logo*/

const logo =document.getElementById("logo")
const logoParagrafo=logo.innerHTML
const paragrafo =[...logoParagrafo]
let letra ="";
  const percorrerParagrafo= paragrafo.map(e=>{
      if(e=="D"){
        letra="<small class='mudar-cor-logo'>D</small>"
        return letra
         
      }else if(e=="R"){
        letra="<small class='mudar-cor-logo'>R</small>"
        return letra
      }
      
      else{
        return e
      }

  })
  const novoParagravo =percorrerParagrafo.join("")
  logo.innerHTML=novoParagravo


/* fim mudar a cor da letra do logo*/