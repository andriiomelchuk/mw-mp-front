import React from "react";
import { Helmet } from 'react-helmet';
import { TestDiv } from './styled';
import { PageWrapper } from "../../App.styled";

const HomePage: React.FC = () => {
    return <>
             <Helmet>
            <title> Главная - маркет плейс </title>
            </Helmet>
            <TestDiv />
        <PageWrapper>
            <h1>Главная страница сайта</h1>
        </PageWrapper>
    </>
}

export default HomePage;