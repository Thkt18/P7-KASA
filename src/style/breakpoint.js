export const mediaHelperFn = (maxWidth, minWidth) => {
    return `@media (max-width: ${maxWidth}) and (min-width: ${minWidth})`
}

export const media = {
    mobile: mediaHelperFn("767px", "150px"),
    desktop: mediaHelperFn("1440px", "768px"),
}






// export const mediaHelperFn = (breakpoints) => {

//     let layout = {
//         breakpoints: {
//             mobile: {value: 345},
//             tablet: {value: 768},
//             laptop: {value: 1025},
//             desktop: {value: 1441},
//             desktopLarge: {value: 2561},
//         },
//     };

//     layout.media = {};

//     Object.keys(layout.breakpoints).map((breakpointsItem) =>  {
//         layout.media[breakpointsItem] = `
//             @media (max-width: ${layout.breakpoints[breakpointsItem].value}px) and (min-width: ${layout.breakpoints[breakpoints].value}px) {
//                 ${breakpointsItem}
//             }
//         `;
//     });


//     return layout.media;
// }



// export const media = {
//     mobile: mediaHelperFn("767px", "345px"),
//     tablet: mediaHelperFn("1024px", "768px"),
//     laptop: mediaHelperFn("1440px", "1025px"),
//     desktop: mediaHelperFn("2560px", "1441px"),
// }





// export const media = {
//     mobile: mediaHelperFn("767px", "345px"),
//     tablet: mediaHelperFn("1024px", "768px"),
//     laptop: mediaHelperFn("1440px", "1025px"),
//     desktop: mediaHelperFn("2560px", "1441px"),
// }




// const size = {
//     xs: "345px",
//     sm: "767px",
//     lg: "1024px",
// }

// const device = {
//     xs: `(min-width: ${size.mobile})`,
//     sm: `(min-width: ${size.tablet})`,
//     lg: `(min-width: ${size.laptop})`, 
// }



// export default {size, device}

