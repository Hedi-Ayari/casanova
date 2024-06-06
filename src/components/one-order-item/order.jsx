import React, { useEffect, useState } from "react";
import './style.css';
import moment from "moment";
import md5 from "md5";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { CreateFeedBack } from "service/api";
import CustomToast from "components/toast";
import { Rating } from "components/rating";
import { useGetUser } from "utils/functions";
import { User } from "utils/recoil/atoms";
import { useRecoilState } from "recoil";


export const OneOrderItems = ({ product, id, is_evaluated }) => {
    const GetUser = useGetUser();
    const [user] = useRecoilState(User);

    const navigate = useNavigate()
    const [order, setOrder] = useState([]);
    const [orders, setOrders] = useState([]);
    const [open, setOpen] = useState(false);
    const [isevaluated, setisevaluated] = useState()
    useEffect(()=>{
        console.log(is_evaluated);
        setisevaluated(product.is_evaluated)
    },[product.is_evaluated]);
    const [text, setTextArea] = useState('')
    const [rating, setRating] = useState(null)

    const shortenOrderId = (orderId) => {
        const hashedId = orderId
        return hashedId.substring(0, 8);
    };


    const hnadleSubmits = async (data) => {
        try {
            const res = await CreateFeedBack(data);
            if (res) {
                setisevaluated(true)
            
            

            }
            toast.custom(
                (t) => (
                    <CustomToast
                        data={t}
                        message="Feedback créer avec succées"
                        title="Info"
                    ></CustomToast>
                ),
                {
                    duration: 3000,
                }
            );


        } catch (err) {
            console.log(err);
        }
    }
    const hnadleRating = (data) => {
        console.log("rating", data);
        setRating(data)
    }
    const handleSubmit = async (x) => {
        const users = await GetUser(user);

        const feedback = {
            owner: users.user._id,
            receiver: x.owner._id,
            text,
            note: rating,
            prod_id: x.id_product._id,
            order_id:id
        }

        hnadleSubmits(feedback);

    }
    
    return (
        <div className="card-item">
            <div className="relative">
                <div className="text-absolutse flex justify-end">
                    <p><b>#{shortenOrderId(product._id)}</b></p>
                </div>


                <div className="w-[100%] mb-4" >
                    <div className="flex justify-between " >
                        <div className="flex gap-[20px]">
                            <div className="image-bor">
                                <img src={process.env.REACT_APP_API_BACK_IMG + "/uploads/" + product.id_product.image[0]} alt="" width={"100%"} height={"100%"} style={{ borderRadius: "8px" }} />
                            </div>
                            <div>
                                <p className="text-sub">{product.quantity} Items</p>
                                <p className="text-date-main">{product.id_product.title}</p>
                            </div>
                        </div>
                    </div>

                </div>



                <div className="flex justify-between items-end mt-3 mb-6">
                    <div>
                        <p className="text-sub">Prix</p>
                        <p className="text-price">{product.id_product.price}<span className="text-price-span">TND</span></p>
                    </div>
                    <div>
                        <p className="text-sub">Prestataire</p>
                        <p className="text-date-main">{product.owner.businessName}</p>
                    </div>
                </div>
                {isevaluated == false  && 
                <div className="mt-4">
                    <div className="flex justify-center text-[18px] font-montserrat ">
                        <p>Noter le service du prestataire </p>

                    </div>

                    <div className="w-[100%] mb-3 font-montserrat flex justify-center items-center gap-[10px]">
                        <Rating edit={true} onChange={hnadleRating}></Rating>
                    </div>
                    <div className="mb-3">
                        <textarea style={{ width: "100%", resize: "none", }} placeholder="Votre Avis est trés importante..." className="input-browns" rows="3" onChange={e => setTextArea(e.target.value)}></textarea>
                    </div>
                    <div className="my-3">
                        <button style={{ width: "100%", resize: "none", }} onClick={e => handleSubmit(product)} className="button-browns">Envoyer</button>
                    </div>
                </div>}
                
            </div>
        </div>
    )
}