import { Layout } from "../../components/Layout/Layout";
import { Hero } from "../../components/Hero/Hero";
import COVER_PHOTO from "../../assets/cover.jpeg";

export function MainPage() {
  return (
    <Layout>
      <Hero heroImage={COVER_PHOTO} />
    </Layout>
  );
}
