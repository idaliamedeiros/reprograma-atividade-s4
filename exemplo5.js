// | Exemplo 05 | Descrição |

// | `Fatorial` | Crie uma função que irá receber um número e retornar o fatorial dele.
// por exemplo: 3! = 3 * 2 * 1 // 6 |

function fatorial(x){
    let fatorial = x - 1
    let resultado = x * fatorial

    while(fatorial != 1){
        fatorial -= 1
        resultado *= fatorial
    } 
    return resultado
}

console.log(fatorial(3))