import React from "react";
import Head from "next/head";
import "../styles/style.scss";
import "./grid.css";
import "antd/dist/antd.css";
import Header from "../components/header";
import Script from "next/script";
import Footer from "../components/footer";
function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://connect.facebook.net/vi_VN/sdk.js"
        nonce="3HoFlu1a"
        onLoad={() => {
          window.fbAsyncInit = function() {
            FB.init({
              xfbml            : true,
              version          : 'v13.0'
            });
          };
    
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
          // CHAT
          var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page_id", "101002412514369");
          chatbox.setAttribute("attribution", "biz_inbox");
         
        }}
      />
      <Head>
        <title>project bất động sản</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Poppins:wght@500&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@700&family=Montserrat:wght@300;700&family=Nanum+Gothic+Coding&family=Source+Sans+Pro:wght@300;700;900&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@700&family=Montserrat:wght@300;400;700&family=Nanum+Gothic+Coding&family=Open+Sans:wght@700&family=Source+Sans+Pro:wght@300;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
      </Head>
    <div id="fb-root"></div>

    <div id="fb-customer-chat" class="fb-customerchat">
    </div>
      <Header />
      <div className="mt-100">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
export default App;
