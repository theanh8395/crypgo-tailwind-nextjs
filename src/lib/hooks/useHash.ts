"use client";

import { useEffect, useState } from "react";

const useHash = () => {
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    const updateHash = () => {
      const currentHash = window.location.hash.substring(1);
      setHash(currentHash);
    };
    updateHash();
    window.addEventListener("popstate", updateHash);
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.addEventListener("popstate", updateHash);
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  return hash;
};

export default useHash;
