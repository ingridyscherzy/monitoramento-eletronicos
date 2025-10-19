import { Button } from "@/components/ui/button";
import { AlertCircle, Shield, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-glow to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8">
          <div className="h-24 w-24 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-elevated">
            <AlertCircle className="h-16 w-16 text-white" />
          </div>
          
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              Monitoramento de Eletrônicos
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Motta School Edition
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Sistema completo para registro e acompanhamento do uso de dispositivos eletrônicos em sala de aula
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/auth">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-elevated"
              >
                Acessar Sistema
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white space-y-3">
              <Shield className="h-10 w-10 mx-auto" />
              <h3 className="font-semibold text-lg">Controle Seguro</h3>
              <p className="text-sm text-white/80">
                Autenticação com níveis de acesso para gestores e professores
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white space-y-3">
              <BarChart3 className="h-10 w-10 mx-auto" />
              <h3 className="font-semibold text-lg">Relatórios Completos</h3>
              <p className="text-sm text-white/80">
                Dashboards e estatísticas em tempo real sobre ocorrências
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white space-y-3">
              <Users className="h-10 w-10 mx-auto" />
              <h3 className="font-semibold text-lg">Gestão de Turmas</h3>
              <p className="text-sm text-white/80">
                Acompanhe alunos, turmas e reincidências de forma organizada
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
