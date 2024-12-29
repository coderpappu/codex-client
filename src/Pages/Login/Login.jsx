import { useEffect,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { signIn } from '../../helper/helper';
import axios from 'axios'
// import { Navigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // csrf system here start
  const domainUrl = "http://localhost:8080";
  const [csrfTokenState, setCsrfTokenState] = useState("");
  const [haveWeReceivedPostResponseState, setHaveWeReceivedPostResponseState] =
    useState("not yet");

  async function getCallToForm() {
    const url = "/form";

    try {
      const axiosGetResponse = await axios.get(`${domainUrl}${url}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      const parsedResponse = axiosGetResponse.data;
      console.log(parsedResponse);
      // Ensure that the CSRF token is extracted correctly

      setCsrfTokenState(parsedResponse.csrfToken);
    } catch (error) {

      console.error("Error making GET request:", error);
    }
  }
  useEffect(() => {
    getCallToForm();
  }, []);

  async function testCsurfPostClick() {
    const url = "/process";
    try {
      const axiosPostResponse = await axios.post(`${domainUrl}${url}`, null, {
        headers: {
          "Content-Type": "text/plain",
          "X-XSRF-TOKEN": csrfTokenState, // Use the correct header name
        },
        withCredentials: true,
      });

      // Expecting a text response
      const responseText = axiosPostResponse.data;
      console.log(responseText);
      setHaveWeReceivedPostResponseState(responseText);
    } catch (error) {
      console.log("Error making POST request:", error);
    }
  }

  // csrf system here end
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    testCsurfPostClick();

    // let resSignin = signIn({ email, password });

    // resSignin.then((res) => {
    //   let { token } = res.data;
    //   localStorage.setItem("token", token);

    //   navigate("/dashboard");
    // });
  };
  console.log(haveWeReceivedPostResponseState);
  return (
    //login page
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
        <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
          <div className='max-w-md mx-auto'>
            <div>
              <h1 className='text-2xl font-semibold'>
                Login with as Administrator
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='divide-y divide-gray-200'>
                <div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
                  <div className='relative'>
                    <input
                      autoComplete='off'
                      id='email'
                      name='email'
                      type='text'
                      className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                      placeholder='Email Or Username'
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                    <label
                      htmlFor='email'
                      className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                    >
                      Email Or Username
                    </label>
                  </div>
                  <div className='relative'>
                    <input
                      autoComplete='off'
                      id='password'
                      name='password'
                      type='password'
                      className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                      placeholder='Password'
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    <label
                      htmlFor='password'
                      className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                    >
                      Password
                    </label>
                  </div>
                  <span className=' text-base'>
                    Don’t have an account yet?
                    <Link to='/register'>Sign up</Link> Now
                  </span>
                  <div className='relative'>
                    <button className='bg-blue-500 text-white rounded-md px-4 py-2'>
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
