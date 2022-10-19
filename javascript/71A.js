var a = readline() //qtd de palavras  (ou prompt)
var b = parseInt(a) //converter string para int

for (var i=0;i<b;i++) { //laço de repetição, enquanto a condicao for vdd
    var palavra = prompt("digite a palavra:")
    var carac = palavra.length //int pega o tamanho de caracteres da palavra
    var abrev 
    if (carac >10) {
        abrev = palavra[0]+(carac-2).toString()+palavra[carac-1]  //.toString() - converte num para string 
        console.log(abrev)
    } else {
        print(palavra)
    }
}