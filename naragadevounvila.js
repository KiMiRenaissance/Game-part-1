document.addEventListener('DOMContentLoaded', () => {
    const kode1 = document.getElementById('kode1');
    const cekBtn = document.getElementById('cek-btn');
    const statusEl = document.getElementById('status');
    const berangkasEl = document.getElementById('berangkas');
    const pokoknya = document.getElementById('dialognya');
    
    const kodeBenar = 't';
    
    cekBtn.addEventListener('click', cekKode);
    
    function cekKode() {
        const kode = kode1.value;
        if (kode === kodeBenar) {
            statusEl.textContent = 'Kode sesuai!!';
            kode1.style.display = 'none';
            cekBtn.style.display = 'none';
            setTimeout(function() {
                pokoknya.innerHTML = 'kamu kembali padaku.';
            }, 2000);
            setTimeout(function() {
                statusEl.textContent = '';
            }, 3500);
            setTimeout(function() {
                pokoknya.innerHTML = 'Aku memerintahmu untuk mencari tahu kode-kode yang lain!';
            }, 5000);
            setTimeout(function() {
                pokoknya.innerHTML = 'Kamu akan menemukan kodenya lagi setelah kamu melewati permainan-permainan buatan si bodoh itu.';
            }, 10000);
            setTimeout(function() {
                berangkasEl.style.display = 'block';
            },15000);
        } else if (kode1.value.length < 1) {
            return alert('jawab dulu cantik.')
        } else {
            statusEl.textContent = 'Kode salah/gunakan huruf nonkapital, coba lagi!';
        }
      }
});

document.addEventListener('DOMContentLoaded', () => {
    const puzzleContainer = document.getElementById('puzzle-container');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const lanjutin = document.getElementById('nextGame');
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', null];
    const colors = {
        'A': 'red',
        'B': 'blue',
        'C': 'green',
        'D': 'yellow',
        'E': 'purple',
        'F': 'orange',
        'G': 'pink',
        'H': 'brown'
    };
    
    let puzzle = [...letters];
    let emptyIndex = puzzle.length - 1;

    
    function renderPuzzle() {
        puzzleContainer.innerHTML = '';
        puzzle.forEach((letter, index) => {
            const piece = document.createElement('div');
            piece.classList.add('puzzle-piece');
            if (letter === null) {
                piece.classList.add('empty');
            } else {
                piece.textContent = letter;
                piece.style.color = colors[letter];
                piece.addEventListener('click', () => movePiece(index));
            }
                puzzleContainer.appendChild(piece);
        });
    }
    
    
    function shuffle() {
        do {
            for (let i = puzzle.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [puzzle[i], puzzle[j]] = [puzzle[j], puzzle[i]];
            }
        } while (!isSolvable());
            emptyIndex = puzzle.indexOf(null);
            renderPuzzle();
            lanjutin.style.display = 'none';
    }

    
    function movePiece(index) {
        const targetIndex = emptyIndex;
        if (isValidMove(index, targetIndex)) {
            [puzzle[targetIndex], puzzle[index]] = [puzzle[index], puzzle[targetIndex]];
            emptyIndex = index;
            renderPuzzle();
            checkWin();
        }
    }

  
    function isValidMove(index, targetIndex) {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const targetRow = Math.floor(targetIndex / 3);
        const targetCol = targetIndex % 3;
        return (
            (Math.abs(row - targetRow) === 1 && col === targetCol) ||
            (Math.abs(col - targetCol) === 1 && row === targetRow)
        );
    }
    
    
    function isSolvable() {
        let inversions = 0;
        for (let i = 0; i < puzzle.length; i++) {
            if (puzzle[i] === null) continue;
        for (let j = i + 1; j < puzzle.length; j++) {
            if (puzzle[j] === null) continue;
            if (letters.indexOf(puzzle[i]) > letters.indexOf(puzzle[j])) inversions++;
            }
        }
        return inversions % 2 === 0;
    }

  
    function checkWin() {
        if (puzzle.every((letter, i) => letter === letters[i])) {
            const pokoknya = document.getElementById('dialognya');
            pokoknya.innerHTML = 'Udah, udah, sana gih!';
            nextGame.style.color = "red";
            setTimeout(function() {
                lanjutin.textContent = 'pergi ke permainan!';
            }, 1500);
            shuffleBtn.style.display = 'none';
            lanjutin.style.display = 'block';
        }
    }

    shuffleBtn.addEventListener('click', shuffle);
        shuffle();
});