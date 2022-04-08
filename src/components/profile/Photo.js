import React from "react";
import image from './image.png'
export const Photo = () =>{
    return(
        <>
        <img src={image} style={{width:'40%'}} alt="profile" />
        </>
    );
};
export default Photo;