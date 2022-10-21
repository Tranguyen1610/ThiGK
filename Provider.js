import { createContext, useContext, useState } from "react";

const ItemContext = createContext();
export default function ItemProvider({ children }) {
  const DATA=[
    {id:1,
    name:'Stabuck Coffee',
    img:'./assets/Caramel.png',
    price:'150$'},
    {id:2,
      name:'Stabuck Coffee',
      img:'./assets/Caramel.png',
      price:'150$'},
      {id:3,
        name:'Stabuck Coffee',
        img:'./assets/Caramel.png',
        price:'150$'},
  ]
  const [product, setProduct] = useState();
  const [list, setList] = useState([]);

  return (
    <ItemContext.Provider
      value={{ product, setProduct, list, setList}}
    >
      {children}
    </ItemContext.Provider>
  );
}

export const useItemState = () => {
  return useContext(ItemContext);
};
