import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ text }: { text: string }) => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      className={twMerge(
        "flex flex-col items-center gap-6",
        "*:transition-colors *:duration-300",
      )}
    >
      <div
        className={twMerge(
          "w-full rounded border text-background px-4 text-center",
          isOn
            ? "bg-secondary-bg border-theme text-secondary"
            : "bg-muted border-theme/50",
        )}
      >
        <p>Click to {isOn ? "turn off" : "turn on"}</p>
        <p>Local State :</p>
        <p className={"font-bold"}>{`${isOn}`}</p>
        <p className={"italic text-accent"}>
          typeof : <br />
          {`${typeof isOn}`}
        </p>
      </div>
      <button
        className={twMerge(
          `w-fit px-3 py-2`,
          isOn
            ? "bg-theme hover:bg-theme hover:text-background"
            : "bg-background hover:bg-theme hover:text-background",
          `border border-theme rounded`,
          `cursor-pointer`,
        )}
        onClick={() => {
          setIsOn((prev) => !prev);
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
