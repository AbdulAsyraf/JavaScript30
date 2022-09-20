window.addEventListener('keydown', function (e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const selected = document.querySelector(`div[data-keys="${e.keyCode}"]`);
    selected.classList.add('playing');
});