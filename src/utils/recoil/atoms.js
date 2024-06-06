import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist({
  key: 'recoil-persist', 
  storage: localStorage,
  converter: JSON 
})

export const ProductListState = atom({
    key: 'ProductListState', 
    default: [], 
  });
  
  export const User = atom({
    key: 'User', 
    default: {}, 
    effects_UNSTABLE: [persistAtom],

  });
  export const SearchQuerry = atom({
    key: 'SearchQuerry', 
    default: "", 
    effects_UNSTABLE: [persistAtom],

  });
  export const Cart = atom({
    key: 'Cart', 
    default: [], 
    effects_UNSTABLE: [persistAtom],
  });

  export const drawerState = atom({
    key: 'drawerState',
    default: false,
  });