import re

import typing as t


@t.final
class Regex:
    @t.final
    class WS:
        UPDATE_DATA_DELIM: t.Pattern = re.compile(rb"\x15(.+?)\;\|\x08")
        MESSAGE_DELIM: t.Pattern = re.compile(rb"(.+)\x01(\D?)\|(.+)")
        RECORD_DELIM: t.Pattern = re.compile(rb"(\D{2})\=([^,;]+)")

    @t.final
    class DATA:
        BET_ID: t.Pattern = re.compile(r"(\d+)-|(\d+)[^_]+_\d+_\d+")
        SPORT_FROM_EVENT: t.Pattern = re.compile(r"C(\d+)A")
        IT_P_CONFIG: t.Pattern = re.compile(r"^P_CONFIG(?:\_[A-Z0-9]{2})?$")
