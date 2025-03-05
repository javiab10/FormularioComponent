import { Routes } from '@angular/router';
import { FormAddContactComponent } from './components/form-add-contact/form-add-contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { FormPruebaComponent } from './components/form-prueba/form-prueba.component';
import { DividedFormComponent } from './components/dividedForm/divided-form/divided-form.component';

export const routes: Routes = [
    { path: 'contacts', component: ContactListComponent },
    { path: 'formAdd', component: FormAddContactComponent},
    { path: 'formPrueba', component: FormPruebaComponent},
    { path: 'dividedForm', component: DividedFormComponent },
    { path: '', redirectTo: '/formPrueba', pathMatch: 'full'}
];
