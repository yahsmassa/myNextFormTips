import { Fragment, useState, useEffect, useContext } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { myfm } from "../pages/index";
import cn from "clsx";

interface Props {
  items: any[];
  className?: string;
  regiName: string;
}

export default function MyListBox({ items, className, regiName }: Props) {
  const [selected, setSelected] = useState("");
  const { fmFields, setfmFields }: any = useContext(myfm);

  useEffect(() => {
    setfmFields({
      ...fmFields,
      [regiName]: selected,
      reset: false,
    });
  }, [selected]);

  useEffect(() => {
    if (fmFields.reset) setSelected("");
  }, [fmFields]);

  return (
    <div className={cn("w-72", className)}>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button
            className="relative h-9 w-full cursor-default rounded-lg bg-white py-2 pl-3
           pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500
           focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
            focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="pl-0 z-50 absolute mt-1 max-h-60 w-full overflow-auto
             rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5
              focus:outline-none sm:text-sm"
            >
              {items.map((item, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    cn(
                      "relative cursor-default select-none py-2 pl-10 pr-4",
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    )
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={cn(
                          "block truncate",
                          selected ? "font-medium" : "font-normal"
                        )}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
