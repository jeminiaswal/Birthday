// PIN Configuration
const CORRECT_PIN = '0422';

// DOM Elements
const pinScreen = document.getElementById('pinScreen');
const pinInput = document.getElementById('pinInput');
const pinButton = document.getElementById('pinButton');
const pinError = document.getElementById('pinError');
const pinHint = document.getElementById('pinHint');

// Page navigation
const pages = {
    pin: document.getElementById('pinScreen'),
    page1: document.getElementById('page1'),
    page2: document.getElementById('page2'),
    page3: document.getElementById('page3'),
    page4: document.getElementById('page4'),
    page5: document.getElementById('page5'),
    page6: document.getElementById('page6')
};

// Button elements
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const btnTryAgain = document.getElementById('btnTryAgain');
const btnBackPage1 = document.getElementById('btnBackPage1');
const btnBackPage2 = document.getElementById('btnBackPage2');
const btnBackGift1 = document.getElementById('btnBackGift1');
const btnBackGift2 = document.getElementById('btnBackGift2');
const btnBackGift3 = document.getElementById('btnBackGift3');

// Check if already unlocked
window.addEventListener('DOMContentLoaded', () => {
    const isUnlocked = localStorage.getItem('messageUnlocked');
    if (isUnlocked) {
        goToPage('page1');
    }
    
    // PIN input auto-submit
    pinInput.addEventListener('input', () => {
        if (pinInput.value.length === 4) {
            checkPin();
        }
    });
    
    // Button listeners
    pinButton.addEventListener('click', checkPin);
    pinInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkPin();
    });
    
    // Page 1 buttons
    btnYes.addEventListener('click', () => goToPage('page3'));
    btnNo.addEventListener('click', () => goToPage('page2'));
    
    // Page 2 buttons
    btnTryAgain.addEventListener('click', () => goToPage('page1'));
    btnBackPage1.addEventListener('click', () => goToPage('page1'));
    
    // Page 3 button
    btnBackPage2.addEventListener('click', () => goToPage('page1'));
    
    // Back buttons from gifts
    btnBackGift1.addEventListener('click', () => goToPage('page3'));
    btnBackGift2.addEventListener('click', () => goToPage('page3'));
    btnBackGift3.addEventListener('click', () => goToPage('page3'));
});

// Function to check PIN
function checkPin() {
    const enteredPin = pinInput.value.trim();
    
    if (enteredPin.length !== 4) {
        showError('Please enter a 4-digit PIN');
        return;
    }
    
    if (enteredPin === CORRECT_PIN) {
        pinError.textContent = '';
        pinButton.disabled = true;
        pinHint.textContent = 'PIN Correct! ✓';
        pinHint.style.color = '#27ae60';
        
        // Mark as unlocked
        localStorage.setItem('messageUnlocked', 'true');
        
        setTimeout(() => {
            goToPage('page1');
        }, 600);
    } else {
        showError('Incorrect PIN. Try again!');
        pinInput.value = '';
        pinInput.focus();
    }
}

// Function to show error
function showError(message) {
    pinError.textContent = message;
    pinError.classList.add('show');
    
    setTimeout(() => {
        pinError.classList.remove('show');
    }, 400);
}

// Function to navigate pages
function goToPage(pageName) {
    // Hide all pages
    Object.values(pages).forEach(page => {
        if (page) {
            page.style.display = 'none';
        }
    });
    
    // Show selected page
    if (pages[pageName]) {
        pages[pageName].style.display = 'flex';
    }
}

// Function to select and view gift
function selectGift(giftNumber) {
    if (giftNumber === 1) {
        goToPage('page4');
    } else if (giftNumber === 2) {
        goToPage('page5');
    } else if (giftNumber === 3) {
        goToPage('page6');
    }
}
