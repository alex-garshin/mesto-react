export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  addCard(card) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  delCard(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  setLikeCard(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  delLikeCard(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  changeUserData(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.username,
        about: data.job,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  updateAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-62",
  headers: {
    authorization: "78542652-31c8-4469-a72b-b4b9aeed68be",
    "Content-Type": "application/json",
  },
});

export default api;