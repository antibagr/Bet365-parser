RECORD_DELIM = ""
FIELD_DELIM = ""
HANDSHAKE_MESSAGE_DELIM = ""
MESSAGE_DELIM = "\b"
HANDSHAKE_MESSAGE_END_DELIM = "\x00"
CLIENT_CONNECT = 0
CLIENT_POLL = 1
CLIENT_SEND = 2
CLIENT_CONNECT_FAST = 3
INITIAL_TOPIC_LOAD = 20
DELTA = 21
CLIENT_SUBSCRIBE = 22
CLIENT_UNSUBSCRIBE = 23
CLIENT_SWAP_SUBSCRIPTIONS = 26
NONE_ENCODING = 0
ENCRYPTED_ENCODING = 17
COMPRESSED_ENCODING = 18
BASE64_ENCODING = 19
SERVER_PING = 24
CLIENT_PING = 25
CLIENT_ABORT = 28
CLIENT_CLOSE = 29
ACK_ITL = 30
ACK_DELTA = 31
ACK_RESPONSE = 32
CLIENT_ACTION = 49

CHARMAP = [
    ["A", "d"],
    ["B", "e"],
    ["C", "f"],
    ["D", "g"],
    ["E", "h"],
    ["F", "i"],
    ["G", "j"],
    ["H", "k"],
    ["I", "l"],
    ["J", "m"],
    ["K", "n"],
    ["L", "o"],
    ["M", "p"],
    ["N", "q"],
    ["O", "r"],
    ["P", "s"],
    ["Q", "t"],
    ["R", "u"],
    ["S", "v"],
    ["T", "w"],
    ["U", "x"],
    ["V", "y"],
    ["W", "z"],
    ["X", "a"],
    ["Y", "b"],
    ["Z", "c"],
    ["a", "Q"],
    ["b", "R"],
    ["c", "S"],
    ["d", "T"],
    ["e", "U"],
    ["f", "V"],
    ["g", "W"],
    ["h", "X"],
    ["i", "Y"],
    ["j", "Z"],
    ["k", "A"],
    ["l", "B"],
    ["m", "C"],
    ["n", "D"],
    ["o", "E"],
    ["p", "F"],
    ["q", "0"],
    ["r", "1"],
    ["s", "2"],
    ["t", "3"],
    ["u", "4"],
    ["v", "5"],
    ["w", "6"],
    ["x", "7"],
    ["y", "8"],
    ["z", "9"],
    ["0", "G"],
    ["1", "H"],
    ["2", "I"],
    ["3", "J"],
    ["4", "K"],
    ["5", "L"],
    ["6", "M"],
    ["7", "N"],
    ["8", "O"],
    ["9", "P"],
    ["\n", ":|~"],
    ["\r", ""],
]

CHARDICT = {pair[0]: pair[1] for pair in CHARMAP}
DECRYPT_CHAR_DICT = {v: k for k, v in CHARDICT.items()}

MAP_LEN = 64


def encrypt(text: str) -> str:
    encrypted = ""

    for char in text:
        for n in range(MAP_LEN):
            if char == CHARMAP[n][0]:
                char = CHARMAP[n][1]
                break
        encrypted = encrypted + char
    return encrypted


