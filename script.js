document.getElementById('phone').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\d]/g, '');
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = '+7' + (x[2] ? ' (' + x[2] : '') + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    localStorage.setItem('formSubmitted', 'true');
    this.querySelector('input[type="submit"]').disabled = true;
    alert('Форма успешно отправлена!');
    this.submit();
});

if (localStorage.getItem('formSubmitted') === 'true') {
    document.getElementById('contactForm').querySelector('input[type="submit"]').disabled = true;
}

// Добавляем обработчик для кнопки сброса
document.getElementById('resetForm').addEventListener('click', function () {
    localStorage.removeItem('formSubmitted');
    document.getElementById('contactForm').querySelector('input[type="submit"]').disabled = false;
    alert('Форма сброшена. Вы можете отправить ее снова.');
});

