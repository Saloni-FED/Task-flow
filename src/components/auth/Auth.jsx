// import React from "react";
import { signIn, signUp, googleSignUp, googleSignIn } from "../../api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import taskImage from "../../assets/Component 3.png";
import { GoogleLogin } from "@react-oauth/google";
const Auth = () => {
  const [isSignUp, setIsSignup] = useState(false);
  // const [res, setRes] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleSwitch = () => {
    setIsSignup((prevState) => !prevState);
  };

  const onSubmit = async (formData) => {
    console.log("form submitted");
    console.log(formData);
    try {
      if (isSignUp) {
        const { data } = await signUp(formData);
        console.log(data);
        const token = data.token;
        toast.success("Registered Successfully");
        navigate("main/create");
        localStorage.setItem("profile", JSON.stringify(token));
      } else {
        const { data } = await signIn(formData);
        const token = data.token;
        toast.success("Signed in Successfully");
        navigate("main/create");
        localStorage.setItem("profile", JSON.stringify(token));
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  // const extractAuthorizationCode = (credential) => {
  //   console.log(credential, "credential");
  //   const parts = credential.split(".");
  //   console.log(parts, "parts");
  //   const payload = JSON.parse(atob(parts[1]));
  //   console.log(payload, "Payload");
  //   return payload.code;
  // };
  return (
    <div className=" flex flex-col items-center   h-screen w-screen ">
      <div className=" w-fit  p-10 ">
        <div className="relative">
          {" "}
          <div>
            <img src={taskImage} alt="" width="100" height="100" />
          </div>
          <h1 className="text-center text-3xl text-heading font-bold absolute top-2 left-16">
            {isSignUp ? "Welcome!" : "Welcome back!"}
          </h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-1 w-full items-center justify-center"
          noValidate
        >
          {isSignUp && (
            <div className="w-full">
              <input
                type="text"
                className="input"
                placeholder="Full Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your name",
                  },
                })}
              />
              <p className="text-xs text-red-500 mt-2">
                {errors.name?.message}
              </p>
            </div>
          )}
          <div className="w-full ">
            <input
              type="email"
              // className="bg-custom_black outline-none focus:bg-custom_black"
              className="input"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter your email",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Email"
            />{" "}
            <p className="text-xs text-red-500 mt-2">{errors.email?.message}</p>
          </div>
          <div className="w-full">
            <input
              type="password"
              className="w-full px-5 py-2 rounded-full outline-none bg-input text-heading font-bold"
              {...register("password", {
                required: {
                  value: true,
                  message: "Please enter your password",
                },
                minLength: {
                  value: 6,
                  message: "Password must have at least 6 characters",
                },
              })}
              placeholder="password"
            />{" "}
            <p className="text-xs text-red-500 mt-2">
              {errors.password?.message}
            </p>{" "}
          </div>

          <button
            className=" w-72 px-2 py-1 text-bold text-2xl mt-5 cursor-pointer bg-heading text-white rounded-full"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Submitting..."
              : isSignUp
              ? "Create Account"
              : "Sign in"}
          </button>
        </form>
      </div>
      <h2 className="mt-5 text-[#9C98A1]">
        Do you have an account?
        <span
          className="text-heading ml-2 underline cursor-pointer"
          onClick={handleSwitch}
        >
          {isSignUp ? "Sign in" : "Register "}
        </span>
      </h2>
      <hr />
      <h1 className="mx-3">Or </h1>
      {isSignUp ? (
        <GoogleLogin
          render={(renderProps) => (
            <button onClick={renderProps.onClick}>Sign up with Google</button>
          )}
          buttonText="Sign up with Google"
          onSuccess={async (response) => {
            console.log(response);
            const { data } = await googleSignUp(response.credential);
            const token = data.token;
            toast.success("Registered Successfully");
            navigate("main/create");
            localStorage.setItem("profile", JSON.stringify(token));
          }}
          onError={(error) => console.log(error)}
        />
      ) : (
        <GoogleLogin
          render={(renderProps) => (
            <button onClick={renderProps.onClick}>Sign in with Google</button>
          )}
          buttonText="Sign in with Google"
          onSuccess={async (response) => {
            const { data } = await googleSignIn(response.credential);
            console.log(data);
            // console.log(response);
            const token = data.token;
            toast.success("Registered Successfully");
            navigate("main/create");
            localStorage.setItem("profile", JSON.stringify(token));
          }}
          onError={(error) => console.log(error)}
        />
      )}
    </div>
  );
};

export default Auth;
