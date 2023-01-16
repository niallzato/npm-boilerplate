import type { IdentifyEventType } from '@segment/analytics-react-native';

export default (event: IdentifyEventType) => {
    var response = postToGlitch(event);
};

async function postToGlitch (event: IdentifyEventType) {
    const response = fetch('https://adventurous-obvious-fridge.glitch.me/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });

      return await response;
};