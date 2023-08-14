import React, { useEffect, useRef, useState } from "react";
import "./DetailVideo.css";
import { CardProduct, CardComment, BubbleLoading } from "../../components";
import { product as productRequest, comment as commentRequest, } from "../../services";
import { useParams } from "react-router";
import { useComment } from "../../hooks";


const DetailVideo = () => {
    const { uuid } = useParams();
    const [update, setUpdate] = useState(false);
    const [loading, comment] = useComment(uuid, update); 
    const [data, setData] = useState({
        product: [],
        comment: []
    })
    const [dataComment, setDataComment] = useState({
        username: "",
        comment: "",
        video_id: uuid
    })
    const dummy = useRef(null);    

    const getProduct = async (uuid) => {
        try {
            const resp = await productRequest.getProduct(uuid);
            setData((prev) => ({
                ...prev,
                "product": resp.data.data
            }))
            // console.log(resp);
        } catch (error) {
            console.log(error);
        }
    }
    // const getComment = async (uuid) => {
    //     try {
    //         const resp = await commentRequest.getComment(uuid);
    //         setData((prev) => ({
    //             ...prev,
    //             "comment": resp.data.data
    //         }));
    //         setUpdate(false);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    const postComment = async (data) => {
        try {
            const resp = await commentRequest.postComment(data)
            console.log(resp.data);
            setUpdate(prev => !prev);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProduct(uuid);
    }, [uuid])
    // useEffect(() => {
    //     getComment(uuid);
    // }, [uuid, update])
    return (
        <div className="detail-page">
            <div className="product-swiper">
                <div className="product-swiper__wrapper">
                    {
                        data.product.length > 0 && data.product.map((item => {
                            return <CardProduct url={item.product_url} name={item.title} key={item.uuid}/>
                        })) 
                    }
                    <div ref={dummy}/>
                </div>
                <div className="product-swiper__button" onClick={() => {
                    dummy.current.scrollIntoView({ behavior: "smooth" });
                }}>

                </div>
            </div>
            <div className="videoWrapper">
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" frameBorder="0" allowFullScreen className="video"></iframe>
            </div>
            <div className="comment-box">
                <h1>Create a comment</h1>
                    <input type="text" placeholder="username" onChange={(e) => {
                        setDataComment(prev => ({
                            ...prev,
                            "username": e.target.value
                        }))
                    }}/>
                    <input type="text" placeholder="comments" onChange={(e) => {
                        setDataComment(prev => ({
                            ...prev,
                            "comment": e.target.value
                        }))
                    }}/>
                <button onClick={() => {
                    postComment(dataComment);
                    // setUpdate(true);
                }}>{
                    loading ? <BubbleLoading /> : "Submit"
                }</button>
                <div className="comment-display">
                    <h1>Comment</h1>
                    <div className="comment-display__body">
                        {
                            comment.length > 0 && comment.map((item) => {
                                return <CardComment username={item.username} comment={item.comment} key={item.uuid}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailVideo;