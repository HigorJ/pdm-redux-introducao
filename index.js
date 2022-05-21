// Arrow Function
// Nome: criarContrato
// Recebe: Nome e Valor
// Devolve um JSON com type = CRIAR_CONTRATO e payload igual a um JSON com nome e valor

const criarContrato = (nome, valor) => {
    return {
        type: 'CRIAR_CONTRATO',
        payload: {
            nome,
            valor
        }
    }
}

// Function regular
// cancelarContrato
// recebe: nome
// devolve: um json com type = cancelar_contrato e payload = json com nome

function cancelarContrato(nome) {
    return {
        type: 'CANCELAR_CONTRATO',
        payload: {
            nome
        }
    }
}




// Função criadora de ação para solicitações de cashback
const solicitarCashback = (nome, valor) => {
    return {
        type: 'SOLICITAR_CASHBACK',
        payload: {
            nome,
            valor
        }
    }
}



// Arrow function
// historicoDePedidosCashbackReducer
// Recebe uma fatia de estado sobre a qual operar (uma lista chamada historicoDePedidosCashback. Por padrão, ela é uma lista vazia)
// Recebe uma ação
// devolve uma lista que contém todos os pedidos da lista recebida e o pedido descrito no payload da ação
// DETALHE: somente operar no estado se o type for apropriado
// DETALHE: Obrigatório usar o spread

const historicoDePedidosCashbackReducer = (historicoDePedidosCashback = [], acao) => {
    if(acao.type === 'SOLICITAR_CASHBACK') {
        return [...historicoDePedidosCashback, acao.payload];
    }

    return historicoDePedidosCashback;
}


// Implementar o reducer que manipula o caixa
// criar contrato e pedir cashback
// recebe um numero
// o caixa começa zerado

const caixaReducer = (valorEmCaixa = 0, acao) => {
    if(acao.type === 'CRIAR_CONTRATO') {
        return valorEmCaixa + acao.payload.valor;
    } else if(acao.type === 'SOLICITAR_CASHBACK') {
        return valorEmCaixa - acao.payload.valor;
    }

    return valorEmCaixa;
}


// implementar o reducer que lida com a lista de contratos
// ele pode criar contrato e cancelar contratos

const contratosReducer = (contratos = [], acao) => {
    if(acao.type === 'CRIAR_CONTRATO') {
        return [...contratos, acao.payload];
    } else if(acao.type === 'CANCELAR_CONTRATO') {
        return contratos.filter(contrato => contrato.nome !== acao.payload.nome);
    }

    return contratos;
}
