import { createContext, useContext, useState, type ReactNode } from "react";

interface SnackbarContextProps {
  showSnackbar: (message: string) => void;
}

const SnackbarContext = createContext<SnackbarContextProps | undefined>(
  undefined
);

export function SnackbarProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);

  const showSnackbar = (msg: string) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage(null);
    }, 2500);
  };

return (
  <SnackbarContext.Provider value={{ showSnackbar }}>
    {children}

    {message && (
      <div
        className="
          fixed bottom-6 left-1/2 -translate-x-1/2
          px-6 py-3 rounded
          bg-black text-white
          font-semibold text-sm tracking-wide
          shadow-xl
          animate-fade-in
        "
      >
        {message}
      </div>
    )}
  </SnackbarContext.Provider>
);
}

export function useSnackbar() {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used inside SnackbarProvider");
  }
  return context;
}