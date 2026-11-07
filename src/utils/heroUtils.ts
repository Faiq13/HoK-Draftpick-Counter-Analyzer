export const getHeroAvatar = (heroNameOrId: string): string => {
  if (!heroNameOrId) return '/heroes/default.webp';

  const slug = heroNameOrId
    .toLowerCase()
    .trim()
    .replace(/[\s\._'-]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/^-+|-+$/g, '');

  return `/heroes/${slug}.webp`;
};
