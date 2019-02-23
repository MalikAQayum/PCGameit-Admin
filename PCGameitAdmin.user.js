// ==UserScript==
// @name         PCGameit Admin Tool
// @namespace    https://github.com/MalikAQayum
// @version      0.1
// @description  Steam Curator Admin Management Userscript tool, which will allow other officers/moderators, to use owner abilities through the owner steam account. 
// @author       MalikQayum
// @connect      api.steampowered.com
// @connect      store.steampowered.com
// @connect      steamcommunity.com
// @connect      spreadsheets.google.com
// @match        https://steamcommunity.com/groups/pcgameit/membersManage
// @require     https://code.jquery.com/jquery-3.3.1.js
// @grant        GM_xmlhttpRequest
// ==/UserScript==

//https://docs.google.com/spreadsheets/d/12l4Bzarph9fhkeUo7PUz5_gbLoQOLtJd4Q5b1TtVyKA/edit#gid=1782405299
//https://spreadsheets.google.com/feeds/cells/12l4Bzarph9fhkeUo7PUz5_gbLoQOLtJd4Q5b1TtVyKA/default/public/full?alt=json

AdminSheet();

function AdminSheet(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://spreadsheets.google.com/feeds/cells/12l4Bzarph9fhkeUo7PUz5_gbLoQOLtJd4Q5b1TtVyKA/default/public/full?alt=json",
        synchronous: true,
        onload: function(response) {
            var pcgameitadmin_str = response.responseText;
            var json = JSON.parse(pcgameitadmin_str);
            console.log("[USER]> "+ json.feed.entry['5']['gs$cell']['inputValue'] + "\n[ROLE]> "+ json.feed.entry['6']['gs$cell']['inputValue'] + "\n[TOTAL]> "+ json.feed.entry['7']['gs$cell']['inputValue'] + "\n[STEAMID]> "+ json.feed.entry['8']['gs$cell']['inputValue'] + "\n[ENABLED]> "+ json.feed.entry['9']['gs$cell']['inputValue']); //MalikQayum

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

                    setRole('765611' + steamid, 1);

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

                    setRole('765611' + steamid, 1);

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

                    setRole('765611' + steamid, 1);

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

                    setRole('765611' + steamid, 1);

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

                    setRole('765611' + steamid, 1);

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

                    setRole('765611' + steamid, 1);

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

                    setRole('765611' + steamid, 1);

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

//this i feel like we need to be sure is never empty. maybe look into readystate
function Ppage(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://store.steampowered.com/curator/33779114-pcgameit/admin/pending?ajax=1",
        synchronous: true,
        onload: function(response) {
            //if (response.readyState == 4) { /* some code */ }
            if (response.status == 200) {
                var p_str = response.responseText;
                Epage(p_str);
            } else {
                console.log("Ppage() => " + response.responseText);
                setTimeout(function(){ Ppage(); }, 150);
            }
        }
    });
}

function Epage(p_str){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://store.steampowered.com/curator/33779114-pcgameit/admin/excluded?ajax=1",
        synchronous: true,
        onload: function(response) {
            if (response.status == 200) {
                var e_str = response.responseText;
                var sourcePages = p_str.concat(e_str);
                handleData(sourcePages);
            } else {
                console.log("Ppage() => " + response.responseText);
                setTimeout(function(){ Epage(p_str); }, 150);
            }
        }
    });
}