def decrypt(text: str) -> str:
    decrypted = ""
    idx = 0
    while idx < len(text):
        encrypted_char = text[idx]
        if encrypted_char == ":" and text[idx : idx + 3] == ":|~":
            actual_char = "\n"
            idx += 2
        else:
            actual_char = DECRYPT_CHAR_DICT[encrypted_char]
        decrypted += actual_char
        idx += 1
    return decrypted

    # }(readit || (readit = {})),
    # function (e) {
    #     var t, n, i, r, o, s = ns_gen5_util_logging.Timer,
    #         a = ns_gen5_util_user.RegisteredCountry,
    #         c = "overview_subscribe_brazil",
    #         u = "overview_subscribe",
    #         l = "socket_connection_brazil_",
    #         d = "socket_connection_";
    #     e.conId = "",
    #         t = "100",
    #         n = "111",
    #         i = "101",
    #         r = "102",
    #         o = function (o) {
    #             function h() {
    #                 var e = o.call(this) || this;
    #                 return e._messageDispatcher = null,
    #                     e._connectionID = "",
    #                     e._connectionTimeout = 0,
    #                     e._url = "",
    #                     e._transportIsSupported = e.checkWebsocketAvailable(),
    #                     e._socket = null,
    #                     e._socketReadyState = null,
    #                     e._connected = false,
    #                     e.suspended = false,
    #                     e.storageId = null,
    #                     e.subscriptionLogged = false,
    #                     e.socketOpenHandler = function (t) {
    #                         e.log("Websocket: onopen: " + t.type),
    #                             e.socketConnectCallback()
    #                     },
    #                     e.socketErrorHandler = function (t) {
    #                         e.connectionFailed("connection error: " + t.type)
    #                     },
    #                     e.socketCloseHandler = function (t) {
    #                         e._connected ? e.connectionClosed("Websocket: onclosed: " + t.reason) : e.connectionFailed("connection error: " + t.type + " (unable to connect error)")
    #                     },
    #                     e.socketMessageHandshakeHandler = function (t) {
    #                         e.connectionTimer && (e.connectionTimer.record(),
    #                             e.connectionTimer = null),
    #                             e.handshakeCallback(t.data)
    #                     },
    #                     e.socketMessageDataHandler = function (t) {
    #                         !e.subscriptionLogged && e.subscriptionTimer && t.data.indexOf("OVInPlay") && e.subscriptionTimer.snapshotTimestampNow(),
    #                             e.socketDataCallback(t.data)
    #                     },
    #                     e
    #             }
    #             return __extends(h, o),
    #                 h.prototype.toString = function () {
    #                     return "[WebsocketTransportMethod]"
    #                 },
    #                 h.prototype.close = function () {
    #                     if (this.getSocketConnected()) {
    #                         var t = "";
    #                         t += String.fromCharCode(e.StandardProtocolConstants.CLIENT_CLOSE),
    #                             t += String.fromCharCode(0),
    #                             this.put(t),
    #                             this._socket.close(),
    #                             this.setSocketReadyState()
    #                     }
    #                 },
    #                 h.prototype.getConnected = function () {
    #                     return this.getSocketConnected() && this._connected
    #                 },
    #                 h.prototype.getSocketConnected = function () {
    #                     return this._transportIsSupported && this._socketReadyState == WebSocket.OPEN
    #                 },
    #                 h.prototype.setSocketReadyState = function () {
    #                     this._socketReadyState = this._socket && this._socket.readyState ? this._socket.readyState : null,
    #                         this._connected && this._socketReadyState !== WebSocket.OPEN && (this._connected = false)
    #                 },
    #                 h.prototype.connect = function (e) {
    #                     var t, n = this;
    #                     if (Locator.user.countryId == a.Brazil ? (this.connectionMetricKey = l + e,
    #                         this.subscriptionMetricKey = c) : (this.connectionMetricKey = d + e,
    #                             this.subscriptionMetricKey = u),
    #                         this._transportIsSupported || this.connectionFailed("Websocket Transport not supported."),
    #                         null == this._socket) {
    #                         this._connectionTimeout = window.setTimeout(function () {
    #                             n.connectionFailed("timeout after " + h.CONNECTION_TIMEOUT_LIMIT + "ms")
    #                         }, h.CONNECTION_TIMEOUT_LIMIT);
    #                         try {
    #                             this._url = this._connectionDetails.host + ":" + this._connectionDetails.port + h.TRAILING + "?uid=" + this._connectionDetails.uid,
    #                                 this.connectionTimer = new s(this.connectionMetricKey),
    #                                 $log(" PreLoaded: " + this._connectionDetails.preloaded + " "),
    #                                 this._connectionDetails.preloaded && this._connectionDetails.preloaded.readyState != WebSocket.CLOSING && this._connectionDetails.preloaded.readyState != WebSocket.CLOSED ? (this._socket = this._connectionDetails.preloaded,
    #                                     this._connectionDetails.preloadedOpenEvent && this.socketOpenHandler(this._connectionDetails.preloadedOpenEvent)) : (t = this._connectionDetails.protocol ? this._connectionDetails.protocol : "zap-protocol-v1",
    #                                         this._socket = new WebSocket(this._url, t)),
    #                                 this._socket.addEventListener("open", this.socketOpenHandler),
    #                                 this._socket.addEventListener("error", this.socketErrorHandler),
    #                                 this._socket.addEventListener("close", this.socketCloseHandler)
    #                         } catch (i) {
    #                             this.connectionFailed("Unable to open Socket. Error: " + i)
    #                         }
    #                     }
    #                 },
    #                 h.prototype.socketConnectCallback = function () {
    #                     this.clearConnectionTimeout(),
    #                         this.setSocketReadyState(),
    #                         this.getSocketConnected() ? (this.setInstanceCounter(),
    #                             this._socket.addEventListener("message", this.socketMessageHandshakeHandler),
    #                             this._connectionDetails.preloadedMessageEvent ? this.socketMessageHandshakeHandler(this._connectionDetails.preloadedMessageEvent) : this._connectionDetails.protocol && "zap-protocol-v1" != this._connectionDetails.protocol || this.sendHandshakeData(this.getHandshakeData())) : this.connectionFailed("not connected")
    #                 },
    #                 h.prototype.setInstanceCounter = function () {
    #                     this.instanceCounter = h.Counter++
    #                 },
    #                 h.prototype.sendHandshakeData = function (e) {
    #                     var t = this;
    #                     e ? (this._socket.send(e),
    #                         this._connectionTimeout = window.setTimeout(function () {
    #                             t.connectionFailed("timeout after " + h.HANDSHAKE_TIMEOUT_LIMIT + "ms")
    #                         }, h.HANDSHAKE_TIMEOUT_LIMIT)) : this.close()
    #                 },
    #                 h.prototype.handshakeCallback = function (r) {
    #                     var o, s = this,
    #                         a = r.split(e.StandardProtocolConstants.HANDSHAKE_MESSAGE_DELIM),
    #                         c = a[0],
    #                         u = c.split(e.StandardProtocolConstants.FIELD_DELIM);
    #                     if (this.clearConnectionTimeout(),
    #                         u[0] == t)
    #                         this._socket.removeEventListener("message", this.socketMessageHandshakeHandler),
    #                             this.setSocketReadyState(),
    #                             this._connected = true,
    #                             this._connectionID = u[1],
    #                             this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTED)),
    #                             this.log("Websocket connected as " + this._connectionID + ". " + this._connectionDetails);
    #                     else {
    #                         if (u[0] != i)
    #                             return u[0] == n ? void this.connectionFailed("connection rejected " + n) : void this.connectionFailed("connection rejected - unrecognised response");
    #                         this._connectionID = u[1],
    #                             e.conId = this._connectionID.substring(0, this._connectionID.indexOf(e.StandardProtocolConstants.HANDSHAKE_MESSAGE_END_DELIM)),
    #                             ns_gen5_net.url = "/zap",
    #                             o = function (t) {
    #                                 if (s.xcftToken = t.detail,
    #                                     s.xcftToken) {
    #                                     e.conId = "",
    #                                         ns_gen5_net.url = "",
    #                                         window.removeEventListener("xcft" + s.instanceCounter, o);
    #                                     var n = s.getHandshakeData(s.xcftToken);
    #                                     s.sendHandshakeData(n)
    #                                 }
    #                             },
    #                             window.addEventListener("xcft" + this.instanceCounter, o),
    #                             window.dispatchEvent(new CustomEvent("xcftr", {
    #                                 detail: this.instanceCounter
    #                             }))
    #                     }
    #                     this._socket.addEventListener("message", this.socketMessageDataHandler)
    #                 },
    #                 h.prototype.socketDataCallback = function (t) {
    #                     var n, i, o, s, a, c, u, l, d;
    #                     try {
    #                         if (t) {
    #                             n = t.split(e.StandardProtocolConstants.MESSAGE_DELIM);
    #                             do
    #                                 switch (i = n.shift(),
    #                                 o = i.charCodeAt(0)) {
    #                                     case e.StandardProtocolConstants.INITIAL_TOPIC_LOAD:
    #                                     case e.StandardProtocolConstants.DELTA:
    #                                         s = i.split(e.StandardProtocolConstants.RECORD_DELIM),
    #                                             a = s[0].split(e.StandardProtocolConstants.FIELD_DELIM),
    #                                             c = a.shift(),
    #                                             u = c.substr(1, c.length),
    #                                             l = i.substr(s[0].length + 1),
    #                                             !this.subscriptionLogged && this.subscriptionTimer && t.indexOf("OVInPlay") > -1 && (this.subscriptionTimer.record(),
    #                                                 this.subscriptionTimer = null,
    #                                                 this.subscriptionLogged = true),
    #                                             null !== this._messageDispatcher && this._messageDispatcher.dispatchEvent(new e.ReaditMessageEvent(e.ReaditMessageEvent.MESSAGE_RECEIVED, new e.ReaditMessage(String(o), u, l, a)));
    #                                         break;
    #                                     case e.StandardProtocolConstants.CLIENT_ABORT:
    #                                     case e.StandardProtocolConstants.CLIENT_CLOSE:
    #                                         this.connectionFailed("Connection close/abort message type sent from publisher. Message type: " + o);
    #                                         break;
    #                                     case e.StandardProtocolConstants.CLIENT_ACTION:
    #                                         d = i.slice(0, 3),
    #                                             d === r && this.subscribe("A_" + this.xcftToken);
    #                                         break;
    #                                     default:
    #                                         this.log("Unrecognised message type sent from publisher: " + o)
    #                                 }
    #                             while (n.length)
    #                         }
    #                     } catch (h) {
    #                         this.log(h.toString())
    #                     }
    #                 },
    #                 h.prototype.subscribe = function (t) {
    #                     var n = "";
    #                     n += String.fromCharCode(e.StandardProtocolConstants.CLIENT_SUBSCRIBE),
    #                         n += String.fromCharCode(e.StandardProtocolConstants.NONE_ENCODING),
    #                         n += t,
    #                         n += e.StandardProtocolConstants.RECORD_DELIM,
    #                         this.put(n)
    #                 },
    #                 h.prototype.unsubscribe = function (t) {
    #                     var n = "";
    #                     n += String.fromCharCode(e.StandardProtocolConstants.CLIENT_UNSUBSCRIBE),
    #                         n += String.fromCharCode(e.StandardProtocolConstants.NONE_ENCODING),
    #                         n += t,
    #                         n += e.StandardProtocolConstants.RECORD_DELIM,
    #                         this.put(n)
    #                 },
    #                 h.prototype.swapSubscription = function (e, t) {
    #                     this.unsubscribe(t),
    #                         this.subscribe(e)
    #                 },
    #                 h.prototype.send = function (t, n) {
    #                     var i = "";
    #                     i += String.fromCharCode(e.StandardProtocolConstants.CLIENT_SEND),
    #                         i += String.fromCharCode(e.StandardProtocolConstants.NONE_ENCODING),
    #                         i += t,
    #                         i += e.StandardProtocolConstants.RECORD_DELIM,
    #                         i += n,
    #                         this.put(i)
    #                 },
    #                 h.prototype.put = function (e) {
    #                     try {
    #                         if (!this.getSocketConnected())
    #                             throw new Error("socket not connected");
    #                         !this.subscriptionLogged && e.indexOf("OVInPlay") > -1 && (this.subscriptionTimer = new s(this.subscriptionMetricKey)),
    #                             this._socket.send(e)
    #                     } catch (t) {
    #                         this.connectionFailed("WebSocket: put:" + t)
    #                     }
    #                 },
    #                 h.prototype.getHandshakeData = function (t) {
    #                     var n, i = "";
    #                     return i += String.fromCharCode(h.HANDSHAKE_PROTOCOL),
    #                         i += String.fromCharCode(h.HANDSHAKE_VERSION),
    #                         i += String.fromCharCode(h.HANDSHAKE_CONNECTION_TYPE),
    #                         i += String.fromCharCode(h.HANDSHAKE_CAPABILITIES_FLAG),
    #                         null != this._connectionDetails.defaultTopic && (i += this._connectionDetails.defaultTopic + ","),
    #                         n = ns_gen5_util.CookieManager.GetSessionId(),
    #                         null == n ? (this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTION_FAILED_INVALID_SESSION)),
    #                             null) : (i += "S_" + n,
    #                                 t && (i += ",A_" + t),
    #                                 i += String.fromCharCode(0))
    #                 },
    #                 h.prototype.checkWebsocketAvailable = function () {
    #                     return "WebSocket" in window
    #                 },
    #                 h.prototype.getConnectionId = function () {
    #                     return this._connectionID
    #                 },
    #                 h.prototype.getConnectionDetails = function () {
    #                     return this._connectionDetails
    #                 },
    #                 h.prototype.setConnectionDetails = function (e) {
    #                     this._connectionDetails = e
    #                 },
    #                 h.prototype.setMessageDispatcher = function (e) {
    #                     this._messageDispatcher = e
    #                 },
    #                 h.prototype.log = function (t) {
    #                     e.ReadItLog.Log(this + " -> " + t)
    #                 },
    #                 h.prototype.clearConnectionTimeout = function () {
    #                     this._connectionTimeout && (clearTimeout(this._connectionTimeout),
    #                         this._connectionTimeout = null)
    #                 },
    #                 h.prototype.connectionFailed = function (t) {
    #                     return this.log("Websocket connection (" + this._connectionDetails + ") failed - " + t),
    #                         this.clearConnectionTimeout(),
    #                         this.getConnected() ? void this.connectionClosed("connection failed") : (this.setSocketReadyState(),
    #                             this.dispose(),
    #                             void this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTION_FAILED)))
    #                 },
    #                 h.prototype.connectionClosed = function (t) {
    #                     this.log("Websocket connection (" + this._connectionDetails + ") closed - " + t),
    #                         this.clearConnectionTimeout(),
    #                         this.setSocketReadyState(),
    #                         this.dispose(),
    #                         this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.DISCONNECTED))
    #                 },
    #                 h.prototype.dispose = function () {
    #                     this.close(),
    #                         this._socket && (this._socket.removeEventListener("open", this.socketOpenHandler),
    #                             this._socket.removeEventListener("close", this.socketCloseHandler),
    #                             this._socket.removeEventListener("error", this.socketErrorHandler),
    #                             this._socket.removeEventListener("message", this.socketMessageDataHandler),
    #                             this._socket.removeEventListener("message", this.socketMessageHandshakeHandler),
    #                             this._socket = null)
    #                 },
    #                 h.Counter = 5e6,
    #                 h.TRAILING = "/zap/",
    #                 h.CONNECTION_TIMEOUT_LIMIT = 15e3,
    #                 h.HANDSHAKE_TIMEOUT_LIMIT = 15e3,
    #                 h.HANDSHAKE_PROTOCOL = 35,
    #                 h.HANDSHAKE_VERSION = 3,
    #                 h.HANDSHAKE_CONNECTION_TYPE = 80,
    #                 h.HANDSHAKE_CAPABILITIES_FLAG = 1,
    #                 h
    #         }(ns_gen5_events.EventDispatcher),
    #         e.WebsocketTransportMethod = o


