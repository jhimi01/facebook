import { categories } from "./Categoriesdata";
import CategoryBox from "./CategoryBox";
import './Icon.css'

const Icons = () => {
  return (
    <div className="w-[20%] overflow-auto h-[100vh] cart group">
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
