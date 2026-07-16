// DOM Elements
const mainMenu = document.getElementById('main-menu');
const gameContainer = document.getElementById('game-container');
const dynamicGameArea = document.getElementById('dynamic-game-area');
const scoreElement = document.getElementById('score');
const winOverlay = document.getElementById('win-overlay');
const globalScoreElement = document.getElementById('global-score');
const gameTitle = document.getElementById('current-game-title');
const gameDesc = document.getElementById('current-game-desc');

// Game State
let globalScore = 120;
let score = 0;
let currentGame = '';
let gameInterval = null;

// Game Configs
const GAMES = {
    'laundry': { title: 'Çamaşır Macerası', desc: 'Çamaşırları doğru sepetlere sürükle!' },
    'rhythm': { title: 'Ritim Gezegeni', desc: 'Nota dairenin içindeyken butona bas!' },
    'archery': { title: 'Okçu Kahraman', desc: 'Hedef tam ortadayken oku fırlat!' },
    'room': { title: 'Gizemli Oda', desc: 'Odadaki eşyalara dikkatlice bak...' },
    'word': { title: 'Kelime Avcısı', desc: 'Harfleri sırasıyla seçerek kelimeyi bul.' },
    'emotion': { title: 'Duygu Aynası', desc: 'Bu yüz ifadesi hangi duyguyu anlatıyor?' },
    'emotionchain': { title: 'Hislerin Yolu', desc: 'Bu durumda ne hissedersin?' },
    'socialstatus': { title: 'Durum Dedektifi', desc: 'Resimdeki kişi sence nasıl hissediyor?' },
    'socialblunder': { title: 'Doğrusu Ne?', desc: 'Bu durumda en doğru davranış sence nedir?' }
};

// Navigation
function startGame(gameId) {
    currentGame = gameId;
    mainMenu.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    
    gameTitle.textContent = GAMES[gameId].title;
    gameDesc.textContent = GAMES[gameId].desc;
    
    score = 0;
    scoreElement.textContent = score;
    dynamicGameArea.innerHTML = '';
    
    // Temizle
    if (gameInterval) clearInterval(gameInterval);

    // Başlat
    switch(gameId) {
        case 'laundry': initLaundryGame(); break;
        case 'rhythm': initRhythmGame(); break;
        case 'archery': initArcheryGame(); break;
        case 'room': initRoomRecallGame(); break;
        case 'word': initWordGame(); break;
        case 'emotion': initQuizGame('emotion'); break;
        case 'emotionchain': initQuizGame('emotionchain'); break;
        case 'socialstatus': initQuizGame('socialstatus'); break;
        case 'socialblunder': initQuizGame('socialblunder'); break;
    }
}

function backToMenu() {
    if (gameInterval) clearInterval(gameInterval);
    gameContainer.classList.add('hidden');
    winOverlay.classList.add('hidden');
    mainMenu.classList.remove('hidden');
    
    // Global skoru güncelle
    globalScoreElement.textContent = globalScore;
}

function showWinScreen(message = "Harika bir iş çıkardın!") {
    if (gameInterval) clearInterval(gameInterval);
    document.getElementById('win-message').textContent = message;
    winOverlay.classList.remove('hidden');
    globalScore += score;
    
    if (window.confetti) {
        var duration = 3 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

        var interval = setInterval(function() {
            var timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            var particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
        }, 250);
    }
}

/* =========================================
   1. LAUNDRY GAME
========================================= */
let laundryItems = 0;
let matchedLaundry = 0;
let draggedItem = null;

