export const mediaHelperFn = (maxWidth, minWidth) => {
    return `@media (max-width: ${maxWidth}) and (min-width: ${minWidth})`
}

export const media = {
    mobile: mediaHelperFn("767px", "150px"),
    desktop: mediaHelperFn("1440px", "768px"),
}