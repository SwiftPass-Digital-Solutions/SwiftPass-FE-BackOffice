import { Component, input } from "@angular/core";

@Component({
    selector: 'app-button',
    template: `
        <button
            [class]="getComputedClasses()"
            [class.opacity-50]="isLoading()"
            [disabled]="disabled()"
        >
            <ng-content></ng-content>
            @if(isLoading()){
                <div class="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
            }
        </button>
    `
})
export class Button {
    type = input<'primary' | 'secondary'>('primary');
    isLoading = input(false);
    disabled = input(false);

    getComputedClasses(){
        const baseClasses = 'w-full flex items-center justify-center gap-2 border text-base font-medium py-3 px-6 rounded-lg cursor-pointer disabled:shadow-none disabled:cursor-not-allowed disabled:border-neutral-dark-400 disabled:text-neutral-dark-600 disabled:bg-neutral-dark-500';
        let classes;

        switch(this.type()){
            case 'primary':
                classes = 'text-white bg-primary-500 border-primary-400 shadow-[0px_4px_0px_0px_#05175F]';
                break;
            case 'secondary':
                classes = 'text-neutral-dark-700 bg-neutral-dark-500 border-neutral-dark-500 shadow-[0px_4px_0px_0px_#DCDCDC]';
                break;
            default:
                classes = '';
        }
        return baseClasses + ' ' + classes;
    }
}