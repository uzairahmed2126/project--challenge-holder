let numberOfChallenge = [3, 6, 9, 15, 21, 25, 30, 35, 40, 45, 50, 60, 65, 70, 75, 'Create Costum']

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('main');
    const checkBoxContainer = document.getElementById('check-box-container')
    const challengeDays = document.getElementById('challenge-days')
    const checkBoxes = document.querySelector('.checkboxes')
    const customMainContainer = document.getElementById('custom')
    const checkboxMainTitle = document.getElementById('check-box-main-title')
    const checkboxInnerText = document.querySelector('.check-box-inner-text')
    const customText = document.querySelector('.custom-text')
    const checkBoxMainContainer = document.getElementById('check-box-main-container');

    function createCloseBtn() {
        const createSpanEl = document.createElement('span');
        const createIEl = document.createElement('i');
        createIEl.className = 'fa-solid fa-xmark';
        createSpanEl.id = 'close-btn';
        createIEl.addEventListener('click', () => {
            customMainContainer.style.visibility = 'hidden'
            checkboxInnerText.innerText = '';
            mainContainer.style.visibility = 'visible';
            checkBoxes.style.visibility = 'hidden';
            createIEl.style.display = 'none'
            reloadPage();
        });
        // append
        createSpanEl.append(createIEl);
        checkBoxContainer.append(createSpanEl);
    };
    function reloadPage() {
        location.reload();
    };
    numberOfChallenge.forEach((eachNumber) => {
        // createCloseBtn();
        const addDays = `${eachNumber} days`;
        const sectionEl = document.createElement('section');
        sectionEl.classList.add('days');
        sectionEl.innerText = addDays;
        if (eachNumber.length) {
            const addDays = `${eachNumber}`;
            sectionEl.classList.add('days', 'custom');
            sectionEl.innerText = addDays;
            // create Element
            const customDiv = document.createElement('div');
            const btnContainer = document.querySelector('.btn-container');
            const inputEl = document.createElement('input');
            const submitBtn = document.createElement('button');
            inputEl.type = 'number';
            inputEl.placeholder = 'Enter Your Custom Challenge Value';
            // Text
            customDiv.innerText = 'Hello';
            submitBtn.innerText = 'Submit';
            checkboxInnerText.innerText = `You selected ${eachNumber} days challenge i appriciate you to keep focus on your aim.`;

            // classes
            customDiv.classList.add('custom-div');
            // append
            customDiv.append(inputEl);
            btnContainer.append(submitBtn);
            customDiv.append(btnContainer);
            customMainContainer.append(customDiv);
        }

        sectionEl.addEventListener('click', (value) => {
            createCloseBtn();
            if (!value.target) {
                mainContainer.style.visibility = '';
                checkBoxContainer.style.visibility = '';
                customMainContainer.style.visibility = '';
            } else {
                mainContainer.style.visibility = 'hidden';
                checkBoxContainer.style.visibility = 'visible';
                customMainContainer.style.visibility = 'hidden';
            }
            for (let i = 1; i <= eachNumber; i++) {
                const createCheckBox = document.createElement('input');
                const createP = document.createElement('p');
                createP.innerText = `Day ${i}`;
                // grid-template-columns: repeat(4, 1fr);
                // checkBoxes.style
                checkBoxes.style.gridTemplateColumns = `repeat(${i},4fr)`;

                createCheckBox.type = 'checkbox';
                checkboxInnerText.innerText = `You selected this ${eachNumber} days challenge i appriciate you to keep focus on your aim.`;
                checkboxMainTitle.style.display = 'block';
                checkBoxContainer.append(createCheckBox);
                checkBoxes.append(createCheckBox, createP);
            };
            console.log(value.target, eachNumber)
            if (eachNumber.length) {
                customMainContainer.style.visibility = 'visible';
                checkBoxMainContainer.style.display = 'none'
            } else {
                customMainContainer.style.visibility = 'hidden';
                checkBoxMainContainer.style.display = ''
            }

            // localStorage.setItem('value',eachNumber)
        });
        challengeDays.append(sectionEl);

    });
    // checkboxMainTitle.append(createCloseBtn())
});
// have to add local storage and time when the user select the challenge current date to final date also add days after checkbox.
// localStorage.setItem()