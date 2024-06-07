import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

import Flex from '../Flex/flex';
import { H32, P14, P16, P18, P21 } from '../TXT/TXT';
import './style.css';

import empty from '../../assets/images/empty.svg';

import { useNavigate } from 'react-router-dom';

import minus from "../../assets/images/minus.svg";
import plus from "../../assets/images/plus.svg";
import { Cart, drawerState } from 'utils/recoil/atoms';
import { Button } from 'components';
import { useRecoilState } from 'recoil';
import { useMediaQuery } from 'react-responsive';
import Width from 'components/width/width';
function CartToggle({ onchange, opens }) {
    const [openDrawer, setOpenDrawer] = React.useState(false);

    React.useEffect(() => {
        if (opens !== openDrawer) {
            setOpenDrawer(opens);
            setDrawer(opens);
        }
    }, [opens]);

    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
        setDrawer(newOpen);

        if (typeof onchange === 'function') {
            onchange(newOpen);
        }
    };

    const [drawer, setDrawer] = useRecoilState(drawerState);
    const [cart, setCart] = useRecoilState(Cart);
    const [count, setCount] = React.useState(1);
    const [product, setProduct] = React.useState();
    React.useEffect(() => {
        setOpenDrawer(drawer);
    }, [drawer]);

    const navigate = useNavigate();

    React.useEffect(() => {
        console.log(cart);
    }, [cart]);

    const responsive = useMediaQuery({ query: '(max-width: 1224px)' })
    
    React.useEffect(() => {
        console.log(cart);
        
        if (cart.length > 0 && product) {
            let arr = cart.find(x => x._id == product._id)
            if (arr)
                setCount(arr.count)
        }

    }, [cart, product]);

    const decreaseCount = (id,countRed) => {
        if (countRed > 1) {
            setCart(prevCart => prevCart.map(item => 
                item._id === id ? { ...item, count: item.count - 1 } : item
              ));
          
        }
    };
    const increaseCount = (id) => {

        setCart(prevCart => prevCart.map(item => 
            item._id === id ? { ...item, count: item.count + 1 } : item
          ));
};
    const DrawerList = (
        <Box
            sx={{
                width: responsive ? '90vw' : 450,
                flexDirection: 'column',
                display: 'flex',
                height: '100vh',
                gap: '1%',
            }}
            role="presentation"
        >
            <Width className="box_res_text">
                <Flex>
                    <P14 weight={'600'}>REVISER VOTRE PANIER</P14>
                </Flex>
            </Width>
            <Width width={'100%'} className="bg_color">
                <Flex flex="center" align="center">
                    <P16 weight={'200'}>Vos trouvez votre ordre en détails</P16>
                </Flex>
            </Width>

            <Width width={'100%'} className="color_h60">
                {cart.length > 0 ? (
                    <List>
                        {cart.map((text) => (
                            <Width className="card" key={text._id}>
                                <Flex flex="between" align="start">
                                    <Width width={'30%'}>
                                        <img className="img" src={process.env.REACT_APP_API_BACK_IMG + "/uploads/" + text.image[0]} alt={text.image[0]} />
                                    </Width>
                                    <Width width={'65%'} className="prod">
                                        <div className="text">
                                            <P18 weight={500}>{text.title}</P18>
                                            <P14>{text.categorie?.title}</P14>
                                        </div>
                                        <Flex flex="between">
                                            <Width width={'40%'}>
                                                <Flex>
                                                    <Width width={'30%'} onclick={e => decreaseCount(text._id,text.count)}>
                                                        <Flex flex="center" align="center">
                                                            <img src={minus} alt="" width={32} height={32}/>
                                                        </Flex>
                                                    </Width>
                                                    <Width width={'40%'} className="price">
                                                        <Flex flex="center" align="center">
                                                            <P14 weight={600}>{text.count}</P14>
                                                        </Flex>
                                                    </Width>
                                                    <Width width={'30%'} onclick={e => increaseCount(text._id)}>
                                                        <Flex flex="center" align="center" >
                                                            <img src={plus} alt="" width={32} height={32}/>
                                                        </Flex>
                                                    </Width>
                                                </Flex>
                                            </Width>
                                            <Width width={'60%'}>
                                                <Flex flex="end">
                                                    <P16 weight={'600'}>{text.price} TND</P16>
                                                </Flex>
                                            </Width>
                                        </Flex>
                                    </Width>
                                </Flex>
                            </Width>
                        ))}
                    </List>
                ) : (
                    <Width className="empty">
                        <div style={{ textAlign: 'center' }}>
                            <img src={empty} alt="empty" />
                            <P21>Panier Vide</P21>
                        </div>
                    </Width>
                )}
            </Width>
            <Width className="footer">
                <Flex align="center" flex="center">
                    <Width width={'80%'}>
                        <div
                            width={'100%'}
                            onClick={(e) => {
                                setOpenDrawer(false);
                                setDrawer(false);
                                navigate('/cart');
                            }}
                        >
                            <Button weight="300" className="button" color='#fff'>
                                Passer au paiment
                            </Button>
                        </div>
                        <Button
                            weight="300"
                            className="button_wh"
                            onClick={(e) => {
                                setDrawer(false);
                                setOpenDrawer(false);
                                setCart([]);

                            }}
                        >
                            Vider votre panier
                        </Button>
                    </Width>
                </Flex>
            </Width>
        </Box>
    );

    return (
        <Drawer
            sx={{ width: responsive ? '100%' : '100%' }}
            anchor="right"
            open={openDrawer}
            onClose={toggleDrawer(false)}
        >
            {DrawerList}
        </Drawer>
    );
}

export default CartToggle;