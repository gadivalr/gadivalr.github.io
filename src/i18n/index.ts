import { es, type Dict } from './es';
import { en } from './en';

export type { Dict };
export type Locale = 'es' | 'en';

export const LOCALES: Locale[] = ['es', 'en'];
export const DEFAULT_LOCALE: Locale = 'es';

export function getDict(locale: Locale): Dict {
  return locale === 'en' ? en : es;
}

/** Ruta principal de cada locale (home). */
export function homePath(locale: Locale): string {
  return locale === 'en' ? '/en/' : '/';
}
