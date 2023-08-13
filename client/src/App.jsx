import React, { useEffect } from 'react';
import { video } from './services';
import Router from './App.routes';


export default function App() {
   const getVideo = async () => {
    try {
       const resp = await video.getVideo()
       console.log(resp.data)
     } catch (e) {
       console.log(e)
     }
   }
   useEffect (() => {
     getVideo();
   }, [])
  return (
    <Router />
  );
}
