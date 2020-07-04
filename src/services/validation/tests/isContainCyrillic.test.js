import { isContainCyrillic } from '../validation';

describe('isContainCyrillic', () => {
  test('Возвращает true если строка содержит кириллицу', () => {
    // Действие
    const answer = isContainCyrillic('Привет');

    // Проверка
    expect(answer).toBeTruthy();
  });

  test('Возвращает false если строка не содержит кириллицу', () => {
    // Действие
    const answer = isContainCyrillic('Hello');

    // Проверка
    expect(answer).toBeFalsy();
  });
});