function initLaundryGame() {
    const html = `
        <div class="clothes-container" id="clothes-container"></div>
        <div class="baskets-container">
            <div class="basket" id="basket-white" data-type="white">
                <div class="basket-icon">🧺</div>
                <div class="basket-label">Beyazlar</div>
            </div>
            <div class="basket" id="basket-color" data-type="color">
                <div class="basket-icon">🧺</div>
                <div class="basket-label">Renkliler</div>
            </div>
        </div>
    `;
    dynamicGameArea.innerHTML = html;
    
    const clothesContainer = document.getElementById('clothes-container');
    const baskets = document.querySelectorAll('.basket');
    
    const clothesData = [
        { type: 'white', emoji: '🥋' }, { type: 'color', emoji: '👕' },
        { type: 'white', emoji: '🧦' }, { type: 'color', emoji: '👗' },
        { type: 'color', emoji: '🩳' }, { type: 'white', emoji: '🥼' }
    ].sort(() => Math.random() - 0.5);
    
    laundryItems = clothesData.length;
    matchedLaundry = 0;

    clothesData.forEach(cloth => {
        const clothEl = document.createElement('div');
        clothEl.classList.add('cloth-item');
        clothEl.textContent = cloth.emoji;
        clothEl.dataset.type = cloth.type;
        clothEl.draggable = true;
        
        clothEl.addEventListener('dragstart', function(e) {
            draggedItem = this;
            setTimeout(() => this.classList.add('dragging'), 0);
            e.dataTransfer.setData('text/plain', this.dataset.type);
        });
        clothEl.addEventListener('dragend', function() {
            this.classList.remove('dragging');
            draggedItem = null;
            baskets.forEach(b => b.classList.remove('drag-over'));
        });

        // Touch events
        clothEl.addEventListener('touchstart', function(e) {
            draggedItem = this;
            this.style.position = 'fixed';
            this.style.zIndex = '1000';
            this.style.left = `${e.touches[0].clientX - 30}px`;
            this.style.top = `${e.touches[0].clientY - 30}px`;
        }, {passive: false});
        
        clothEl.addEventListener('touchmove', function(e) {
            e.preventDefault();
            if(!draggedItem) return;
            draggedItem.style.left = `${e.touches[0].clientX - 30}px`;
            draggedItem.style.top = `${e.touches[0].clientY - 30}px`;
        }, {passive: false});
        
        clothEl.addEventListener('touchend', function(e) {
            if(!draggedItem) return;
            draggedItem.style.position = 'relative';
            draggedItem.style.left = 'auto';
            draggedItem.style.top = 'auto';
            
            const changedTouch = e.changedTouches[0];
            const dropTarget = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY);
            const basket = dropTarget ? dropTarget.closest('.basket') : null;

            if (basket) {
                if (draggedItem.dataset.type === basket.dataset.type) {
                    handleCorrectLaundry(basket, draggedItem);
                } else {
                    handleWrongLaundry(basket);
                }
            }
            draggedItem = null;
        });

        clothesContainer.appendChild(clothEl);
    });

    baskets.forEach(basket => {
        basket.addEventListener('dragover', e => { e.preventDefault(); basket.classList.add('drag-over'); });
        basket.addEventListener('dragleave', () => basket.classList.remove('drag-over'));
        basket.addEventListener('drop', e => {
            e.preventDefault();
            basket.classList.remove('drag-over');
            if (draggedItem && draggedItem.dataset.type === basket.dataset.type) {
                handleCorrectLaundry(basket, draggedItem);
            } else {
                handleWrongLaundry(basket);
            }
        });
    });
}

function handleCorrectLaundry(basket, item) {
    basket.classList.add('correct');
    setTimeout(() => basket.classList.remove('correct'), 500);
    item.style.transform = 'scale(0)';
    setTimeout(() => {
        item.remove();
        score += 10;
        scoreElement.textContent = score;
        matchedLaundry++;
        if (matchedLaundry === laundryItems) showWinScreen();
    }, 300);
}

function handleWrongLaundry(basket) {
    basket.classList.add('wrong');
    setTimeout(() => basket.classList.remove('wrong'), 500);
    if(score > 0) score -= 5;
    scoreElement.textContent = score;
}

/* =========================================
   2. RHYTHM GAME
========================================= */
function initRhythmGame() {
    dynamicGameArea.innerHTML = `
        <div class="rhythm-container">
            <div class="hit-zone" id="hit-zone"></div>
            <div class="note hidden" id="note"></div>
        </div>
        <button class="primary-btn rhythm-btn" id="tap-btn">Yakala!</button>
    `;

    const note = document.getElementById('note');
    const tapBtn = document.getElementById('tap-btn');
    let noteTop = 0;
    let playing = true;
    let rhythmScore = 0;

    function dropNote() {
        if(!playing) return;
        noteTop = 0;
        note.classList.remove('hidden');
        
        if (gameInterval) clearInterval(gameInterval);
        gameInterval = setInterval(() => {
            noteTop += 5;
            note.style.top = noteTop + 'px';
            if(noteTop > 380) { // Missed
                dropNote();
            }
        }, 30);
    }

    tapBtn.addEventListener('click', () => {
        if(!playing) return;
        // Hit zone is between 320 and 380
        if(noteTop > 310 && noteTop < 390) {
            score += 10;
            rhythmScore++;
            scoreElement.textContent = score;
            note.style.background = 'var(--success)';
            setTimeout(() => {
                note.style.background = 'var(--primary-light)';
                dropNote();
            }, 200);
            
            if(rhythmScore >= 5) {
                playing = false;
                clearInterval(gameInterval);
                showWinScreen("Harika ritim duygusu!");
            }
        } else {
            if(score > 0) score -= 5;
            scoreElement.textContent = score;
        }
    });

    setTimeout(dropNote, 1000);
}

