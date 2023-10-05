import React from 'react';
import { getDictionary } from '../../../../getDictionary';

const AboutPage = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return <div>{dict.about.text}</div>;
};

export default AboutPage;
