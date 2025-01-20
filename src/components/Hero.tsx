import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
          400+ Interview Questions
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Master Your Front-End Interview
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Practice with curated questions, track your progress, and boost your confidence for your next interview.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => navigate("/register")}
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg w-full sm:w-auto"
          >
            Start Practicing Now
          </Button>
          <Button
            onClick={() => navigate("/questions")}
            variant="outline"
            className="px-8 py-6 text-lg w-full sm:w-auto"
          >
            Browse Questions
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Questions", value: "400+" },
            { title: "Difficulty Levels", value: "3" },
            { title: "Active Users", value: "1000+" },
          ].map((stat) => (
            <div key={stat.title} className="p-6 rounded-lg bg-slate-50">
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};