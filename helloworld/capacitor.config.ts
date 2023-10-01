import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.helloworld',
  appName: 'helloworld',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
