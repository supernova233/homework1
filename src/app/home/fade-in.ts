import { trigger, state, style, animate, transition, query } from '@angular/animations';


export const fadeIn =
    trigger('fadeInAnimation', [
        state("void", style({
            position: 'absolute',
            top: "50%",
            opacity: 0
        })),


        transition('void => *', [
            state("fadeIn", style({
                position: 'absolute',
                top: "30%",
                opacity: 1
            })),
            animate('500ms ease-out')
        ])
    ])

export const slideDown = 
    trigger('slideDownAnimation',[
        state('void',style({
            transform: 'translateY(-50%)',
            opacity: 0
        })),

        transition('void => *',[
            state('void',style({
                transform: 'translateY(0%)',
                opacity: 1
            })),
            animate('420ms 300ms ease-out')
        ])
    ])