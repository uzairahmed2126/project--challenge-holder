let numberOfChallenge = [3, 6, 9, 15, 21, 25, 30, 35, 40, 45, 50, 60, 65, 70, 75, 'Create Costum']

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('main')
    const checkBoxContainer = document.getElementById('check-box-container')
    const challengeDays = document.getElementById('challenge-days')
    const checkBoxes = document.querySelector('.checkboxes')


    numberOfChallenge.forEach((eachNumber) => {
        const addDays = `${eachNumber} days`;
        const sectionEl = document.createElement('section');
        sectionEl.classList.add('days');
        sectionEl.innerText = addDays;
        sectionEl.addEventListener('click', (value) => {
            mainContainer.style.visibility = 'hidden';
            checkBoxContainer.style.visibility = 'visible';
            for (let i = 1; i <= eachNumber; i++) {
                const createCheckBox = document.createElement('input');
                createCheckBox.type = 'checkbox';
                checkBoxContainer.append(createCheckBox);
                checkBoxes.append(createCheckBox);
            }
            console.log(value.target, eachNumber)
        })
        if (eachNumber.length) {
            const addDays = `${eachNumber}`;
            sectionEl.classList.add('days', 'custom');
            sectionEl.innerText = addDays;
        }
        challengeDays.append(sectionEl);
    });
});