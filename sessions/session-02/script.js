// Session 02 - CSS Fundamentals JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Session 02: CSS Fundamentals loaded!');
    
    // Interactive box model demonstration
    const contentArea = document.querySelector('.content-area');
    if (contentArea) {
        contentArea.addEventListener('click', function() {
            this.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
        });
    }
    
    // Flexbox interactive demo
    const flexItems = document.querySelectorAll('.flex-item');
    flexItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Reset all items
            flexItems.forEach(i => i.style.flex = '1');
            // Expand clicked item
            this.style.flex = '2';
            this.style.background = '#e74c3c';
            
            setTimeout(() => {
                this.style.flex = '1';
                this.style.background = '#3498db';
            }, 2000);
        });
    });
    
    // Grid demo interactivity
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            const area = this.textContent.toLowerCase();
            this.textContent = `${area.charAt(0).toUpperCase() + area.slice(1)} Clicked!`;
            this.style.background = '#e74c3c';
            
            setTimeout(() => {
                this.textContent = area.charAt(0).toUpperCase() + area.slice(1);
                this.style.background = '#3498db';
            }, 1500);
        });
    });
    
    // Responsive cards demo
    const responsiveCards = document.querySelectorAll('.responsive-card');
    let cardStates = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];
    
    responsiveCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const messages = [
                'Now I\'m responsive!',
                'Flexing my layout!',
                'Grid powered!',
                'Mobile ready!'
            ];
            
            this.textContent = messages[index];
            this.style.background = '#e74c3c';
            
            setTimeout(() => {
                this.textContent = cardStates[index];
                this.style.background = '#3498db';
            }, 2000);
        });
    });
    
    // Add CSS animation keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Animate exercises on scroll
    const exercises = document.querySelectorAll('.exercise');
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideIn 0.6s ease-out';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    exercises.forEach(exercise => {
        exercise.style.opacity = '0';
        observer.observe(exercise);
    });
    
    // Interactive concept cards
    const conceptCards = document.querySelectorAll('.concept-card');
    conceptCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const concepts = [
                'Selectors: element, .class, #id, :pseudo',
                'Layouts: display: flex, display: grid',
                'Media: @media (max-width: 768px)',
                'Effects: transition, transform, animation'
            ];
            
            const originalText = this.querySelector('p').textContent;
            this.querySelector('p').textContent = concepts[index];
            this.style.background = '#e8f4fd';
            
            setTimeout(() => {
                this.querySelector('p').textContent = originalText;
                this.style.background = '#f8f9fa';
            }, 3000);
        });
    });
});