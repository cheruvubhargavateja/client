import React from "react";

const InputField = ({
  type,
  name,
  placeholder,
  register,
  error,
  label,
  textArea,
}) => {
  return (
    <div className="mx-4 my-6">
      {label ? (
        <div className="flex justify-evenly">
          <label className="w-[20%] text-left font-palanquin font-semibold text-slate-500">
            {label}:
          </label>
          {textArea ? (
            <textarea
              className="w-[60%] border-slate-400 text-slate-400 text-base outline-none px-4 py-2 leading-normal rounded-xl"
              name={name}
              placeholder={placeholder}
              {...register(name)}
            />
          ) : (
            <input
              className="w-[60%] border-slate-400 text-slate-400 text-base outline-none px-4 py-2 leading-normal rounded-xl"
              type={type}
              name={name}
              placeholder={placeholder}
              {...register(name)}
            />
          )}
        </div>
      ) : (
        <input
          className="w-full text-center text-slate-400 text-base outline-none px-4 py-2 leading-normal rounded-xl border-slate-400"
          type={type}
          name={name}
          placeholder={placeholder}
          {...register(name)}
        />
      )}
      <br />
      <span className="text-sm text-red-400">{error && error.message}</span>
    </div>
  );
};

export default InputField;
