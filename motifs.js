/**
 * CLEA Motif System
 * Lightweight animations and interactive elements matching the hero banner
 */

(function() {
    'use strict';

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ===========================
    // ANIMATED BACKGROUND NETWORKS
    // ===========================

    function initNetworkCanvas(sectionClass) {
        const section = document.querySelector(sectionClass);
        if (!section) return;

        // Check if canvas already exists
        if (section.querySelector('.motif-canvas')) return;

        const canvas = document.createElement('canvas');
        canvas.className = 'motif-canvas';

        const motifBg = document.createElement('div');
        motifBg.className = 'motif-bg';
        motifBg.appendChild(canvas);

        section.insertBefore(motifBg, section.firstChild);

        const rect = section.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        const ctx = canvas.getContext('2d');
        const nodes = [];
        const nodeCount = Math.floor(Math.random() * 8) + 5;
        const colors = [
            { r: 32, g: 217, b: 255 },   // cyan
            { r: 40, g: 120, b: 255 },   // blue
            { r: 168, g: 85, b: 247 },   // violet
            { r: 255, g: 157, b: 28 }    // orange
        ];

        // Create random nodes
        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 1.5 + 0.5,
                color: colors[Math.floor(Math.random() * colors.length)],
                opacity: Math.random() * 0.5 + 0.3
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw nodes
            nodes.forEach((node, index) => {
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off edges
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                // Draw node
                ctx.fillStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${node.opacity})`;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();

                // Draw connections to nearby nodes
                nodes.forEach((other, otherIndex) => {
                    if (otherIndex <= index) return; // Avoid duplicate lines
                    const dx = other.x - node.x;
                    const dy = other.y - node.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.strokeStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${(1 - distance / 150) * 0.1})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();
                    }
                });
            });

            if (!prefersReducedMotion) {
                requestAnimationFrame(animate);
            }
        }

        animate();

        // Redraw on window resize
        window.addEventListener('resize', () => {
            const newRect = section.getBoundingClientRect();
            canvas.width = newRect.width;
            canvas.height = newRect.height;
        }, { passive: true });
    }

    // Initialize networks for major sections
    function initAllNetworks() {
        ['about', 'topics', 'speakers', 'schedule'].forEach(sectionClass => {
            setTimeout(() => initNetworkCanvas('.' + sectionClass), 100);
        });
    }

    // ===========================
    // PROGRESS INDICATOR
    // ===========================

    function initProgressIndicator() {
        // Create indicator HTML
        const indicator = document.createElement('div');
        indicator.className = 'progress-indicator';
        indicator.setAttribute('aria-label', 'Page progress: Learn, Adapt, Evolve, Apply');

        const stages = ['Learn', 'Adapt', 'Evolve', 'Apply'];
        stages.forEach((stage, index) => {
            const stageEl = document.createElement('div');
            stageEl.className = 'progress-stage';
            stageEl.dataset.stage = index;
            stageEl.innerHTML = `
                <div class="progress-dot"></div>
                <span>${stage}</span>
            `;
            indicator.appendChild(stageEl);
        });

        document.body.appendChild(indicator);

        // Section mapping to stages
        const stageSections = [
            { selector: '.about', stage: 0 },
            { selector: '.topics', stage: 0 }, // Both about section
            { selector: '.cfp', stage: 1 },    // Adapt - submission phase
            { selector: '.schedule', stage: 2 }, // Evolve - workshop execution
            { selector: '.speakers, .organizers', stage: 3 } // Apply - knowledge sharing
        ];

        function updateProgress() {
            let currentStage = 0;

            stageSections.forEach(item => {
                const elements = document.querySelectorAll(item.selector);
                elements.forEach(el => {
                    const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight / 2) {
                        currentStage = Math.max(currentStage, item.stage);
                    }
                });
            });

            // Update active stage
            document.querySelectorAll('.progress-stage').forEach((el, index) => {
                el.classList.toggle('active', index === currentStage);
            });
        }

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();
    }

    // ===========================
    // SECTION HEADING MOTIFS
    // ===========================

    function initHeadingMotifs() {
        const headings = [
            { selector: '.about h2' },
            { selector: '.topics h3' },
            { selector: '.speakers h2' },
            { selector: '.schedule h2' }
        ];

        headings.forEach(({ selector }) => {
            const heading = document.querySelector(selector);
            if (!heading) return;

            const motif = document.createElement('span');
            motif.className = 'section-motif';
            motif.innerHTML = `
                <span class="motif-node"></span>
                <span class="motif-line"></span>
            `;
            heading.insertBefore(motif, heading.firstChild);
        });
    }

    // ===========================
    // INTERACTIVE CARD ENHANCEMENTS
    // ===========================

    function initCardInteractions() {
        const cards = document.querySelectorAll('.topic-card, .cfp-box, .detail-item');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                if (prefersReducedMotion) return;

                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // You could add a glow position here, but CSS handles it
                card.style.setProperty('--glow-x', `${x}px`);
                card.style.setProperty('--glow-y', `${y}px`);
            });

            card.addEventListener('mouseleave', () => {
                card.style.setProperty('--glow-x', '50%');
                card.style.setProperty('--glow-y', '50%');
            });
        });
    }

    // ===========================
    // TRANSITION PATHS
    // ===========================

    function initTransitionPaths() {
        const sections = document.querySelectorAll('.schedule, .speakers, .organizers');

        sections.forEach((section, index) => {
            if (index === 0) return; // Skip first section

            const path = document.createElement('div');
            path.className = 'transition-path';
            path.innerHTML = `
                <svg viewBox="0 0 400 200" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="pathGradient${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:rgb(32,217,255);stop-opacity:0.6" />
                            <stop offset="50%" style="stop-color:rgb(168,85,247);stop-opacity:0.6" />
                            <stop offset="100%" style="stop-color:rgb(255,157,28);stop-opacity:0.6" />
                        </linearGradient>
                    </defs>
                    <path class="path-stroke path-animated" d="M 50,100 Q 100,50 150,100 T 250,100 T 350,100"
                          stroke="url(#pathGradient${index})" />
                </svg>
            `;

            section.parentNode.insertBefore(path, section);
        });
    }

    // ===========================
    // SCHEDULE TIMELINE ENHANCEMENT
    // ===========================

    function enhanceScheduleTimeline() {
        const scheduleTable = document.querySelector('.schedule-table tbody');
        if (!scheduleTable) return;

        const eventRows = scheduleTable.querySelectorAll('tr');
        eventRows.forEach((row, index) => {
            row.classList.add('timeline-event');

            // Add progressive coloring
            if (index % 3 === 0) {
                row.style.borderLeftColor = 'var(--cyan)';
            } else if (index % 3 === 1) {
                row.style.borderLeftColor = 'var(--violet)';
            } else {
                row.style.borderLeftColor = 'var(--orange)';
            }
        });
    }

    // ===========================
    // INITIALIZATION
    // ===========================

    function init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initAllNetworks();
                initHeadingMotifs();
                initCardInteractions();
                initTransitionPaths();
                enhanceScheduleTimeline();
                initProgressIndicator();
            });
        } else {
            initAllNetworks();
            initHeadingMotifs();
            initCardInteractions();
            initTransitionPaths();
            enhanceScheduleTimeline();
            initProgressIndicator();
        }
    }

    // Start initialization
    init();

    // Expose for debugging
    window.CLEA = {
        motifs: {
            reinitNetworks: initAllNetworks
        }
    };
})();
