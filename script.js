// ===== ANNIVERSARY COUNTER =====
function updateAnniversary() {
    const startDate = new Date(2024, 3, 14); // April 14, 2024
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours();

    if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const totalMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + now.getMonth() - startDate.getMonth() + (now.getDate() < startDate.getDate() ? -1 : 0);
    const totalDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = totalMonths;
    document.getElementById('days').textContent = totalDays;
    document.getElementById('hours').textContent = hours;
}

// ===== GALLERY CAROUSEL =====
const galleryImages = [
    'images/david1.png',
    'images/David2.png',
    'images/david3.png',
    'images/David4.png',
    'images/David5.png',
    'images/David6.png',
    'images/David7.png',
    'images/David8.png',
    'images/David9.png'
];

const galleryMessagesEs = [
    'Eres increíble, siempre iluminas todo como un arcoíris',
    'Eres una persona brillante, de esas que hacen todo mejor',
    'Tu sentido del humor es único, siempre logras sacarme una sonrisa',
    'Eres alguien muy especial y valioso',
    'Cada aventura contigo convierte lo común en inolvidable.',
    'Tu presencia hace que todo se sienta más cálido y divertido.',
    'Gracias por cada locura compartida y cada momento sincero.',
    'Siempre traes luz a los días grises con tu energía.',
    'Todo se vuelve mejor cuando estamos juntos, sin dudas.'
];

const galleryMessagesEn = [
    'You are incredible, you always brighten everything like a rainbow',
    'You are a brilliant person, the kind that makes everything better',
    'Your sense of humor is unique, you always make me smile',
    'You are someone very special and valuable',
    'Every adventure with you turns the ordinary into unforgettable.',
    'Your presence makes everything feel warmer and more fun.',
    'Thank you for every shared crazy moment and every honest moment.',
    'You always bring light to gray days with your energy.',
    'Everything gets better when we are together, no doubt.'
];

const galleryAdjectivesEs = [
    'ALEGRÍA',
    'EXTROVERTIDO',
    'DIVERTIDO',
    'BRILLANTE',
    'INCREÍBLE',
    'LEAL',
    'AUTÉNTICO',
    'GENIAL',
    'ESPECIAL'
];

const galleryAdjectivesEn = [
    'JOYFUL',
    'EXTROVERTED',
    'FUN',
    'BRILLIANT',
    'AMAZING',
    'LOYAL',
    'AUTHENTIC',
    'AWESOME',
    'SPECIAL'
];

const galleryEmojisEs = [
    '😊',
    '🌈',
    '😂',
    '💎',
    '✨',
    '💖',
    '🔥',
    '☀️',
    '🤝'
];

const galleryEmojisEn = [
    '😊',
    '🌈',
    '😂',
    '💎',
    '✨',
    '💖',
    '🔥',
    '☀️',
    '🤝'
];

