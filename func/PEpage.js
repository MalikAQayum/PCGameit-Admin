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