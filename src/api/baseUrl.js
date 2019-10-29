export default function getBaseUrl() {
  const localUrl = 'http://localhost:3001/';
  const herokuUrl = 'https://lit-beach-66844.herokuapp.com/';
  return getQueryStringParameterByName('useMockApi') ? localUrl : herokuUrl;
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  // eslint-disable-next-line no-useless-escape
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
