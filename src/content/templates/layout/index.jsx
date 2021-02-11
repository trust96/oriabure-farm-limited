import React from "react";
import Footer from "../../sections/footer";
import Nav from "../../sections/nav/index";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"
          integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js"
          integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
