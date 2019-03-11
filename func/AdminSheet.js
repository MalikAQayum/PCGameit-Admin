function AdminSheet(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://spreadsheets.google.com/feeds/cells/12l4Bzarph9fhkeUo7PUz5_gbLoQOLtJd4Q5b1TtVyKA/default/public/full?alt=json",
        synchronous: true,
        onload: function(response) {
            var pcgameitadmin_str = response.responseText;
            var json = JSON.parse(pcgameitadmin_str);
            //$J.post("https://steamcommunity.com/comment/Profile/post/76561197966384101/-1/", {comment: "[USER]> "+ json.feed.entry['5']['gs$cell']['inputValue'] + "\n[ROLE]> "+ json.feed.entry['6']['gs$cell']['inputValue'] + "\n[TOTAL]> "+ json.feed.entry['7']['gs$cell']['inputValue'] + "\n[STEAMID]> "+ json.feed.entry['8']['gs$cell']['inputValue'] + "\n[ENABLED]> "+ json.feed.entry['9']['gs$cell']['inputValue'],count: 6,sessionid: g_sessionID, feature2: -1});
            console.log("[Date]> "+Date()+"\n[USER]> "+ json.feed.entry['5']['gs$cell']['inputValue'] + "\n[ROLE]> "+ json.feed.entry['6']['gs$cell']['inputValue'] + "\n[TOTAL]> "+ json.feed.entry['7']['gs$cell']['inputValue'] + "\n[STEAMID]> "+ json.feed.entry['8']['gs$cell']['inputValue'] + "\n[ENABLED]> "+ json.feed.entry['9']['gs$cell']['inputValue']); //MalikQayum

			//get request the moderator/admin section of the group page, and check if their id matches one of the ones on the sheet, if not, then kick/ban that modded/officer.
			
            if(json.feed.entry['9']['gs$cell']['inputValue'] == 1){
                localStorage.removeItem('setOldarr');
                localStorage.removeItem('ECL');
                localStorage.removeItem('Oldarr');

                if (json.feed.entry['14']['gs$cell']['inputValue'] == 1) {
                    let user = json.feed.entry['10']['gs$cell']['inputValue'];
                    let role = json.feed.entry['11']['gs$cell']['inputValue'];
                    let copies = json.feed.entry['12']['gs$cell']['inputValue'];
                    var steamid = json.feed.entry['13']['gs$cell']['inputValue'];
                    let enabled = json.feed.entry['14']['gs$cell']['inputValue'];
                    let expectedCopiesLeft = json.feed.entry['7']['gs$cell']['inputValue'] - copies;

                    localStorage.setItem('ECL',expectedCopiesLeft);
                    localStorage.setItem('S64ID',steamid);
					localStorage.setItem('copies',copies);
					localStorage.setItem('user',user);

                    setRole('765611' + steamid,1,user,copies);

                    console.log(user + " has been modded! > Expected Copies left => " + expectedCopiesLeft + "\nSteamID => "+steamid);
                    Ppage();
                } else if (json.feed.entry['19']['gs$cell']['inputValue']== 1) {
                    let user = json.feed.entry['15']['gs$cell']['inputValue'];
                    let role = json.feed.entry['16']['gs$cell']['inputValue'];
                    let copies = json.feed.entry['17']['gs$cell']['inputValue'];
                    let steamid = json.feed.entry['18']['gs$cell']['inputValue'];
                    let enabled = json.feed.entry['19']['gs$cell']['inputValue'];
                    let expectedCopiesLeft = json.feed.entry['7']['gs$cell']['inputValue'] - copies;

                    localStorage.setItem('ECL',expectedCopiesLeft);
                    localStorage.setItem('S64ID',steamid);
					localStorage.setItem('copies',copies);
					localStorage.setItem('user',user);

                    setRole('765611' + steamid,1,user,copies);

                    console.log(user + " has been modded! > Expected Copies left => " + expectedCopiesLeft + "\nSteamID => "+steamid);
                    Ppage();
                } else if (json.feed.entry['24']['gs$cell']['inputValue']== 1) {
                    let user = json.feed.entry['20']['gs$cell']['inputValue'];
                    let role = json.feed.entry['21']['gs$cell']['inputValue'];
                    let copies = json.feed.entry['22']['gs$cell']['inputValue'];
                    let steamid = json.feed.entry['23']['gs$cell']['inputValue'];
                    let enabled = json.feed.entry['24']['gs$cell']['inputValue'];
                    let expectedCopiesLeft = json.feed.entry['7']['gs$cell']['inputValue'] - copies;

                    localStorage.setItem('ECL',expectedCopiesLeft);
                    localStorage.setItem('S64ID',steamid);
					localStorage.setItem('copies',copies);
					localStorage.setItem('user',user);

                    setRole('765611' + steamid,1,user,copies);

                    console.log(user + " has been modded! > Expected Copies left => " + expectedCopiesLeft + "\nSteamID => "+steamid);
                    Ppage();
                } else if (json.feed.entry['29']['gs$cell']['inputValue']== 1) {
                    let user = json.feed.entry['25']['gs$cell']['inputValue'];
                    let role = json.feed.entry['26']['gs$cell']['inputValue'];
                    let copies = json.feed.entry['27']['gs$cell']['inputValue'];
                    let steamid = json.feed.entry['28']['gs$cell']['inputValue'];
                    let enabled = json.feed.entry['29']['gs$cell']['inputValue'];
                    let expectedCopiesLeft = json.feed.entry['7']['gs$cell']['inputValue'] - copies;

                    localStorage.setItem('ECL',expectedCopiesLeft);
                    localStorage.setItem('S64ID',steamid);
					localStorage.setItem('copies',copies);
					localStorage.setItem('user',user);

                    setRole('765611' + steamid,1,user,copies);

                    console.log(user + " has been modded! > Expected Copies left => " + expectedCopiesLeft + "\nSteamID => "+steamid);
                    Ppage();
                } else if (json.feed.entry['34']['gs$cell']['inputValue']== 1) {
                    let user = json.feed.entry['30']['gs$cell']['inputValue'];
                    let role = json.feed.entry['31']['gs$cell']['inputValue'];
                    let copies = json.feed.entry['32']['gs$cell']['inputValue'];
                    let steamid = json.feed.entry['33']['gs$cell']['inputValue'];
                    let enabled = json.feed.entry['34']['gs$cell']['inputValue'];
                    let expectedCopiesLeft = json.feed.entry['7']['gs$cell']['inputValue'] - copies;

                    localStorage.setItem('ECL',expectedCopiesLeft);
                    localStorage.setItem('S64ID',steamid);
					localStorage.setItem('copies',copies);
					localStorage.setItem('user',user);

                    setRole('765611' + steamid,1,user,copies);

                    console.log(user + " has been modded! > Expected Copies left => " + expectedCopiesLeft + "\nSteamID => "+steamid);
                    Ppage();
                } else if (json.feed.entry['39']['gs$cell']['inputValue']== 1) {
                    let user = json.feed.entry['35']['gs$cell']['inputValue'];
                    let role = json.feed.entry['36']['gs$cell']['inputValue'];
                    let copies = json.feed.entry['37']['gs$cell']['inputValue'];
                    let steamid = json.feed.entry['38']['gs$cell']['inputValue'];
                    let enabled = json.feed.entry['39']['gs$cell']['inputValue'];
                    let expectedCopiesLeft = json.feed.entry['7']['gs$cell']['inputValue'] - copies;

                    localStorage.setItem('ECL',expectedCopiesLeft);
                    localStorage.setItem('S64ID',steamid);
					localStorage.setItem('copies',copies);
					localStorage.setItem('user',user);

                    setRole('765611' + steamid,1,user,copies);

                    console.log(user + " has been modded! > Expected Copies left => " + expectedCopiesLeft + "\nSteamID => "+steamid);
                    Ppage();
                } else if (json.feed.entry['44']['gs$cell']['inputValue']== 1) {
                    let user = json.feed.entry['40']['gs$cell']['inputValue'];
                    let role = json.feed.entry['41']['gs$cell']['inputValue'];
                    let copies = json.feed.entry['42']['gs$cell']['inputValue'];
                    let steamid = json.feed.entry['43']['gs$cell']['inputValue'];
                    let enabled = json.feed.entry['44']['gs$cell']['inputValue'];
                    let expectedCopiesLeft = json.feed.entry['7']['gs$cell']['inputValue'] - copies;

                    localStorage.setItem('ECL',expectedCopiesLeft);
                    localStorage.setItem('S64ID',steamid);
					localStorage.setItem('copies',copies);
					localStorage.setItem('user',user);

                    setRole('765611' + steamid,1,user,copies);

                    console.log(user + " has been modded! > Expected Copies left => " + expectedCopiesLeft + "\nSteamID => "+steamid);
                    Ppage();
                } else {
                    console.log("No moderator enabled!");
                    setTimeout(function(){ AdminSheet(); }, 60000);
                }
            } else {
                console.log("MalikQayum is not enabled!");
                setTimeout(function(){ AdminSheet(); }, 60000);
            }
        }
    });
}