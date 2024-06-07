import Achievement from "../../Home/components/Achievement";
import LiveSore from "./LiveSore";

export default function Winner() {
  return (
    <div className="container mx-auto px-4 md:px-0">
      {/* <h2 className="text-4xl mt-8 ml-4 md:ml-10">About us</h2> */}

      <div className="text-xl md:text-3xl flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 mt-6 md:mt-10 font-bold">
        <div className="flex items-center gap-2">
          Wins: <LiveSore />+
        </div>
        <div>24 Hours Services</div>
        <div>Certificated Practices</div>
      </div>
      <div className="mt-8">
        <Achievement />
      </div>
    </div>
  );
}
