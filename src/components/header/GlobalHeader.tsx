import logo from "@/assets/main-logo.svg";
import { Link, useNavigate } from "react-router-dom";
export default function GlobalHeader() {
  const navigate = useNavigate();

  const handleLogoClick = () => {};
  return (
    <div className="flex items-center h-[60px] px-4 m-3 bg-white border-b">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="size-9"
          onClick={handleLogoClick}
        />
      </Link>
    </div>
  );
}
