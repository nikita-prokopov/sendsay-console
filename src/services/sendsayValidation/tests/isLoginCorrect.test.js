import { isLoginCorrect } from '../sendsayValidation';

describe('isLoginCorrect', () => {
  test('Возвращает false если логин содержит кириллицу', () => {
    // Действие
    const answer = isLoginCorrect('Никита');

    // Проверка
    expect(answer).toBeFalsy();
  });

  test('Возвращает false если передали пустую строку', () => {
    // Действие
    const answer = isLoginCorrect('');

    // Проверка
    expect(answer).toBeFalsy();
  });

  test('Возвращает true если передали email', () => {
    // Действие
    const answer = isLoginCorrect('nikita@mail.ru');

    // Проверка
    expect(answer).toBeTruthy();
  });

  test('Возвращает false если передали невалидный email', () => {
    // Действие
    const answer = isLoginCorrect('nikita@mail');

    // Проверка
    expect(answer).toBeFalsy();
  });

  test('Возвращает false если логин содержит запрещенные символы', () => {
    // Действие
    const answer = isLoginCorrect('Nikita!');

    // Проверка
    expect(answer).toBeFalsy();
  });

  test('Возвращает true если логин содержит разрешенные символы: цифры, латиницу, _', () => {
    // Действие
    const answer = isLoginCorrect('Nikita_1');

    // Проверка
    expect(answer).toBeTruthy();
  });
});
