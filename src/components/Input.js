import { forwardRef } from "react";

export default forwardRef(function Input(props, ref) {
  return (
    <input
      ref={ref}
      {...props}
      className={`border border-gray-300 text-gray-900 focus:gray-400 text-sm rounded-lg block ${
        props.type !== "radio" && props.type !== "checkbox"
          ? "w-full p-2.5"
          : "text-primary "
      } ${props.type === "checkbox" && "rounded-sm"} placeholder-gray-400 ${
        props.className
      }`}
    />
  );
});
