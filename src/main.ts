import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

platformBrowser()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// bootstrapApplication(AppModule, {
//   providers: [provideHttpClient()],
// });
