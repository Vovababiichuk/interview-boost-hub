import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const Header = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1F2C]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 
            onClick={() => navigate("/")} 
            className="text-xl font-bold text-white cursor-pointer hover:text-secondary transition-colors"
          >
            BURGER BAR
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/menu")}
            className="text-white hover:text-secondary"
          >
            Menu
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate("/orders")}
            className="text-white hover:text-secondary"
          >
            Orders
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate("/profile")}
            className="text-white hover:text-secondary"
          >
            Profile
          </Button>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
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
            className="text-white hover:text-secondary"
          >
            Login
          </Button>
          <Button
            onClick={() => navigate("/register")}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};