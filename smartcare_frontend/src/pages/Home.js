import HeaderIntro from "../components/HeaderIntro";
import Collapse from "../components/Collapse";
import DefaultLayout from "../layouts/DefaultLayout";

function Home() {
  return (
    <>
      <DefaultLayout>
        <HeaderIntro />

        <div className="container">
        </div>

        <div className="container" style={{display: "flex", alignItems: "center"}}>
          <div className="space-y-24" style={{width: "50%"}}>
            <p className="badge">#OurValues</p>
            <h1 style={{fontWeight: 600, fontSize: "2.25rem", lineHeight: "2.5rem", color: "#27355b"}}>Giá trị cốt lõi của Smartcare</h1>
            <Collapse body = "Xem tin tức sức khỏe, các thông tin bổ ích hàng ngày." title = "Bản tin sức khỏe"  />
            <Collapse body = "Xem tin tức sức khỏe, các thông tin bổ ích hàng ngày." title = "Dự đoán bệnh tim"  />
            <Collapse body = "Xem tin tức sức khỏe, các thông tin bổ ích hàng ngày." title = "Health News"  />
            <Collapse body = "Xem tin tức sức khỏe, các thông tin bổ ích hàng ngày." title = "Health News"  />
          </div>
          <div style={{width: "50%"}}>
            <div style={{padding: "12px", display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
              <img
                draggable="false"
                src={require("../assets/images/intro.png")}
                alt=""
                style={{maxWidth: "80%"}}
              />
            </div>
          </div>
        </div>

      </DefaultLayout>
    </>
  );
}

export default Home;
