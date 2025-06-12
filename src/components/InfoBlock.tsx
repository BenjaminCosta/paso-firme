import { ReactNode } from "react";

export const InfoBlock = ({ icon, text }: { icon: ReactNode; text: string }) => (
  <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-all">
    <div className="w-6 h-6 text-brand-purple flex-shrink-0">{icon}</div>
    <span className="text-gray-800 font-medium">{text}</span>
  </div>
);
