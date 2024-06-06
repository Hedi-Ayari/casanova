import customAxios from "../axios/custom";

export async function CreateImage(formData, onUploadProgress) {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: onUploadProgress // Pass the progress callback here
    };

    const res = await customAxios.post("multer/upload/", formData, config);
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("Error in Create function:", error);
    throw error;
  }
}
export async function GetCategory(modelName,categorie) {
  const res = await customAxios.get(`/crudRouter/product-categorie/?modelName=${modelName}&category=${categorie}`);
  return res.data;
}

export async function contact(data) {
  try {


    const res = await customAxios.post("/mailer/contact/", data);
    return res.data;
  } catch (error) {
    console.error("Error in Create function:", error);
    throw error;
  }
}

export async function DeleteFile(userId,fileName,type) {
  try {  
    const res = await customAxios.delete(`multer/delete-file/${fileName}/${userId}`, {
     data:{
      type
     }
    });
    return res.data;
  } catch (error) {
    console.error("Error in delete function:", error);
    throw error;
  }
}

export async function Create(data) {
  try {

    
    const res = await customAxios.post("crudRouter/", data);
    return res.data;
  } catch (error) {
    console.error("Error in Create function:", error);
    throw error;
  }
}
export async function GetId(modelName,id) {
  let requestId = id;
  if (id && id._id) {
    requestId = id._id;
  }
  const res = await customAxios.get(`/crudRouter/get/${requestId}?modelName=${modelName}`);
  return res.data;
}




  export async function Get(modelName, searchQuery) {
    const queryParams = searchQuery ? `&${serialize(searchQuery)}` : '';
    const res = await customAxios.get(`/crudRouter?modelName=${modelName}${queryParams}`);
    return res.data;
  }
    export async function Search(modelName, searchQuery) {
    const queryParams = searchQuery ? `&${serialize(searchQuery)}` : '';
    const res = await customAxios.get(`/crudRouter/search?modelName=${modelName}${queryParams}`);
    return res.data;
  }
  function serialize(obj) {
    return Object.keys(obj)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
      .join('&');
  }
    
  export async function Update(modelName,id,data) {
    const res = await customAxios.put(`/crudRouter/${id}?modelName=${modelName}`,data);
    return res.data;
  }

  export async function GetMyOder(modelName,id,data) {
    const res = await customAxios.get(`/crudRouter/my-orders/${id}?modelName=${modelName}`);
    return res.data;
  }

  export async function Delete({modelName,id}) {
    const res = await customAxios.delete(`/crudRouter/${id}?modelName=${modelName}`);
    return res.data;
  }

  export async function Register({body}) {
    console.log(body);
    const res = await customAxios.post(`/public/auth/register/`,body);
    console.log(res);
    return res;
  }

  export async function CreateFeedBack(data) {
    console.log(data);
    const res = await customAxios.post(`/feedback/createFeedBack`,data);
    console.log(res);
    return res;
  }

  export async function GetByIdBackByUser(id) {
    const res = await customAxios.get(`/feedback/getByIdBackByUser/`+id);
    console.log(res);
    return res;
  }
  export async function getFeedbackByProd(id) {
    const res = await customAxios.get(`/feedback/getFeedbackByProd/`+id);
    console.log(res);
    return res;
  }
  
  export async function Login({body}) {
    const res = await customAxios.post(`/public/auth/login/`,body);
    return res.data;
  }
  
  
  export async function getUser(token) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const res = await customAxios.get(`users/protected-route/`, { headers });
    return res.data;
  }