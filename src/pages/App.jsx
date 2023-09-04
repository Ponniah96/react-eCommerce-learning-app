import React from "react";
import { HeaderLayout } from "../components/header";
import { ProductIndex } from "./product/product-index";
export default function App(){
    return(
        <> 
            <HeaderLayout />
            <ProductIndex />
        </>
    )
}