"""
function(e) {
    var t, n, i, a, o, s, r, l, h, g, u, c = [];
    for (t = 0, n = e; tundefined < n.length; t++) 
    i = n[t], a = i.split(","), 
    o = a[0], 
    s = a[1], 
    r = a[2], 
    l = null, h = null, g = null,
    u = "zap-protocol-v1", 
    this.initObject.webSockets && this.initObject.webSockets[o] && 
    (l = this.initObject.webSockets[o].socket, 
        h = this.initObject.webSockets[o].openEvent, 
        g = this.initObject.webSockets[o].messageEvent, 
        u = this.initObject.webSockets[o].protocol),
        c.push(new readit.ReaditConnectionDetails(o, s, Number(r), "__time", String(Math.random()).substring(2), l, h, g, u));

    function e(e, t, n, i, r, o, s, a, c) {
        this.host = e, 
        this.port = t, 
        this.transportMethodId = n, this.defaultTopic = i, 
        this.uid = r, 
        this.preloaded = o, 
        this.preloadedOpenEvent = s, 
        this.preloadedMessageEvent = a, 
        this.protocol = c, t
        his.next = null
    }
    return c
}
"""


def generate_connection_details():
    host = ""
    port = ""
    transport_method_id = ""


foobar = "#P__time,P-ENDP,P_CONFIG,RPB25908_1_3,OVInPlay_1_3,DR2S11_1_0,S_0F2B18379687A9D88F375E0E95C85B1E000003,A_AnIAAwA8AAE8aruKig+SmXSF+0U2YcPxlvHlGWs66a63XDSzmac5BIfY6GuZU0qJ6JLKi7XOO16QFkd84SkAEyPZdfXy1ioY7S1bG2IQKdsoGWTdjn0jF5hosW/IBmjP8pMOoHgLNwJ0e1Q4C7NYlURMB59Uy6eeQnQVVaXr8/fFMEvi0O+ZweddiyF9brZshv6Xr/v0uywsRXOUUmmjJTL24+huuVhz+Q/15loWfKGV5NRWzyRfSDd/wpVBgGniQXXdLtti1IRFEHD+h9x8g4sRMsSbDvSrqe4vMHruVaq6/urAb3+6iHJzWIl7s+w8hCF5Au3GU7Een432YmTyHgA3BUWv/Zoozvvt0FEmeCGUIAPMVW6xXUzlBJJsMibHEp4g3izatW1Gmo1igUPujjAbU3/MTwT4IZYdC8FVvcUNIkd/DrODf02rt1w05wx9IAUPiRSCBBXIj7844MG469z6UQ2unp7shLHETDGIfq6qBhoErHrErOx6EVQzXVYLP0pC0GBvcXnbq1xZ3FVoe08LCwQrZthUWU2MfwIhe510RVI9wc6muEdszrZaG1KU3GGgfW23T2qL3/f3IajqMvxDeqZ+pwzq8FqJsnSLH/geQ6GM4di1QSjv0nVxlslSBiHAeteQIGIQqtxYcqOhE7nKGZvpqXIzjy6yasboCD8IWyz7g+HJM0G8NLk/5HixNVimzq7jz+JPFd1iva8d6EVgqT8c9KO6S6YE82mUfWF4lmR/90/yqtovkN22n62VCtQkracJqZ/gHM8mAHGdU7iY9+S61cAH1YbGXMa5QPuIo+EZHHA="
print(decrypt_v2(foobar))
