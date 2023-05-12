document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded with JavaScript');

    const skillButton = document.getElementById('skill-button');
    const skillList = document.getElementById('skill-list');
    const skillInput = document.getElementById('skill');

    const hobbyButton = document.getElementById('hobby-button');
    const hobbyList = document.getElementById('hobby-list');
    const hobbyInput = document.getElementById('hobby');
    
    skillButton.addEventListener('click', () => {
        console.log('Skill button clicked');
        const newEntry = document.createElement('li');
        newEntry.textContent = skillInput.value;

        if (newEntry.textContent !== '') {
            skillList.appendChild(newEntry);
        }
    });

    hobbyButton.addEventListener('click', () => {
        console.log('Hobby button clicked');
        const newEntry = document.createElement('li');
        newEntry.textContent = hobbyInput.value;

        if (newEntry.textContent !== '') {
            hobbyList.appendChild(newEntry);
        }
    });
});