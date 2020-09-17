const signUp = document.querySelector('#sign-up');
const signIn = document.querySelector('#sign-in');
const container = document.querySelector('.container');

signUp.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signIn.addEventListener('click', () =>
container.classList.remove('right-panel-active'));
