export default function ValidacionPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Validación de Servicio</h1>

      <div className="mt-6 space-y-4 border rounded-lg p-4">
        <h2 className="font-semibold">Inspección tienda</h2>

        <div className="text-sm text-gray-600">
          <p>📍 Ubicación: CDMX</p>
          <p>🕒 Hora: 14:32</p>
          <p>📸 Evidencia: foto subida</p>
        </div>

        <div className="flex gap-4 mt-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            Validar
          </button>

          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
            Rechazar
          </button>
        </div>
      </div>
    </main>
  );
}
