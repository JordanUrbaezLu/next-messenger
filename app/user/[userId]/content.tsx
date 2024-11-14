"use client";
import { Switch } from "@/components/ui/switch";
import React from "react";

export const Content = ({ name, age }: { name: string; age: number }) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <>
      <Switch checked={checked} onCheckedChange={() => setChecked(!checked)} />
      {checked && (
        <div>
          <div>Hello {name}</div>
          <div>You are {age} years old!</div>
        </div>
      )}
    </>
  );
};

export default Content;
