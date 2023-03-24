const axios = require('axios')
const fs=require('fs')

module.exports.validateHtml = (fileName) => {

  const file = fs.readFileSync(fileName)

  axios({
    method: 'post',
    url: 'https://validator.w3.org/nu/?out=json',
    data: file,
    headers: {
      'Content-Type': 'text/html'
    },
    maxContentLength: Infinity,
    maxBodyLength: Infinity
  }).then(function (response) {
    console.log(response.data.messages.filter(m => m.type !== 'info'));
  })
}
