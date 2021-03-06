const axios = require('axios');
const proxy = require('./proxy.js');

const PORT = 9000;

proxy.get('/api/reviews/all/:restaurantId', (req, res) => {
  const { restaurantId } = req.params;
  axios.get(`http://localhost:9001/api/reviews/all/${restaurantId}`)
    .then(({ data }) => { res.send(data); })
    .catch((err) => { console.error(err); });
});

proxy.get('/api/reviews/summary/:restaurantId', (req, res) => {
  const { restaurantId } = req.params;
  axios.get(`http://localhost:9001/api/reviews/summary/${restaurantId}`)
    .then(({ data }) => { res.send(data); })
    .catch((err) => { console.error(err); });
});

proxy.get('/api/nav/:metro', (req, res) => {
  const { metro } = req.params;
  axios.get(`http://localhost:9004/api/nav/${metro}`)
    .then(({ data }) => { res.send(data); })
    .catch((err) => { console.error(err); });
});

proxy.get('/api/search/:searched', (req, res) => {
  const { searched } = req.params;
  axios.get(`http://localhost:9004/api/search/${searched}`)
    .then(({ data }) => { res.send(data); })
    .catch((err) => { console.error(err); });
});

proxy.get('/api/menus/:rest_id', (req, res) => {
  const { rest_id } = req.params;
  axios.get(`http://localhost:9003/api/menus/${rest_id}`)
    .then(({ data }) => { res.send(data); })
    .catch((err) => { console.error(err); });
});

proxy.get('/api/restaurant', (req, res) => {
  axios.get(`http://localhost:9002/api/restaurant`, { params: { id: 2 } })
    .then(({ data }) => { res.send(data); })
    .catch((err) => { console.error(err); });
});

proxy.listen(PORT, () => { console.log('Proxy listening on PORT ', PORT); });
