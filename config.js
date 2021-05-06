let date = new Date();
module.exports = {
    INTERVAL: Number(process.env.I || process.env.interval || 1) * 1000 * 60,
    DISTRICT_ID: (process.env.D || process.env.district || 650),
    PINCODE: (process.env.P || process.env.pincode || 201301),
    DATE: (process.env.DT || process.env.date || `0${date.getDate()}-0${date.getMonth()+1}-${date.getFullYear()}`),
    BY_DISTRICT: (process.env.BD || false),
    BY_PINCODE: (process.env.BP || true),
    MIN_AGE: Number(process.env.A || process.env.age || 18)
}