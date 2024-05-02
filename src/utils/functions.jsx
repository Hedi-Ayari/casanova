import { useEffect } from "react";
import { Get ,Register,Login,Create,CreateImage,getUser,GetId,DeleteFile,Update,Delete} from "../service/api";
import { ProductListState ,User} from "./recoil/atoms";
import { useRecoilState } from "recoil";
import { useQueryClient } from "react-query";


export function ProductList() {
  const [productList, setProductList] = useRecoilState(ProductListState);


  useEffect(() => {
    const fetchAndSetProductList = async () => {
      try {
        const data = await Get("Product");
        setProductList(data);
      } catch (error) {
        console.error("Error prefetching product data:", error);
      }
    };

    fetchAndSetProductList();
  }, [setProductList]);

  return null;
}
export function useDelete() {
  async function useDelete(modelName,id) {
    try {
      const response = await Delete({ modelName,id });
    } catch (error) {
      console.error("Error registering user:", error.response.data.error);
      return error.response.data.error;
    }
  }

  return useDelete;
}
export function useRegisterUser() {
  async function registerUser(userData) {
    try {
      const response = await Register({ body: userData });
      console.log(response);
      return response
    } catch (error) {
      console.error("Error registering user:", error.response);
      return error.response;
    }
  }

  return registerUser;
}

export function useLoginUser() {
  const [user, setUser] = useRecoilState(User);
  async function useLoginUser(userData) {
    try {
      const response = await Login({ body: userData });
      setUser(response.token);
    } catch (error) {
      console.error("Error Logging user:", error.response.data.error);
      return error.response.data.error;
    }
  }

  return useLoginUser;
}

export function useUpdate() {
  async function useUpdate(id,data) {
    try {
      const response = await Update( "User" ,id,data );
      return { status: 200, data: response };
    } catch (error) {
      console.error("Error Logging user:", error.response.data.error);
      return error.response.data.error;
    }
  }

  return useUpdate;
}


export function useCreateImage() {
  async function useCreateImage(formData, onUploadProgress) {
    try {
      const response = await CreateImage(formData, onUploadProgress);
      return response; 
    } catch (error) {
      console.error("Error :", error.response.data.error);
      return error.response.data.error;
    }
  }

  return useCreateImage;
}
export function useDeleteFile() {
  async function useDeleteFile(userId,fileName,type) {
    try {
      const response = await DeleteFile(userId,fileName,type);
      return { status: 200, data: response };
      } catch (error) {
      console.error("Error :", error.response.data.error);
      return error.response.data.error;
    }
  }

  return useDeleteFile;
}

export function useCreate() {
  async function useCreate(data) {
    console.log(data);
    try {
      const response = await Create(data);
      return response; 
    } catch (error) {
      console.log(error);
      console.error("Error :", error.response.data.error);
      return error.response.data.error;
    }
  }

  return useCreate;
}
export function useGetUser() {
  async function useGetUser(token) {
    try {
      const response = await getUser(token);
      return response; 
    } catch (error) {
      console.error("Error :", error);
      return {status:401};
    }
  }

  return useGetUser;
}

export function useGetById() {
  async function useGetById(modelName,id) {
    try {
      const response = await GetId(modelName,id);
      return response; 
    } catch (error) {
      console.error("Error :", error.response.data.error);
      return error.response.data.error;
    }
  }

  return useGetById;
}

export function useGet() {
  async function useGet(modelName,querry) {
    try {
      const response = await Get(modelName,querry);
      return response; 
    } catch (error) {
      console.error("Error :", error.response.data.error);
      return error.response.data.error;
    }
  }

  return useGet;
}

