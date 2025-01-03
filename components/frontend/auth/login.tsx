import { useForm } from "react-hook-form";
import { useState } from "react";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import CustomCarousel from "../custom-carousel";
import Logo from "@/components/logo";
import PasswordInput from "@/components/FormInputs/PasswordInput";
import { Lock, LogIn, Mail } from "lucide-react";

export type RegisterInputProps = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
};

export default function Login() {
  const [isLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  async function onSubmit(data: RegisterInputProps) {
    console.log(data);
  }
  return (
    <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="absolute top-5 left-5"><Logo /></div>
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login to your account</h1>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label="Email Address"
              register={register}
              name="email"
              type="email"
              errors={errors}
              placeholder="Eg. johndoe@gmail.com"
              icon={Mail}
            />
            <PasswordInput
              icon={Lock}
              label="Password"
              register={register}
              name="password"
              type="password"
              errors={errors}
              placeholder="******"
              forgotPasswordLink="/forgot-password"
            />

            <SubmitButton
              buttonIcon={LogIn}
              title="Signin"
              loading={isLoading}
              loadingTitle="Signin please wait..."
            />
          </form>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <CustomCarousel />
      </div>
    </div>
  );
}
