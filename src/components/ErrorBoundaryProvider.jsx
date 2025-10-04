"use client";

import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/ErrorBoundary";
import React from "react";

export default function ErrorBoundaryProvider({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        console.log(error, info);
      }}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
}
