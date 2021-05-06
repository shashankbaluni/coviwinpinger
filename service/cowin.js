const axois = require('axios');
const CONFIG = require('../config');

axois.interceptors.request.use(request => {
    console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
})

class Cowin {
    static fetchAllSlotsByPincode (pincode, date) {
        const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByPin?pincode=${pincode}&date=${date}`;
        const options = {
            method: 'GET',
            headers: {
                origin: 'https://selfregistration.cowin.gov.in',
                referer: 'https://selfregistration.cowin.gov.in/',
                authority: 'cdn-api.co-vin.in',
                'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
                'sec-ch-ua-mobile': '?0',
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36',
                'sec-fetch-site': 'cross-site',
                'sec-fetch-mode': 'cors',
                'sec-fetch-dest': 'empty',
                'content-type': 'application/json'
            },
            url,
          };
        return axois(options);
    }

    static async fetchOpenSlotsByPincode (pincode, date) {
        try{
            const response = await this.fetchAllSlotsByPincode(pincode, date);
            let slots = response.data;
            console.log("slots %j", slots);
            return slots && slots.centers && slots.centers.filter((center) => {
                let sessions = center.sessions.filter((session) => {
                    return session.avalable_capacity > 0 && session.min_age_limit == CONFIG.MIN_AGE;
                });

                if (sessions.length > 0) {
                    center.sessions = sessions;
                    return true;
                }
            });
        } catch(error) {
            console.log("error %j", error.message);
        }
    }

    static fetchAllSlotsByDistrictID (districtID, date) {
        const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=${districtID}&date=${date}`;
        const options = {
            method: 'GET',
            headers: {
                origin: 'https://selfregistration.cowin.gov.in',
                referer: 'https://selfregistration.cowin.gov.in/',
                authority: 'cdn-api.co-vin.in',
                'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
                'sec-ch-ua-mobile': '?0',
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36',
                'sec-fetch-site': 'cross-site',
                'sec-fetch-mode': 'cors',
                'sec-fetch-dest': 'empty',
                'content-type': 'application/json'
            },
            url,
          };
        return axois(options)
    }

    static async fetchOpenSlotsByDistrictID (districtID, date) {
        try{
            const response = await this.fetchAllSlotsByDistrictID(districtID, date);
            let slots = response.data;
            console.log("slots %j", slots);
            return slots && slots.centers && slots.centers.filter((center) => {
                let sessions = center.sessions.filter((session) => {
                    return session.avalable_capacity > 0 && session.min_age_limit == CONFIG.MIN_AGE;
                });

                if (sessions.length > 0) {
                    center.sessions = sessions;
                    return true;
                }
            });
        } catch(error) {
            console.log("error %j", error.message);
        }
    }
};

module.exports = Cowin;
