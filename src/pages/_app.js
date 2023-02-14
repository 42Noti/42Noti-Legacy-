import "@/styles/globals.css";
import NavBar from "@/components/common/NavBar";
import { Provider } from "react-redux";
import store from "../components/common/store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="global-container">
        <Provider store={store}>
          <NavBar />
          <Component {...pageProps} />
        </Provider>
      </div>
      <style jsx>{`
        // mobile : 320px ~ 480px
        .global-container {
          width: 100%;
          min-width: 320px;
          // height : 90%는 추가하지 말 것!
          // height는 13인치 노트북에 맞춰서 700px로 고정
          height: 700px;
          font-size: 10px;
          background: #ffffff;
          border-radius: 20px;
          // box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
          margin: 20px auto; /* 페이지 중앙에 나타나도록 설정 */
          display: flex;
          flex-direction: column;
        }

        // tablet : 480px ~ 768px
        // @media screen and (min-width: 480px) and (min-height: 600px) {
        //   .global-container {
        //     width: 40%;
        //     min-width: 450px;
        //     height: 90%;
        //     min-height: 550px;
        //     // width: 450px;
        //     // height: 550px;
        //     font-size: 11px;
        //   }
        // }

        // pc : 768px ~
        @media screen and (min-width: 650px) {
          .global-container {
            width: 40%;
            min-width: 650px;
          }
        }
      `}</style>
    </>
  );
}
