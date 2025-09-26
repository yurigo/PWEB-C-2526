// Session 03 - JavaScript Fundamentals

document.addEventListener('DOMContentLoaded', function() {
    console.log('Session 03: JavaScript Fundamentals loaded!');
    
    // Exercise 1: DOM Manipulation
    const demoText = document.getElementById('demo-text');
    const changeTextBtn = document.getElementById('change-text');
    const changeColorBtn = document.getElementById('change-color');
    const addElementBtn = document.getElementById('add-element');
    const domDemo = document.getElementById('dom-demo');
    
    const texts = [
        'DOM manipulation is powerful!',
        'JavaScript can change any HTML element!',
        'We can modify content, styles, and structure!',
        'This is the magic of the DOM!'
    ];
    let textIndex = 0;
    
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f39c12'];
    let colorIndex = 0;
    
    changeTextBtn.addEventListener('click', function() {
        demoText.textContent = texts[textIndex];
        textIndex = (textIndex + 1) % texts.length;
    });
    
    changeColorBtn.addEventListener('click', function() {
        domDemo.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });
    
    let elementCounter = 0;
    addElementBtn.addEventListener('click', function() {
        elementCounter++;
        const newElement = document.createElement('div');
        newElement.textContent = `Dynamic Element ${elementCounter}`;
        newElement.style.cssText = `
            background: #3498db;
            color: white;
            padding: 0.5rem;
            margin: 0.5rem;
            border-radius: 4px;
            display: inline-block;
            animation: slideIn 0.5s ease-out;
        `;
        domDemo.appendChild(newElement);
    });
    
    // Exercise 2: Event Handling
    const hoverBox = document.getElementById('hover-box');
    const countElement = document.getElementById('count');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const resetBtn = document.getElementById('reset');
    
    let count = 0;
    
    hoverBox.addEventListener('mouseenter', function() {
        this.textContent = 'You\'re hovering! 🎉';
        this.style.background = '#e74c3c';
    });
    
    hoverBox.addEventListener('mouseleave', function() {
        this.textContent = 'Hover over me!';
        this.style.background = '#3498db';
    });
    
    function updateCount() {
        countElement.textContent = count;
        countElement.style.transform = 'scale(1.2)';
        setTimeout(() => {
            countElement.style.transform = 'scale(1)';
        }, 200);
    }
    
    incrementBtn.addEventListener('click', function() {
        count++;
        updateCount();
    });
    
    decrementBtn.addEventListener('click', function() {
        count--;
        updateCount();
    });
    
    resetBtn.addEventListener('click', function() {
        count = 0;
        updateCount();
    });
    
    // Exercise 3: Arrays and Objects
    const arrayDisplay = document.getElementById('array-display');
    const addItemBtn = document.getElementById('add-item');
    const removeItemBtn = document.getElementById('remove-item');
    const sortArrayBtn = document.getElementById('sort-array');
    const objectDisplay = document.getElementById('object-display');
    const showObjectBtn = document.getElementById('show-object');
    const updateGradeBtn = document.getElementById('update-grade');
    
    let myArray = [];
    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
    
    function updateArrayDisplay() {
        arrayDisplay.textContent = JSON.stringify(myArray);
    }
    
    addItemBtn.addEventListener('click', function() {
        if (myArray.length < items.length) {
            const randomItem = items[Math.floor(Math.random() * items.length)];
            if (!myArray.includes(randomItem)) {
                myArray.push(randomItem);
                updateArrayDisplay();
            }
        }
    });
    
    removeItemBtn.addEventListener('click', function() {
        if (myArray.length > 0) {
            myArray.pop();
            updateArrayDisplay();
        }
    });
    
    sortArrayBtn.addEventListener('click', function() {
        myArray.sort();
        updateArrayDisplay();
    });
    
    // Student object example
    const student = {
        name: 'Alex Johnson',
        age: 20,
        grade: 85,
        subjects: ['HTML', 'CSS', 'JavaScript'],
        isEnrolled: true
    };
    
    showObjectBtn.addEventListener('click', function() {
        objectDisplay.innerHTML = `
            <strong>Name:</strong> ${student.name}<br>
            <strong>Age:</strong> ${student.age}<br>
            <strong>Grade:</strong> ${student.grade}%<br>
            <strong>Subjects:</strong> ${student.subjects.join(', ')}<br>
            <strong>Enrolled:</strong> ${student.isEnrolled ? 'Yes' : 'No'}
        `;
    });
    
    updateGradeBtn.addEventListener('click', function() {
        student.grade = Math.floor(Math.random() * 41) + 60; // Random grade 60-100
        objectDisplay.innerHTML = `
            <strong>Name:</strong> ${student.name}<br>
            <strong>Age:</strong> ${student.age}<br>
            <strong>Grade:</strong> ${student.grade}%<br>
            <strong>Subjects:</strong> ${student.subjects.join(', ')}<br>
            <strong>Enrolled:</strong> ${student.isEnrolled ? 'Yes' : 'No'}
        `;
    });
    
    // Exercise 4: Calculator
    const display = document.getElementById('calculator-display');
    const numberBtns = document.querySelectorAll('.calc-btn.number');
    const operatorBtns = document.querySelectorAll('.calc-btn.operator');
    const equalsBtn = document.querySelector('.calc-btn.equals');
    const clearBtn = document.querySelector('.calc-btn.clear');
    
    let currentNumber = '';
    let previousNumber = '';
    let operator = '';
    
    function updateDisplay() {
        display.textContent = currentNumber || previousNumber || '0';
    }
    
    function clear() {
        currentNumber = '';
        previousNumber = '';
        operator = '';
        updateDisplay();
    }
    
    function calculate() {
        let result = 0;
        const prev = parseFloat(previousNumber);
        const current = parseFloat(currentNumber);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                result = current !== 0 ? prev / current : 0;
                break;
            default:
                return;
        }
        
        currentNumber = result.toString();
        operator = '';
        previousNumber = '';
    }
    
    numberBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.textContent === '.' && currentNumber.includes('.')) return;
            currentNumber += this.textContent;
            updateDisplay();
        });
    });
    
    operatorBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (currentNumber === '') return;
            if (previousNumber !== '' && operator !== '') {
                calculate();
                updateDisplay();
            }
            operator = this.textContent;
            previousNumber = currentNumber;
            currentNumber = '';
        });
    });
    
    equalsBtn.addEventListener('click', function() {
        calculate();
        updateDisplay();
    });
    
    clearBtn.addEventListener('click', clear);
    
    // Initialize displays
    updateArrayDisplay();
    updateDisplay();
    
    // Add some CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-10px);
            }
            60% {
                transform: translateY(-5px);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Interactive concept cards
    const conceptCards = document.querySelectorAll('.concept-card');
    const codeExamples = [
        'let message = "Hello World!";\nconst add = (a, b) => a + b;',
        'document.getElementById("myId");\nelement.textContent = "New text";',
        'button.addEventListener("click", function() {\n  console.log("Clicked!");\n});',
        'const arr = [1, 2, 3];\nconst obj = {name: "John", age: 25};'
    ];
    
    conceptCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const originalText = this.querySelector('p').textContent;
            this.querySelector('p').innerHTML = `<code style="font-size: 0.8rem; white-space: pre-line;">${codeExamples[index]}</code>`;
            this.style.background = '#fff3cd';
            
            setTimeout(() => {
                this.querySelector('p').textContent = originalText;
                this.style.background = '#f8f9fa';
            }, 4000);
        });
    });
});