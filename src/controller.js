'use strict';

import { fetchNewsByCategory, fetchNewsByQuery } from './model.js';
import NewsListView from './views/NewsListView.js';
import SearchView from './views/SearchView.js';

const controlNewsList = async () => {
  try {
    // get category from hash url
    let category = window.location.hash.slice(1);
    if (!category) category = 'general';

    // fetch news
    const data = await fetchNewsByCategory(category);
    if (!data) return;

    // loading data (skeleton loading)
    NewsListView.generateLoading();

    // render data
    NewsListView.render(data.articles);
  } catch (err) {
    console.error(err.message);
  }
};

const controlSearchNews = async () => {
  try {
    // get query
    const { search_query: query } = SearchView.getQuery();
    if (!query) return;

    // fetch news
    const data = await fetchNewsByQuery(query);
    if (!data) return;

    // loading
    NewsListView.generateLoading();

    // render data
    NewsListView.render(data.articles);
  } catch (err) {
    console.error(err.message);
  }
};

const init = () => {
  NewsListView.addHandler(controlNewsList);
  SearchView.addHandler(controlSearchNews);
};

init();
