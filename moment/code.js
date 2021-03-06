async function fetchData() {
    moment().tz("America/Los_Angeles").format();
    console.log(moment().tz("America/Los_Angeles").format('LT'))
}

$(document).ready(fetchData);
