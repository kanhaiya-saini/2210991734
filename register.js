const axios = require('axios');

const registerUrl = 'http://20.244.56.144/evaluation-service/register';

const payload = {
  email: 'kanhiya1734.be22@chitkara.edu.in',
  name: 'Kanhiya Saini',
  mobileNo: '6395747647',
  githubUsername: 'kanhiya-saini',
  rollNo: '2210991734',
  collegeName: 'Chitkara University',
  accessCode: 'PwzufG'
};

axios.post(registerUrl, payload)
  .then(response => {
    console.log('✅ Registration Successful:');
    console.log(response.data);
  })
  .catch(error => {
    console.error('❌ Registration Failed:');
    if (error.response) {
      console.error(error.response.data);
    } else {
      console.error(error.message);
    }
  });
