
const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="images/aprovado.png" alt="aprovado">'
const imgReprovado = '<img src="images/reprovado.png" alt="reprovado">'
const atividades = []
const notas = []
const spanAprovado = `<span class='resultado aprovado'>Aprovado</span>`
const spanReprovado = `<span class='resultado reprovado'>Reprovado</span>`
const notaMinima = parseFloat(prompt('Digite a nota mínima para a atividade: '))

let linhas = ''

form.addEventListener('submit', (e) => {
    e.preventDefault()

    adicionaLinha()

    atualizaTabela()

    atualizaMediaFinal()
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const notaInputAtividade = document.getElementById('nota-atividade')

    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`Atividade ${inputNomeAtividade.value} já adicionada`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(notaInputAtividade.value))

        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${notaInputAtividade.value}</td>`
        linha += `<td>${notaInputAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`
        linha += '</tr>'

        linhas += linha
    }
    
    inputNomeAtividade.value = ''
    notaInputAtividade.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}
