const mainContainer = document.getElementById('main')
const checkBoxContainer = document.getElementById('check-box-container')
const challengeDays = document.querySelectorAll('.days')
const checkBoxes = document.querySelector('.checkboxes')
challengeDays.forEach((element) => {
    element.addEventListener('click', (e) => {
        mainContainer.style.visibility = 'hidden';
        checkBoxContainer.style.visibility = 'visible'
        const createCheckBox = document.createElement('input')
        createCheckBox.type = 'checkbox'
        checkBoxContainer.appendChild(createCheckBox)
        checkBoxes.appendChild(createCheckBox)
    })
})