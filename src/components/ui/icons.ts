// 24×24 icons from design/design/icons.ts: inner markup of <svg viewBox="0 0 24 24" stroke="currentColor">.
export const icons = {
  bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
  briefcase: '<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 7V5h8v2M3 12h18"/>',
  "contact-card":
    '<rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="9" cy="11" r="2"/><path d="M14 10h4M14 14h3M6 16c.6-1.4 1.7-2 3-2s2.4.6 3 2"/>',
  cross: '<path d="M6 6l12 12M18 6L6 18"/>',
  devices: '<rect x="2" y="4" width="14" height="10" rx="2"/><rect x="15" y="9" width="7" height="11" rx="2"/><path d="M6 18h6"/>',
  feed: '<path d="M5 6h14M5 12h14M5 18h9"/>',
  heart: '<path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z"/>',
  "logo-person": '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
  pencil: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
  people:
    '<circle cx="8" cy="9" r="3"/><circle cx="17" cy="9" r="3"/><path d="M2 20c.7-3 3-5 6-5s5.3 2 6 5M14 15.5c.9-.3 1.9-.5 3-.5 3 0 5.3 2 6 5"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  scattered:
    '<rect x="3" y="4" width="8" height="7" rx="2"/><rect x="13" y="4" width="8" height="5" rx="2"/><rect x="13" y="12" width="8" height="8" rx="2"/><rect x="3" y="14" width="8" height="6" rx="2"/>',
} as const;

export type IconName = keyof typeof icons;
