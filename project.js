
const div = document.getElementById('inamovible');
const spannoLab = document.getElementById('nolaborableTotal');
const spantras = document.getElementById('trasladableTotal');
const spaninamov = document.getElementById('inamovibleTotal');


  

function multiplica(a,b) {
if (a||b){
    return a/(1/b);
}
 else{
     alert('Ingresar números para multiplicar por favor')
 }

}
function multiplicar (){
    const a = document.getElementById('num1').value
     console.log(a)
    const b = document.getElementById('num2').value
     console.log(b)
     
     document.getElementById("resultado").value = multiplica(a,b);

}
function removeAllChilds(a)
 {
 while(a.hasChildNodes())
	a.removeChild(a.firstChild);	
 }       
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const llamarFeriados = () => {
    const año = document.getElementById('año').value
    removeAllChilds(div);
   
    if (año){
fetch(`https://nolaborables.com.ar/api/v2/feriados/${año}?incluir=opcional`)
.then((resp) => resp.json())
.then( data => {
   
    const nolaborableTotal = data.filter(x => x.tipo == "nolaborable").length
    const inamovibleTotal = data.filter(x => x.tipo == "inamovible").length
    const trasladableTotal = data.filter(x => x.tipo == "trasladable").length
    spannoLab.innerHTML = nolaborableTotal
    spantras.innerHTML = trasladableTotal
    spaninamov.innerHTML = inamovibleTotal
    
 return   data.forEach( feriado => {
     if (feriado.tipo == "inamovible"){
         let fer = createNode('div');
         fer.className = "feriado";
         let span = createNode('span');
         span.className="feriadoTipo"
         
      append(fer, span);
      append(div, fer);
      span.innerHTML = `<a class="feriadoTipo" href="${feriado.info}"><h3 class="feriadoTipo">Motivo:   ${feriado.motivo}</h3> <h3>Fecha:  ${feriado.dia}/${feriado.mes}/${año} </h3> </a>`;
            
     }
   
  })
})
.catch(function(error) {
  console.log(error);
})
} 
else{
    alert('Ingrese un año superior a 2015 por favor')
}
}


//MULTIPLICAR
// function multiplicar(){
// const a = document.getElementById('num1').value
// console.log(a)
// const b = document.getElementById('num2').value
// console.log(b)
// multiplica(a, b)
 
// }

