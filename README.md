# Python Async Parser

1. [python](https://www.python.org/) | [poetry](https://python-poetry.org/) | [wireshark](https://www.wireshark.org/)
- команда `make install` из корня проекта или её содержание из `Makefile`

2. Браузеры можно добавлять в [app/lib/provider.py](app/lib/provider.py)

3. Полученные данные в самом начале попадают в [app/repository/websocket_data_parser.py](app/repository/websocket_data_parser.py)


1. Создать в корне проекта файл .env
2. Записать туда через равно без пробелов значения:

ENVIRONMENT='dev'
DEBUG=True
SOURCE_IP='<IP АДРЕС ВАШЕГО УСТРОЙСТВА>'
KEYLOG_FILE_PATH=<ПУТЬ ДО KEYLOG ФАЙЛА>
JSON_DB_PATH='<ПУТЬ ДО JSON БАЗЫ ДАННЫХ>'
LIVENESS_PROBE_PORT=8000
PROVIDER_TIMEOUT=10
BET365_URL=https://www.bet365.com/#/IP/B1