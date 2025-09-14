// Import all translation files
import en from './en.json';
import ru from './ru.json';

// Define the available translations
export const languages = {
  en,
  ru
};

// Define language labels for the UI
export const languageLabels = {
  en: 'English',
  ru: 'Русский'
};

// Default language
export const defaultLang = 'en';

// Get the user's preferred language from Accept-Language header
export function getPreferredLanguage(request) {
  // Default to English if we can't determine the preference
  if (!request || !request.headers) return defaultLang;
  
  try {
    const acceptLanguage = request.headers.get('accept-language');
    if (!acceptLanguage) return defaultLang;
    
    // Parse the Accept-Language header
    // Format is typically: "en-US,en;q=0.9,ru;q=0.8"
    const preferredLanguages = acceptLanguage
      .split(',')
      .map(lang => {
        const [code, qValue] = lang.trim().split(';q=');
        return {
          code: code.split('-')[0], // Take only the language code part (en-US -> en)
          quality: qValue ? parseFloat(qValue) : 1.0
        };
      })
      .sort((a, b) => b.quality - a.quality);
    
    // Find the first language we support
    const supportedLang = preferredLanguages.find(lang => 
      Object.keys(languages).includes(lang.code)
    );
    
    return supportedLang ? supportedLang.code : defaultLang;
  } catch (error) {
    console.error('Error parsing Accept-Language header:', error);
    return defaultLang;
  }
}

// Get the current language from URL, browser preference, or default
export function getCurrentLang(url, request) {
  // First check URL for explicit language preference
  const [, langFromUrl] = url.pathname.split('/');
  if (Object.keys(languages).includes(langFromUrl)) {
    return langFromUrl;
  }
  
  // Next check browser preference
  if (request) {
    return getPreferredLanguage(request);
  }
  
  // Fallback to default
  return defaultLang;
}

// Get translation for a specific key path
export function getTranslation(lang, keyPath) {
  const keys = keyPath.split('.');
  let translation = languages[lang] || languages[defaultLang];
  
  for (const key of keys) {
    if (translation[key] === undefined) {
      // Fallback to default language if translation is missing
      translation = languages[defaultLang];
      for (const defaultKey of keys) {
        translation = translation[defaultKey];
        if (translation === undefined) return keyPath; // Return key path if no translation found
      }
      return translation;
    }
    translation = translation[key];
  }
  
  return translation;
}

// Generate URLs for language switching (not needed for automatic detection)
export function getLocalizedURL(url, lang) {
  const currentLang = getCurrentLang(url);
  const pathname = url.pathname;

  if (lang === defaultLang) {
    // For default language, remove language prefix if it exists
    return pathname.replace(new RegExp(`^/${currentLang}`), '') || '/';
  } else {
    // For non-default languages, add or replace language prefix
    if (currentLang === defaultLang) {
      return `/${lang}${pathname}`;
    } else {
      return pathname.replace(new RegExp(`^/${currentLang}`), `/${lang}`);
    }
  }
}

// Get translation for a specific key path
export function getTranslation(lang, keyPath) {
  const keys = keyPath.split('.');
  let translation = languages[lang] || languages[defaultLang];
  
  for (const key of keys) {
    if (translation[key] === undefined) {
      // Fallback to default language if translation is missing
      translation = languages[defaultLang];
      for (const defaultKey of keys) {
        translation = translation[defaultKey];
        if (translation === undefined) return keyPath; // Return key path if no translation found
      }
      return translation;
    }
    translation = translation[key];
  }
  
  return translation;
}

// Generate URLs for language switching
export function getLocalizedURL(url, lang) {
  const currentLang = getCurrentLang(url);
  const pathname = url.pathname;

  if (lang === defaultLang) {
    // For default language, remove language prefix if it exists
    return pathname.replace(new RegExp(`^/${currentLang}`), '') || '/';
  } else {
    // For non-default languages, add or replace language prefix
    if (currentLang === defaultLang) {
      return `/${lang}${pathname}`;
    } else {
      return pathname.replace(new RegExp(`^/${currentLang}`), `/${lang}`);
    }
  }
}