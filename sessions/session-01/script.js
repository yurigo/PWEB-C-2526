// Session 01 - HTML Fundamentals JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Session 01: HTML Fundamentals loaded!');
    
    // Add interactive highlighting for exercise sections
    const exercises = document.querySelectorAll('.exercise');
    exercises.forEach((exercise, index) => {
        exercise.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f1f2f6';
            this.style.transform = 'translateX(5px)';
        });
        
        exercise.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#f8f9fa';
            this.style.transform = 'translateX(0)';
        });
        
        // Add a subtle delay for each exercise animation
        exercise.style.opacity = '0';
        exercise.style.transform = 'translateY(20px)';
        exercise.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            exercise.style.opacity = '1';
            exercise.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Add click interaction for concept cards
    const conceptCards = document.querySelectorAll('.concept-card');
    conceptCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a visual feedback
            this.style.background = '#e8f4fd';
            setTimeout(() => {
                this.style.background = '#f8f9fa';
            }, 300);
            
            const concept = this.querySelector('h3').textContent;
            console.log(`Explored concept: ${concept}`);
        });
    });
    
    // Simple progress tracking
    let sectionsViewed = new Set();
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionName = entry.target.querySelector('h2')?.textContent;
                if (sectionName) {
                    sectionsViewed.add(sectionName);
                    console.log(`Viewed section: ${sectionName}`);
                    console.log(`Total sections viewed: ${sectionsViewed.size}`);
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Add smooth transitions for demo content
    const demoContents = document.querySelectorAll('.demo-content');
    demoContents.forEach(demo => {
        demo.style.transition = 'all 0.3s ease';
        demo.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 4px 15px rgba(231, 76, 60, 0.2)';
        });
        
        demo.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
});