import React from "react";

function Input({ name, state, setState, label = false }) {
  return (
    <div className="flex gap-1 flex-col">
      {label && (
        <label htmlFor={name} className="text-black font-semibold text-lg px-1">
          {name}
        </label>
      )}
      <div>
        <input
          type="text"
          name={name}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="bg-slate-200 text-start focus:border-2 border-black text-black h-10 rounded-lg px-5 py-4 w-full"
        />
      </div>
    </div>
  );
}

export default Input;
