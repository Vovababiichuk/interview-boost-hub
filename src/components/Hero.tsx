import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6 border border-secondary/20">
          {t('hero', 'badge')}
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {t('hero', 'title')}
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('hero', 'description')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => navigate("/practice")}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg w-full sm:w-auto rounded-2xl shadow-lg shadow-secondary/20"
          >
            {t('hero', 'startPractice')}
          </Button>
          <Button
            onClick={() => navigate("/questions")}
            variant="outline"
            className="px-8 py-6 text-lg w-full sm:w-auto rounded-2xl border-secondary/50 text-secondary hover:bg-secondary/10 shadow-lg"
          >
            {t('hero', 'browseQuestions')}
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: t('hero', 'stats.questions'), value: "400+" },
            { title: t('hero', 'stats.topics'), value: "15+" },
            { title: t('hero', 'stats.activeUsers'), value: "10K+" },
          ].map((stat) => (
            <div 
              key={stat.title} 
              className="glass p-6 rounded-2xl hover:bg-secondary/5 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-3xl font-bold text-secondary mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};