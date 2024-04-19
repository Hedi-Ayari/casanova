import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { User } from "./utils/recoil/atoms";
import { useRecoilState } from "recoil";
import { useGetUser } from "utils/functions";
import NotFound from "pages/NotFound";
const PresMedia = React.lazy(() => import("pages/PresMedia"));
const PresproduitOne = React.lazy(() => import("pages/PresproduitOne"));
const Presbalance = React.lazy(() => import("pages/Presbalance"));
const PresSettings = React.lazy(() => import("pages/PresSettings"));
const Presproduit = React.lazy(() => import("pages/Presproduit"));
const Preshomepageaviabilty = React.lazy(
  () => import("pages/Preshomepageaviabilty"),
);
const Preshomepage = React.lazy(() => import("pages/Preshomepage"));
const Prescreatproduit = React.lazy(() => import("pages/Prescreatproduit"));
const Preslandingpage = React.lazy(() => import("pages/Preslandingpage"));
const PresPHOTO = React.lazy(() => import("pages/PresPHOTO"));
const PresPHOTOOne = React.lazy(() => import("pages/PresPHOTOOne"));
const USERSETTING = React.lazy(() => import("pages/USERSETTING"));
const Homepage = React.lazy(() => import("pages/Homepage"));


const Signup = React.lazy(() => import("pages/Signup"));
const PresSignup = React.lazy(() => import("pages/PresSignup"));


const SignIn = React.lazy(() => import("pages/SignIn"));
const PresSignIn = React.lazy(() => import("pages/PresSignIn"));

const Checkout = React.lazy(() => import("pages/Checkout"));


const CategoryPage = React.lazy(() => import("pages/CategoryPage"));
const ProductDetailPage = React.lazy(() => import("pages/ProductDetailPage"));
const Pres = React.lazy(() => import("pages/Pres"));
const Cart = React.lazy(() => import("pages/Cart"));

const Contact = React.lazy(() => import("pages/LandingPage/contactMain"));
const LandingpagesThree = React.lazy(() => import("pages/LandingpagesThree"));
const LandingpageContact = React.lazy(() => import("pages/LandingpageContact"));
const LandingpagesSeven = React.lazy(() => import("pages/LandingpagesSeven"));
const LandingpagesSix = React.lazy(() => import("pages/LandingpagesSix"));
const LandingpagesFive = React.lazy(() => import("pages/LandingpagesFive"));
const LandingpagesFour = React.lazy(() => import("pages/LandingpagesFour"));
const Landingpage = React.lazy(() => import("pages/LandingPage"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const PresorderPage = React.lazy(() => import("pages/Presorder"));

const ProjectRoutes = () => {
  const [loggedIn, setLoggedIn] = useState(null)
  const checkvalidUser = useGetUser()
  const [token, setToken] = useRecoilState(User);
  React.useEffect(() => {

  }, [token]);
  React.useEffect(() => {
    const fetchUserFromToken = async () => {
      if (!token) {
        setLoggedIn(false)
        return
      }
      const user = await checkvalidUser(token)
      if (user.status != 401) {
        await setLoggedIn(true)
      } else {
        setLoggedIn(false)
        return
      }
    };

    fetchUserFromToken();
  }, [token]);
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        {loggedIn === null ? ( // Check if loggedIn state is null (initial state)
          <div>Loading...</div> // Display a loading message while waiting for the state to update
        ) : (
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Landingpage />} />
            {/* <Route path="/PresSignIn" element={<SignIn /> } /> */}
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/PresSignIn" element={<PresSignIn />} />

            <Route path="/PresSignup" element={<PresSignup />} />

            <Route path="/Signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/SignIn" />} />

            <Route path="/Dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/Signup" />} />
            <Route path="/presphoto/:id" element={<PresPHOTO />} />
            <Route path="/landingpagesfour" element={<LandingpagesFour />} />
            <Route path="/Landingpage" element={<Landingpage />} />

            <Route path="/landingpagesfive" element={<LandingpagesFive />} />
            <Route path="/landingpagessix" element={<LandingpagesSix />} />
            <Route path="/landingpagesseven" element={<LandingpagesSeven />} />
            <Route path="/landingpagesthree" element={<LandingpagesThree />} />
            <Route path="/preslandingpage" element={<Preslandingpage />} />
            <Route path="/contact" element={<Contact />} />

            {/* Private routes */}
            {loggedIn && (
              <>
                <Route path="/homepage" element={loggedIn ? <Homepage /> : <Navigate to="/Signup" />} />
                <Route path="/category" element={loggedIn ? <CategoryPage /> : <Navigate to="/Signup" />} />
                <Route path="/Checkout" element={loggedIn ? <Checkout /> : <Navigate to="/Signup" />} />
                <Route path="/cart" element={loggedIn ? <Cart /> : <Navigate to="/Signup" />} />
                <Route path="/productdetailpage/:id" element={loggedIn ? <ProductDetailPage /> : <Navigate to="/Signup" />} />
                <Route path="/Dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/Signup" />} />

                <Route path="/usersetting" element={loggedIn ? <USERSETTING /> : <Navigate to="/Signup" />} />

              </>
            )}
          </Routes>
        )}
      </Router>
    </React.Suspense>
    /*
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingpagesTwo />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/landingpagesfour" element={<LandingpagesFour />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/PresorderPage" element={<PresorderPage />} />
          <Route path="/Checkout" element={<Checkout />} />

          
          <Route path="/landingpagesfive" element={<LandingpagesFive />} />
          <Route path="/landingpagessix" element={<LandingpagesSix />} />
          <Route path="/landingpagesseven" element={<LandingpagesSeven />} />
          <Route path="/landingpagesthree" element={<LandingpagesThree />} />
          <Route path="/cart" element={<Cart />} /> {"done"}
          
          <Route path="/pres" element={<Pres />} /> {"done"}
         
          <Route path="/homepage" element={<Homepage />} /> {"done"}
           {"done"}
          <Route path="/presphotoone" element={<PresPHOTOOne />} />  {"done"}
          <Route path="/presphoto" element={<PresPHOTO />} /> {"need to be edited"}
          <Route path="/preslandingpage" element={<Preslandingpage />} /> {"done"}
          <Route path="/Signup" element={<Signup />} /> {"done"}
          <Route path="/PresSignIn" element={<PressignIn />} /> {"done"}
          
          <Route path="/prescreatproduit" element={<Prescreatproduit />} /> {"need to be edited"}
          <Route path="/preshomepage" element={<Preshomepage />} />
          <Route path="/preshomepageaviabilty" element={<Preshomepageaviabilty />}/>{"not done yet"}
          <Route path="/presproduit" element={<Presproduit />} />
          <Route path="/pressettings" element={<PresSettings />} />
          <Route path="/presbalance" element={<Presbalance />} />
          <Route path="/presmedia" element={<PresMedia />} />
        </Routes>
      </Router>
    </React.Suspense>
 */ );
};
export default ProjectRoutes;
