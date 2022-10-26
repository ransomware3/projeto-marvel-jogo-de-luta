const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado')
        const idSelecionado = personagem.attributes.id.value
        const imagemJogador1 = document.getElementById('personagem-jogador-1')
        const nomeJogador1 = document.getElementById('nome-jogador-1')
        const nomeSelecionado = personagem.getAttribute('data-name')

        if(idSelecionado === 'ultron') return

        imagemJogador1.src = `src/images/${idSelecionado}.png`
        nomeJogador1.innerHTML = nomeSelecionado

        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado')

    })
})