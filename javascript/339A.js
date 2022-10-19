var s = readline() //receber a string  (ou prompt)

var num = s.split("+") //pega uma string e devolve array utilizando um caracter como referencia para separar os elementos
num = num.sort() //ordenar decrescente

var soma = num[0]   //já seta o primeiro elemento do array 'num' na string
for (var i=1;i<num.length;i++){ //faz o laço de repetição a partir do segundo elemento do array 'num'
    soma = soma + "+" + num[i]    //concatenação
}
print(soma) //(ou console.log)
