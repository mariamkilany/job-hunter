import { forwardRef } from "react";

export default forwardRef(function Select(props, ref) {
  return (
    <select
      defaultValue=""
      ref={ref}
      className={`border border-gray-300 text-gray-900 focus:gray-400 text-sm rounded-lg block w-full p-2.5  placeholder-gray-400 ${props.className}`}
      {...props}
    >
      {props.children}
    </select>
  );
});
