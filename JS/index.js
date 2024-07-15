const modal = document.querySelector('.modal');
const modalBase = document.querySelector('.modal-base');
const modalConteudo = document.querySelector('.modal-conteudo');
const btnModal = document.querySelector('.btn-modal');
const btnFechar = document.querySelector('.btn-fechar');

btnModal.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalBase.classList.add('slide');
    modalConteudo.scrollTop = 0;
});

btnFechar.addEventListener('click', () => {
    modal.style.display = 'none';
});