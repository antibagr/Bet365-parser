import re

def get_bet_id_from_topic_id(topic_id: str) -> str:
    bet_id_match = re.findall(r"(\d+)-|(\d+)[^_]+_\d+_\d+", topic_id)
    return str(bet_id_match[0][0] or bet_id_match[0][1])


print(get_bet_id_from_topic_id("OVM49P146582160-1589068981"))