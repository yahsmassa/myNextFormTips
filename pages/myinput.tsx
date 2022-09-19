import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { MyInput, MySelect, IFormValues } from "../components/myui";

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  };
  const InputCss =
    "input mb-2 input-bordered ml-3 input-primary w-[200px] h-7 max-w-xs";
  const SelectCss = "select select-primary  w-[200px] h-7 max-w-xs";
  return (
    <div className="m-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <MyInput
          className={InputCss}
          label="FirstName"
          register={register}
          required
        />
        <br />

        <MyInput
          className={InputCss}
          label="LastName"
          register={register}
          required
        />
        <br />

        <MyInput
          className={InputCss}
          label="Telephone"
          register={register}
          required
        />
        <br />
        <MySelect
          className="border-[2px] text-center border-blue-400 rounded-lg h-[30px] w-[200px] ml-3 max-w-xs"
          label="Yasumasa"
          {...register("Yasumasa")}
        />
        <br />

        <input
          className="m-4 rounded-lg  border-blue-400  border-[2px] p-2"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Home;