const galleryModalThemes = [
    { background: 'linear-gradient(135deg, #fb7185, #f97316)', textColor: '#ffffff', shadow: '0 0 45px rgba(251, 113, 133, 0.35)' },
    { background: 'linear-gradient(135deg, #38bdf8, #0ea5e9)', textColor: '#ffffff', shadow: '0 0 45px rgba(56, 189, 248, 0.35)' },
    { background: 'linear-gradient(135deg, #a855f7, #ec4899)', textColor: '#ffffff', shadow: '0 0 45px rgba(168, 85, 247, 0.35)' },
    { background: 'linear-gradient(135deg, #22c55e, #10b981)', textColor: '#ffffff', shadow: '0 0 45px rgba(34, 197, 94, 0.35)' },
    { background: 'linear-gradient(135deg, #facc15, #fb7185)', textColor: '#111827', shadow: '0 0 45px rgba(250, 204, 21, 0.32)' },
    { background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)', textColor: '#ffffff', shadow: '0 0 45px rgba(124, 58, 237, 0.35)' },
    { background: 'linear-gradient(135deg, #ec4899, #f59e0b)', textColor: '#ffffff', shadow: '0 0 45px rgba(236, 72, 153, 0.35)' },
    { background: 'linear-gradient(135deg, #60a5fa, #38bdf8)', textColor: '#111827', shadow: '0 0 45px rgba(96, 165, 250, 0.35)' },
    { background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', textColor: '#ffffff', shadow: '0 0 45px rgba(139, 92, 246, 0.35)' }
];

let currentGalleryIndex = 0;

function initializeGallery() {
    const wrapper = document.getElementById('galleryWrapper');
    const dotsContainer = document.getElementById('galleryDots');
    wrapper.innerHTML = '';
    dotsContainer.innerHTML = '';

    galleryImages.forEach((img, index) => {
        const card = document.createElement('div');
        card.className = 'gallery-card min-w-full overflow-hidden rounded-[2rem] relative';

        const image = document.createElement('img');
        image.src = img;
        image.alt = `Foto ${index + 1}`;
        image.className = 'w-full h-full object-cover';

        const overlay = document.createElement('div');
        overlay.className = 'absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent opacity-0 transition-opacity duration-300';

        card.appendChild(image);
        card.appendChild(overlay);

        card.addEventListener('mouseenter', () => {
            overlay.style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            overlay.style.opacity = '0';
        });

        card.addEventListener('click', () => openImageModal(index));
        wrapper.appendChild(card);

        const dot = document.createElement('button');
        dot.className = index === 0 ? 'active' : '';
        dot.addEventListener('click', () => goToGallerySlide(index));
        dotsContainer.appendChild(dot);
    });
}

function initializeCloudSection() {
    const container = document.getElementById('cloudMessages');
    if (!container) return;

    container.innerHTML = '';

    galleryMessagesEs.forEach((messageEs, index) => {
        const cloud = document.createElement('div');
        cloud.className = 'cloud-card p-8 rounded-[2rem] shadow-2xl border border-white/80 bg-white/80 text-center transition transform hover:-translate-y-2 hover:shadow-3xl';

        const text = document.createElement('p');
        text.className = 'text-base md:text-lg font-medium leading-relaxed text-slate-900';
        text.innerHTML = `<span lang="es">${messageEs}</span><span lang="en" class="hidden">${galleryMessagesEn[index]}</span>`;

        cloud.appendChild(text);
        container.appendChild(cloud);
    });
}

function updateGalleryPosition() {
    const wrapper = document.getElementById('galleryWrapper');
    wrapper.style.transform = `translateX(-${currentGalleryIndex * 100}%)`;

    const dots = document.querySelectorAll('#galleryDots button');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentGalleryIndex);
    });
}

function nextGallerySlide() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
    updateGalleryPosition();
}

function prevGallerySlide() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGalleryPosition();
}

function goToGallerySlide(index) {
    currentGalleryIndex = index;
    updateGalleryPosition();
}

function updateModalMessage(index) {
    const modalMessage = document.getElementById('modalMessage');
    const modalAdjective = document.getElementById('modalAdjective');
    const modalCard = document.getElementById('modalCard');
    const theme = galleryModalThemes[index] || galleryModalThemes[0];

    modalMessage.textContent = isSpanish ? galleryMessagesEs[index] : galleryMessagesEn[index];
    modalAdjective.textContent = isSpanish ? galleryAdjectivesEs[index] : galleryAdjectivesEn[index];
    const modalEmoji = document.getElementById('modalEmoji');
    modalEmoji.textContent = isSpanish ? galleryEmojisEs[index] : galleryEmojisEn[index];

    modalCard.style.background = theme.background;
    modalCard.style.color = theme.textColor;
    modalCard.style.boxShadow = theme.shadow || '0 0 45px rgba(15, 23, 42, 0.25)';
}

function openImageModal(index) {
    currentGalleryIndex = index;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    modalImage.src = galleryImages[index];
    updateModalMessage(index);
    modal.classList.remove('hidden');
    modal.classList.add('show');
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
    modal.classList.add('hidden');
}

// ===== LANGUAGE TOGGLE =====
let isSpanish = true;

