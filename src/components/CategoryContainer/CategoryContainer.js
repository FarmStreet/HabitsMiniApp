import React, {useContext} from 'react';

import "./CategoryContainer.css";
import CategoryItem from "../CategoryItem/CategoryItem";
import Context from "../App/context";

const CategoryContainer = () => {
const { categoryHabitList } = useContext(Context);

return (<div className="CategoryContainer">
    {categoryHabitList.map(({ emoji, name}, id) => (<CategoryItem key={id} id={id} emoji={emoji}>{name}</CategoryItem>))}
  </div>)
};

export default CategoryContainer;