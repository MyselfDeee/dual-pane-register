import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import authHeroImage from "@/assets/auth-hero.jpg";

export const AuthHero = () => {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-auth-gradient-from to-auth-gradient-to p-8">
      <div className="absolute inset-0">
        <img
          src={authHeroImage}
          alt="Mountain landscape"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-auth-gradient-from/60 to-auth-gradient-to/40" />
      </div>
      
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold tracking-tight text-primary-foreground">
              AMU
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            className="text-primary-foreground hover:bg-primary-foreground/10"
            size="sm"
          >
            Back to website
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-auto">
          <h2 className="mb-8 text-4xl font-bold leading-tight text-primary-foreground">
            Capturing Moments,
            <br />
            Creating Memories
          </h2>
          
          <div className="flex space-x-2">
            <div className="h-1 w-8 rounded-full bg-primary-foreground/40" />
            <div className="h-1 w-8 rounded-full bg-primary-foreground/40" />
            <div className="h-1 w-8 rounded-full bg-primary-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};
