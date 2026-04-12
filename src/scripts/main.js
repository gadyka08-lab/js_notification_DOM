'use strict';

'use strict';

/**
 * Функція для створення та відображення сповіщень.
 */
const pushNotification = (posTop, posRight, title, description, type) => {
  // 1. Створюємо головний контейнер сповіщення
  const notification = document.createElement('div');

  // Додаємо загальний клас та клас типу (напр. notification success)
  notification.classList.add('notification', type);

  // 2. Налаштовуємо позиціонування через інлайнові стилі
  // Важливо: додаємо px до числових значень координат
  // Використовуємо cssText для стабільного порядку властивостей,
  // замість notification.style.cssText = `...`;
  notification.style.cssText = `position: absolute; top: ${posTop}px; right: ${posRight}px;`;
  // 3. Створюємо заголовок h2

  const notificationTitle = document.createElement('h2');
  // Додаємо обов'язковий клас 'title' згідно з умовою

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;

  // 4. Створюємо опис p
  const notificationDescription = document.createElement('p');

  notificationDescription.classList.add('description');
  // Додаємо клас згідно з чеклистом
  notificationDescription.textContent = description;

  // 5. Збираємо структуру: додаємо заголовок та опис всередину контейнера
  notification.appendChild(notificationTitle);
  notification.appendChild(notificationDescription);

  // 6. Додаємо готове сповіщення в DOM (в кінець body)
  document.body.appendChild(notification);

  // 7. Налаштовуємо автоматичне приховування через 2 секунди
  setTimeout(() => {
    // Згідно з умовою, не видаляємо (remove), а ховаємо візуально
    notification.style.display = 'none';
  }, 2000);
};

// Викликаємо функцію напряму тричі для тестів
pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n Notification should contain title and description.',
  'warning',
);
