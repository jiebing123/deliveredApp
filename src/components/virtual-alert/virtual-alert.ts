import { Component, OnChanges, OnDestroy, ViewChild, TemplateRef, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Dict } from '../../providers/common/common';
import { Subscription } from 'rxjs/Subscription';
import { AppAlertComponent } from '../app-alert/app-alert';

@Component({
    selector:'virtual-alert',
    templateUrl:'virtual-alert.html'
})

export class VirtualAlert implements OnChanges,OnDestroy{

    private appAlert:AppAlertComponent;

    private outputSubscriptionDict:Dict<Subscription>={};

    @ViewChild('alertContentTemplate') alertContentTemplate:TemplateRef<any>;

    @Input('backgroundImage') backgroundImage:string=undefined;

    @Input('fullContent') fullContent:boolean=false;

    @Output() onDismiss=new EventEmitter<void>();

    @Output() onRefresh=new EventEmitter<void>();

    constructor(){

    }

    ngOnChanges(changes:SimpleChanges){
        this.updateAlertProps(changes);
    }

    ngOnDestroy(){
        for(let prop in this.outputSubscriptionDict){
            this.outputSubscriptionDict[ prop ].unsubscribe();
        }
    }

    updateAlertProps(changes?:SimpleChanges):boolean{
        if(!this.appAlert) return;

        let changed=false;
        VirtualAlert.getInputNames().forEach(prop => {
            if(!changes || changes[ prop ]){
                changed=true;
                setTimeout(()=>this.appAlert[ prop ]=this[prop]);
            }
        });

        VirtualAlert.getOutputNames().forEach(prop=>{
            if(!changes || changes[ prop ]){
                changed=true;
                let dict=this.outputSubscriptionDict,
                output:EventEmitter<any>=this[ prop ],
                appAlertOutPut:EventEmitter<any> =this.appAlert[ prop ];

                if(dict[ prop ]) dict[ prop ].unsubscribe();
                dict[ prop ] =output.subscribe(data => appAlertOutPut.emit(data));
            }
        })
        return changed;
    }

    public setAlert(setAlert:AppAlertComponent){
        this.appAlert=setAlert;
    }

    private static getInputNames(){
        return [
            'backgroundImage',
            'fullContent'
        ];
    }

    private static getOutputNames(){
        return [
            'onDismiss',
            'onRefresh'
        ]
    }
}