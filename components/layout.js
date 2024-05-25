import Footer from "./footer";
import NavigationBar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
