import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Plus } from "lucide-react";

export default function Alunos() {
  return (
    <AppLayout>
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Alunos</h2>
            <p className="text-muted-foreground mt-1">
              Gerencie os alunos cadastrados no sistema
            </p>
          </div>
          <Button className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Plus className="h-4 w-4" />
            Novo Aluno
          </Button>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Listagem de Alunos
            </CardTitle>
            <CardDescription>
              Em breve: visualização completa de todos os alunos
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center py-12">
            <p className="text-muted-foreground">
              Funcionalidade em desenvolvimento
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
