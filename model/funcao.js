
const pais = require('./estados_cidades.js')

const getListaDeEstados =  function() {

    let estados = pais.estadosCidades.estados
    let siglas = {}
    let uf = []

    estados.forEach(function(estados){
        uf.push(estados.sigla)
    })

    siglas.uf = uf
    siglas.quantidade = pais.estadosCidades.estados.length
    return siglas

}

const getDadosEstado = function (siglas) {

    let estados = pais.estadosCidades.estados
    let uf = siglas

    let base = {}

    estados.forEach(function(estado){
        if (estado.sigla.includes(uf)){
            base.uf = estado.sigla
            base.descricao = estado.nome
            base.capital = estado.capital
            base.regiao = estado.regiao
        }
    })

    return base
}

const getCapitalEstado = function (siglas) {

    let estados = pais.estadosCidades.estados
    let uf = siglas

    let Capital = {}


    estados.forEach(function(estado){
        if (estado.sigla.includes(uf)){
            Capital.uf = estado.sigla
            Capital.descricao = estado.nome
            Capital.capital = estado.capital
        }
    })

    return capital

}

const getEstadosRegiao = function (regiaoEstado) {

    let estados = pais.estadosCidades.estados
    let regiao = regiaoEstado

    let baseRegiao = {}

    let estado = []
    
    estados.forEach((estado) => {
        if (estado.regiao.includes(regiao)){

            let estado = {
                regiao: estado.sigla,
                descricao: estado.nome
            }

            est.push(estado)

        }
    });

    baseRegiao.regiao = regiao
    baseRegiao.estados = estado

    return baseRegiao

}

const getCapitalPais = function () {

    let estados = pais.estadosCidades.estados

    let capitais = {}
    
    let baseCapitais = []
    
    estados.forEach((estado) => {
        if (estado.capital_pais  != undefined){
            
            let baseCapital = {
                capital_atual: estado.capital_pais.capital,
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao,
                capital_pais_ano_inicio: estado.capital_pais.ano_inicio,
                capital_pais_ano_termino: estado.capital_pais.ano_fim
            }
            
            baseCapitais.push(baseCapital)

        }

    })
    
    capitais.capitais = baseCapitais
    return capitais
}

const getCidades = function (siglas) {

    let estado = pais.estadosCidades.estados

    let uf = siglas

    let estados = {}
    let cidades = []

    estados.forEach((estado) => {
        if(estado.sigla.includes(uf)){
            estados.uf = estado.sigla
            estados.descricao = estado.nome
            estados.quantidade_cidades = estado.cidades.length

            estado.cidades.forEach((cidade) => {
                cidades.push(cidade.nome)
            })
        }
    })

    estadoCidades.cidades = cidades

    console.log(estados)

    return estados

}



module.exports = {
    getCapitalEstado,
    getCapitalPais,
    getCidades,
    getDadosEstado,
    getEstadosRegiao,
    getListaDeEstados
}