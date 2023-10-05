import Link from 'next/link';
import { getDictionary } from '../../../getDictionary';

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const link = `/${lang}/about`;
  return (
    <main>
      <Link href="/ua">UA</Link>
      <br />

      <Link href={link}> ABOUT IN CORRECT LANGUAGE</Link>

      <br />
      <Link href="/en">EN</Link>
      <div>
        <label>{dict.form.name}</label>
        <input type="name" />
      </div>
      <div>
        <label>{dict.form.email}</label>
        <input type="email" />
      </div>
      <div>
        <label>{dict.form.city}</label>
        <input type="text" />
      </div>
    </main>
  );
}
