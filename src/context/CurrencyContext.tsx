import React, { createContext, useContext, useState, ReactNode } from "react";

export type Currency = "USD" | "GBP" | "CAD";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (amount: number) => string;
  symbol: string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const rates = {
  USD: 1,
  GBP: 0.78,
  CAD: 1.37,
};

const symbols = {
  USD: "$",
  GBP: "£",
  CAD: "C$",
};

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");

  const formatPrice = (amount: number) => {
    const converted = amount * rates[currency];
    return `${symbols[currency]}${Math.round(converted)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, symbol: symbols[currency] }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
