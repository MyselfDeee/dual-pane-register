import { AuthHero } from "@/components/AuthHero";
import { AuthForm } from "@/components/AuthForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto h-[calc(100vh-2rem)] max-w-7xl md:h-[calc(100vh-4rem)]">
        <div className="grid h-full gap-8 md:grid-cols-2">
          <div className="hidden md:block">
            <AuthHero />
          </div>
          <div className="flex items-center">
            <AuthForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
