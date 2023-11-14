"""

Пожалуйста, решите следующую простую задачу. Можно использовать любые инструменты.
Дано: список dict-объектов вида вида {"key": "value"}, например [{"key1": "value1"}, {"k1": "v1", "k2": "v2", "k3": "v3"}, {}, {}, {"key1": "value1"}, {"key1": "value1"}, {"key2": "value2"}].

Напишите функцию, которая удаляет дубликаты из этого списка. Для примера выше возвращаемое значение может быть равно [{"key1": "value1"}, {"k1": "v1", "k2": "v2", "k3": "v3"}, {}, {"key2": "value2"}].
Обязательное условие: функция не должна иметь сложность O(n^2).

"""


dicts: list[dict[str, str]] = [
    {"key1": "value1"},
    {"k1": "v1", "k2": "v2", "k3": "v3"},
    {},
    {},
    {"key1": "value1"},
    {"key1": "value1"},
    {"key2": "value2"},
]


def remove_dublicates(list_of_dicts: list[dict[str, str]]) -> list[dict[str, str]]:
    return list({tuple(sorted(d.items())): d for d in list_of_dicts}.values())


if __name__ == "__main__":
    print(remove_dublicates(dicts))
