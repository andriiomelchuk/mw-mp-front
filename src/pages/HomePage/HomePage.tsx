import React from "react";
import { Helmet } from 'react-helmet';
import { PageWrapper } from "../../App.styled";
import {dummyProducts} from "../dummyProducts";
import { ProductGroup, ProductGroupContainer } from './styled'
import ProductCard  from '../../blocks/ProductCard/index'

const HomePage: React.FC = () => {
    return <>
             <Helmet>
                <title> Главная - маркет плейс </title>
             </Helmet>

        <PageWrapper>
            <ProductGroup>
                <h2>Рекомендуемые товары</h2>

                <ProductGroupContainer>
                    {dummyProducts.map((p) => (
                        <ProductCard
                        {...p}
                        key={p.id}
                        // isLiked={idsInFavorites.includes(p.id)}
                        />
                    ))}
                </ProductGroupContainer>
            </ProductGroup>
        </PageWrapper>
    </>
}

export default HomePage;