function handleData(sourcePages){
    var reSP = sourcePages;
    var re_copy = /(.*offered\s+)(.*)(\s+copy.*)/g;
    var re_copies = /(offered)(.*)(copies)/g;
    var pe_copy = reSP.match(re_copy);
    var pe_copies = reSP.match(re_copies);

    pe_copies = pe_copies.map(function(item){
        return item.replace('offered ', '').replace(' copies', '');
    });

    for(var i=0; i<pe_copies.length;i++) {
        pe_copies[i] = parseInt(pe_copies[i], 10);
    }

    let pe_copies_count = eval(pe_copies.join('+')) + pe_copy.length;
    console.log("Total Pending/Excluded copies we have => " +pe_copies_count);

    var appids = reSP.match(/app-ctn-[0-9]*"/g);

    for(var j=0; j < appids.length; j++) {
        appids[j] = appids[j].replace(/app-ctn-/g, '');
    }

    console.log("Total unique Appids => "+appids.length);

    var setOldarr = localStorage.getItem('setOldarr');
    if(setOldarr) {
        var my_old_arr = JSON.parse(localStorage.getItem("Oldarr"));
        //console.log("old array"); //console.log(my_old_arr);
        appids = appids +'';
        appids = appids.replace(/"/g,'');
        appids = appids.split(',');
        //console.log("new array"); //console.log(appids);
        var missing_appids = appids.filter(function(item) {
            return !my_old_arr.includes(item);
        });
        console.log("New appids");
        console.log(missing_appids);
        if (missing_appids.length > 0){
            var add_copies =[];
            for(var k=0; k<missing_appids.length;k++) {
                var reSP_ = reSP.substring(
                    reSP.lastIndexOf("app-ctn-"+missing_appids[k]) + 1,
                    reSP.lastIndexOf("app_actions")
                );
                var start_pos_br = reSP_.indexOf('<br>') + 4;
                var end_pos_br = reSP_.indexOf('<br>',start_pos_br);
                var between_br = reSP_.substring(start_pos_br,end_pos_br);
                var start_pos_copies = between_br.indexOf('offered ') + 8;
                var end_pos_copies = between_br.indexOf(' cop',start_pos_copies);
                var copies = between_br.substring(start_pos_copies,end_pos_copies);

                if(copies == 'one'){
                    add_copies.push("1");
                }else{
                    add_copies.push(copies);
                }
            }
            if( add_copies.length > 1){
                let new_added_copies = pe_copies_count - eval(add_copies.join('+'));
                localStorage.setItem('Oldarr',JSON.stringify(JSON.parse(localStorage.getItem("Oldarr")).concat(missing_appids)));
                localStorage.setItem('ECL',parseInt(localStorage.getItem('ECL')) + parseInt(new_added_copies));
                //console.log("[NEW Appid count] > "+ localStorage.getItem('Oldarr').length + "\n[NEW ECL] > " + localStorage.getItem('ECL'));
                Ppage();
            }else{
                let new_added_copies = add_copies[0];
                localStorage.setItem('Oldarr',JSON.stringify(JSON.parse(localStorage.getItem("Oldarr")).concat(missing_appids)));
                localStorage.setItem('ECL',parseInt(localStorage.getItem('ECL')) + parseInt(new_added_copies));
                //console.log("[NEW Appid count] > "+ localStorage.getItem('Oldarr').length + "\n[NEW ECL] > " + localStorage.getItem('ECL'));
                Ppage();
            }
        }else{
            //do nothing
        }
    }else {
        appids = appids +'';
        appids = appids.replace(/"/g,'');
        appids = appids.split(',');

        localStorage.setItem('Oldarr',JSON.stringify(appids));
        localStorage.setItem('setOldarr',1);
    }

    if(parseInt(localStorage.getItem('ECL')) >= pe_copies_count ){
        console.log("Expected Copies Left "+ parseInt(localStorage.getItem('ECL')) +" >= To our Total Pending/Excluding Total Count " + pe_copies_count);
        setRole('765611' + localStorage.getItem('S64ID'), 0);
    }else {
        console.log("Expected Copies Left "+ parseInt(localStorage.getItem('ECL')) +" <= To our Total Pending/Excluding Total Count " + pe_copies_count);
        setTimeout(function(){ Ppage(); }, 250);
    }
}

function setRole(steamid,role){
    var postData = {
        "xml": 1,
        "action": "toggleRank",
        "memberId": steamid,
        "sessionID": g_sessionID
    };

    if(role == 0){
        console.log(Date());
        console.log("Demoting => " + steamid);
        createQuery2( g_strProcessURL, ManageMembers_OnRankToggleResponse, postData );
        createQuery2( g_strProcessURL, ManageMembers_OnRankToggleResponse, postData );
        setIndicator(0);
        setTimeout(function(){ AdminSheet(); }, 30000);
    }else if(role == 1){
        console.log(Date());
        console.log("Modding => " + steamid);
        createQuery2( g_strProcessURL, ManageMembers_OnRankToggleResponse, postData );
        setIndicator(1);
    }else{
        //do nothing for now
    }
    //$J.post("https://steamcommunity.com/groups/pcgameit/membersManage", {xml: '1',action: 'toggleRank',memberId: 'steamid',sessionID: g_sessionID});
}

function setIndicator(enabled){
    if(enabled == 0){
        $J.post("https://steamcommunity.com/profiles/76561198034957967/ajaxsetpersonaname/", {sessionid: g_sessionID, persona: 'MalikQayum'});
        $J.post("https://steamcommunity.com/id/MalikQayum/ajaxclearaliashistory/", {sessionid: g_sessionID});
    }else if(enabled == 1){
        $J.post("https://steamcommunity.com/profiles/76561198034957967/ajaxsetpersonaname/", {sessionid: g_sessionID, persona: 'MalikQayum [33779114]'});
    }else{
        //do nothing for now
    }
}
