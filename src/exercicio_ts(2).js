"use strict";
// Função para saudação
function saudacao(nomeCompleto) {
    const nome = nomeCompleto.split(' ');
    const primeiroNome = nome[0];
    console.log(`Olá ${primeiroNome}`);
}
// Constantes para receber nome e colocar o nome na função de saudação 
const nomeCompleto = 'Elias Gomes De Oliveira Júnior';
const saudacaoMensagem = saudacao(nomeCompleto);
