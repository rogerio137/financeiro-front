import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(App, {
  providers: [provideRouter(routes),
              provideHttpClient(),
              importProvidersFrom(
                  ToastrModule.forRoot({
                    positionClass: 'toast-top-right',
                    timeOut: 3000,
                    preventDuplicates: true,
                  })
                )
  ]
})
.catch((err) => console.error(err));
