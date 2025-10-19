import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Filter, Download } from "lucide-react";

export default function Ocorrencias() {
  const mockData = [
    {
      id: 1,
      aluno: "João Silva",
      turma: "9º A",
      dispositivo: "Celular",
      data: "2025-01-15",
      professor: "Prof. Carlos",
      status: "Registrada",
    },
    {
      id: 2,
      aluno: "Maria Santos",
      turma: "8º B",
      dispositivo: "Fone de Ouvido",
      data: "2025-01-15",
      professor: "Prof. Ana",
      status: "Resolvida",
    },
    {
      id: 3,
      aluno: "Pedro Oliveira",
      turma: "9º A",
      dispositivo: "Celular",
      data: "2025-01-14",
      professor: "Prof. Carlos",
      status: "Registrada",
    },
  ];

  return (
    <AppLayout>
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Ocorrências</h2>
            <p className="text-muted-foreground mt-1">
              Histórico de registros de uso de dispositivos
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filtrar
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Exportar
            </Button>
            <Button className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Plus className="h-4 w-4" />
              Nova Ocorrência
            </Button>
          </div>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Registros Recentes</CardTitle>
            <CardDescription>
              Últimas ocorrências registradas no sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Aluno</TableHead>
                  <TableHead>Turma</TableHead>
                  <TableHead>Dispositivo</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Professor</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.map((ocorrencia) => (
                  <TableRow key={ocorrencia.id} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">{ocorrencia.aluno}</TableCell>
                    <TableCell>{ocorrencia.turma}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{ocorrencia.dispositivo}</Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(ocorrencia.data).toLocaleDateString('pt-BR')}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {ocorrencia.professor}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          ocorrencia.status === "Resolvida" ? "default" : "secondary"
                        }
                      >
                        {ocorrencia.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
