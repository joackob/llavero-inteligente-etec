"use client";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
  },
};
const defaultTheme = createTheme(themeOptions);

const index = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export default index;
