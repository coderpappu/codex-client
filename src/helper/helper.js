import axois from './api.js';
import { jwtDecode } from 'jwt-decode';




// Set default headers

// axois.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// ** Make API Request

// to get user from token
export async function getUsername() {
  const token = localStorage.getItem('token');
  if (!token) return Promise.reject('Token not found');
  let decode = jwtDecode(token);
  return decode;
}
export async function allBlogs() {
  try {
    let allBlogs = axois.get('/allBlog')
    return Promise.resolve(allBlogs)
  } catch (error) {
    return error;

  }
}
export async function addBlog(credentials) {
  
  try {
    const { data } = await axois.post('blogadd', credentials);
    return data;
  } catch (error) {
    return error;
  }
}
export async function singleBlog(credentials) {
  try {
    const { data } = await axois.post('singleBlog', credentials);
    return data;
  } catch (error) {
    return error;
  }
}

export async function editBlog(credentials) {
  try {
    const token = localStorage.getItem('token');

    const data = await axois.put(`/editBlog/${credentials?.id}`, credentials, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return Promise.resolve(data);
  } catch (error) {
    return error;
  }
}

export async function signIn(credentials) {
  try {
    const { data } = await axois.post(
      `signin?email=${credentials.email}`,
      credentials
    );
    return Promise.resolve({ data });
  } catch (error) {
    return error;
  }
}

// export async function signUp(credentials) {
//   try {
//     const { data } = await axois.post("signup", credentials);
//     return Promise.resolve(data);
//   } catch (error) {
//     return { error };
//   }
// }

export async function signUp(credentials) {
  try {
    const { data } = await axois.post('signup', credentials);
    return Promise.resolve(data);
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 409) {
        return { error: data };
      }
      return { error: data };
    } else if (error.request) {

      return { error: 'No response received from the server' };
    } else {
      return { error: error.message };
    }
  }
}

export async function updateUser(credentials) {
  try {
    const token = localStorage.getItem('token');

    const data = await axois.put('/updateuser', credentials, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return Promise.resolve(data);

  } catch (error) {
    return error;
  }
}
