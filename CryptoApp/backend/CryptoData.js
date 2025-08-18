const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': 't2JsejzHiFv1WvzJn5Ltl1aiGhRY7T9CXHa8IUzb7y8='
  }
};

fetch('https://openapiv1.coinstats.app/coins', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));