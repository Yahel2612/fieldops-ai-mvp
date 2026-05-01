"use client";

import { useEffect, useState } from "react";

export default function TrabajadorPage() {
  const [estado, setEstado] = useState("Disponible");

  useEffect(() => {
    const saved = localStorage.getItem("estadoTrabajo");
    if (saved) setEstado(saved);
  }, []);

  const cambiarEstado = (nuevoEstado: string) => {
    setEstado(nuevoEstado);
    localStorage.setItem("estadoTrabajo", nuevoEstado);
  };

  return (
    <main className="mx-auto min-h-screen max-w-md bg-white p-6">
      <h1 className="text-3xl font-bold">Trabajador</h1>
      <p className="mt-2 text-gray-600">Trabajos disponibles cerca de ti</p>

      <div className="mt-6 rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-semibold">Inspección tienda</h2>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
            {estado}
          </span>
        </div>

        <div className="mt-4 space-y-1 text-sm text-gray-600">
          <p>Pago: $250 MXN</p>
          <p>Distancia: 1.2 km</p>
          <p>Ubicación: CDMX</p>
          <p>Evidencia requerida: foto + ubicación GPS</p>
        </div>

        {estado === "Disponible" && (
          <button
            onClick={() => cambiarEstado("Aceptado")}
            className="mt-5 w-full rounded-xl bg-black px-4 py-3 text-white"
          >
            Aceptar trabajo
          </button>
        )}

        {estado === "Aceptado" && (
          <button
            onClick={() => cambiarEstado("Completado")}
            className="mt-5 w-full rounded-xl bg-blue-600 px-4 py-3 text-white"
          >
            Marcar como completado
          </button>
        )}

        {estado === "Completado" && (
          <p className="mt-5 rounded-xl bg-yellow-50 p-3 text-sm text-yellow-800">
            Evidencia enviada. Esperando validación.
          </p>
        )}

        {estado === "Validado" && (
          <p className="mt-5 rounded-xl bg-green-50 p-3 text-sm text-green-800">
            Servicio validado. Pago listo para procesarse.
          </p>
        )}

        {estado === "Rechazado" && (
          <p className="mt-5 rounded-xl bg-red-50 p-3 text-sm text-red-800">
            Evidencia rechazada. Se requiere nueva revisión.
          </p>
        )}
      </div>

      <button
        onClick={() => cambiarEstado("Disponible")}
        className="mt-4 w-full rounded-xl border px-4 py-3 text-sm"
      >
        Reiniciar demo
      </button>
    </main>
  );
}