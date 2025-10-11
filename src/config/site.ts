export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: {
    name: string;
    email: string;
    telegram: string;
  };
  social: SocialLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  description?: string;
}

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export const siteConfig: SiteConfig = {
  name: "Vorkytaka",
  title: "Vorkytaka - Mobile Developer",
  description: "Мобильный разработчик, увлекающийся игровой индустрией.",
  url: "https://vorkytaka.github.io",
  author: {
    name: "Костя Довнар",
    email: "vorkytaka@gmail.com",
    telegram: "vorky"
  },
  social: [
    { 
      name: 'Twitch', 
      url: 'https://twitch.tv/vorkytaka', 
      icon: 'Twitch',
      description: 'Gaming streams'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/vorkytaka', 
      icon: 'GitHub',
      description: 'Code repositories'
    },
    { 
      name: 'Tg Channel', 
      url: 'https://t.me/vorkytaka', 
      icon: 'Telegram',
      description: 'Blog about everything'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/vorkytaka', 
      icon: 'LinkedIn',
      description: 'Professional network'
    },
  ]
};

// Helper function to generate page titles
export function createPageTitle(pageTitle?: string): string {
  if (!pageTitle) return siteConfig.title;
  return pageTitle.includes(siteConfig.name) ? pageTitle : `${pageTitle} | ${siteConfig.name}`;
}

// Helper function to generate canonical URLs
export function createCanonicalUrl(path: string = '/'): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}