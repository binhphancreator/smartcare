import AboutUsComponent from "../components/AboutUs";
import HeaderIntro from "../components/HeaderIntro";
import ProductIntro from "../components/ProductIntro";
import DefaultLayout from "../layouts/DefaultLayout";

function Home() {
  return (
    <>
      <DefaultLayout>
        <HeaderIntro />
        <ProductIntro />
        <AboutUsComponent />
      </DefaultLayout>
    </>
  );
}

export default Home;
