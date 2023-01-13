import {
    DestinationPlugin,
    IdentifyEventType,
    PluginType,
    TrackEventType,
    UpdateType,
    SegmentAPISettings,
  } from '@segment/analytics-react-native';
  import type { SegmentGlitchSettings } from './types';
  import identify from './methods/identify';
import track from './methods/track';

  
  export class AppsflyerPlugin extends DestinationPlugin {
    type = PluginType.destination;
    key = 'Glitch';
  
    private settings: SegmentGlitchSettings | null = null;
    private hasInitialized: boolean = false;
  
    update(settings: SegmentAPISettings, _: UpdateType) {
  
      const appsflyerSettings = settings.integrations[
        this.key
      ] as SegmentGlitchSettings;
  
      console.log("in update");
    }
  
    identify(event: IdentifyEventType) {
      identify(event);
      return event;
    }
  
    track(event: TrackEventType) {
      track(event);
      return event;
    }
  
  }