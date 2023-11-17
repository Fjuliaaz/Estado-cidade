/*********************************************************************
 * Objetivo: criar uma API para responder dados de estados e cidades
 * Data: 10/11/2022
 * Autor: Julia Fonseca
 * Versão: 1.0
 ***********************************************************************/

/** Instalação da dependencias para criação da APi
 *    Express  - npm install express --save
 *         dependencia do mode para auxiliar na criação da API 
 * 
 *    Cors - npm install cors --save
 *         dependencia para manipular recursoso de acesso, permissões, etc da API (HEADER)
 * 
 *    body-parser - npm install body-parser --save
 *         dependencia para auxiliar na entrada de dados na API
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Cria um objeto app tendo como referencia a classe do express
const app =  express();

// função para configurar as permissões do cors 
app.use((request,response, next) =>{

    //define quem pode fazer requisições na API, o * libera para todos e o IP restrige o acesso
response.header('Access-Control-Allow-Origin', '*')
    // configura os metodos que poderão ser utilizados na API (GET, POST, PUT e DELETE)
response.header('Access-Control-Allow-Methods', 'GET')

app.use(cors());

next()
})

//EndPoints - listar a sigla de todos os estados 

app.get('/estados/sigla', cors(), async function(request,response,next){

    let controleListaEstados = require('./model/funcao');
    let estados = controleListaEstados.getListaDeEstados();

    response.json(estados);
    response.status(200);
})

//Executa a API e fica aguardando requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições')
})


// request é quando a API recebe dados 
// response é quando a API devolve dados 