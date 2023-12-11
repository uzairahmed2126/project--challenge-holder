document.addEventListener('DOMContentLoaded', () => {
    //     const mainContainer = document.getElementById('main');
    //     const challengeDays = document.getElementById('challenge-days');
    //     const customMainContainer = document.getElementById('custom');
    //     const customText = document.querySelector('.custom-text');
    //     const checkBoxMainContainer = document.getElementById('check-box-main-container');
    const checkBoxes = document.querySelector('.checkboxes');
    const checkboxMainTitle = document.getElementById('check-box-main-title');
    const checkboxInnerText = document.querySelector('.check-box-inner-text');
    const checkBoxContainer = document.getElementById('check-box-container');
    const createChallenge = document.getElementById('create-challenge');
    function createInput() {
        const textInput = document.createElement('input');
        const buttonInput = document.createElement('input');
        textInput.type = 'number';
        textInput.placeholder = "Enter Number Of Challenge";
        textInput.id = 'txt';
        buttonInput.type = 'submit';
        buttonInput.value = 'submit';
        buttonInput.id = 'submit';
        createChallenge.append(textInput, buttonInput);
    }
    createInput();
    const txt = document.getElementById('txt');
    const submit = document.getElementById('submit');
    txt.style.textTransform = 'capitalize';

    txt.addEventListener('input', (txtInput) => {
        let numberOfChallenge = [];
        let inputNumber = txtInput.target.value;
        let strIntoNum = Number(inputNumber);
        submit.addEventListener('click', () => {
            if (strIntoNum <= 0) {
                createChallenge.innerHTML = 'error';
                strIntoNum = 1;
            } else {
                for (let i = 1; i <= strIntoNum; i++) {
                    // numberOfChallenge.filter((num, index, array) => array.indexOf(num) === index);
                    numberOfChallenge.push([i]);
                }
                numberOfChallenge.forEach((eachNumber) => {
                    // for (let i = 1; i <= eachNumber; i++) {
                    const createCheckBox = document.createElement('input');
                    const createP = document.createElement('p');
                    createP.innerText = `Day ${eachNumber}`;
                    createCheckBox.type = 'checkbox';
                    checkboxInnerText.innerText = `You selected this ${eachNumber} days challenge i appriciate you to keep focus on your aim.`;
                    checkboxMainTitle.style.visibility = 'visible';
                    checkBoxContainer.append(createCheckBox);
                    checkBoxes.append(createCheckBox, createP);
                    // localStorage.setItem('value',checkBoxes);
                    // };
                });
            }
        });
    });



    //     function createCloseBtn() {
    //         const createSpanEl = document.createElement('span');
    //         const createIEl = document.createElement('i');
    //         createIEl.className = 'fa-solid fa-xmark';
    //         createSpanEl.id = 'close-btn';
    //         createIEl.addEventListener('click', () => {
    //             customMainContainer.style.visibility = 'hidden';
    //             checkboxInnerText.innerText = '';
    //             mainContainer.style.visibility = 'visible';
    //             checkBoxes.style.visibility = 'hidden';
    //             createIEl.style.display = 'none';
    //             reloadPage();
    //         });
    //         // append
    //         createSpanEl.append(createIEl);
    //         checkBoxContainer.append(createSpanEl);
    //     };
    //     function reloadPage() {
    //         location.reload();
    //     };
    //         sectionEl.addEventListener('click', (value) => {
    //             createCloseBtn();
    //             createInput();
    //             const txt = document.getElementById('txt');
    //             const submit = document.getElementById('submit');
    //             txt.style.textTransform = 'capitalize';
    //             txt.addEventListener('input', (txtInput) => {
    //                 let inputNumber = txtInput.target.value;
    //                 submit.addEventListener('click', () => {
    //                     if (inputNumber != '') {
    //                         titleId.style.fontFamily = 'Courier New, Courier, monospace';
    //                         titleId.style.fontSize = '20px';
    //                         titleId.style.color = 'green';
    //                         titleId.style.backgroundColor = '#f9f9f9';
    //                         titleId.style.textTransform = 'capitalize';
    //                         titleId.innerHTML = inputNumber;
    //                     }
    //                     // localStorage.setItem('title',inputNumber);
    //                 });
    //             });
    //             // localStorage.setItem('//     numberOfChallenge.forEach((eachNumber) => {
    //         createCloseBtn();
    //         const addDays = `${eachNumber} days`;
    //         const sectionEl = document.createElement('section');
    //         sectionEl.classList.add('days');
    //         sectionEl.innerText = addDays;
    //         if (eachNumber.length) {
    //             const addDays = `${eachNumber}`;
    //             sectionEl.classList.add('custom');
    //             sectionEl.classList.add('days');
    //             sectionEl.innerText = addDays;
    //             // // create Element
    //             const customDiv = document.createElement('div');
    //             const btnContainer = document.querySelector('.btn-container');
    //             const inputEl = document.createElement('input');
    //             const submitBtn = document.createElement('button');
    //             inputEl.type = 'number';
    //             inputEl.placeholder = 'Enter Your Custom Challenge Value';
    //             // Text
    //             customDiv.innerText = 'Hello';
    //             submitBtn.innerText = 'Submit';
    //             checkboxInnerText.innerText = `You selected ${eachNumber} days challenge i appriciate you to keep focus on your aim.`;

    //             // classes
    //             customDiv.classList.add('custom-div');
    //             // append
    //             customDiv.append(inputEl);
    //             btnContainer.append(submitBtn);
    //             customDiv.append(btnContainer);
    //             customMainContainer.append(customDiv);
    //         }

    //             if (!value.target) {
    //                 mainContainer.style.visibility = '';
    //                 checkBoxContainer.style.visibility = '';
    //                 customMainContainer.style.visibility = '';
    //             } else {
    //                 mainContainer.style.visibility = 'hidden';
    //                 checkBoxContainer.style.visibility = 'visible';
    //                 customMainContainer.style.visibility = 'hidden';
    //             }

    //            
    //             console.log(value.target, eachNumber)
    //             // if (eachNumber.length) {
    //             //     customMainContainer.style.visibility = 'visible';
    //             //     checkBoxMainContainer.style.display = 'none';
    //             // } else {
    //             //     customMainContainer.style.visibility = 'hidden';
    //             //     checkBoxMainContainer.style.display = '';
    //             // }
    //         });
    //         challengeDays.append(sectionEl);

    //     });
    //     // checkboxMainTitle.append(createCloseBtn())
});
// // have to add local storage and time when the user select the challenge current date to final date also add days after checkbox.


// let a = [];
// // a.forEach((e) => {

// // })