/* =========================================
   3. ARCHERY GAME
========================================= */
function initArcheryGame() {
    dynamicGameArea.innerHTML = `
        <div class="archery-container">
            <div class="target-area" id="archery-target"></div>
            <div class="bow-area">🏹</div>
            <div class="arrow hidden" id="archery-arrow">⬆️</div>
        </div>
        <button class="primary-btn rhythm-btn" id="shoot-btn">Fırlat!</button>
    `;

    const target = document.getElementById('archery-target');
    const arrow = document.getElementById('archery-arrow');
    const shootBtn = document.getElementById('shoot-btn');
    
    let targetLeft = 0;
    let targetDir = 1; // 1 right, -1 left
    let isShooting = false;
    let archScore = 0;

    gameInterval = setInterval(() => {
        targetLeft += targetDir * 5;
        if(targetLeft > window.innerWidth - 150 || targetLeft > 520) targetDir = -1;
        if(targetLeft < 0) targetDir = 1;
        target.style.left = targetLeft + 'px';
    }, 20);

    shootBtn.addEventListener('click', () => {
        if(isShooting) return;
        isShooting = true;
        arrow.classList.remove('hidden');
        let arrowBottom = 70;
        
        let shootInterval = setInterval(() => {
            arrowBottom += 10;
            arrow.style.bottom = arrowBottom + 'px';
            
            if(arrowBottom >= 200) {
                clearInterval(shootInterval);
                const containerWidth = document.querySelector('.archery-container').offsetWidth;
                const center = containerWidth / 2;
                
                // Check if targetLeft is near center
                if(Math.abs(targetLeft + 40 - center) < 50) {
                    score += 10;
                    archScore++;
                    scoreElement.textContent = score;
                    target.style.background = 'var(--success)';
                    setTimeout(() => {
                        target.style.background = '';
                        if(archScore >= 3) {
                            clearInterval(gameInterval);
                            showWinScreen("Tam on ikiden!");
                        }
                    }, 500);
                } else {
                    if(score>0) score -= 5;
                    scoreElement.textContent = score;
                }
                
                arrow.classList.add('hidden');
                arrow.style.bottom = '70px';
                isShooting = false;
            }
        }, 20);
    });
}

/* =========================================
   4. ROOM RECALL GAME
========================================= */
function initRoomRecallGame() {
    const allObjects = ['🚗', '🧸', '📚', '⚽', '🎒', '🖍️', '🍎', '⌚', '🎸', '🚲'];
    const selectedObjects = [...allObjects].sort(() => 0.5 - Math.random()).slice(0, 5);
    let selectedCount = 0;
    
    dynamicGameArea.innerHTML = `
        <div class="question-box" id="room-msg">Odadaki eşyalara dikkatle bak... (5 Saniye)</div>
        <div class="room-objects" id="room-objs"></div>
    `;
    
    const objContainer = document.getElementById('room-objs');
    const msgBox = document.getElementById('room-msg');
    
    // Show objects
    selectedObjects.forEach(obj => {
        objContainer.innerHTML += `<div class="room-obj">${obj}</div>`;
    });

    setTimeout(() => {
        msgBox.textContent = "Hangi eşyaları görmüştün? Seç bakalım.";
        objContainer.innerHTML = '';
        
        // Show 8 objects (5 correct + 3 wrong)
        const wrongObjects = allObjects.filter(x => !selectedObjects.includes(x)).slice(0, 3);
        const displayObjects = [...selectedObjects, ...wrongObjects].sort(() => 0.5 - Math.random());
        
        displayObjects.forEach(obj => {
            const el = document.createElement('div');
            el.className = 'room-obj selectable';
            el.textContent = obj;
            el.onclick = function() {
                if(this.classList.contains('selected')) return;
                this.classList.add('selected');
                
                if(selectedObjects.includes(obj)) {
                    score += 10;
                    scoreElement.textContent = score;
                    selectedCount++;
                    if(selectedCount === 5) showWinScreen("Hafızan çok güçlü!");
                } else {
                    this.style.borderColor = 'var(--secondary)';
                    this.style.background = 'rgba(236, 72, 153, 0.2)';
                    if(score>0) score -= 5;
                    scoreElement.textContent = score;
                }
            };
            objContainer.appendChild(el);
        });
    }, 5000);
}

