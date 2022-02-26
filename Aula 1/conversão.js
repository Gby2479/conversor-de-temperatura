document.getElementById("calcular").onclick = tempConverser;

function tempConverser(){
    let optTemp=document.querySelector("#temp").value;
    let number=document.querySelector("#input").value;
    number=number.replace(",",".")
    number=parseFloat(number);

    let C=0;
    let F=0;
    let K=0;
    let R=0;
    let resultado=document.querySelector("#resultado");

    if(isNaN(number)){
        alert("Digite um número válido!");
        return
    }
    else if(optTemp=='C'){
        F=number*1.8+32;
        K=number+273;
        R=(number+273.15)*1.8;
       
        resultado.innerHTML="<p>"+F.toFixed(1)+" °F</p>"+
        "<p>"+K.toFixed(1)+" K</p>"+
        "<p>"+R.toFixed(1)+" °R</p>";
    }
    else if(optTemp=="F"){
        C=(number-32)/1.8;
        K=(number-32)*(5/9)+273;
        R=number+459.67;

        resultado.innerHTML="<p>"+C.toFixed(1)+" °C</p>"+
        "<p>"+K.toFixed(1)+" K</p>"+
        "<p>"+R.toFixed(1)+" °R</p>";
    }
    else if(optTemp=="K"){
        C=number-273;
        F=(number-273)*1.8+32;
        R=number*1.8;

        resultado.innerHTML="<p>"+C.toFixed(1)+" °C</p>"+
        "<p>"+F.toFixed(1)+" °F</p>"+
        "<p>"+R.toFixed(1)+" °R</p>";
    }
    else if(optTemp=="R"){
        C=(number/1.8)-273.15;
        F=number-459.67;
        K=number/1.8;

        resultado.innerHTML="<p>"+C.toFixed(1)+" °C</p>"+
        "<p>"+F.toFixed(1)+" °F</p>"+
        "<p>"+K.toFixed(1)+" K</p>";
    }

}   

document.querySelector("#reset").onclick = reset;

function reset()
{
    document.querySelector("#input").value="";
    document.querySelector("#resultado").innerHTML="";
    document.querySelector("#temp").value="start";
}    