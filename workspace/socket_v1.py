import websocket

websocket.enableTrace(True)


def on_message(wsapp, message):
    print(message)
    if message[0:3] == "101":
        # S_.............. получаем из GET запрса https://www.bet365.es/defaultapi/sports-configuration - в ответе в JSON есть строка SESSION_ID
        # A_.............. генерируется в одном из приходящих Blob файлов, так же является хедером "X-Net-Sync-Term" в некоторых запросах после открытия веб-сокета
        s = (
            "#"
            + "\x03"
            + "P"
            + "\x01"
            + "__time,P-ENDP,S_C648FCB78B974BA591E57E821E8E1C62000003,A_Al0AAwA8AAFp4Uc2gldjExi/sV07C/j8Xnq7GjWrZ9astmSUGSg6ePqIaOGmw5c5UJEFWsO1v4cbd8MezOo8A9l6LvSLGjIrNrNCFlZUEIpuwxXyDlsNwVAgsJc74lQ7r9Uty6xqb7S05T7tgiMVt2ckxv4gv08AfjfZluVrnK04LQCjOFKMMhFK8HlJmOMRRSdZAyqXwsuyrtfjqLqy+jInIhPSqZ4THWfAJZA+Ch3PRc14vh+7BCCFl+VTXqmRf9DdBweamG6c3eo/Dat6Au0Pzq720yfviRapYJymsFAiGZv242+uiZ/+y2LYYGUWJibDzKo1xkw4hovZ1+mULfeQILPA+JJVsZfHg/jpG6lkTtGPXvpoUqeUIKm31ZJ5mKrUz0EZhAjT80sw49onKogKsvJKlJv03yNoc0vBad/fvNvidCQYfvaosyfZSSBPXJ9HNQ/F2H8hnfuYtYCF+I1qyBazQi35jpxDTx7+jB+nM/jRC7IYw36kEZjU5OdUPpOv9OFWCESnZiPQLFXfEXipXewgWKspJwiFgfNUsRPQHsMovPzHADfhg2k0lZlpm9v9ggsfNjH/RNvl7wFWtBVUHs3jPvnLwzliLafwwg4rAe8Bu2zX/NDsk/mE3kzhCoRhmGpe3u13rFmHTi4AB1p2lsiPSgfsuEUmlHi1ukcUnwUWga5ZJUmcwghzZfood5mK3sSkkkUPejdGCvba6o/FcEYwS0b/kprbidMY+0Fcr10k+KJIO2m4rSKTewBtsELyWtV7UTM7YPDczTR3bsST7p6dmZ7S7Oih7MhK4GokTqWDqpOLuByR9zqmDmdNPdA4"
            + "\x00"
        )
        wsapp.send(s)


def on_error(ws, error):
    print(error)


def on_close(wsapp, close_status_code, close_msg):
    print("on_close args:")
    if close_status_code or close_msg:
        print("close status code: " + str(close_status_code))
        print("close message: " + str(close_msg))


def on_open(ws):
    print("On_open sended")


headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.5481.77 Safari/537.36",
    "Accept-Language": "es-ES,es;q=0.9",
    "Accept-Encoding": "gzip, deflate, br",
    "Cache-Control": "no-cache",
    "Pragma": "no-cache",
    "Sec-WebSocket-Extensions": "permessage-deflate; client_max_window_bits",
}

wsapp = websocket.WebSocketApp(
    # "wss://pshudws.365lpodds.com/zap/?uid=5812933253157431"
    "wss://premws-pt3.365lpodds.com/zap/?uid=10787765111707581",
    header=headers,
    on_open=on_open,
    on_message=on_message,
    on_error=on_error,
    on_close=on_close,
    subprotocols=["zap-protocol-v2"],
)

wsapp.run_forever(
    origin="https://www.bet365.es",
    host="premws-pt3.365lpodds.com",
)


# wss://pshudws.365lpodds.com/zap/?uid=5918599425036541

# HTTP/1.1 101 Switching Protocols
# Date: Mon, 23 Oct 2023 17:53:51 GMT
# Connection: upgrade
# sec-websocket-extensions: permessage-deflate; server_no_context_takeover; client_max_window_bits=15
# sec-websocket-protocol: zap-protocol-v1
# upgrade: websocket
# sec-websocket-accept: OjZMmkwdGlsxEbuNGnTTaWIfSEs=
# CF-Cache-Status: DYNAMIC
# Server: cloudflare
# CF-RAY: 81abd7840e4695a0-TBS
