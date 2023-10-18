import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    solid(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './App': './src/App.tsx',
      },
      // shared: ['vue'],
    }),
  ],
});
