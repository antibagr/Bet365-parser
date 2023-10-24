import requests

from soccerapi.api import ApiBet365


class RudieApiBet365(ApiBet365):
    def _request(self, pd: str) -> str:
        """Make the single request using the active session.
        The pd is a string that contains information about competition
        and market (i.e. 'full_time_result', 'double_chance', ...)
        """

        response = requests.get("http://localhost:5000/bet365")
        print(response.content)
        self.session.headers.update(response["headers"])
        for cookie in response["cookies"]:
            self.session.cookies.set(cookie["name"], cookie["value"])

        url = "https://www.bet365.it/SportsBook.API/web"
        params = (
            ("lid", "1"),  # language id, 1 == english
            ("zid", "0"),
            ("pd", pd),
            ("cid", "97"),
            ("ctid", "97"),
        )
        return self.session.get(url, params=params).text


if __name__ == "__main__":
    api = RudieApiBet365()
    print(api.competitions())
