import EntryImage from "@/assets/home-entry-image.svg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  const handleStartButtonClick = () => {
    navigate("/todo", { replace: true });
  };
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="flex flex-col justify-center gap-4 ">
        <img src={EntryImage} alt="entry-image"></img>

        <Button onClick={handleStartButtonClick}>시작하기</Button>
      </div>
    </div>
  );
}
