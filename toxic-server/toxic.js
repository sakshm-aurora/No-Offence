const googleapis = require('googleapis');

const API_KEY = "AIzaSyD8VNKVLmU7zuZt-lYCWQGlt56AWG7QgCM";
const DISCOVERY_URL = 'https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1'

function checkToxicity(comment){
    return new Promise((resolve, reject) => {
        googleapis.discoverAPI(DISCOVERY_URL, (err, client) => {
            if (err) reject(err);
            var analyzeRequest = {
              comment: {text: comment},
              requestedAttributes: {'TOXICITY': {}}
            };
            client.comments.analyze({key: API_KEY, resource: analyzeRequest}, (err, response) => {
              if (err) reject(err);
              resolve(JSON.stringify(response, null, 2))
            });
          });
    })
    
}

module.exports = checkToxicity;