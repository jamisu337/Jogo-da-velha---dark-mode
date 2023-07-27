const tabuleiro = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let jogador_atual = 'X';

function movimento(linha, coluna) {
    if (tabuleiro[linha][coluna] === '') {
        tabuleiro[linha][coluna] = jogador_atual; //vai receber X ou O
        document.getElementsByClassName('cell')[linha * 3 + coluna].innerText = jogador_atual;

        if (checkWin(jogador_atual)) {
                modal.style.display = 'flex';   
                document.getElementById('winner').innerHTML = jogador_atual;
        } else if (checkDraw()) {
                modal.style.display = 'flex';
                document.getElementById('marcador').innerHTML = "empate";
        } else {
            jogador_atual = jogador_atual === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin(player) {
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] === player && tabuleiro[i][1] === player && tabuleiro[i][2] === player) {
            return true;
        }
        if (tabuleiro[0][i] === player && tabuleiro[1][i] === player && tabuleiro[2][i] === player) {
            return true;
        }
    }
    if (tabuleiro[0][0] === player && tabuleiro[1][1] === player && tabuleiro[2][2] === player) {
        return true;
    }
    if (tabuleiro[0][2] === player && tabuleiro[1][1] === player && tabuleiro[2][0] === player) {
        return true;
    }
    return false;
}

function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabuleiro[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

function resettabuleiro() {
    tabuleiro.forEach(linha => linha.fill(''));
    jogador_atual = 'X';

    const cells = document.getElementsByClassName('cell');
    const modal = document.getElementById('modal');
    modal.style.display = 'none';

    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}

//dark mode

const toggle = document.querySelector('.toggle-input');

const fundo_cor = document.getElementById('fundo');
const tabuleiro_cor = document.getElementById('tabuleiro');
const tela_vitoria_cor = document.getElementById('tela_vitoria');

let corAtual = 1;

const fundo_cores = ['var(--bg-escuro)', 'var(--bg-claro)'];
const tabuleiro_cores = ['var(--escuro)', 'var(--claro)'];
const tela_vitoria_cores = ['var(--roxo-modal)', 'var(--claro)'];

toggle.addEventListener('change', function () {
    localStorage.setItem('toggleState', toggle.checked);

    corAtual = 1 - corAtual;

    fundo_cor.style.backgroundColor = fundo_cores[corAtual];
    tabuleiro_cor.style.backgroundColor = tabuleiro_cores[corAtual];
    tela_vitoria_cor.style.backgroundColor = tela_vitoria_cores[corAtual];
});

//dark mode
