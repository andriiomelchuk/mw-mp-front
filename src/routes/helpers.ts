
//
// App path
//

export const pathPublic: { [k: string]: string} = {
    home: '/',
    login: '/login',
    productDetails: '/product/:idOrSlug',
    cart: '/cart',
}
export const pathPrivat: { [k: string]: string} = {
    accountSettings: '/account-settings',
    favorites: '/favorites',
}

export const paths: { [k: string]: string } = Object.assign({}, pathPublic, pathPrivat)


//
// Check if pathname matches to one of given paths arguments
//

export const checkPathMatch = (
    pathname: string,
    paths: { [k: string]: string },
    ) => {
    let isMatch = false;

    const allPaths = Object.keys(paths).map((k) => paths[k]);
    const pathFirstSection = pathname.split('/')[1];

    allPaths.forEach((p) => {
        if(p.slice(1) === pathFirstSection) isMatch = true
    })

    return isMatch;
}