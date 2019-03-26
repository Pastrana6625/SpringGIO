import { NgModule } from '@angular/core';

import { SpringGioSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SpringGioSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SpringGioSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SpringGioSharedCommonModule {}
