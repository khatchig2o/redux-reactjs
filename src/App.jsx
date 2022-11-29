import React from "react";
import EditTools from "./components/editTools";
import EditBox from "./components/editBox";

export default function App(){
    return <section className="G-flex parent">
        <EditTools/>
        <EditBox/>
    </section>
}