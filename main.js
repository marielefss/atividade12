let personagem = {
    nome: 'Valente',
    vida: 100,
    forca: 10,
    recursos: 50
};

let rodada = 1;

function start() {
    console.log(`Bem-vindo à Aventura Heroica, ${personagem.nome}!`);
    console.log(`Sua vida: ${personagem.vida}, Força: ${personagem.forca}, Recursos: ${personagem.recursos}`);
    jogar();
}

function jogar() {
    if (personagem.vida <= 0) {
        console.log("Você foi derrotado. Fim de jogo!");
        return;
    }

    console.log(`Rodada ${rodada}: Prepare-se para o desafio!`);

    let desafio = Math.floor(Math.random() * 3); // 0, 1, ou 2

    switch (desafio) {
        case 0:
            console.log("Você encontrou um inimigo feroz!");
            let dano = Math.floor(Math.random() * 20);
            personagem.vida -= dano;
            console.log(`Você perdeu ${dano} de vida. Vida restante: ${personagem.vida}`);
            break;
        case 1:
            console.log("Você encontrou um tesouro!");
            let ganho = Math.floor(Math.random() * 30);
            personagem.recursos += ganho;
            console.log(`Você ganhou ${ganho} recursos. Total de recursos: ${personagem.recursos}`);
            break;
        case 2:
            console.log("Você se recuperou!");
            let cura = Math.floor(Math.random() * 15);
            personagem.vida += cura;
            console.log(`Você recuperou ${cura} de vida. Vida atual: ${personagem.vida}`);
            break;
    }

    rodada++;
    jogar();
}
