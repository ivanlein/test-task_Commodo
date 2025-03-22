document.getElementById("phone").addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/[^\d]/g, "");
  let x = e.target.value
    .replace(/\D/g, "")
    .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
  e.target.value =
    "+7" +
    (x[2] ? " (" + x[2] : "") +
    (x[3] ? ") " + x[3] : "") +
    (x[4] ? "-" + x[4] : "") +
    (x[5] ? "-" + x[5] : "");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  localStorage.setItem("formSubmitted", "true");
  this.querySelector('input[type="submit"]').disabled = true;
  alert("Форма успешно отправлена!");
  this.submit();
});

if (localStorage.getItem("formSubmitted") === "true") {
  document
    .getElementById("contactForm")
    .querySelector('input[type="submit"]').disabled = true;
}

// Добавляем обработчик для кнопки сброса
document.getElementById("resetForm").addEventListener("click", function () {
  localStorage.removeItem("formSubmitted");
  document
    .getElementById("contactForm")
    .querySelector('input[type="submit"]').disabled = false;
  alert("Форма сброшена. Вы можете отправить ее снова.");
});

// Находим элементы
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Добавляем обработчик события на кнопку
dropdownToggle.addEventListener("click", function () {
  // Переключаем класс active у меню
  dropdownMenu.classList.toggle("active");
});

// Закрываем меню при клике вне его области
document.addEventListener("click", function (event) {
  if (
    !dropdownToggle.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.remove("active");
  }
});

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const content = document.getElementById("content");

// Функция для поиска и подсветки текста
function searchAndHighlight() {
  const searchText = searchInput.value.trim(); // Получаем текст из инпута
  if (!searchText) return; // Если текст пустой, ничего не делаем

  // Очищаем предыдущие подсветки
  const highlightedElements = content.getElementsByClassName("highlight");
  while (highlightedElements.length > 0) {
    highlightedElements[0].classList.remove("highlight");
  }

  // Ищем текст на странице
  const regex = new RegExp(`(${searchText})`, "gi"); // Создаем регулярное выражение
  content.innerHTML = content.innerHTML.replace(
    regex,
    '<span class="highlight">$1</span>'
  ); // Подсвечиваем найденный текст
}

// Добавляем обработчик события на кнопку
searchButton.addEventListener("click", searchAndHighlight);

// Добавляем обработчик события на нажатие Enter в инпуте
searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    searchAndHighlight();
  }
});
