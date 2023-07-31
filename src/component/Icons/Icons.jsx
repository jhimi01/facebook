import { categories } from "./Categoriesdata";
import CategoryBox from "./CategoryBox";
import './Icon.css'

const Icons = () => {
  return (
    // <div className="flex overflow-x-auto cart text-sm h-full mb-1">
    <div className="md:w-[20%] mb-5 md:mb-0 overflow-auto h-[100vh] cart md:sticky md:top-0"> 
      {categories.map((item) => (
        <CategoryBox
          key={item.label}
          label={item.label} // Pass the label prop
          icon={item.icon}   // Pass the icon prop
        //   color={/* optionally, pass the color prop if needed */}
        // color='text-yellow-500'
        />
      ))}
    </div>
  );
};

export default Icons;
