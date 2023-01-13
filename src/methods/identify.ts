import type { IdentifyEventType } from '@segment/analytics-react-native';
import axios from 'axios';

export default (event: IdentifyEventType) => {
  const userId = event.userId;
  if (userId && userId.length > 0) {
  }

  const traits = event.traits;
  if (traits) {
    var response = postToGlitch(event);
    console.log(response)
  }
};

async function postToGlitch (event: IdentifyEventType) {
    await axios.post('https://httpbin.org/post', event, {
  headers: {
    'Content-Type': 'application/json'
  }
})
};