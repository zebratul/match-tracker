import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const MatchesContext = createContext();

export function MatchesProvider({ children }) {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMatches = useCallback(async () => {
    try {
      const response = await fetch('https://app.ftoyd.com/fronttemp-service/fronttemp');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setMatches(data.data.matches);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const refresh = useCallback(async () => {
    setLoading(true);
    await fetchMatches();
  }, [fetchMatches]);

  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  const value = useMemo(() => ({
    matches,
    loading,
    error,
    refresh
  }), [matches, loading, error, refresh]);

  return (
    <MatchesContext.Provider value={value}>
      {children}
    </MatchesContext.Provider>
  );
}

export function useMatches() {
  const context = useContext(MatchesContext);
  if (!context) throw new Error('useMatches must be used within a MatchesProvider');
  return context;
}