const logout = new LogoutButton();
logout.action = () =>
  ApiConnector.logout((response) => {
    if (response.sucsess) {
      location.reload();
    }
  });

ApiConnector.current((response) => {
  if (response.sucsess) {
    ProfileWidget.showProfile(data);
  }
});

const ratesBoard = new RatesBoard();
ratesBoard.getRates = () =>
  ApiConnector.getStocks((response) => {
    if (response.sucsess) {
      this.clearTable();
      this.fillTable(data);
    }
  });
setInterval(ratesBoard.getRates, 60000);

const moneyManager = new MoneyManager();
moneyManager.addMoneyCallback = (data) =>
  ApiConnector.addMoney(data, (response) => {
    if (response.sucsess) {
      ProfileWidget.showProfile(data);
    }
    moneyManager.setMessage(response, message);
  });
