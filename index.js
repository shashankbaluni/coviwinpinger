const CONFIG = require('./config');
const Cowin = require('./service/cowin');
const Notification = require('./notification');

async function main() {
    let centers = [];
    if (CONFIG.BY_PINCODE || CONFIG.PINCODE) {
        console.log(CONFIG.PINCODE);
        centers = await Cowin.fetchOpenSlotsByPincode(CONFIG.PINCODE, CONFIG.DATE);
    } else if (CONFIG.BY_DISTRICT || CONFIG.DISTRICT_ID) {
        console.log(CONFIG.BY_DISTRICT);
        centers = await Cowin.fetchOpenSlotsByDistrictID(CONFIG.DISTRICT_ID, CONFIG.DATE);
    } else {
        throw new Error("Insufficient data");
    }
    console.log(centers);
    if (centers.length) {
        Notification.fire(JSON.stringify(centers), 1);
    }
}

setInterval(main, CONFIG.INTERVAL);