import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Pasofirme from "./pages/Pasofirme";
import Descubriendo from "./pages/Descubriendo";
import SoyCapaz from "./pages/Soycapaz"; // ✅ nueva landing
import NotFound from "./pages/NotFound";
import CaosConexion from "./pages/CaosConexion";

const queryClient = new QueryClient();

const App = () => {
  const host = window.location.hostname;
  const path = window.location.pathname;

  const isDescubriendo =
    host.startsWith("descubriendo") || path.startsWith("/descubriendo");

  const isSoyCapaz =
    host.startsWith("soy-capaz") || path.startsWith("/soy-capaz");

  const isCaosConexion =
    host.startsWith("soy-capaz") || path.startsWith("/soy-capaz");  

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
           <Routes>
            {isDescubriendo ? (
              <Route path="*" element={<Descubriendo />} />
            ) : isSoyCapaz ? (
              <Route path="*" element={<SoyCapaz />} />
            ) : isDescubriendo ? (
              <Route path="*" element={<CaosConexion />} />
            ) : ( 
              
              <>
                <Route path="/" element={<Pasofirme />} />
                <Route path="/descubriendo" element={<Descubriendo />} />
                <Route path="/conexion" element={<CaosConexion />} />
                <Route path="/soy-capaz" element={<SoyCapaz />} />
                <Route path="*" element={<NotFound />} />
              </>
            )}
          </Routes>

          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
