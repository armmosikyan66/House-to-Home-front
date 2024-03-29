import type {GetStaticProps, NextPage} from 'next';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Home} from '../component/templates/app/home';
import nextI18NextConfig from '../next-i18next.config.js';
const HomePage: NextPage<{}> = () => {
    return (
        <>
            <Home.Intro />
            <Home.ForRent />
            <Home.PropTypes />
            <Home.ForSale />
            <Home.About />
        </>
    )
}

export const getStaticProps: GetStaticProps<{}> = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(
            locale ?? "am",
            ['common'],
            nextI18NextConfig
        )),
    },
})

export default HomePage;
