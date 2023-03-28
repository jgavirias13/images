import qs from 'qs';

const CLIENT_ID = 'bce4691973bd288';
const API_URL = 'https://api.imgur.com';

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: 'token'
    }
    window.location = `${API_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
  }
}