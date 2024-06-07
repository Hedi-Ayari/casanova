import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Rating } from "components/rating";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetById, useGetUser } from "utils/functions";
import './style.css'
import { User } from "utils/recoil/atoms";
import { useRecoilState } from "recoil";
import { CreateFeedBack } from "service/api";
import CustomToast from "components/toast";
import toast from "react-hot-toast";
import { SwiperSlide,Swiper } from "swiper/react";

const FeedbackPage = () => {

    const order = useGetById();

    const {id} = useParams();
    const {id_order} = useParams();
    const [orders,setOrders] = useState(null)
    const [oneorders,setoneOrders] = useState(null)
    const [text,setTextArea] = useState('')
    const [rating,setRating] = useState(null)
    const [users,setUser] = useState(null)
    useEffect(async ()=>{
        
        try{
    
            const orderCount = await order("User",id);

            setOrders(orderCount)
            return orderCount;

        }catch(err){
            console.log(err);
        }
        
    },[id])

    useEffect(async ()=>{
        
        try{
    
            const orderCount = await order("Order",id_order);

            setoneOrders(orderCount)
            return orderCount;

        }catch(err){
            console.log(err);
        }
        
    },[id])

    const GetUser = useGetUser();
    const [user] = useRecoilState(User);

    useEffect(() => {
        
        const fetchUser = async () => {
            try {
                let userData = await GetUser(user);
                setUser(userData);
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };
    
        fetchUser();
      }, []);
    
    const hnadleRating = (data) =>{
        console.log("rating",data);
        setRating(data)
    }
    const navigate = useNavigate()

    const hnadleSubmits = async (data) =>{
        try{
            const createFeed = await CreateFeedBack(data);
            
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

              navigate('/category')

        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        console.log(oneorders);
    },[oneorders])

    const handleSubmit = () =>{

        const feedback = {
            owner:users.user._id,
            receiver:orders._id,
            text,
            note:rating,
            //prod_id:id_prod,
            order_id:id_order
        }

        hnadleSubmits(feedback);

    }

    return (
        <>
        <NavBar></NavBar>
        <div className="order-tav my-10  md:my-2">
            {orders && 
            <Swiper
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
       
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
            }}
           
            className="swiper-container"
          >
            {oneorders.products.map((one,index)=>{
                return(
                    <SwiperSlide key={index} className="relative cursor-pointer"  >
                    <div className="flex justify-center" key={index}>
                      <div className=" md:w-[95%] w-[45%] shad my-7">
                          <div className="w-[100%] flex justify-center mb-10 relative">
                              <div className="w-[100%] md:h-[100px] h-[200px]" style={{borderRadius:"12px"}}>
                                  <img src={process.env.REACT_APP_API_BACK_IMG+"/uploads/"+one.owner.thumbnail} alt={process.env.REACT_APP_API_BACK_IMG+"/uploads/"+one.owner.picture} style={{height:"100%",width:"100%",objectFit:"cover",borderRadius:"12px"}} className="shad"/>
                              </div>
                              <div className="md:w-[64px] md:h-[64px] w-[84px] h-[84px] absolute image-ab" style={{borderRadius:"15px"}}>
                                  <img src={process.env.REACT_APP_API_BACK_IMG+"/uploads/"+one.owner.picture} alt="" style={{height:"85%",width:"85%",objectFit:"fill",borderRadius:"12px"}}  />
                              </div>
                          </div>
                          <div className="text-center">
                              <p className="text-order py-3">{one.owner.businessName}</p>
                              <p className="text-date py-3">{one.owner.email?.primary}</p>
                              <p className="text-delivery py-3">. Ordre Délivré</p>
                          </div>
                          <div className="py-3 text-center">
                              <p className="text-note">Noter notre services</p>
                          </div>
                          <div className="w-[100%] flex justify-center">
                              <Rating edit={true} onChange={hnadleRating}></Rating>
                          </div>
                          <div className="my-3 px-4">
                              <textarea style={{ width: "100%",resize:"none", }} placeholder="Votre Avis est trés importante..." className="input-brown" rows="5" onChange={e => setTextArea(e.target.value)}></textarea>
                          </div>
                          <div className="my-3 px-4">
                              <button style={{ width: "100%",resize:"none", }} onClick={handleSubmit} className="button-browns">Envoyer</button>
                          </div>
                      </div>
                  </div>
                    </SwiperSlide>
                )
            })}
             
          </Swiper>
            
            }
            
        </div>
        <Footer></Footer>
        </>
    )
}

export default FeedbackPage;