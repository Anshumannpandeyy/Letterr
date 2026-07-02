/* ============================================
   ROMANTIC WEBSITE - JAVASCRIPT
   ============================================ */

// ============================================
// MUSIC FUNCTIONALITY
// ============================================

const musicBtn = document.getElementById('musicBtn');
const backgroundMusic = document.getElementById('backgroundMusic');
let isMusicPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicBtn.classList.remove('playing');
        isMusicPlaying = false;
    } else {
        backgroundMusic.play().catch(error => {
            console.log('Music playback failed:', error);
            alert('Unable to play music. Please ensure music.mp3 is in the same directory.');
        });
        musicBtn.classList.add('playing');
        isMusicPlaying = true;
    }
});

// ============================================
// LIVE COUNTER - SECONDS SINCE 1 JANUARY 2025
// ============================================

const counterDisplay = document.getElementById('counter');

function updateCounter() {
    const startDate = new Date('2025-01-01T00:00:00').getTime();
    const now = new Date().getTime();
    const secondsElapsed = Math.floor((now - startDate) / 1000);
    counterDisplay.textContent = secondsElapsed.toLocaleString();
}

// Update counter every second
updateCounter();
setInterval(updateCounter, 1000);

// ============================================
// FORGIVENESS METER
// ============================================

const meterFill = document.getElementById('meterFill');
const meterPercentage = document.getElementById('meterPercentage');
const meterStatus = document.getElementById('meterStatus');

function initializeForgivenessMeter() {
    const statusMessages = [
        'Calibrating love frequency...',
        'Scanning quantum affection levels...',
        'Processing emotional bandwidth...',
        'Analyzing forgiveness potential...',
        'Syncing heart frequencies...',
    ];

    // Random status from list
    meterStatus.textContent = statusMessages[Math.floor(Math.random() * statusMessages.length)];

    // Simulate loading
    setTimeout(() => {
        const randomPercentage = Math.floor(Math.random() * (95 - 85 + 1)) + 85;
        
        // Animate the meter fill
        let currentPercentage = 0;
        const increment = randomPercentage / 30;
        
        const meterInterval = setInterval(() => {
            currentPercentage += increment;
            if (currentPercentage >= randomPercentage) {
                currentPercentage = randomPercentage;
                clearInterval(meterInterval);
                meterStatus.textContent = `Love detected at ${randomPercentage}% capacity. System optimized. 💕`;
            }
            
            meterFill.style.width = currentPercentage + '%';
            meterPercentage.textContent = Math.floor(currentPercentage) + '%';
        }, 50);
    }, 2000);
}

// ============================================
// FLOATING PETALS ANIMATION
// ============================================

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.innerHTML = '🌸';
    petal.style.left = Math.random() * window.innerWidth + 'px';
    petal.style.animation = `float ${6 + Math.random() * 4}s linear infinite`;
    petal.style.fontSize = (0.5 + Math.random() * 1) + 'rem';
    petal.style.opacity = Math.random() * 0.6 + 0.3;
    
    document.querySelector('.petals-container').appendChild(petal);
    
    setTimeout(() => petal.remove(), 10000);
}

// Create petals periodically
setInterval(createPetal, 300);

// ============================================
// FLOATING HEARTS ANIMATION
// ============================================

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animation = `float ${8 + Math.random() * 4}s linear infinite`;
    heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    
    document.querySelector('.hearts-container').appendChild(heart);
    
    setTimeout(() => heart.remove(), 12000);
}

// Create hearts periodically
setInterval(createHeart, 800);

// ============================================
// SHARE FUNCTIONALITY
// ============================================

const shareBtn = document.getElementById('shareBtn');

shareBtn.addEventListener('click', () => {
    const shareText = `A Message For You 💕\n\nCheck out this romantic letter from Anshuman to Anshika.\n\n"In every version of this life, in every universe that exists — I would still choose you."\n\nVisit the letter: `;
    const shareUrl = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: 'A Message For You 💕',
            text: shareText,
            url: shareUrl,
        }).catch(err => console.log('Share failed:', err));
    } else {
        // Fallback: Copy to clipboard
        const fullShareText = shareText + shareUrl;
        navigator.clipboard.writeText(fullShareText).then(() => {
            alert('Link copied to clipboard! Share it with your loved one. 💕');
        }).catch(err => console.error('Failed to copy:', err));
    }
});

// ============================================
// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all memory cards
document.querySelectorAll('.memory-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

// ============================================
// METER INITIALIZATION WHEN VISIBLE
// ============================================

const meterSection = document.getElementById('forgiveness');
let meterInitialized = false;

const meterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !meterInitialized) {
            initializeForgivenessMeter();
            meterInitialized = true;
            meterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

meterObserver.observe(meterSection);

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize body opacity
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-in';
setTimeout(() => {
    document.body.style.opacity = '1';
}, 100);

// ============================================
// SMOOTH SCROLL BEHAVIOR (FALLBACK)
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// RESPONSIVE FLOATING ELEMENTS
// ============================================

window.addEventListener('resize', () => {
    // Adjust floating elements on resize if needed
});

// ============================================
// EASTER EGG - CLICK COUNTER
// ============================================

let roseClickCount = 0;

document.querySelector('.rose-emoji')?.addEventListener('click', () => {
    roseClickCount++;
    if (roseClickCount === 5) {
        createConfetti();
        roseClickCount = 0;
    }
});

// Confetti animation
function createConfetti() {
    const confettiPieces = ['🌹', '💕', '✨', '🎀', '💌'];
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.innerHTML = confettiPieces[Math.floor(Math.random() * confettiPieces.length)];
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '50%';
        confetti.style.fontSize = '2rem';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '999';
        confetti.style.animation = `confettiFall ${2 + Math.random() * 2}s ease-out forwards`;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
}

// Add confetti animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Keyboard navigation for buttons
document.querySelectorAll('.btn, .music-btn').forEach(button => {
    button.setAttribute('role', 'button');
    button.setAttribute('tabindex', '0');
    
    button.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            button.click();
        }
    });
});