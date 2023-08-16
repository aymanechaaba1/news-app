'use strict';

import { fetchNewsByCategory } from './model.js';
import NewsListView from './views/NewsListView.js';

const controlNewsList = async () => {
  try {
    // get category from hash url
    const category = window.location.hash.slice(1);
    if (!category) return;

    // fetch news
    const data = await fetchNewsByCategory(category);
    if (!data) return;

    console.log(data);

    // loading data (skeleton loading)
    NewsListView.generateLoading();

    // render data
    NewsListView.render(data.articles);
  } catch (err) {
    console.error(err.message);
  }
};

const init = () => {
  NewsListView.addHandler(controlNewsList);
};

init();
