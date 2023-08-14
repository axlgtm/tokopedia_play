import React, { useEffect, useState } from "react";
import { comment as commentRequest, } from "../services";


const useComment = (uuid, updated) => {
    const [comment, setComment]  = useState([]);
    const [loeading, setLoading] = useState(true);
    
    const getComment = async (uuid) => {
        try {
            console.log('akan get data', updated);
            const resp = await commentRequest.getComment(uuid);
            setComment(resp.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getComment(uuid);
    }, [uuid, updated])

    return [loeading, comment]
}

export default useComment;