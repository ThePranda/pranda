/**
 * PRANDA MINIMALIST GLASS EDITION
 * Developer Humor & High-Quality Audio
 */

function initPortal() {
    const loader = document.getElementById('loader');
    const portal = document.getElementById('portal');
    const video = document.getElementById('v-bg');

    // Smooth Transition from Black to Glass
    loader.style.opacity = '0';
    loader.style.transform = 'scale(1.2)';
    portal.style.opacity = '1';

    setTimeout(() => {
        loader.style.display = 'none';
        document.body.classList.remove('is-loading');
    }, 1200);

    // High Fidelity Media Activation
    video.muted = false;
    video.volume = 1.0;
    video.play().catch(e => console.log("System Status: Interaction required for audio."));

    console.log("%c PRANDA QUALITY LOADED %c",
        "padding:8px; background:#000; color:#58A6FF; font-family:monospace; font-weight:bold;",
        "background:transparent;");
}

document.addEventListener('DOMContentLoaded', () => {
    const timeEl = document.getElementById('local-time');
    const viewEl = document.getElementById('v-count');
    const humorEl = document.getElementById('dev-humor');

    // Chronometer Update
    const updateTime = () => {
        const now = new Date();
        timeEl.innerText = now.toLocaleTimeString('tr-TR', { hour12: false });
    };
    setInterval(updateTime, 1000);
    updateTime();

    // Typewriter Boot Sequence
    const bootText = [
        'system.init("PRANDA_CORE");',
        'loading.resources("high_quality");',
        'status.check("ALL_OK");',
        'bootstrap.complete();'
    ];
    const typingEl = document.getElementById('typing-boot');
    const execBtn = document.getElementById('exec-btn');
    let lineIdx = 0;
    let charIdx = 0;

    function typeWriter() {
        if (lineIdx < bootText.length) {
            if (charIdx < bootText[lineIdx].length) {
                typingEl.textContent += bootText[lineIdx].charAt(charIdx);
                charIdx++;
                setTimeout(typeWriter, 15);
            } else {
                typingEl.textContent += '\n> ';
                lineIdx++;
                charIdx = 0;
                setTimeout(typeWriter, 80);
            }
        } else {
            execBtn.style.display = 'block';
            execBtn.style.opacity = '1';
        }
    }
    setTimeout(typeWriter, 200);

    // Developer Humor Rotator
    const jokes = [
        "> [WARN] Coffee level low: System stabilized at 40%",
        "> local function life() while true do code() end end",
        "> MTA:SA Resource 'sleep' not found. [OK]",
        "> Status: Thinking about why it works in localhost but not in server.",
        "> [SUCCESS] Bug fixed! (Wait, why did it fix though?)"
    ];
    let jokeIndex = 0;
    const rotateHumor = () => {
        humorEl.innerText = jokes[jokeIndex];
        jokeIndex = (jokeIndex + 1) % jokes.length;
    };
    setInterval(rotateHumor, 4000);
    rotateHumor();

    // Visitor Statistics
    const STORAGE_KEY = 'pranda_glass_v2';
    let visits = localStorage.getItem(STORAGE_KEY) || 8920;
    let newCount = parseInt(visits) + 1;
    localStorage.setItem(STORAGE_KEY, newCount);

    let current = 0;
    const target = newCount;
    const animate = () => {
        current += Math.ceil(target / 100);
        if (current < target) {
            viewEl.innerText = current.toLocaleString();
            requestAnimationFrame(animate);
        } else {
            viewEl.innerText = target.toLocaleString();
        }
    };
    animate();
});

// Subtle 3D Depth
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.glass-card');
    const x = (window.innerWidth / 2 - e.pageX) / 90;
    const y = (window.innerHeight / 2 - e.pageY) / 90;

    cards.forEach(card => {
        card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
    });
});