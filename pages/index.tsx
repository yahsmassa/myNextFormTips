import React, { createContext, useState } from "react";
import MyListBox from "../components/MyListBox";
interface IForm {
  time: string;
  stylist: string;
  menu: string;
  reset: boolean;
}

const initFormData: IForm = {
  menu: "",
  stylist: "",
  time: "",
  reset: false,
};

export const myfm = createContext({});

export default function App() {
  const [fmFields, setfmFields] = useState<IForm>(initFormData);
  const value = {
    fmFields,
    setfmFields,
  };
  const reset = () => {
    setfmFields({
      ...initFormData,
      reset: true,
    });
  };
  const btnCss =
    "mt-3 ml-5 w-[100px] text-blue-500 border-2 border-blue-500 rounded-2xl hover:bg-blue-300 hover:text-white";
  return (
    <myfm.Provider value={value}>
      <div className="m-5">
        <h1 className="mb-3">Reservation Menu</h1>

        <p className="text-sm -mb-2">Time</p>
        <MyListBox regiName="time" items={["10:00", "11:00", "12:00"]} />

        <p className="text-sm mt-2 -mb-1">Stylist</p>
        <MyListBox regiName="stylist" items={["Lisa", "Bob", "Steve"]} />

        <p className="text-sm mt-2 -mb-2">Menu</p>
        <MyListBox regiName="menu" items={["cut", "perm", "color"]} />

        <button onClick={reset} className={btnCss}>
          Reset
        </button>
        <button
          onClick={() => alert(JSON.stringify(fmFields))}
          className={btnCss}
        >
          Submit
        </button>
      </div>
    </myfm.Provider>
  );
}
