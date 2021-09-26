const dns = require("dns");
dns.lookup("ENTER_SITE_HERE", (err, addresses, family) => {
	console.log("\x1b[34mIP Address is:\x1b[0m",addresses);
	console.log("\x1b[33mFamily: \x1b[0m",family);
});




















