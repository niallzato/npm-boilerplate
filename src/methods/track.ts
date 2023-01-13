import type { TrackEventType } from '@segment/analytics-react-native';
import axios from 'axios';

type Properties = { [key: string]: any };

export default (event: TrackEventType) => {
  const properties = event.properties || {};
};
