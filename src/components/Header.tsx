import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 
            onClick={() => navigate("/")} 
            className="text-xl font-semibold text-slate-800 cursor-pointer hover:text-primary transition-colors"
          >
            FrontPrep
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/questions")}
            className="text-slate-600 hover:text-slate-900"
          >
            Questions
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate("/progress")}
            className="text-slate-600 hover:text-slate-900"
          >
            Progress
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate("/profile")}
            className="text-slate-600 hover:text-slate-900"
          >
            Profile
          </Button>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => navigate("/login")}
            variant="ghost"
            className="text-slate-600 hover:text-slate-900"
          >
            Login
          </Button>
          <Button
            onClick={() => navigate("/register")}
            className="bg-secondary hover:bg-secondary/90 text-white"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};