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
            nome,git 
            valor
        }
    }
}

