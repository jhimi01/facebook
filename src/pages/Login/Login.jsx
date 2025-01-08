import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    login(data?.email, data?.password)
      .then((res) => {
        const userlogin = res.user;
        navigate(from, { replace: true });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1000,
        });
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left space-y-3">
          <h1 className="text-6xl font-bold text-[#1877F2]">facebook</h1>
          <h3 className="text-3xl">
            Facebook helps you connect and share with the people in your life.
          </h3>
          <p className="text-white">
            test-email : rinty@gmail.com ------ test-pass : 123456
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          {/* register your input into the hook by invoking the "register" function */}
          <div className="card-body">
            <div className="form-control">
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
            <div className="form-control">
              <button type="submit" className="btn btn-secondary">
                Login
              </button>
              {error && <span className="text-red-500">{error}</span>}
              <div>
                <h4 className="text-[#1877F2] text-center capitalize">
                  forget password
                </h4>
              </div>
              <div className="divider"></div>
              <div className="form-control text-center">
                <Link to="/signup">
                  <button className="w-3/4 py-3 rounded-md mx-auto bg-[#42b72a] capitalize text-lg font-semibold text-white">
                    create new account
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
