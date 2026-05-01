export default function EmpresaPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Dashboard Empresa</h1>

      <div className="mt-6 space-y-4">
        <div className="p-4 border rounded-lg">
          <h2 className="font-semibold">Inspección tienda</h2>
          <p className="text-sm text-gray-600">Estado: Disponible</p>
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="font-semibold">Revisión publicidad</h2>
          <p className="text-sm text-gray-600">Estado: En progreso</p>
        </div>
      </div>
    </main>
  );
}