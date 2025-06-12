import { useEffect, useState } from "react";

export interface EventData {
  id: string;
  modalidad: "online" | "presencial";
  fecha: string;
  horario: string;
  detalles: string;
}

const useSheetData = () => {
  const [data, setData] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Usar la API de publicación web de Google Sheets (formato CSV)
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vS74s6R-490DkeaLQ9WslFVZPEL_JBS6wmmO8qvps0RRPXKkI4q_ahJuZUSl79jxfcLuG8q2_fEeEWz/pub?output=csv"
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const csvData = await response.text();
        const parsedData = parseCSV(csvData);
        
        setData(parsedData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
        setLoading(false);
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// Función para parsear CSV básico
const parseCSV = (csvText: string): EventData[] => {
  const lines = csvText.split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  
  return lines.slice(1).map(line => {
    const values = line.split(',');
    const entry = headers.reduce((obj, header, index) => {
      obj[header] = values[index]?.trim() || '';
      return obj;
    }, {} as Record<string, string>);

    return {
      id: entry.id || Math.random().toString(36).substring(2, 9),
      modalidad: (entry.modalidad?.toLowerCase() === "presencial" 
        ? "presencial" 
        : "online") as "online" | "presencial",
      fecha: entry.fecha || "Fecha no especificada",
      horario: entry.horario || "Horario no especificado",
      detalles: entry.detalles || ""
    };
  });
};

export default useSheetData;