"use client";

import { useEffect, useState } from "react";

export default function EmpresaPage() {
  const [estado, setEstado] = useState("Disponible");

  useEffect(() => {
    const saved = localStorage.getItem("estadoTrabajo");
    if (saved) setEstado(saved);
  }, []);

  return (
    <main className="mx-auto min-h-screen max-w-md bg-white p-6">
      <h1 className="text-3xl font-bold">Empresa</h1>
      <p className="mt-2 text-gray-600">Gestión de trabajos</p>

      <div className="mt-6 rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-semibold">Inspección tienda</h2>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
            {estado}
          </span>
        </div>

        <div className="mt-4 space-y-1 text-sm text-gray-600">
          <p>Ubicación: CDMX</p>
          <p>Pago: $250 MXN</p>
          <p>Tipo: Inspección física</p>
        </div>

        {estado === "Disponible" && (
          <p className="mt-5 text-sm text-gray-500">
            Esperando que un trabajador acepte el trabajo.
          </p>
        )}

        {estado === "Aceptado" && (
          <p className="mt-5 text-sm text-blue-600">
            Un trabajador ha aceptado el trabajo.
          </p>
        )}

        {estado === "Completado" && (
          <p className="mt-5 text-sm text-yellow-600">
            Trabajo completado. Esperando validación.
          </p>
        )}

        {estado === "Validado" && (
          <p className="mt-5 text-sm text-green-600">
            Trabajo validado. Proceso finalizado.
          </p>
        )}

        {estado === "Rechazado" && (
          <p className="mt-5 text-sm text-red-600">
            Trabajo rechazado. Requiere nueva revisión.
          </p>
        )}
      </div>
    </main>
  );
}
