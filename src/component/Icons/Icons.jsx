import { categories } from "./Categoriesdata";
import CategoryBox from "./CategoryBox";
import "./Icon.css";

const Icons = () => {
  return (
    <div className="md:w-[20%] hidden lg:block mb-5 md:mb-0 overflow-auto h-[100vh] cart md:sticky md:top-0">
      {categories.map((item) => (
        <CategoryBox key={item.label} label={item.label} icon={item.icon} />
      ))}
    </div>
  );
};

export default Icons;
