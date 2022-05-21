const Redux = require('redux');
const { createStore, combineReducers } = Redux; 

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


const todosOsReducers = combineReducers({
    historicoDePedidosCashback: historicoDePedidosCashbackReducer,
    caixa: caixaReducer,
    contratos: contratosReducer
})

const store = createStore(todosOsReducers);

console.log(store.getState())

// Criar contrato para o José
const acaoContratoJose = criarContrato('José', 50);
store.dispatch(acaoContratoJose);
console.log(store.getState())


// Criar o contrato para a Maria
const acaoContratoMaria = criarContrato('Maria', 50);
store.dispatch(acaoContratoMaria);
console.log(store.getState());


// Pedido de cashback para a Maria de 10
const acaoCashbackMaria = solicitarCashback('Maria', 10);
store.dispatch(acaoCashbackMaria);
console.log(store.getState());

// Pedido de cashback para p José de 20
const acaoCashbackJose = solicitarCashback('José', 20);
store.dispatch(acaoCashbackJose);
console.log(store.getState());


// Cancelar contrato da Maria
const acaoCancelarContratoMaria = cancelarContrato('Maria');
store.dispatch(cancelarContrato('Maria'));
console.log(store.getState());
