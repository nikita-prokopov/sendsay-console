import { isEmail } from '../validation';

describe('isEmail', () => {
  test('Возвращает true если передали email', () => {
    // Действие
    const answer = isEmail('nikita@mail.ru');

    // Проверка
    expect(answer).toBeTruthy();
  });

  test('Возвращает false если передали невалидный email', () => {
    // Действие
    const answer = isEmail('nikita@mail');

    // Проверка
    expect(answer).toBeFalsy();
  });
});
