import React, {useCallback, useContext, useState} from 'react';
import {TranslateContext, LanguageContext} from './translator';

export default function Translate({
  children: value,
  onTranslated,
}: {
  children: string;
  onTranslated?: (translation: string) => void;
}): JSX.Element {
  const language = useContext(LanguageContext);
  const handleTranslate = useContext(TranslateContext);
  const [translation, setTranslation] = useState(value);

  const handleTranslation = useCallback(
    (translated: string) => {
      setTranslation(translated);
      onTranslated && onTranslated(translated);
    },
    [onTranslated]
  );

  React.useEffect(() => {
    handleTranslate(value, handleTranslation);
  }, [value, language]);

  return <>{translation}</>;
}
