import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../validation/schema";
import axios from "axios";
import { toast } from "react-toastify";
import { FacebookTitle } from "../icons";
import RegisterForm from "./RegisterForm";

function Login() {
  const [resetForm, setResetForm] = useState(true); //for reset RegisterForm
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });
  const { isSubmitting, errors } = formState;

  const hdlClose = () => setResetForm((prv) => !prv); //setResetForm(!resetForm)

  const onSubmit = async (data) => {
    try {
      const resp = await axios.post(
        "http://localhost:8899/api/auth/login",
        data,
      );
      toast.success(resp.data.message);
      toast.info(JSON.stringify(resp.data, null, 2));
    } catch (err) {
      const errMsg = err.response?.data.message || err.message;
      toast.error(errMsg);
    }
  };

  return (
    <>
      <div className="h-[700px] pt-20 pb-28 bg-[#f2f4f7]">
        <div className="p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-between max-md:flex-col   ">
          <div className="flex flex-col max-md:items-center max-md:text-center gap-4 mt-20 basis-3/5">
            <div className="text-4xl">
              <FacebookTitle />
            </div>
            <h2 className="text-[30px] max-md:text-[28px] leading-8 mt-3 w-[514px] ">
              Fakebook helps you connect and share with the people in your life.
            </h2>
            <p className="text-sm text-red-500">
              *** This is not real Facebook site ***
            </p>
          </div>
          <div className="flex flex-1">
            <div className="card bg-base-100 w-full min-h-[350px] shadow-xl mt-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body gap-3 p-4">
                  <div className="w-full">
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="E-mail or Phone number"
                      {...register("identity")}
                    />
                    <p className="text-sm text-error">
                      {errors.identity?.message}
                    </p>
                  </div>
                  <div className="w-full">
                    <input
                      type="password"
                      className="input w-full"
                      placeholder="password"
                      {...register("password")}
                    />
                    <p className="text-sm text-error">
                      {errors.password?.message}
                    </p>
                  </div>
                  <button className="btn btn-primary text-xl">Login</button>
                  <p className="text-center cursor-pointer opacity-70">
                    Forgotten password?
                  </p>
                  <div className="divider my-0"></div>
                  <button
                    className="btn btn-secondary text-lg text-white mx-auto"
                    type="button"
                    onClick={() =>
                      document.getElementById("register-form").showModal()
                    }
                  >
                    Create new account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <dialog id="register-form" className="modal" onClose={hdlClose}>
        <div className="modal-box">
          <RegisterForm resetForm={resetForm} />
          <form method="dialog">
            <button
              // type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
