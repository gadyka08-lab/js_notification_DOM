'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // 1. Створюємо контейнер
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  // 2. Встановлюємо стилі (виправляємо перший блокер)
  // Використовуємо 'absolute', як того вимагає тест
  notification.style.cssText = `position: absolute; top: ${posTop}px; right: ${posRight}px;`;

  // 3. Заголовок
  const notificationTitle = document.createElement('h2');

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;

  // 4. Опис
  const notificationDescription = document.createElement('p');

  notificationDescription.classList.add('description');
  notificationDescription.textContent = description;

  // 5. Збірка та додавання в DOM
  notification.appendChild(notificationTitle);
  notification.appendChild(notificationDescription);
  document.body.appendChild(notification);

  // 6. Приховування через 2 секунди
  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

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
