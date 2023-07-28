import React from 'react';
import Friends from '../../component/Friends/Friends';
import Icons from '../../component/icons/icons';
import Feed from '../../component/Feed/Feed';

const Home = () => {
    return (
        <div className='flex pt-7 gap-10'>
        <Icons></Icons>
        <Feed></Feed>
         <Friends></Friends>
        </div>
    );
};

export default Home;