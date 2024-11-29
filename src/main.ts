import { bootstrapApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app/app.component';
import { UserComponent } from './app/user/user.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: appConfig.providers || [],
}).then((app) => {
  const injector = app.injector;
  const userElement = createCustomElement(UserComponent, { injector });
  customElements.define('user-element', userElement);
}).catch((err) => console.error(err));