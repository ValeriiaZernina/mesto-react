class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
    // тело конструктора
  }

  _checkResStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialUser() {
    return fetch(`https://${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkResStatus(res));
  }

  getInitialCards() {
    return fetch(`https://mesto.${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkResStatus(res));
  }

  addNewCard(name, link) {
    return fetch(`https://mesto.${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => this._checkResStatus(res));
  }

  changeLikeCardStatus(id, like) {
    return fetch(`https://mesto.${this._url}/cards/${id}/likes`, {
      method: like ? "PUT" : "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResStatus(res));
  }

  patchUser(name, about) {
    return fetch(`https://mesto.${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then((res) => this._checkResStatus(res));
  }

  patchAvatar(avatar) {
    return fetch(`https://mesto.${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then((res) => this._checkResStatus(res));
  }

  deleteCard(id) {
    return fetch(`https://mesto.${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResStatus(res));
  }
}

const api = new Api({
  url: "nomoreparties.co/v1/cohort-43",
  headers: {
    authorization: "4c628538-281e-4966-940f-27dfe004ed12",
    "Content-Type": "application/json",
  },
});

export { api };
