'use strict';

import NewsListView from './NewsListView.js';

class SearchView {
  _parent = document.querySelector('.search_form');

  getQuery() {
    const formData = Object.fromEntries([...new FormData(this._parent)]);
    return formData;
  }

  addHandler(handler) {
    this._parent.addEventListener('submit', (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
