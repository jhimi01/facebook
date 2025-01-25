import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const { signupemail, updateuser, login } = useContext(AuthContext);

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [loading, setLoading] = useState(false);

  console.log("keyyy", import.meta.env.VITE_IMGBB_API_KEY);

  const onSubmit = async (data) => {
    setLoading(true);
    const { name, email, password, image } = data;
    console.log(data);

    // create a FormData onject and append the image file
    const formData = new FormData();
    formData.append("image", image[0]);
    // make a post request to Imgbb api
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_API_KEY
    }`;
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      // extract the image url from the response
      const imageUrl = result?.data?.display_url;
      // handle user registration with image url
      signupemail(email, password)
        .then((result) => {
          const userlogin = result.user;
          console.log(userlogin);
          updateuser(name, imageUrl)
            .then(() => {
              const users = {
                authorName: name,
                img: imageUrl,
                email,
              };
              axios
                .post("https://facebook-server-phi.vercel.app/users", users)
                .then((res) => {
                  setLoading(false);
                  console.log("post", res.data);
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1000,
                  });
                  navigate(from, { replace: true });
                })
                .catch((error) => {
                  console.error("Post request failed:", error);
                  // Handle error if the post request fails
                });
            })
            .catch((err) => {
              setLoading(false);
              console.log(err.message);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            });
          setError("");
          reset();
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left space-y-3 w-1/2">
          <h1 className="text-6xl font-bold text-[#1877F2]">facebook</h1>
          <h3 className="text-3xl">
            Facebook helps you connect and share with the people in your life.
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-3"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="file"
                placeholder="photo URL"
                className="input input-bordered"
                accept="image/*"
                {...register("image", { required: true })}
              />
            </div>
            {/* password input field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control mt-6">
              <button
                disabled={loading}
                className="btn bg-[#42b72a] text-white"
              >
                {loading ? "Creating..." : "Create account"}
                Create account
              </button>
              {error && <span className="text-red-500 text-xs">{error}</span>}
            </div>
            <Link to="/login">
              <p className="text-[#407bff] underline text-sm">
                Already have an account? Login
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
