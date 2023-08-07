import { useEffect, useState } from 'react';
const CAT_URL_FIX = 'https://cataas.com';
export function useCatImage({ fact }) {
  const [imgeUrl, setImgUrl] = useState();
  const [loading, setLoadding] = useState(true);
  useEffect(() => {
    setLoadding(true);
    if (!fact) return;
    const firtsWorld = fact.split(' ').slice(0, 3).join(' ');
    fetch(
      `https://cataas.com/cat/says/${firtsWorld}?size=50&color=red&json=true`
    )
      .then(res => res.json())
      .then(data => {
        const { url } = data;
        setImgUrl(url);
      })
      .finally(setLoadding(false));
  }, [fact]);
  return { imgeUrl: `${CAT_URL_FIX}${imgeUrl}`, loading };
}
