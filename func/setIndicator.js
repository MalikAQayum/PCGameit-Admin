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