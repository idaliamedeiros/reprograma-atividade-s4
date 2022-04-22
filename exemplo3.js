// | Exemplo 03 | Descrição |

// | `Tabuada` | Faça um programa que dado um número, imprime no (console.log) 
// a tabuada do mesmo de 1 a 10. |
// 1. criar função tabuada
// 2. use for
// 3. let do calculo e let do resultado


function tabuada(num){
    for(let y = 1; y <= 10; y++){

        let calculo = num * y
        let resultado = console.log(`${num} x ${y} é igual a ${calculo}`)
        
    }
    return 'Ok'
}

console.log(tabuada(5))