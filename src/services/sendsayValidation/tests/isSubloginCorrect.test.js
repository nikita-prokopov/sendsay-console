import { isSubloginCorrect } from '../sendsayValidation';

describe('isSubloginCorrect', () => {
  test('Возвращает false если сублогин содержит кириллицу', () => {
    // Действие
    const answer = isSubloginCorrect('Привет');

    // Проверка
    expect(answer).toBeFalsy();
  });

  test('Возвращает false если сублогин содержит запрещенные символы', () => {
    // Действие
    const answer = isSubloginCorrect('Hello%');

    // Проверка
    expect(answer).toBeFalsy();
  });

  test('Возвращает true если сублогин содержит разрешенные символы: цифры, латиницу, _', () => {
    // Действие
    const answer = isSubloginCorrect('Hello_1');

    // Проверка
    expect(answer).toBeTruthy();
  });
});
