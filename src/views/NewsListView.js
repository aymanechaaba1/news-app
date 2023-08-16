'use strict';

import View from './View.js';

class NewsListView extends View {
  _parent = document.querySelector('.news_list');

  generateMarkup(news_list) {
    return news_list
      .map((new_article) => {
        if (new_article.urlToImage)
          return `
          <div class="flex flex-col space-y-1 shadow-lg rounded-lg">
            <img src="${new_article.urlToImage || ''}" alt="" />
            <div class="px-3 py-5 space-y-2">
              <h1 class="text-xl">${new_article.title}</h1>
              <p class="flex-1 line-clamp-2">${
                new_article.description || ''
              }</p>
              <div class="flex items-center justify-between py-2"> 
                <p class="text-gray-600">${new_article.source.name}</p>
                <a href="${
                  new_article.url
                }" class="text-xs hover:text-gray-700 hover:underline decoration-yellow-500 text-gray-600" target="_blank">Read More</a>
              </div>
            </div>
          </div>
        `;
      })
      .join('');
  }

  addHandler(handler) {
    ['hashchange', 'load'].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  generateLoading() {
    // const loading = `<p class="text-center animate-pulse text-gray-700">Loading News...</p>`; // normail loading

    const loading = [...new Array(12).keys()]
      .map(
        (_) => `
          <div class="bg-gray-300 rounded-lg shadow-lg w-full h-40 space-y-1"></div>
        `
      )
      .join('');

    this._clear();
    this._parent.insertAdjacentHTML('beforeend', loading);
  }
}

export default new NewsListView();
