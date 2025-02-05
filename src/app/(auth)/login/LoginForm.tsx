"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
} from "@nextui-org/react";
import React from "react";
import { GiPadlock } from "react-icons/gi";
import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchemaType } from "@/lib/schemas/LoginSchema";
import { LoginSchema } from "@/lib/schemas/LoginSchema";
import { signInUser } from "@/app/actions/authActions";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from 'react-toastify';

export default function LoginForm() {

  const { register , handleSubmit, formState: {isValid, errors} } = useForm<LoginSchemaType>({
    //resolver: zodResolver(LoginSchema),
    mode: "onTouched", 
  }); 

  const router = useRouter();

  const onSubmit = async (data: LoginSchemaType) => {
    console.log('FORMDATA',data);
    const result = await signInUser(data);
    console.log('RESULT',result);

    if (result.status === "success") {
      console.log("User logged in successfully");
      router.push("/members");
      router.refresh()
    } else {
      toast.error(result.error as string);
    }
  };

  return (
    <Card className="lg:w-2/5 md:w-3/5 mx-auto">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-default">
          <div className="flex flex-row items-center gap-3">
            <GiPadlock size={30} />
            <h1 className="text-3xl font-semibold">
              Login
            </h1>
          </div>
          <p className="text-neutral-500">
            Welcome back to MatchMe!
          </p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              defaultValue=""
              label="Email"
              variant="bordered"
              {...register("email")}
              isInvalid={!!errors.email}
              errorMessage={
                errors.email?.message as string
              }
            />
            <Input
                defaultValue=""
                label="Password"
                variant="bordered"
                type="password"
                {...register("password")}
                isInvalid={!!errors.password}
                errorMessage={
                  errors.password?.message as string
                }
            />
            <Button
              fullWidth
              color="default"
              type="submit"
              isDisabled={!isValid}
            >
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}