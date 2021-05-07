import { trigger, state, style, animate, transition, query } from '@angular/animations';

export const slideInLeft = 
    trigger('slideInLeftAnimation',[
        state('void',style({
            opacity:0,
            transform: 'translateX(-20%)',
        })),
        transition('void => *',[
            state('void',style({
                transform: 'translateX(0%)',
                opacity: 1
            })),
            animate('410ms ease-out')
        ])
    ]);


export const fadeIn =
trigger('fadeInAnimetion',[
    transition(':enter',[
        style({
            opacity:0,
        }),
        animate('810ms 500ms ease-out',style({
            opacity:1,
        }))
    ])
]);


export const slideInTop = 
trigger('slideInTopAnimation',[
    state('void',style({
        opacity:0,
        transform: 'translateY(-30%)',
    })),
    transition('void => *',[
        state('void',style({
            transform: 'translateY(0%)',
            opacity: 1
        })),
        animate('480ms ease-out')
    ])
]);

export const slideInBottom = 
trigger('slideInBottomAnimation',[
    state('void',style({
        opacity:0,
        transform: 'translateY(20%)',
    })),
    transition('void => *',[
        state('void',style({
            transform: 'translateY(0%)',
            opacity: 1
        })),
        animate('480ms ease-out')
    ])
]);
