import Navbar from "../navbar";
import HomeServices from "./homeServices";

export default function HomePage({}) {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="w-full max-w-3xl">
        <HomeServices />
      </div>
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
}
