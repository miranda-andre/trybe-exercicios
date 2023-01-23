import { nanoid } from 'nanoid'

const btnGenerator = document.querySelector('button');
const lblDisplay = document.querySelector('h2');

btnGenerator.addEventListener('click', () => {
    const randomPassword = nanoid()
    lblDisplay.innerHTML = randomPassword;
})

