import { isPasswordCorrect } from '../sendsayValidation';

describe('isPasswordCorrect', () => {
  test('Возвращает false если пароль содержит кириллицу', () => {
    // Действие
    const answer = isPasswordCorrect('Привет');

    // Проверка
    expect(answer).toBeFalsy();
  });

  test('Возвращает true если пароль содержит разрешенные символы: латиницу, цифры, символы, пробелы', () => {
    // Действие
    const answer = isPasswordCorrect('Hello 1_!');

    // Проверка
    expect(answer).toBeTruthy();
  });
});
