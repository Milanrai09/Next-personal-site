import Footer from "./pageCompo/footer";
import Main from "./pageCompo/main";

export default function Home() {
  return (
    <div className="">
      <main className="flex-grow  ">
        <Main 
          title="" 
          section="Home" 
          mainAttribute="" 
        />
      </main>

      <Footer />
    </div>
  );
}
