import type { TrackEventType } from '@segment/analytics-react-native';

type Properties = { [key: string]: any };

export default (event: TrackEventType) => {
    var response = postToGlitch(event);
};

async function postToGlitch (event: TrackEventType) {
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