import {ApiCallGet} from '../config/ApiCall';
const SearchApiService = {
  getSearchResult: async (value,id) => {
    const baseUrl = id == 1 ? `https://en.wikipedia.org//w/api.php?action=query&format=json&prop=pageimages%7Cpageterms&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail&pithumbsize=50&pilimit=10&wbptterms=description&gpssearch=${value}&gpslimit=10` : `https://en.wikipedia.org/?curid=${value}`
    const headers = {
      'Content-Type': 'application/json',
    };
    return ApiCallGet(baseUrl, headers);
  },
};

export default SearchApiService;