function applyLanguage() {
    document.documentElement.lang = isSpanish ? 'es' : 'en';

    document.querySelectorAll('[lang="es"]').forEach(el => {
        el.classList.toggle('hidden', !isSpanish);
    });
    document.querySelectorAll('[lang="en"]').forEach(el => {
        el.classList.toggle('hidden', isSpanish);
    });

    document.getElementById('langToggle').textContent = isSpanish ? 'EN' : 'ES';
    const mobileLangToggle = document.getElementById('mobileLangToggle');
    if (mobileLangToggle) {
        mobileLangToggle.textContent = isSpanish ? 'EN' : 'ES';
    }

    if (document.getElementById('imageModal').classList.contains('show')) {
        updateModalMessage(currentGalleryIndex);
    }
}

function toggleLanguage() {
    isSpanish = !isSpanish;
    applyLanguage();
}

// ===== MUSIC PLAYER =====
let isPlaying = false;

function initializeMusicPlayer() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playpauseBtn = document.getElementById('playpauseBtn');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');

    playpauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            audioPlayer.pause();
            isPlaying = false;
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        } else {
            audioPlayer.play();
            isPlaying = true;
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        }
    });

    audioPlayer.addEventListener('ended', () => {
        audioPlayer.currentTime = 0;
        audioPlayer.play();
    });

    audioPlayer.loop = true;
}

// ===== SURPRISE BUTTON =====
function initializeSurpriseButton() {
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseContent = document.getElementById('surpriseContent');

    surpriseBtn.addEventListener('click', () => {
        surpriseBtn.classList.add('animate-bounce-in');
        setTimeout(() => surpriseBtn.classList.remove('animate-bounce-in'), 400);

        surpriseContent.classList.toggle('hidden');
    });
}

// ===== SCROLL ANIMATIONS =====
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal, .counter-card, .message-card, .video-card, .gallery-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== SMOOTH SCROLL FOR NAVIGATION =====
function initializeSmoothScroll() {
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
}

// ===== FALLING EMOJIS FOR MENSAJE SECTION =====
const emojisData = ['💕', '✨', '🎉', '😂', '💖', '⭐', '🌟', '😊', '💫', '🎊', '💝', '🌈', '🔥', '😍', '💯', '🎈'];

function createFallingEmoji() {
    const mensajeSection = document.getElementById('mensaje');
    if (!mensajeSection) return;

    const emoji = document.createElement('div');
    const randomEmoji = emojisData[Math.floor(Math.random() * emojisData.length)];
    const randomLeft = Math.random() * 100;
    const randomDuration = 6 + Math.random() * 4;
    const randomDelay = Math.random() * 2;

    emoji.textContent = randomEmoji;
    emoji.className = 'falling-emoji';
    emoji.style.left = randomLeft + '%';
    emoji.style.animation = `fallEmoji ${randomDuration}s linear ${randomDelay}s forwards`;
    
    mensajeSection.appendChild(emoji);

    // Remover el emoji después de que termine la animación
    setTimeout(() => {
        emoji.remove();
    }, (randomDuration + randomDelay) * 1000);
}

function startFallingEmojis() {
    // Crear emojis cada 400ms
    setInterval(createFallingEmoji, 400);
}

// ===== INIT ALL ON DOM LOADED =====
document.addEventListener('DOMContentLoaded', () => {
    updateAnniversary();
    applyLanguage();
    initializeGallery();
    initializeCloudSection();
    initializeMusicPlayer();
    initializeSurpriseButton();
    initializeSmoothScroll();
    observeElements();
    startFallingEmojis();

    document.getElementById('prevBtn').addEventListener('click', prevGallerySlide);
    document.getElementById('nextBtn').addEventListener('click', nextGallerySlide);

    document.getElementById('modalClose').addEventListener('click', closeImageModal);
    document.getElementById('imageModal').addEventListener('click', (event) => {
        if (event.target.id === 'imageModal') {
            closeImageModal();
        }
    });

    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLangToggle = document.getElementById('mobileLangToggle');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenu.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
    }

    if (mobileLangToggle) {
        mobileLangToggle.addEventListener('click', toggleLanguage);
    }

    setInterval(updateAnniversary, 3600000);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevGallerySlide();
        if (e.key === 'ArrowRight') nextGallerySlide();
        if (e.key === 'Escape') closeImageModal();
    });
});

// ===== HANDLE PAGE VISIBILITY FOR AUDIO =====
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.getElementById('audioPlayer').pause();
        isPlaying = false;
    }
});
