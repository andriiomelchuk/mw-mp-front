
//
// App path
//

export const pathPublic: { [k: string]: string} = {
    home: '/',
    productDetails: '/product/:idOrSlug'
}
export const pathPrivat: { [k: string]: string} = {
    accountSettings: '/account-settings',
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