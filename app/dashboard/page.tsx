import { Card, CardTitle } from "@/components/ui/card";



export default function Dashboard() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-12 px-5">
      <h1>Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="w-full h-64 flex justify-center items-center">
        <CardTitle>JavaScript</CardTitle> 
        </Card>
        <Card className="w-full h-64 flex justify-center items-center">
        <CardTitle>TypeScript</CardTitle> 
        </Card>
        <Card className="w-full h-64 flex justify-center items-center">
        <CardTitle>Python</CardTitle> 
        </Card>
      </div>
    </div>
  );
}
