export function formatDate(input?: string | Date) {
  if (!input) return 'N/A';
  const d = typeof input === 'string' ? new Date(input) : input;
  if (Number.isNaN(d.getTime())) return 'N/A';
  return d.toISOString().split('T')[0];
}
