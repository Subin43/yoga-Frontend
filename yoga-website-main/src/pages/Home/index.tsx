import Achievement from "./components/Achievement";
import Benefit from "./components/Benefit";
import Divine from "./components/Divine";
import Feature from "./components/Feature";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <div className="w-full min-h-screen ">
      <Welcome />
      <Feature />
      <Benefit />
      <Divine />
      <Achievement />
      {/* <Gallery /> */}
    </div>
  );
}
