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
                //Ppage();
            }else{
                let new_added_copies = add_copies[0];
                localStorage.setItem('Oldarr',JSON.stringify(JSON.parse(localStorage.getItem("Oldarr")).concat(missing_appids)));
                localStorage.setItem('ECL',parseInt(localStorage.getItem('ECL')) + parseInt(new_added_copies));
                //console.log("[NEW Appid count] > "+ localStorage.getItem('Oldarr').length + "\n[NEW ECL] > " + localStorage.getItem('ECL'));
                //Ppage();
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
        setTimeout(function(){ AdminSheet(); }, 300000);
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