import { useState } from "react";

function useFind() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const findPackage = async (pack) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://registry.npmjs.org/${pack}`);
      if (!response.ok) {
        throw new Error("Package not found");
      }
      const result = await response.json();
      setData(result)
      return null;
    } catch (error) {
      setError(error.message);
      return error.message;
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, findPackage };
}

export default useFind;
