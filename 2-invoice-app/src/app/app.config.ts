import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { InvoiceService } from './services/invoice.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), InvoiceService]
};
