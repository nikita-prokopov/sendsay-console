# Консоль

API-консоль состоит из формы авторизации и интерфейса консоли. Она используется, чтобы выполнять запросы к Sendsay API. Консоль адаптирована до 320px.

Все данные, которые нужны после перезагрузки страницы, хранятся в сессии.


#### Демо консоли:

`Консоль:` https://nikita-prokopov.github.io/sendsay-console/  
`UI компоненты консоли:` https://nikita-prokopov.github.io/sendsay-console-ui  

#### Данные для входа в консоль:

`Логин:` x_1590746761296138  
`Сублогин (Опционально):` x_1590746761296138  
`Пароль:` 12332100Nik  

#### Несколько валидных запросов:

```sh
{
  "action":"pong"
}
```

```sh
{
  "action":"ping"
}
```

### Используемые технологии

При разработке данной консоли я использовал:

- React, Redux, Redux-Saga (для работы с некоторыми побочными эффектами)
- Storybook - для разработки UI компонентов в отдельном окружении, документации UI компонентов
- Jest - для тестирования некоторых функций
- SCSS - для объявления переменных
- ESLint (конфиг airbnb), Prettier
- БЭМ

### Страница авторизации

![Image alt](https://github.com/nikita-prokopov/console/raw/images/images/Screenshot_1.png)

Страница авторизации состоит из формы логина. Валидация происходит перед сабмитом формы. Если пользователь введет неправильные данные, то запрос на сервер не отправляется и поля подсвечиваются.

![Image alt](https://github.com/nikita-prokopov/console/raw/images/images/Screenshot_2.png)

Если данные правильные, то отправляется запрос на сервер. Если сервер возвращает ошибку, показывается уведомление «Вход не вышел» с деталями ошибки, которую вернул сервер.

![Image alt](https://github.com/nikita-prokopov/console/raw/images/images/Screenshot_3.png)

Поле "Сублогин" опциональное, его вводить не обязательно.

При отправлении запроса на сервер отображается loader. Если ответ от сервера пришел слишком быстро (например, за 0.001сек), то используется исскуственная задержка, чтобы loader резко не обрывался.

![Image alt](https://github.com/nikita-prokopov/console/raw/images/images/Screenshot_4.png)

Авторизация сохраняется при перезагрузке страницы.

##### Валидация формы авторизации

В поле "Логин" можно ввести email либо логин пользователя.Поле сначала проверяется на наличие email. Если введен корректный email, то валидация прекращается. Если же введен не email, то поле проверяется на запрещенные символы. Поле с email - nikita-prokopov@bk.ru будет верным, в то время как поле с текстом nikita-prokopov будет неправильным, так как "-" - запрещенный символ. В логине, а также в сублогине может встречаться латиница, цифры и подчеркивания.

В пароле могут быть использованы любые символы, например, пробел, но кириллица запрещена.

### Страница консоли

Страница консоли включает в себя хэдер, поля запроса и поле ответа, историю запросов и футер.

![Image alt](https://github.com/nikita-prokopov/console/raw/images/images/Screenshot_5.png)

#### Хэдер

Хэдер состоит из информации о пользователе, кнопки "Выйти" и кнопки перехода в полноэкранный режим. Если пользователь авторизовался без сублогина, то он отображаться не будет. При выходе из аккаунта, данные, которые хранятся в Session Storage очищаются, и серверу отправляется запрос о том, что пользователь вышел.

![Image alt](https://github.com/nikita-prokopov/console/raw/images/images/Screenshot_7.png)

#### История запросов

История запросов хранит в себе максимум 15 уникальных запросов. История запросов может прокручиваться по горизонтали. Для очищения всей истории, нужно нажать на кнопку справа.
Возле кнопки очищения истории имеется градиент через который можно кликать.

![Image alt](https://github.com/nikita-prokopov/console/raw/images/images/Screenshot_6.png)

#### Отправление запроса на сервер

Запрос к серверу — это валидный JSON. В JSON обязательно должно быть свойство "action", иначе запрос будет невалидным.

![Image alt](https://github.com/nikita-prokopov/console/raw/images/images/Screenshot_8.png)

Если поле ввода запроса валидно, то:

- Запрос отправляется и приходит ответ от сервера
- если запрос уникальный, то он добавляется в историю запросов
- если запрос не уникальный, то элемент не добавляется, а передвигается в начало

#### Элемент истории запросов

Элемент истории умеет:

- Показывать статус выполнения запроса — без ошибок отмечаются зеленым цветом, с ошибками — красным
- Выводить значение свойства action из запроса
- При нажатии на элемент, подставлять в поле ввода запроса отформатированный сохраненный запрос
- При нажатии на меню в виде трёх точек, открывается дропдаун

#### Дропдаун

Дропдаун элемента истории запросов содержит действия:

- Выполнить — в поле запроса вставляется сохраненный запрос и выполняется
- Скопировать — запрос копируется в буфер обмена, и показывается визуальный отклик этого действия
- Удалить — безвозвратно удаляет запрос из истории запросов

При клике не на дропдаун или при нажатии клавиши Escape/Enter, дропдаун пропадает. На странице может быть открыт только один дропдаун. При горизонтальном прокручивании истории запросов, дропдаун прокручивается вместе с элементом истории запросов.

#### Поле запроса и поле ответа

Поле запроса должно быть JSON формата. Горизонтальный размер полей можно регулировать. Размеры сохраняются при перезагрузке браузера. Поле ответа не редактируется.

### Футер

![Image alt](https://github.com/nikita-prokopov/console/raw/images/images/Screenshot_9.png)

Футер состоит из кнопки отправления запроса на сервер и кнопки форматирования запроса. При нажатии на кнопку "Форматировать", происходит валидация и если поле запроса неверного формата, то данное поле подстветится красным.


### Взаимодействие с консолью при помощи клавиатуры

С консолью можно взаимодействовать при помощи клавиатуры при помощи Tab/Shift + Tab. Всё, с чем можно взаимодействовать подсвечивается.

### Что можно улучшить

1. Если использовать кнопку входа в полноэкранный режим и F11, кнопка работать не будет. Это связанно с особенностями браузера
2. При открытии дропдауна при помощи клавиатуры, и переключении на следующий элемент, следующим элементом будет не дропдаун, а следующий элемент истории запросов.