x = """
h.prototype.handshakeCallback = function (r) {
var o, s = this,
    a = r.split(e.StandardProtocolConstants.HANDSHAKE_MESSAGE_DELIM),
    c = a[0],
    u = c.split(e.StandardProtocolConstants.FIELD_DELIM);
if (this.clearConnectionTimeout(),
    u[0] == t)
    this._socket.removeEventListener("message", this.socketMessageHandshakeHandler),
        this.setSocketReadyState(),
        this._connected = true,
        this._connectionID = u[1],
        this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTED)),
        this.log("Websocket connected as " + this._connectionID + ". " + this._connectionDetails);
else {
    if (u[0] != i)
        return u[0] == n ? void this.connectionFailed("connection rejected " + n) : void this.connectionFailed("connection rejected - unrecognised response");
    this._connectionID = u[1],
        e.conId = this._connectionID.substring(0, this._connectionID.indexOf(e.StandardProtocolConstants.HANDSHAKE_MESSAGE_END_DELIM)),
        ns_gen5_net.url = "/zap",
        o = function (t) {
            if (s.xcftToken = t.detail,
                s.xcftToken) {
                e.conId = "",
                    ns_gen5_net.url = "",
                    window.removeEventListener("xcft" + s.instanceCounter, o);
                var n = s.getHandshakeData(s.xcftToken);
                s.sendHandshakeData(n)
            }
        },
        window.addEventListener("xcft" + this.instanceCounter, o),
        window.dispatchEvent(new CustomEvent("xcftr", {
            detail: this.instanceCounter
        }))
}
this._socket.addEventListener("message", this.socketMessageDataHandler)
},
"""


def handshake_callback(response: str):
    a = response.split(HANDSHAKE_MESSAGE_DELIM)
    c = a[0]
    u = c.split(FIELD_DELIM)
    t = "100"
    n = "111"
    i = "101"
    r = "102"
    connection_id = u[1]
    if u[0] == t:
        print(f"Websocket connected as {connection_id=}")
    elif u[0] != i:
        print("Unrecognised response")
        return
    configuration_id = connection_id.split(HANDSHAKE_MESSAGE_END_DELIM)[0]
    ns_gen5_net_url = "/zap"
    # wait for xcft event
    # has to do something with `/uicountersapi/increment`
