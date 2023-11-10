let numberOfChallenge = [3, 6, 9, 15, 21, 25, 30, 35, 40, 45, 50, 60, 65, 70, 75, 'Create Costum']

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('main');
    const checkBoxContainer = document.getElementById('check-box-container')
    const challengeDays = document.getElementById('challenge-days')
    const checkBoxes = document.querySelector('.checkboxes')
    const customMainContainer = document.getElementById('custom')


    numberOfChallenge.forEach((eachNumber) => {
        const addDays = `${eachNumber} days`;
        const sectionEl = document.createElement('section');
        sectionEl.classList.add('days');
        sectionEl.innerText = addDays;
        if (eachNumber.length) {
            const addDays = `${eachNumber}`;
            sectionEl.classList.add('days', 'custom');
            sectionEl.innerText = addDays;
            // const customDiv = document.createElement('div');
            // customDiv.innerText='Hello';
            // mainContainer.append(customDiv);
        }
        sectionEl.addEventListener('click', (value) => {
            mainContainer.style.visibility = 'hidden';
            checkBoxContainer.style.visibility = 'visible';
            for (let i = 1; i <= eachNumber; i++) {
                const createCheckBox = document.createElement('input');
                createCheckBox.type = 'checkbox';
                checkBoxContainer.append(createCheckBox);
                checkBoxes.append(createCheckBox);
            }
            if (eachNumber.length) {
                // create Element
                const customDiv = document.createElement('div');
                const btnContainer = document.querySelector('.btn-container');
                const inputEl = document.createElement('input');
                const submitBtn = document.createElement('button');
                inputEl.type='number';
                inputEl.placeholder='Enter Your Custom Challenge Value';
                // Text
                customDiv.innerText='Hello';
                submitBtn.innerText='Submit'
                // classes
                customDiv.classList.add('custom-div')
                // append
                customDiv.append(inputEl)
                btnContainer.append(submitBtn)
                customDiv.append(btnContainer)
                customMainContainer.append(customDiv);
            }
            console.log(value.target, eachNumber)
        })
        challengeDays.append(sectionEl);
    });
});
// have to add local storage and time when the user select the challenge current date to final date also add days after checkbox.