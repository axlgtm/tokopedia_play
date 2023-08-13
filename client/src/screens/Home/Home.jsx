import React from "react";
import "./Home.css";
import { CardVideo } from "../../components";

const Home = () => {
    return (
            <main>
               <div className='container'>
                 <div className='cards-container'>
                   <CardVideo />
                   <CardVideo />
                   <CardVideo />
                   <CardVideo />
                   <CardVideo />
                   <CardVideo />
                   <CardVideo />
                   <CardVideo />
                 </div>
               </div>
             </main>
    )
}

export default Home;