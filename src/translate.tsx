import React, {useContext, useState} from 'react';
import {TranslateContext, LanguageContext} from './translator';

export default function Translate({
  children: value,
}: {
  children: string;
}): JSX.Element {
  const language = useContext(LanguageContext);
  const handleTranslate = useContext(TranslateContext);
  const [translation, setTranslation] = useState(value);

  React.useEffect(() => {
    handleTranslate(value, setTranslation);
  }, [value, language]);

  return <>{translation}</>;
}
