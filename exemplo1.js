// | Exemplo 01 | Descrição |
// | `For/Break/Continue` | Utilize a estrutura de repetição for para imprimir no console conforme instruções:

// a) números de 1 a 50

for(let number = 1; number <= 50; number++){
    console.log(`Número ${number}`)
}

// b) quando chegar no número 25 interrompa a instrução e pare o loop

for(let number = 1; number <= 50; number++){
    console.log(number)
    if(number === 25){
        console.log('BREAK')
        break
    }
}

// c) quando chegar no número 10 pule a instrução

for(let number = 1; number <= 50; number++){
    if(number === 10){
        console.log('CONTINUE')
        continue 
    }
    console.log(number)
}