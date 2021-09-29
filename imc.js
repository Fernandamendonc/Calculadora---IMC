
const calcular = document.getElementById('calcular')

function imc() {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorimc = (peso / (altura * altura)).toFixed(2)

        let classificacao = ''

        if(valorimc < 18.5){
            classificacao = 'Abaixo do peso.'
        }
        else if (valorimc < 25){
            classificacao =  'Com peso ideal. Parabéns!'
        }
        else if (valorimc < 30){
            classificacao = 'Levemente acima do peso.'
        }

        else if (valorimc < 35){
            classificacao = 'Com obesidade grau I.'
        }
        else if(valorimc < 40){
            classificacao = 'Com obesidade grau II.'
        }

        else{
            classificacao = 'Com obesidade grau III. CUIDADO!'
        }

        resultado.textContent = `${nome} Seu IMC é ${valorimc} e você está ${classificacao}`
    }
    else{
        resultado.textContent = 'Preencha todos os campos'
    }
}

calcular.addEventListener('click', imc)