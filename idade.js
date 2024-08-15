function formularioIdade(formulario){
    let idade = formulario.idade.value
    let idade2 = formulario.idade2.value
    let idade3 = formulario.idade3.value
    let idade4 = formulario.idade4.value
    let idade5 = formulario.idade5.value

    let faixa_1=0;
    let faixa_2=0;
    let faixa_3=0;
    let maior_idade=0
    let idades = [idade, idade2, idade3, idade4, idade5];
    for(let cont=0; cont<idades.length; cont++){
        if(idades[cont]<=15){
            faixa_1+=1;
        }
        else if(idades[cont]<=40){
            faixa_2+=1;
        }
        else{
            faixa_3+=1;
        }
        
        if(idades[cont]>maior_idade){
            maior_idade=idades[cont];
        }
    }
    document.getElementById("resultado_faixa_1").innerHTML=("quantidade da faixa 1 = "+faixa_1);
    document.getElementById("resultado_faixa_2").innerHTML=("quantidade da faixa 2 = "+faixa_2);
    document.getElementById("resultado_faixa_3").innerHTML=("quantidade da faixa 3 = "+faixa_3);
    document.getElementById("resultado_idade_maior").innerHTML=("maior idade = "+maior_idade);
}