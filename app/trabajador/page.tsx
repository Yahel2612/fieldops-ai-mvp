export default function TrabajadorPage() {
  return (
    <main className="mx-auto min-h-screen max-w-md p-6">
      <h1 className="text-3xl font-bold">Trabajador</h1>
      <p className="mt-2 text-gray-600">Trabajos disponibles cerca de ti</p>

      <div className="mt-6 rounded-lg border p-4">
        <h2 className="font-semibold">Inspección tienda</h2>
        <p className="mt-1 text-sm text-gray-600">Pago: $250 MXN</p>
        <p className="text-sm text-gray-600">Distancia: 1.2 km</p>

        <button className="mt-4 w-full rounded-lg bg-black px-4 py-2 text-white">
          Aceptar trabajo
        </button>
      </div>
    </main>
  );
}