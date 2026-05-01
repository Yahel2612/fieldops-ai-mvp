"use client";

import { useEffect, useState } from "react";

export default function ValidacionPage() {
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
      <h1 className="text-3xl font-bold">Validación</h1>
      <p className="mt-2 text-gray-600">
        Revisión de evidencia del trabajo
      </p>

      <div className="mt-6 rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-semibold">Inspección tienda</h2>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
            {estado}
          </span>
        </div>

        <div className="mt-4 space-y-1 text-sm text-gray-600">
          <p>📍 Ubicación: CDMX</p>
          <p>🕒 Hora: 14:32</p>
          <p>📸 Evidencia: foto subida</p>
        </div>

        {estado === "Completado" && (
          <div className="mt-5 flex gap-4">
            <button
              onClick={() => cambiarEstado("Validado")}
              className="flex-1 rounded-xl bg-green-600 px-4 py-3 text-white"
            >
              Validar
            </button>

            <button
              onClick={() => cambiarEstado("Rechazado")}
              className="flex-1 rounded-xl bg-red-600 px-4 py-3 text-white"
            >
              Rechazar
            </button>
          </div>
        )}

        {estado === "Validado" && (
          <p className="mt-5 rounded-xl bg-green-50 p-3 text-sm text-green-800">
            Servicio aprobado correctamente.
          </p>
        )}

        {estado === "Rechazado" && (
          <p className="mt-5 rounded-xl bg-red-50 p-3 text-sm text-red-800">
            Evidencia rechazada. Se requiere nueva revisión.
          </p>
        )}

        {estado !== "Completado" &&
          estado !== "Validado" &&
          estado !== "Rechazado" && (
            <p className="mt-5 rounded-xl bg-yellow-50 p-3 text-sm text-yellow-800">
              Aún no hay evidencia lista para validar.
            </p>
          )}
      </div>
    </main>
  );
}

