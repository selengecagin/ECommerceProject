import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//TODO default role implementation
export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [roleOptions, setRoleOptions] = useState([]);
  const [defaultRole, setDefaultRole] = useState("");

  const onSubmit = (data) => {
    let formattedData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    };
    console.log(data);
    setLoading(true);
    axios
      .post(
        "https://workintech-fe-ecommerce.onrender.com/signup",
        formattedData
      )
      .then((res) => {
        console.log("response: ", res);
        localStorage.setItem("token", res.data.token);
        navigate(-1);
      })
      .catch((err) => {
        console.error("Post request failed:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/roles")
      .then((res) => {
        setRoleOptions(res.data);
        if (res.data.length > 0) {
          setDefaultRole(res.data[2].id);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Role options request failed:", error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="bg-lightGray1">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center gap-8 py-12"
      >
        <div className="flex flex-col gap-6">
          <label htmlFor="name" className="w-[450px]">
            <p className="pb-2 text-lg font-normal text-darkTextColor">Name</p>
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm "
              {...register("name", {
                required: "Please enter your name.",
                minLength: {
                  value: 3,
                  message: "Your name should be at least 3 characters long.",
                },
              })}
            ></input>
            <p className="text-red-500">{errors.name?.message}</p>
          </label>

          <label htmlFor="email" className="w-[450px]">
            <p className="pb-2 text-lg font-normal text-darkTextColor">Email</p>
            <input
              type="text"
              placeholder="example@domain.com"
              className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
              {...register("email", {
                required: "Please enter your email address.",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message:
                    "Looks like this isn’t a valid email format. Please check and try again.",
                },
              })}
            ></input>
            <p className="text-red-500">{errors.email?.message}</p>
          </label>

          <label htmlFor="password" className="passwordArea w-[450px]">
            <p className="pb-2 text-lg font-normal text-darkTextColor">
              Password
            </p>
            <input
              type="password"
              placeholder="Create a Password"
              className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
              {...register("password", {
                required: "Please create a password.",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Your password should be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters (e.g., @, #, $).",
                },
              })}
            ></input>
            <p className="text-red-500">{errors.password?.message}</p>
          </label>

          <label
            htmlFor="confirmPassword"
            className="confirmPasswordArea w-[450px]"
          >
            <p className="pb-2 text-lg font-normal text-darkTextColor">
              Confirm Password
            </p>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
              {...register("confirmPassword", {
                required: "Please confirm your password.",
                validate: (value) =>
                  value === watch("password") ||
                  "Passwords do not match. Try again.",
              })}
            ></input>
            <p className="text-red-500">{errors.confirmPassword?.message}</p>
          </label>
        </div>

        <div className="flex flex-col justify-start">
          <label className="roleArea w-[450px]">
            <p className="pb-2 text-lg font-normal text-darkTextColor">Role</p>
            <select
              className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
              {...register("role_id", {
                required: "Please select your role from the list.",
              })}
            >
              {roleOptions.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.code}
                </option>
              ))}
            </select>
            <p className="text-red-500">{errors.role_id?.message}</p>
          </label>
        </div>

        {watch("role_id") === "2" && (
          <div className="flex flex-col gap-6 border border-solid rounded-md border-gray-400 p-4">
            <label htmlFor="name">
              <p className="pb-2 text-lg font-normal text-darkTextColor">
                Store Name
              </p>
              <input
                type="text"
                placeholder="Store Name"
                className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
                {...register("name", {
                  required: "Please enter your store name.",
                  minLength: {
                    value: 3,
                    message: "Store name should be at least 3 characters long.",
                  },
                })}
              ></input>
              <p className="text-red-500">{errors.name?.message}</p>
            </label>

            <label htmlFor="phone">
              <p className="pb-2 text-lg font-normal text-darkTextColor">
                Store Phone
              </p>
              <input
                type="text"
                placeholder="+0905XXXXXXXXX"
                className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
                {...register("phone", {
                  required: "Please enter your store's phone number.",
                  pattern: {
                    value:
                      /^(?:\+90|0)?(?:\d{10}|\d{3}[\s-]?\d{3}[\s-]?\d{4})$/,
                    message: "Please enter a valid phone number format.",
                  },
                })}
              ></input>
              <p className="text-red-500">{errors.phone?.message}</p>
            </label>

            <label htmlFor="tax_no">
              <p className="pb-2 text-lg font-normal text-darkTextColor">
                Store Tax ID
              </p>
              <input
                type="text"
                placeholder="Tax ID Format: T1234V567890"
                className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
                {...register("tax_no", {
                  required: "Please enter your store's tax ID.",
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message:
                      "Invalid Tax ID format. Please check and try again.",
                  },
                })}
              ></input>
              <p className="text-red-500">{errors.tax_no?.message}</p>
            </label>

            <label htmlFor="bank_account">
              <p className="pb-2 text-lg font-normal text-darkTextColor">
                Store Bank Account
              </p>
              <input
                type="text"
                placeholder="Bank Account Number"
                className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
                {...register("bank_account", {
                  required: "Please enter your store’s bank account number.",
                  pattern: {
                    value: /^TR\d{2}[0-9]{5}0[0-9A-Z]{16}$/,
                    message:
                      "Invalid bank account format. Please check and try again.",
                  },
                })}
              ></input>
              <p className="text-red-500">{errors.bank_account?.message}</p>
            </label>
          </div>
        )}

        <div className="registerButtonArea">
          <button
            className={`rounded-md items-center px-16 py-4 text-base font-bold text-white bg-primaryColor ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:animate-wiggle-more hover:animate-twice"
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "REGISTER"}
          </button>
        </div>
      </form>
    </main>
  );
}
