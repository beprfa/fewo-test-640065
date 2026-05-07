import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Startseite',
      href: getPermalink('/'),
    },
    {
      text: 'Ferienwohnungen',
      href: '/#ferienwohnungen',
    },
    {
      text: 'Landhaus',
      href: '/#landhaus',
    },
    {
      text: 'Anreise',
      href: '/#anreise',
    },
    {
      text: 'Preise',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Buchungsanfrage', href: getPermalink('/contact'), variant: 'secondary' }],
};

export const headerDataEn = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/en'),
    },
    {
      text: 'Apartments',
      href: '/en#apartments',
    },
    {
      text: 'The Estate',
      href: '/en#the-estate',
    },
    {
      text: 'Getting Here',
      href: '/en#getting-here',
    },
    {
      text: 'Prices',
      href: getPermalink('/en/contact'),
    },
  ],
  actions: [{ text: 'Booking Request', href: getPermalink('/en/contact'), variant: 'secondary' }],
};

export const footerData = {
  links: [
    {
      title: 'Ferienwohnungen',
      links: [
        { text: 'Alpenpanorama', href: '/#ferienwohnungen' },
        { text: 'Bergwiese', href: '/#ferienwohnungen' },
      ],
    },
    {
      title: 'Musterhaus Sonnenschein',
      links: [
        { text: 'Über uns', href: '/#landhaus' },
        { text: 'Die Region', href: '/#landhaus' },
        { text: 'Buchungsanfrage', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Rechtliches',
      links: [
        { text: 'Impressum', href: getPermalink('/terms') },
        { text: 'Datenschutz', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `
    © ${new Date().getFullYear()} Musterhaus Sonnenschein – Eine Seite von <a href="https://www.meinfewosite.de" target="_blank" rel="noopener" class="underline hover:text-gray-700">MeineFeWoSeite.de</a>.
  `,
};

export const footerDataEn = {
  links: [
    {
      title: 'Apartments',
      links: [
        { text: 'Alpenpanorama', href: '/en#apartments' },
        { text: 'Bergwiese', href: '/en#apartments' },
      ],
    },
    {
      title: 'Musterhaus Sonnenschein',
      links: [
        { text: 'About Us', href: '/en#the-estate' },
        { text: 'The Region', href: '/en#the-estate' },
        { text: 'Booking Request', href: getPermalink('/en/contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Legal Notice', href: getPermalink('/en/terms') },
        { text: 'Privacy Policy', href: getPermalink('/en/privacy') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `
    © ${new Date().getFullYear()} Musterhaus Sonnenschein – A site by <a href="https://www.meinfewosite.de" target="_blank" rel="noopener" class="underline hover:text-gray-700">MeineFeWoSeite.de</a>.
  `,
};
