import { isStringEmpty } from '../validation';

describe('isStringEmpty', () => {
  test('Возвращает true если строка пустая', () => {
    // Действие
    const answer = isStringEmpty('');

    // Проверка
    expect(answer).toBeTruthy();
  });

  test('Возвращает false если строка не пустая', () => {
    // Действие
    const answer = isStringEmpty('Hello');

    // Проверка
    expect(answer).toBeFalsy();
  });
});
