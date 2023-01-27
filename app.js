/********************************************************************************
 * Objetivo: Calcular a média de 4 notas escolares
 * Autor: João Victor Da Silva
 * Data: 27/01/2023
 * Versão: 1.0
 *********************************************************************************/


//Import da biblioteca readline
var readline = require('readline');

//Criar o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

/*
*Criação de váriveis
    *var - cria uma espaço em memória de escopo global para o projeto, 
      *ou seja essa váriavel poderá ser utiliza em qualquer parte do arquivo ( várias funções)

    *let - cria uma espaço em memória de escopo local para o projeto, 
      *ou seja essa váriavel poderá ser utiliza em dentro da função que foi criada. 

    *const - cria uma espaço em memória de escopo local ou global para o projeto, 
      *ou seja essa constante poderá ser utiliza em qualquer parte do projeto e nunca sofrerá aletração. 

*/

//Função de callBack para entrar o nome do aluno
entradaDados.question('digite seu nome : \n', function(nome){
    //Recebe o valor digitado pelo teclado
    let nomeAluno = nome;

    //Função de CallBack para entrar a nota1
    entradaDados.question('Digite a nota1 \n', function(nota1){
        let valor1 = nota1;

        //Função de CallBack para entrar a nota2
        entradaDados.question('Digite a nota 2 \n', function(nota2){
            let valor2 = nota2;

            //Função de CallBack para entrar a nota3
            entradaDados.question('Digite a nota3 \n', function(nota3){
                let valor3 = nota3;

                //Função de CallBack para entrar a nota4
                entradaDados.question('Digite a nota4 \n', function(nota4){
                    let valor4 = nota4;
                    let media;

                    /**
                        * Conversão de tipos de dados
                            *parseInt() ou Number.parseInt() - converte uma string em inteiro
                            *parseFloat() ou Number.parseFloat()  - converte uma string em real
                            Number() - converte uma string para numero, conforme a entrada do valor o Js define se será iinteiro ou real.

                        Operadores de comparação
                            == (verifica a igualdade entre conteúdos)
                            != (verifica a diferença entre conteúdos)
                            === ( verifica a igualdade entre conteúdos e tipos de dados)
                            !== ( verifica a igualdade entre o conteudos e igualdade de tipo de dados)
                            ==! (verifica a igualdade entre o conteudos e diferença de tipo de dados)
                                    ex:
                                        0 === 0   V
                                        0 === '0' F
                                        '0' == 0  F
                                        0 === 0   V
                                        0 == 0    V
                                        0 == 0    V
                                        '0' == 0  V
                            < (menor)
                            > (maior)
                            <= (menor ou igual)
                            => (maior ou igual)

                        Operadores lógicos 

                        e      && And
                        ou     ||  or
                        negação | not

                     */
                    //Avaliação para entrada vazia
                    if(valor1 == '' || valor2  == '' || valor3  == '' || valor4  == '' ){
                        console.log('Erro vc deixou alguma caixa vazia.')
                    }else if (isNaN(valor1) || isNaN(valor2) ||isNaN(valor3) ||isNaN(valor4) ){
                        console.log('Erro: não pode utilizar texto')
                    }else{
                        media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4))/4;

                    console.log('Sua média é: ', media);
                    }
                })
            })
        })
    })
})