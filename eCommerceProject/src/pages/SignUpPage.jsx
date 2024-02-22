import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
          <label htmlFor="name">
            <p className="pb-2 text-lg font-normal text-darkTextColor">Name</p>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm "
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "You must enter at least 3 characters",
                },
              })}
            ></input>
            <p>{errors.name?.message}</p>
          </label>

          <label htmlFor="email">
            <p className="pb-2 text-lg font-normal text-darkTextColor">Email</p>
            <input
              type="text"
              placeholder="Email*"
              className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Invalid email format",
                },
              })}
            ></input>
            <p>{errors.email?.message}</p>
          </label>

          <label htmlFor="password" className="passwordArea">
            <p className="pb-2 text-lg font-normal text-darkTextColor">
              Password
            </p>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password needs to be minimum 8 character including numbers, lower case, upper case and special characters",
                },
              })}
            ></input>
            <p>{errors.password?.message}</p>
          </label>

          <label htmlFor="confirmPassword" className="confirmPasswordArea">
            <p className="pb-2 text-lg font-normal text-darkTextColor">
              Confirm Password
            </p>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            ></input>
            <p>{errors.confirmPassword?.message}</p>
          </label>
        </div>

        <div className="flex flex-col justify-start">
          <label className="roleArea">
            <p className="pb-2 text-lg font-normal text-darkTextColor">Role</p>
            <select
              className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
              {...register("role_id", {
                required: "Role is required",
              })}
            >
              {roleOptions.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.code}
                </option>
              ))}
            </select>
            <p>{errors.role_id?.message}</p>
          </label>
        </div>

        {/* eğer role id customer ise aşağıdaki div ekranda görünmeli */}

        {watch("role_id") === "2" && (
          <div className="flex flex-col gap-6 border border-solid rounded-md border-gray-400 p-4">
            <label htmlFor="name">
              <p className="pb-2 text-lg font-normal text-darkTextColor">
                Store Name
              </p>
              <input
                type="text"
                placeholder="Enter store name"
                className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
                {...register("name", {
                  required: "Store name is required",
                  minLength: {
                    value: 3,
                    message: "You must enter at least 3 characters",
                  },
                })}
              ></input>
              <p>{errors.name?.message}</p>
            </label>

            <label htmlFor="phone">
              <p className="pb-2 text-lg font-normal text-darkTextColor">
                Store Phone
              </p>
              <input
                type="text"
                placeholder="Enter store phone"
                className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
                {...register("phone", {
                  required: "Store phone is required",
                  pattern: {
                    value:
                      /^(?:\+90|0)?(?:\d{10}|\d{3}[\s-]?\d{3}[\s-]?\d{4})$/,
                    message: "Invalid phone number format",
                  },
                })}
              ></input>
              <p>{errors.phone?.message}</p>
            </label>

            <label htmlFor="tax_no">
              <p className="pb-2 text-lg font-normal text-darkTextColor">
                Store Tax ID
              </p>
              <input
                type="text"
                placeholder="Enter store tax id"
                className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
                {...register("tax_no", {
                  required: "Store tax id is required",
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message: "Invalid Tax Id format",
                  },
                })}
              ></input>
              <p>{errors.tax_no?.message}</p>
            </label>

            <label htmlFor="bank_account">
              <p className="pb-2 text-lg font-normal text-darkTextColor">
                Store Bank Account
              </p>
              <input
                type="text"
                placeholder="Enter store bank account"
                className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
                {...register("bank_account", {
                  required: "Store Bank account is required",
                  pattern: {
                    value: /^TR\d{2}[0-9]{5}0[0-9A-Z]{16}$/,
                    message: "Invalid bank account ",
                  },
                })}
              ></input>
              <p>{errors.bank_account?.message}</p>
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
