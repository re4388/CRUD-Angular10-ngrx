import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { injectMocks } from 'data-mocks';

async function setupMocks() {
  const { injectMocks, extractScenarioFromLocation } = await import(
    'data-mocks'
  );
  // You could just define your mocks inline if you didn't want to import them.
  // const { getMocks } = await import('./mock');
  const scenarios: any = {
    default: [
      {
        url: /login/,
        method: 'POST',
        response: { some: 'good response' },
        responseCode: 200,
      },
      {
        url: /some-other-endpoint/,
        method: 'GET',
        response: { another: 'response' },
        responseCode: 200,
        delay: 1000,
      },
      {
        url: /endpoint-with-headers/,
        method: 'GET',
        response: { same: 'response' },
        responseHeaders: { token: 'mock-token' },
        responseCode: 200,
      },
    ],
  };

  // injectMocks(getMocks(), extractScenarioFromLocation(window.location));
  injectMocks(scenarios);
}

async function main() {
  if (environment.production) {
    enableProdMode();
  }

  if (!environment.production) {
    await setupMocks();
  }

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}

main();
