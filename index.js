var interval;
var hora = 0;
var min = 0;
var sec = 0;
var zero = 0;
var somarUm = 1;

function start(){
  
interval = setInterval(watch, 1000)
}

function pause(){
  clearInterval(interval)
  }
  

  function stop(){
    clearInterval(interval)
    hora = 0 
    min = 0;
    sec = 0;
    document.querySelector('h1').innerText = `0${hora}:0${min}:0${sec}`

    }
    


function watch(){
sec = sec +1;


if(hora == 24){
  hora = zero
}

if(sec >= 59){
    min = min + somarUm
      sec =  zero
}
if(min >= 59){
  hora = hora + somarUm
  min = zero + somarUm
}


if(hora <= 9 ){
  var horas =  '0' + hora
}else{
  horas =  `${hora}`
}if(min <= 9 ){
  var mins =  '0' + min
}else{
  mins =  `${min}`
}if(sec <= 9 ){
  var secs =  '0' + sec
}else{
  secs =  `${sec}`
}
document.querySelector('h1').innerText = `${horas}:${mins}:${secs}`


  

  

  }