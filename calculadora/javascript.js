alert ("calculadora")

class Calculadora{

    somar(valor1, valor2){
        const final = valor1 + valor2
        alert("o resultado é: "+final);
        
    }
    
    subtrair(valor1, valor2){
        const final = valor1 - valor2
        alert("o resultado é: "+final);
    
    }
    dividir(valor1, valor2){
        const final = valor1 / valor2;
        alert("o resultado é: "+final)
    }
    multiplicar(valor1, valor2){
        const final = valor1 * valor2;
        alert("o resultado é: "+final)
    }

}

const oqquer = Number(prompt("Escolha uma das opções: somar=1 subtrair=2 dividir=3 multiplicar=4"));
const valor1 = Number(prompt("digite o primeiro valor: "));
const valor2 = Number(prompt("digite o segundo valor: "));

const calcular = new Calculadora();

if(oqquer === 1){
    calcular.somar(valor1,valor2);
}
else if(oqquer === 2){
    calcular.subtrair(valor1,valor2);
}
else if(oqquer === 3){
    if(valor1>0 && valor2 >0){
    calcular.dividir(valor1,valor2);
    }
    else{
    alert("não dá para dividir por 0");
    }
}
else if(oqquer === 4){
    calcular.multiplicar(valor1,valor2);
}
else{
    alert("opção inválida")
}















