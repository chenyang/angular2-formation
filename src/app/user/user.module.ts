
/**
 * Created by Administrateur on 30/03/2017.
 */

import {UserListOldComponent} from "./old_method/user-list/user-list.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {UserListContainerComponent} from "./user-list-container/user-list-container.component";
import {UserFormComponent} from "./user-form/user-form.component";
import {UserListNewComponent} from "./user-new-list/user-new-list";
import {UserStore} from "./user-store";

@NgModule({
  declarations: [
    UserListOldComponent,
    UserListContainerComponent,
    UserFormComponent,
    UserListNewComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    UserListOldComponent,
    UserListContainerComponent,
    UserFormComponent,
    UserListNewComponent
  ],
  providers:[//service, can config
    /* Simply declare UserStore as a service, @Injectable() */
    UserStore,

    /* Using another class. */
    /*{
      provide: UserStore,
      useClass: UserStore
    },*/

    /* Using a custom instance. */
   /* {
      deps: [Config]
      provide: ApiRest,
      useFactory: (config: Config) => new ApiRest(config)
    },

    /!* Using a custom value. *!/
    {
      provide: ApiRest,
      useValue: new ApiRest()
    }*/

  ]
})
export class UserModule { }

