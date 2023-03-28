import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "./catsSlice";

function Cats() {
  const catPics = useSelector((state) => state.entities);
  // const loading = useSelector((state) => state.status)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  const catsList = catPics.map((catPic) => (
    <img key={catPic.id}  src={catPic.url} alt='cat'/>
  ))



  return (
    <div>
      <h1>CatBook</h1>
      {/* add CatList component here */}
      {catsList}
      {/* {catPics.map(catPic => (
        <img key={catPic.id} src={catPic.url} alt="Cat pic" />
      ))} */}
    </div>
  );
}

export default Cats;
