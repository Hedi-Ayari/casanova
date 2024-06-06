

import React, { useEffect } from "react";
import './style.css';
import moment from "moment";
import md5 from "md5";
import { useNavigate } from "react-router-dom";


export const OrderItems = ({ item }) => {

    const navigate = useNavigate()

    const shortenOrderId = (orderId) => {
        const hashedId = orderId
        return hashedId.substring(0, 8);
    };

    return (
        
        <div className="card-item">
            <div className="relative">

                <div className="w-[100%] py-2">
                    <div className="flex justify-between py-4 w-[100%]" >
                        <div className="flex justify-between items-end gap-[20px] w-[100%]">
                            <div className="flex flex-col gap-[15px]">

                                <div>
                                    <p className="text-sub">Order</p>
                                    <p className="text-hash-main">#{shortenOrderId(item._id)}</p>
                                </div>
                                <div className="">
                                    <p className="text-sub">Date</p>
                                    <p className="text-date-main">{moment(item.date).format('YYYY-MM-DD')}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-sub">Prix</p>
                                <p className="text-price">{item.totalPrice}<span className="text-price-span">TND</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] h-[48px]">
                        <button className="btn-eval" onClick={e => navigate('/one-ordre/' + item._id )}>Afficher tous les détails</button>
                    </div>
                </div>

            </div>
        </div>
    )
}