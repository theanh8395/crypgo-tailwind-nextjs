import { CtButton, FormControl } from "@/components/atoms";
import { createLoginFormSchema } from "@/utils";
import { HeartIcon } from "@heroicons/react/24/outline";
import { Form, Input } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Controller, useForm } from "react-hook-form";

export interface ICredentials {
  email: string;
  password: string;
  isRemember?: boolean;
}

const LoginForm = () => {
  const t = useTranslations();
  const zodSchema = createLoginFormSchema(t);
  const { register, handleSubmit, control } = useForm<ICredentials>({
    resolver: zodResolver(zodSchema),
    shouldUnregister: true,
    defaultValues: {
      email: "",
      password: "",
      isRemember: false,
    },
  });

  const onSubmit = async (data: ICredentials) => {
    console.log("data", data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="w-5xl">
      <Input {...register("email")} />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={fieldState.error} label="Password" require>
            <Input {...field} />
          </FormControl>
        )}
      />
      <CtButton type="submit" isIconOnly>
        <HeartIcon color="red" width={24} />
      </CtButton>
    </Form>
  );
};

export default LoginForm;
