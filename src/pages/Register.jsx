import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import axios from "axios";

function Register() {
  const { handleSubmit, register, formState, reset } = useForm({
    // resolver: yupResolver(registerSchema),
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });
  //   console.log(register("testname"));
  const { isSubmitting, errors } = formState;

  //   const onSubmit = (data) => {
  //     alert(JSON.stringify(data, null, 2));
  //     document.getElementById("register-form").close();
  //     reset();
  //   };

  const onSubmit = async (data) => {
    try {
      const resp = await axios.post(
        "http://localhost:8899/api/auth/register",
        data,
      );
      toast.success(resp.data.msg);
      document.getElementById("register-form").close();
    } catch (err) {
      console.log(err);
      const errMsg = err.response?.data?.error || err.message;
      toast.error(errMsg);
    }
  };

  return (
    <>
      <div className="text-3xl text-center opacity-70">
        Create a new account
      </div>
      <div className="divider opacity-60"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 p-4 pt-3"
      >
        <div className="flex gap-2">
          <div className="w-full">
            <input
              type="text"
              placeholder="First name"
              className="input input-bordered w-full"
              {...register("firstName")}
            />
            <p className="text-sm text-error ">{errors.firstName?.message}</p>
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Last name"
              className="input input-bordered w-full"
              {...register("lastName")}
            />
            <p className="text-sm text-error ">{errors.lastName?.message}</p>
          </div>
        </div>
        <input
          type="text"
          placeholder="Email or Phone number"
          className="input input-bordered w-full"
          {...register("identity")}
        />
        {errors.identity && (
          <p className="text-sm text-error -mt-4">{errors.identity?.message}</p>
        )}
        <input
          type="password"
          placeholder="New password"
          className="input input-bordered w-full"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-error -mt-4">{errors.password?.message}</p>
        )}
        <input
          type="password"
          placeholder="Confirm password"
          className="input input-bordered w-full"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-sm text-error -mt-4">
            {errors.confirmPassword?.message}
          </p>
        )}
        <button className="btn btn-secondary text-xl text-white">
          Sign up
        </button>
        <button
          className="btn btn-error text-xl text-neutral-50"
          type="button"
          onClick={() => reset()}
        >
          Reset Form
        </button>
      </form>
    </>
  );
}

export default Register;
