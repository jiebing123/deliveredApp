import { Component, Input, SimpleChanges, ElementRef, Renderer2 } from '@angular/core';
import { VirtualAlert } from '../virtual-alert/virtual-alert';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-alert',
    templateUrl: 'app-alert.html'
})
export class AppAlertComponent {

    @Input() alertHeader;
    @Input() alertContent;
    @Input() virtualAlert:VirtualAlert;
    private subscriptions:Subscription[]=[];


    constructor(private elementRef:ElementRef,private renderer:Renderer2) {
      console.log(this.alertHeader)
    }

    ngOnInit(){
    }

    ngOnChanges(changes:SimpleChanges){
        if(changes['virtualAlert'] && this.virtualAlert instanceof VirtualAlert){
            this.virtualAlert.setAlert(this);
            let changed=this.virtualAlert.updateAlertProps();
        }
    }

    ngOnDestroy() {
    }

    ngAfterViewInit() {
        let backBtn = this.elementRef.nativeElement.querySelector('.back-button'),
            backBtnContainer = this.elementRef.nativeElement.querySelector('.back-button .button-inner'),
            ionBackBtn = backBtnContainer.querySelector('ion-icon');

        // Accessibility
        backBtn.setAttribute('aria-label', 'back');

        let beaBackBtn = this.renderer.createElement('bea-icon');
        this.renderer.setAttribute(beaBackBtn, 'name', 'arrow_left');
        this.renderer.addClass(beaBackBtn, 'bea-arrow_left');
        this.renderer.setAttribute(beaBackBtn, 'ng-reflect-name', 'arrow_left');
        backBtnContainer.replaceChild(beaBackBtn, ionBackBtn);
    }


    // Should be called before BeaHeader's ngOnInit is fired
    waitTabbarData(): Observable<void> {
        return Observable.of(undefined);
    }

}
