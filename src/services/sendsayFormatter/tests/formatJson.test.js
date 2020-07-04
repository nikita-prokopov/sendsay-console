import { formatJson } from '../sendsayFormatter';

describe('formatJson', () => {
  test('При передачи валидного JSON возвращает отформатированный json', () => {
    // Подготовка
    const json = '{"action": "pong"}';

    // prettier-ignore
    const formatted =
`{
    "action": "pong"
}`;

    // Действие
    const answer = formatJson(json);

    // Проверка
    expect(answer).toEqual(formatted);
  });

  test('Возвращает null при передаче невалидного JSON', () => {
    // Подготовка
    const json = '{"action":';

    // Действие
    const answer = formatJson(json);

    // Проверка
    expect(answer).toBeNull();
  });
});
