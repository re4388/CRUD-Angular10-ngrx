import { injectMocks } from 'data-mocks';
import axios from 'axios';

const scenarios = {
  default: [
    {
      url: /users/,
      method: 'POST',
      response: {
        name: 'Mary',
        age: 19,
        loc: 'Taipei',
      },
      responseCode: 200,
    },
    {
      url: /some-other-endpoint/,
      method: 'GET',
      response: { another: 'response' },
      responseCode: 200,
      delay: 1000,
    },
    {
      url: /endpoint-with-headers/,
      method: 'GET',
      response: { same: 'response' },
      responseHeaders: { token: 'mock-token' },
      responseCode: 200,
    },
  ],
};

// injectMocks(scenarios);

// fetch('http://foo.com/login', { method: 'POST', body: {} })
//   .then((response) => response.json())
//   .then((myJson) => console.log(myJson)); // resolves with { some: 'good response' } after a 200ms delay

// fetch('http://foo.com/some-other-endpoint')
//   .then((response) => response.json())
//   .then((myJson) => console.log(myJson)); // resolves with { another: 'response' } after a 1 second delay

// axios
//   .post('http://foo.com/login', {})
//   .then((response) => console.log(response)); // resolves with { another: 'response' } after a 200ms delay

// axios
//   .get('http://foo.com/some-other-endpoint')
//   .then((response) => console.log(response)); // resolves with { another: 'response' } after a 1 second delay
