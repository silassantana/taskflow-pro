export function formatDate(input) {
    if (!input)
        return 'N/A';
    const d = typeof input === 'string' ? new Date(input) : input;
    return d.toISOString().split('T')[0];
}
