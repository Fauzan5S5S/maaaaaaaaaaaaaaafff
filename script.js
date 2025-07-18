
// Audio and overlay functionality
const audio = document.getElementById('linkmp3');
const overlay = document.querySelector('.overlay');
const bodyblur = document.getElementById('bodyblur');
const container = document.getElementById('container');
const envelope = document.getElementById('envelope');
const openButton = document.getElementById('open');

// Handle overlay click to start
overlay.addEventListener('click', function() {
    audio.play();
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    bodyblur.style.filter = 'blur(2px)';
    
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1000);
});

// Handle envelope opening
openButton.addEventListener('click', function() {
    envelope.classList.add('open');
    openButton.style.display = 'none';
    
    setTimeout(() => {
        envelope.style.display = 'none';
        container.style.display = 'block';
        startTextAnimation();
    }, 2000);
});

// Text animation functionality
let currentTextIndex = 0;
const messageElement = document.querySelector('.messageC');

function startTextAnimation() {
    if (currentTextIndex < teksAnimasi.length) {
        new TypeIt(messageElement, {
            strings: [teksAnimasi[currentTextIndex]],
            speed: 50,
            waitUntilVisible: true,
            afterComplete: function() {
                currentTextIndex++;
                setTimeout(() => {
                    if (currentTextIndex < teksAnimasi.length) {
                        messageElement.innerHTML = '';
                        startTextAnimation();
                    }
                }, 2000);
            }
        }).go();
    }
}

// Box animation
const boxes = document.querySelectorAll('.box div');
boxes.forEach((box, index) => {
    box.style.animationDelay = `${index * 0.1}s`;
});

// Heart animation
const hearts = document.querySelectorAll('.heart');
hearts.forEach((heart, index) => {
    heart.style.animationDelay = `${index * 0.5}s`;
});

// Sparkle animation
const sparkles = document.querySelectorAll('.sparkle');
sparkles.forEach((sparkle, index) => {
    sparkle.style.animationDelay = `${index * 0.3}s`;
});

// Sticker animation
const mainStiker = document.getElementById('main-stiker');
const stikerAlt = document.getElementById('stikerAlt1');

setInterval(() => {
    if (Math.random() > 0.7) {
        mainStiker.style.display = 'none';
        stikerAlt.style.display = 'block';
        
        setTimeout(() => {
            mainStiker.style.display = 'block';
            stikerAlt.style.display = 'none';
        }, 2000);
    }
}, 5000);
