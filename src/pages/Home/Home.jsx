import React from 'react';
import Friends from '../../component/Friends/Friends';
import Icons from '../../component/icons/icons';
import Feed from '../../component/Feed/Feed';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (

        <div className='md:flex pt-5 gap-10'>
         <Helmet>
                <title>Facebook</title>
            </Helmet>
        <Icons></Icons>
        <Feed></Feed>
         <Friends></Friends>
        </div>
    );
};

export default Home;