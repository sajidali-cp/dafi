import React from 'react';
import styles from './Home.module.scss';
import HomeHeader from "../_common/HomeHeader/HomeHeader";
import TokenAllocation from "../_common/TokenAllocation/TokenAllocation";
import HomeDemand from "../_common/HomeDemand/HomeDemand";
import HomeFeatures from "../_common/HomeFeatures/HomeFeatures";
import Footer from "../_common/Footer/Footer";

const Home = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <HomeHeader />
                <TokenAllocation />
                <HomeDemand />
                <HomeFeatures />
                <Footer/>
            </div>
        </>
    );
};

export default Home;
