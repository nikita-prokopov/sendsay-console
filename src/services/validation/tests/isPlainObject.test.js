import { isPlainObject } from '../validation';

describe('isPlainObject', () => {
  test('Возвращает false если передан массив', () => {
    // Действие
    const answer = isPlainObject([]);

    // Проверка
    expect(answer).toBeFalsy();
  });

  test('Возвращает false если передан null', () => {
    // Действие
    const answer = isPlainObject(null);

    // Проверка
    expect(answer).toBeFalsy();
  });

  test('Возвращает true если передан объект', () => {
    // Действие
    const answer = isPlainObject({});

    // Проверка
    expect(answer).toBeTruthy();
  });
});
