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
          height: 90%;
          min-height: 650px;
          font-size: 10px;
          background: #ffffff;
          border-radius: 20px;
          // box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
          margin: 0px auto; /* 페이지 중앙에 나타나도록 설정 */
          // why navbar height is different at each page?
          // display: flex;
          // flex-direction: column;
        }

        // pc : 768px ~
        @media screen and (min-width: 650px) {
          .global-container {
            width: 40%;
            min-width: 650px;
            height: 90%;
            min-height: 700px;
          }
        }

        // todo : PC 버전 캘린더 크기 키우기, 가로 화면 개발
      `}</style>
    </>
  );
}