/* =========================================
   5. WORD GAME
========================================= */
function initWordGame() {
    const targetWord = "ELMA";
    let currentLetters = [];
    
    dynamicGameArea.innerHTML = `
        <div class="word-slots" id="word-slots"></div>
        <div class="letters-pool" id="letters-pool"></div>
    `;
    
    const slotsEl = document.getElementById('word-slots');
    const poolEl = document.getElementById('letters-pool');
    
    // Create slots
    for(let i=0; i<targetWord.length; i++) {
        slotsEl.innerHTML += `<div class="word-slot" id="slot-${i}"></div>`;
    }
    
    // Create shuffled letters
    const letters = targetWord.split('').sort(() => 0.5 - Math.random());
    
    letters.forEach((letter, i) => {
        const btn = document.createElement('button');
        btn.className = 'letter-btn';
        btn.textContent = letter;
        btn.onclick = function() {
            if(this.style.visibility === 'hidden') return;
            
            // Check if correct letter for next slot
            const expectedLetter = targetWord[currentLetters.length];
            if(letter === expectedLetter) {
                document.getElementById(`slot-${currentLetters.length}`).textContent = letter;
                currentLetters.push(letter);
                this.style.visibility = 'hidden';
                score += 10;
                scoreElement.textContent = score;
                
                if(currentLetters.length === targetWord.length) {
                    showWinScreen("Kelimeyi buldun!");
                }
            } else {
                if(score>0) score -= 5;
                scoreElement.textContent = score;
                this.style.background = 'var(--secondary)';
                setTimeout(() => this.style.background = '', 300);
            }
        };
        poolEl.appendChild(btn);
    });
}

/* =========================================
   6-9. QUIZ/SCENARIO GAMES
========================================= */
const QUIZ_DATA = {
    'emotion': {
        q: "Bu yüz ifadesi sence ne anlatıyor? 😢",
        opts: [
            { text: "Mutlu", correct: false },
            { text: "Üzgün", correct: true },
            { text: "Kızgın", correct: false }
        ]
    },
    'emotionchain': {
        q: "Arkadaşın en sevdiğin oyuncakla oynamana izin verdi. Ne hissedersin?",
        opts: [
            { text: "Mutlu olurum", correct: true },
            { text: "Kızarım", correct: false },
            { text: "Korkarım", correct: false }
        ]
    },
    'socialstatus': {
        q: "Ali teneffüste tek başına köşede oturuyor ve yere bakıyor. Sence nasıl hissediyor?",
        opts: [
            { text: "Heyecanlı", correct: false },
            { text: "Yalnız ve Üzgün", correct: true },
            { text: "Neşeli", correct: false }
        ]
    },
    'socialblunder': {
        q: "Sınıfa girdin ve öğretmen ders anlatmaya başlamış. Ne yapmalısın?",
        opts: [
            { text: "Sessizce özür dileyip yerime geçerim.", correct: true },
            { text: "Bağırarak 'Günaydın!' derim.", correct: false },
            { text: "Kapıyı çarpıp çıkarım.", correct: false }
        ]
    }
};

function initQuizGame(type) {
    const data = QUIZ_DATA[type];
    
    let optsHtml = '';
    data.opts.forEach((opt, idx) => {
        optsHtml += `<button class="option-btn" onclick="handleQuizAnswer(this, ${opt.correct})">${opt.text}</button>`;
    });
    
    dynamicGameArea.innerHTML = `
        <div class="quiz-container">
            <div class="question-box">${data.q}</div>
            <div class="options-grid">
                ${optsHtml}
            </div>
        </div>
    `;
}

function handleQuizAnswer(btn, isCorrect) {
    if (btn.parentElement.classList.contains('answered')) return;
    btn.parentElement.classList.add('answered');
    
    if (isCorrect) {
        btn.classList.add('correct');
        score += 20;
        scoreElement.textContent = score;
        setTimeout(() => showWinScreen("Doğru bildin! Harika empati kuruyorsun."), 1000);
    } else {
        btn.classList.add('wrong');
        if(score>0) score -= 5;
        scoreElement.textContent = score;
        
        // Highlight correct
        Array.from(btn.parentElement.children).forEach(b => {
            if(b.getAttribute('onclick').includes('true')) {
                b.classList.add('correct');
            }
        });
        
        setTimeout(() => showWinScreen("Bir dahaki sefere daha iyisini yapacaksın!"), 2000);
    }
}
