import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 px-4 bg-[#1A1F2C]">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
          Best Burgers in Town
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          BURGER BAR
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Delicious burgers made with premium ingredients. Order now and experience the taste of perfection.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => navigate("/menu")}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg w-full sm:w-auto rounded-2xl"
          >
            View Menu
          </Button>
          <Button
            onClick={() => navigate("/orders")}
            variant="outline"
            className="px-8 py-6 text-lg w-full sm:w-auto rounded-2xl border-secondary text-secondary hover:bg-secondary/10"
          >
            Track Order
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Delivery Time", value: "30 min" },
            { title: "Menu Items", value: "50+" },
            { title: "Locations", value: "5" },
          ].map((stat) => (
            <div key={stat.title} className="glass p-6 rounded-2xl">
              <div className="text-3xl font-bold text-secondary mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};