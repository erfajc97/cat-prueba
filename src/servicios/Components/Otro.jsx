import React from 'react';
import { useCatImage } from '../hooks/useCatImage';

const Otro = () => {
  const { imgeUrl } = useCatImage({ fact: 'cat' });
  return <div>{imgeUrl && <img src={imgeUrl} alt="imagen de gatos" />}</div>;
};

export default Otro;
