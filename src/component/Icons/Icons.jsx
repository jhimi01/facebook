import { categories  } from './Categoriesdata';

const Icons = () => {
    return (
        <div className='w-[20%] overflow-auto h-[100vh]'>
        {categories.map(item => <p className='text-2xl' key={item.label}>{item.label}</p>)} {/* Fixed the syntax error */}
      </div>
    );
};

export default Icons;