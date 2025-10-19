import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Users, GraduationCap, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Ocorrências Hoje",
      value: "12",
      description: "+3 desde ontem",
      icon: AlertCircle,
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "Turmas Ativas",
      value: "8",
      description: "3 períodos",
      icon: GraduationCap,
      gradient: "from-primary to-secondary",
    },
    {
      title: "Alunos Monitorados",
      value: "240",
      description: "Em 8 turmas",
      icon: Users,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Reincidentes",
      value: "15",
      description: "Últimos 7 dias",
      icon: TrendingUp,
      gradient: "from-amber-500 to-yellow-500",
    },
  ];

  return (
    <AppLayout>
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground mt-1">
            Visão geral do monitoramento de dispositivos eletrônicos
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card
              key={stat.title}
              className="shadow-card hover:shadow-elevated transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Top 5 Reincidentes</CardTitle>
              <CardDescription>Alunos com mais ocorrências nos últimos 7 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "João Silva", turma: "9º A", count: 5 },
                  { name: "Maria Santos", turma: "8º B", count: 4 },
                  { name: "Pedro Oliveira", turma: "9º A", count: 3 },
                  { name: "Ana Costa", turma: "7º C", count: 3 },
                  { name: "Lucas Souza", turma: "8º A", count: 2 },
                ].map((student, index) => (
                  <div
                    key={student.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-xs text-muted-foreground">{student.turma}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-destructive">{student.count}</p>
                      <p className="text-xs text-muted-foreground">ocorrências</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Dispositivos Mais Apreendidos</CardTitle>
              <CardDescription>Tipos de aparelhos registrados esta semana</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { device: "Celular", count: 45, percentage: 75 },
                  { device: "Fone de Ouvido", count: 12, percentage: 20 },
                  { device: "Tablet", count: 3, percentage: 5 },
                ].map((item) => (
                  <div key={item.device} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item.device}</span>
                      <span className="text-sm text-muted-foreground">{item.count}</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
