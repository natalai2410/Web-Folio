const hireBtn = document.querySelector('.first__hire-btn');

const popup = document.querySelector('.popup');


function hireBtnClick() {
    popup.classList.add('popup_opened');
}

hireBtn.addEventListener('click', () => {
    hireBtnClick();
});
