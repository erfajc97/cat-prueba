import { useEffect, useState } from "react";
import { getRadomFact } from "../facts";

export function useCatFact() {
    const [fact, setFact] = useState();
    const refreshFact = () => {
      getRadomFact().then(res => setFact(res));
    };
  
    useEffect(refreshFact, []);
    return { fact, refreshFact };
  }