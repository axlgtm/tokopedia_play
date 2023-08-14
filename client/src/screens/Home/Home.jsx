import React, { useEffect, useState } from "react";
import "./Home.css";
import { CardVideo } from "../../components";
import { video as videoRequest } from "../../services"

const Home = () => {
    const [video, setVideo] = useState([]);
    const getVideo = async () => {
      try {
        const resp = await videoRequest.getVideo()
        setVideo(() => resp.data)
      } catch (e) {
        console.log(e);
      }
    }
    useEffect(() => {
      getVideo();
    }, [])
    return (
            <main>
               <div className='container'>
                 <div className='cards-container'>
                   {
                      video.length > 0 && video.map((item) => {
                        return <CardVideo imageUrl={item.thumbnail_youtube} uuid={item.uuid} key={item.uuid}/>
                      })
                   }
                 </div>
               </div>
             </main>
    )
}

export default Home;