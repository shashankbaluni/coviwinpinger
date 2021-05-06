let date = new Date();
module.exports = {
    TOKEN: process.env.T || process.env.token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxMmU1MTEwOS0zOTZlLTRjMGYtOGFhYS02N2E0ZTRjOTEwM2EiLCJ1c2VyX2lkIjoiMTJlNTExMDktMzk2ZS00YzBmLThhYWEtNjdhNGU0YzkxMDNhIiwidXNlcl90eXBlIjoiQkVORUZJQ0lBUlkiLCJtb2JpbGVfbnVtYmVyIjo5NzE4MTAyMDc3LCJiZW5lZmljaWFyeV9yZWZlcmVuY2VfaWQiOjEwOTU4NDAyNzEwMzMwLCJ1YSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85MC4wLjQ0MzAuODUgU2FmYXJpLzUzNy4zNiIsImRhdGVfbW9kaWZpZWQiOiIyMDIxLTA1LTAxVDA2OjQ4OjQ2Ljk5MloiLCJpYXQiOjE2MTk4NTE3MjYsImV4cCI6MTYxOTg1MjYyNn0.MEem7YdXN1I8TOrKpgzO8zHwcZGwWOjhZWZRObzz8KM',
    INTERVAL: Number(process.env.I || process.env.interval || 1) * 1000 * 60,
    DISTRICT_ID: (process.env.D || process.env.district || 650),
    PINCODE: (process.env.P || process.env.pincode || 201301),
    DATE: (process.env.DT || process.env.date || `0${date.getDate()}-0${date.getMonth()+1}-${date.getFullYear()}`),
    BY_DISTRICT: (process.env.BD || false),
    BY_PINCODE: (process.env.BP || true),
    MIN_AGE: Number(process.env.A || process.env.age || 18)
}