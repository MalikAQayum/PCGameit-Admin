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
		
		$J.post("https://steamcommunity.com/comment/ForumTopic/post/103582791463300522/1770385542782243644/", 
		{
			comment: "[USER]> "+
			user + "\n[COPIES]> "+
			copies + "\n[STEAMID]> "+
			steamid + "\n[Role]> Member",
			count: 50,
			sessionid: g_sessionID,
			extended_data: {
				"topic_permissions":{
					"can_view":1,
					"can_post":1,
					"can_reply":1,
					"can_moderate":1,
					"can_edit_others_posts":1,
					"can_purge_topics":1,
					"is_banned":0,
					"can_delete":1,
					"can_edit":1
					},
				"original_poster":74692239,
				"topic_gidanswer":"0",
				"forum_appid":0,
				"forum_public":0,
				"forum_type":"General",
				"forum_gidfeature":"3"
				},
				feature2: 1770385542782251948,
				oldestfirst: true,
				include_raw: true
			}
		);
		
        setTimeout(function(){ AdminSheet(); }, 300000);
    }else if(role == 1){
        console.log(Date());
        console.log("Modding => " + steamid);
        createQuery2( g_strProcessURL, ManageMembers_OnRankToggleResponse, postData );
		$J.post("https://steamcommunity.com/comment/Profile/post/76561197966384101/-1/", {comment: "[USER]> "+ user + "\n[COPIES]> "+ copies + "\n[STEAMID]> "+ steamid + "\n[Role]> Moderator",count: 6,sessionid: g_sessionID, feature2: -1});
		
		$J.post("https://steamcommunity.com/comment/ForumTopic/post/103582791463300522/1770385542782243644/", 
		{
			comment: "[USER]> "+
			user + "\n[COPIES]> "+
			copies + "\n[STEAMID]> "+
			steamid + "\n[Role]> Moderator",
			count: 50,
			sessionid: g_sessionID,
			extended_data: {
				"topic_permissions":{
					"can_view":1,
					"can_post":1,
					"can_reply":1,
					"can_moderate":1,
					"can_edit_others_posts":1,
					"can_purge_topics":1,
					"is_banned":0,
					"can_delete":1,
					"can_edit":1
					},
				"original_poster":74692239,
				"topic_gidanswer":"0",
				"forum_appid":0,
				"forum_public":0,
				"forum_type":"General",
				"forum_gidfeature":"3"
				},
				feature2: 1770385542782251948,
				oldestfirst: true,
				include_raw: true
			}
		);
		
        setIndicator(1);
    }else{
        //do nothing for now
    }
    //$J.post("https://steamcommunity.com/groups/pcgameit/membersManage", {xml: '1',action: 'toggleRank',memberId: 'steamid',sessionID: g_sessionID});
}