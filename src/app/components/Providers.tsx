//Contains all the providers in the application
//Used within layout so that all components have access to the providers, when we add things it will be easier to add them here

import { NextUIProvider } from "@nextui-org/react";
import React from "react";

import { ToastContainer, toast } from 'react-toastify';

export default function Providers({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <NextUIProvider>
          <ToastContainer position="bottom-right"  />  
          {children}</NextUIProvider>
    );
}