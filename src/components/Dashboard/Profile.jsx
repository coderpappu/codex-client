import { useState } from "react";
import Error from "../../components/ui/Error";
import { updateUser } from "../../helper/helper";
import useFetch from "../../hook/fetch.hook";

const Profile = () => {
  const [{ apiData }] = useFetch();
  const {
    name: profileName,
    username: profileUsername,
    email: profileEmail,
    image: profileImg,
  } = apiData || {};

  const [name, setName] = useState(profileName);
  const [user, setUser] = useState(profileUsername);
  const [email, setEmail] = useState(profileEmail);
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState(profileImg || null);
  const [imageSize, setImageSize] = useState("");
  const [update, setUpdate] = useState(false);

  console.log({ profileName, profileEmail });

  const reset = () => {
    setName("");
    setEmail("");
    setPass("");
    setConfirmPass("");
    setError("");
    setUser("");
    setImagePreview(null);
  };
  const profileData = {
    name,
    username: user,
    email,
    password: pass,
    image: imagePreview,
  };
  const onImageSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setImageSize(file);
    reader.onload = () => {
      setImagePreview(reader.result);
    };

    reader.readAsDataURL(file);
  };
  console.log(imagePreview);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageSize?.size > 1000000) {
      setError("Image is too large. Image size must below 1MB ");
    } else if (pass !== confirmPass) {
      setError("Password does not match !");
    } else if (pass.length < 6) {
      setError("Password must be at least 6 characters");
    } else if (user.length < 7) {
      setError("Username must be at least 7 characters");
    } else {
      updateUser(profileData);
      reset();
    }
  };
  const handleUpdateState = (e) => {
    e.preventDefault();
    setUpdate(!update);
    console.log("setting");
  };
  return (
    //register
    <div className="min-h-screen bg-gray-100 py-6 sm:py-12 grid md:grid-cols-3 grid-cols-1">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto md:col-start-2 w-full col-start-1">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className=" mx-auto">
            <h1 className="text-2xl font-semibold text-center">Edit Profile</h1>

            <form onSubmit={!update ? handleUpdateState : handleSubmit}>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="">
                    <label
                      htmlFor="imageURL"
                      className="  rounded-full mx-auto cursor-pointer h-24 text-center flex justify-center items-center w-24 bg-slate-200 text-4xl"
                    >
                      {imagePreview ? (
                        <img
                          className="rounded-full w-24 mx-auto cursor-pointer h-24"
                          src={imagePreview}
                          alt=""
                        />
                      ) : (
                        "+"
                      )}
                    </label>
                    <input
                      className="hidden"
                      disabled={!update}
                      type="file"
                      name="ImageURL"
                      onChange={onImageSelect}
                      id="imageURL"
                      placeholder="Write your image url"
                      accept="image/png, image/jpg, image/jpeg"
                    />

                    <label
                      htmlFor="file"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    ></label>
                  </div>
                  <div className="relative">
                    <input
                      disabled={!update}
                      autoComplete="off"
                      id="name"
                      name="name"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      disabled
                      autoComplete="off"
                      id="user"
                      name="user"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder={user || "user"}
                      value={user}
                      onChange={(e) => setUser(e.target.value)}
                      required
                    />
                    <label
                      htmlFor="user"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      User Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      disabled
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="email"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      disabled={!update}
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                      required
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className={`relative ${!update && "hidden"}`}>
                    <input
                      disabled={!update}
                      autoComplete="off"
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Confirm Password"
                      value={confirmPass}
                      onChange={(e) => setConfirmPass(e.target.value)}
                      required
                    />
                    <label
                      htmlFor="confirmPassword"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <p>
                    <Error message={error} />
                  </p>
                  <div className="relative">
                    <button className="bg-blue-500 text-white rounded-md px-4 py-2">
                      {!update ? "Edit Profile" : "Update Profile"}
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

export default Profile;
