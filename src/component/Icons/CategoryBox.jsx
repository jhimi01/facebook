import React from 'react';

const CategoryBox = ({label, icon:Icon, color}) => {
    return (
        <div className='flex items-center gap-2 hover:bg-base-300 py-2 ml-3 pl-2 rounded-l-md'>
            <Icon size={26}/>
            <div className='text-lg font-medium'>{label}</div>
        </div>
    );
};

export default CategoryBox;