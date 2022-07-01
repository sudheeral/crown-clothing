import "./directory.scss";
import DirectoryItem from "../directory-item/directory-item";

const Directory = ({ categories }) => {
  console.log("Directory: categories", categories);

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
