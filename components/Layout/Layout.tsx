import { Header } from "../Header/Header";
import Head from "next/head";
import React, { FunctionComponent } from "react";
import { Toolbar } from "../Toolbar/Toolbar";

interface LayoutProps {
  title: string;
}

export const Layout: FunctionComponent<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title} - Recipee</title>
      </Head>
      <Header userName="lox)))" />
      <main>{children}</main>
      <Toolbar />
    </>
  );
};
