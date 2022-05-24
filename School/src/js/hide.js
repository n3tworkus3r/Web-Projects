

var idVhod = document.getElementById("idVhod");


function hideFunction(){
  
  
  if(idVhod.style.visibility === 'visible'){
    idVhod.style.visibility = 'hidden';
  } else{
    idVhod.style.visibility = 'visible';
  }
  
  localStorage.setItem('stealth', idVhod.style.visibility)

 }


  if(localStorage.getItem('stealth') === 'visible'){
    document.getElementById('idVhod').style.visibility = 'visible';
  }
