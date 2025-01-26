import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

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
            {t('nav', 'practice')}
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate("/questions")}
            className="hover:text-secondary hover:bg-secondary/10 transition-colors rounded-xl"
          >
            {t('nav', 'questions')}
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate("/progress")}
            className="hover:text-secondary hover:bg-secondary/10 transition-colors rounded-xl"
          >
            {t('nav', 'progress')}
          </Button>
        </nav>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl hover:bg-secondary/10"
              >
                <Globe className="h-5 w-5 text-secondary" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                English {language === 'en' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('uk')}>
                Українська {language === 'uk' && '✓'}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
            {t('nav', 'login')}
          </Button>
          <Button
            onClick={() => navigate("/register")}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/20 rounded-xl"
          >
            {t('nav', 'signup')}
          </Button>
        </div>
      </div>
    </header>
  );
};