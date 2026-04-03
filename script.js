document.addEventListener('DOMContentLoaded', () => {
    // Tab Switching Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const platform = btn.getAttribute('data-platform');

            // Update buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === platform) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Copy to Clipboard Logic
    const copyBtns = document.querySelectorAll('.copy-btn');
    
    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const textToCopy = btn.getAttribute('data-copy');
            const originalIcon = btn.innerHTML;

            navigator.clipboard.writeText(textToCopy).then(() => {
                // Visual Feedback
                btn.innerHTML = '✅';
                btn.style.opacity = '1';
                
                setTimeout(() => {
                    btn.innerHTML = originalIcon;
                    btn.style.opacity = '0.6';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll-triggered Installation Animation
    const installStep = document.querySelector('#install-step');
    if (installStep) {
        const animationContainer = installStep.querySelector('.install-animation');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animationContainer.classList.add('animate-drag');
                } else {
                    // Remove class when out of view so it can replay
                    animationContainer.classList.remove('animate-drag');
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% visible

        observer.observe(installStep);
    }
});
