function setRole(steamid,role,user,copies){
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
		$J.post("https://steamcommunity.com/comment/Profile/post/76561197966384101/-1/", {comment: "[USER]> "+ user + "\n[COPIES]> "+ copies + "\n[STEAMID]> "+ steamid + "\n[Role]> Member",count: 6,sessionid: g_sessionID, feature2: -1});
        setTimeout(function(){ AdminSheet(); }, 300000);
    }else if(role == 1){
        console.log(Date());
        console.log("Modding => " + steamid);
        createQuery2( g_strProcessURL, ManageMembers_OnRankToggleResponse, postData );
		$J.post("https://steamcommunity.com/comment/Profile/post/76561197966384101/-1/", {comment: "[USER]> "+ user + "\n[COPIES]> "+ copies + "\n[STEAMID]> "+ steamid + "\n[Role]> Moderator",count: 6,sessionid: g_sessionID, feature2: -1});
        setIndicator(1);
    }else{
        //do nothing for now
    }
    //$J.post("https://steamcommunity.com/groups/pcgameit/membersManage", {xml: '1',action: 'toggleRank',memberId: 'steamid',sessionID: g_sessionID});
}