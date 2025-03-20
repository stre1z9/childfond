document.addEventListener('DOMContentLoaded', function() {
    const pockets = document.querySelectorAll('.pocket');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const modalImage = document.getElementById('modal-image');
    const modalChildName = document.getElementById('modal-child-name');
    const myButtons = document.querySelectorAll('.myBtn');
    const donateButtons = document.querySelectorAll('.donate-button');
    const donateBlock = document.getElementById('donate-block');

    pockets.forEach(pocket => {
        pocket.addEventListener('click', function() {
            const childName = this.dataset.childName;
            const imageSrc = this.querySelector('img').src;

            modalImage.src = imageSrc;
            modalImage.alt = childName;
            modalChildName.textContent = childName;

            modal.classList.add('open');
        });
    });

    closeButton.addEventListener('click', function() {
        modal.classList.remove('open');
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('open');
        }
    });

    myButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            const pocket = button.closest('.pocket');
            const childName = pocket.dataset.childName;
            const imageSrc = pocket.querySelector('img').src;

            modalImage.src = imageSrc;
            modalImage.alt = childName;
            modalChildName.textContent = childName;

            modal.classList.add('open');
        });
    });

    donateButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); 
            modal.classList.remove('open');
            donateBlock.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
