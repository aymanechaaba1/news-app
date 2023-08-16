'use strict';

import { api_base_url, api_key, endpoints } from './config.js';

export const fetchNewsByCategory = async (category = 'general') => {
  try {
    const res = await fetch(
      `${api_base_url}${endpoints.get(
        'top-headlines'
      )}?country=us&category=${category}&apiKey=${api_key}`
    );

    if (!res.ok)
      throw new Error(
        `Failed fetching news, please try again! (${res.status})`
      );

    const data = await res.json();

    return data;
  } catch (err) {
    throw err;
  }
};

export const fetchNewsByQuery = async (query) => {
  try {
    if (!query) return;

    const res = await fetch(
      `${api_base_url}${endpoints.get(
        'everything'
      )}?q=${query}&pageSize=10&apiKey=${api_key}`
    );

    if (!res.ok)
      throw new Error(
        `Failed to fetch news by query, Please try again! (${res.status})`
      );

    const data = await res.json();

    return data;
  } catch (err) {
    throw err;
  }
};
