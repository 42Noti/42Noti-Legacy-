import "@/styles/globals.css";
import NavBar from "@/components/common/NavBar";
import { Provider } from "react-redux";
import store from "./store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Component {...pageProps} />
      </Provider>
      <style jsx global>{`
        // pc : 768px ~
        .global-container {
          width: 40%;
          min-width: 650px;
          height: 90%;
          min-height: 700px;
          font-size: 12px;
          background: #eeeeee;
          border-radius: 20px;
          // border: solid pink 1px;
          // box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
          margin: 30px auto; /* 페이지 중앙에 나타나도록 설정 */
          display: flex;
          flex-direction: column;
        }

        // tablet : 480px ~ 768px
        // @media screen and (min-width: 480px) and (min-height: 600px) {
        //   .global {
        //     // width: 450px;
        //     // height: 550px;
        //     font-size: 14px;
        //   }
        // }

        // mobile : 320px ~ 480px
        // @media screen and (min-width: 320px) and (min-height: 400px) {
        //   .global {
        //     // width: 280px;
        //     // height: 350px;
        //     font-size: 12px;
        //   }
        // }
      `}</style>
    </>
  );
}
