import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const Header = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-secondary/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 
            onClick={() => navigate("/")} 
            className="text-xl font-bold cursor-pointer hover:text-secondary transition-colors"
          >
            FrontPrep
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/practice")}
            className="hover:text-secondary hover:bg-secondary/10 transition-colors rounded-xl"
          >
            Practice
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate("/questions")}
            className="hover:text-secondary hover:bg-secondary/10 transition-colors rounded-xl"
          >
            Questions
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate("/progress")}
            className="hover:text-secondary hover:bg-secondary/10 transition-colors rounded-xl"
          >
            Progress
          </Button>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-xl hover:bg-secondary/10"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-secondary" />
            ) : (
              <Moon className="h-5 w-5 text-secondary" />
            )}
          </Button>
          <Button
            onClick={() => navigate("/login")}
            variant="ghost"
            className="hover:text-secondary hover:bg-secondary/10 transition-colors rounded-xl"
          >
            Login
          </Button>
          <Button
            onClick={() => navigate("/register")}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/20 rounded-xl"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};