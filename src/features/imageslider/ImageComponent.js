import React from "react";
import "./ImageComponent.css"
import { useSelector } from "react-redux";
function ImageComponent() {
    const count = useSelector(state => state.counter.value);
  const images = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSENRfwqYp-HE1m4ozeueM1Ww8o1cHDknnc9weHuPtctIiCmPcH5xeh9ThY5lDaTTdv7HI&usqp=CAU",
    },
    {
      url: "https://t3.ftcdn.net/jpg/06/00/72/14/360_F_600721477_FUiQwTWA1Bz2ysl5H5e15OSZ8VtjPI7O.jpg",
    },
    {
      url: "https://e0.pxfuel.com/wallpapers/554/112/desktop-wallpaper-kootation-com-skyrim-html-thumbnail.jpg",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWfDkBoxDz-vQBMoXahdWwfa9UnfKXlqRPzqvjeloLPZ70RLN2zPBwYLiAdkHjWuOZlg&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWKA1WEiB08QT3v-u4DPA1B8FJKVQfHJjK7Msc4JuEvbW7vNIaAXMO18THL5WDtpZ_QwE&usqp=CAU",
    },
  ];

  return (
    <div className="image-container">
      <img src={images[count].url} alt="" />
    </div>
  );
}

export default ImageComponent;
