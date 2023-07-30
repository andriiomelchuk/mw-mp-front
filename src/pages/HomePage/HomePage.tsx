import React from "react";
import { Helmet } from 'react-helmet';
import { TestDiv } from './styled';

const HomePage: React.FC = () => {
    return <>
             <Helmet>
            <title> Главная - маркет плейс </title>
            </Helmet>
            <TestDiv />
        Главная страница сайта
    </>
}

export default HomePage;