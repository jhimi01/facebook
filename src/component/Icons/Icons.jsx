import React, { useEffect } from 'react';

const Icons = () => {
    useEffect(()=>{
        fetch('Icons.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    },[])
    return (
        <div className='bg-base-300 w-[20%]'>
            {/* this a section of facebook icons */}
        </div>
    );
};

export default Icons;