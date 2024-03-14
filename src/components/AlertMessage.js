import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

export default function AlertMessage({ children }) {
  return (
    <div
      id="alert-2"
      className={`flex items-center p-4 mb-4 text-red-800 m-2 rounded-lg bg-red-50`}
      role="alert"
    >
      <ExclamationCircleIcon className="w-4 h-4" />
      <div className="ms-3 text-sm font-medium">{children}</div>
    </div>
  );
}
