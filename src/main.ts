
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { MaterialCssVarsModule } from 'angular-material-css-vars';
import { routes } from './app/app.routes'; // تعريف Routes منفصل

// ==========================
// Material CSS Vars Providers
// ==========================
const materialProviders = MaterialCssVarsModule.forRoot({
  isAutoContrast: true,
  darkThemeClass: 'isDarkTheme',
  lightThemeClass: 'isLightTheme',
}).providers ?? []; // fallback لمصفوفة فارغة

// ==========================
// Bootstrap Application
// ==========================
bootstrapApplication(App, {
  providers: [
    ...materialProviders,
    provideRouter(routes)
  ]
})
.catch(err => console.error(err));
