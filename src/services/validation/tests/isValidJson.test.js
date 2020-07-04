import { isValidJson } from '../validation';

describe('isValidJson', () => {
  test('Возвращает true если передан валидный JSON', () => {
    // Действие
    const answer = isValidJson('[]');

    // Проверка
    expect(answer).toBeTruthy();
  });

  test('Возвращает false если передан невалидный JSON', () => {
    // Действие
    const answer = isValidJson('{sss}');

    // Проверка
    expect(answer).toBeFalsy();
  });
});
