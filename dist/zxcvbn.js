(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.zxcvbn = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var adjacency_graphs;adjacency_graphs={qwerty:{"!":["`~",null,null,"2@","qQ",null],'"':[";:","[{","]}",null,null,"/?"],"#":["2@",null,null,"4$","eE","wW"],$:["3#",null,null,"5%","rR","eE"],"%":["4$",null,null,"6^","tT","rR"],"&":["6^",null,null,"8*","uU","yY"],"'":[";:","[{","]}",null,null,"/?"],"(":["8*",null,null,"0)","oO","iI"],")":["9(",null,null,"-_","pP","oO"],"*":["7&",null,null,"9(","iI","uU"],"+":["-_",null,null,null,"]}","[{"],",":["mM","kK","lL",".>",null,null],"-":["0)",null,null,"=+","[{","pP"],".":[",<","lL",";:","/?",null,null],"/":[".>",";:","'\"",null,null,null],0:["9(",null,null,"-_","pP","oO"],1:["`~",null,null,"2@","qQ",null],2:["1!",null,null,"3#","wW","qQ"],3:["2@",null,null,"4$","eE","wW"],4:["3#",null,null,"5%","rR","eE"],5:["4$",null,null,"6^","tT","rR"],6:["5%",null,null,"7&","yY","tT"],7:["6^",null,null,"8*","uU","yY"],8:["7&",null,null,"9(","iI","uU"],9:["8*",null,null,"0)","oO","iI"],":":["lL","pP","[{","'\"","/?",".>"],";":["lL","pP","[{","'\"","/?",".>"],"<":["mM","kK","lL",".>",null,null],"=":["-_",null,null,null,"]}","[{"],">":[",<","lL",";:","/?",null,null],"?":[".>",";:","'\"",null,null,null],"@":["1!",null,null,"3#","wW","qQ"],A:[null,"qQ","wW","sS","zZ",null],B:["vV","gG","hH","nN",null,null],C:["xX","dD","fF","vV",null,null],D:["sS","eE","rR","fF","cC","xX"],E:["wW","3#","4$","rR","dD","sS"],F:["dD","rR","tT","gG","vV","cC"],G:["fF","tT","yY","hH","bB","vV"],H:["gG","yY","uU","jJ","nN","bB"],I:["uU","8*","9(","oO","kK","jJ"],J:["hH","uU","iI","kK","mM","nN"],K:["jJ","iI","oO","lL",",<","mM"],L:["kK","oO","pP",";:",".>",",<"],M:["nN","jJ","kK",",<",null,null],N:["bB","hH","jJ","mM",null,null],O:["iI","9(","0)","pP","lL","kK"],P:["oO","0)","-_","[{",";:","lL"],Q:[null,"1!","2@","wW","aA",null],R:["eE","4$","5%","tT","fF","dD"],S:["aA","wW","eE","dD","xX","zZ"],T:["rR","5%","6^","yY","gG","fF"],U:["yY","7&","8*","iI","jJ","hH"],V:["cC","fF","gG","bB",null,null],W:["qQ","2@","3#","eE","sS","aA"],X:["zZ","sS","dD","cC",null,null],Y:["tT","6^","7&","uU","hH","gG"],Z:[null,"aA","sS","xX",null,null],"[":["pP","-_","=+","]}","'\"",";:"],"\\":["]}",null,null,null,null,null],"]":["[{","=+",null,"\\|",null,"'\""],"^":["5%",null,null,"7&","yY","tT"],_:["0)",null,null,"=+","[{","pP"],"`":[null,null,null,"1!",null,null],a:[null,"qQ","wW","sS","zZ",null],b:["vV","gG","hH","nN",null,null],c:["xX","dD","fF","vV",null,null],d:["sS","eE","rR","fF","cC","xX"],e:["wW","3#","4$","rR","dD","sS"],f:["dD","rR","tT","gG","vV","cC"],g:["fF","tT","yY","hH","bB","vV"],h:["gG","yY","uU","jJ","nN","bB"],i:["uU","8*","9(","oO","kK","jJ"],j:["hH","uU","iI","kK","mM","nN"],k:["jJ","iI","oO","lL",",<","mM"],l:["kK","oO","pP",";:",".>",",<"],m:["nN","jJ","kK",",<",null,null],n:["bB","hH","jJ","mM",null,null],o:["iI","9(","0)","pP","lL","kK"],p:["oO","0)","-_","[{",";:","lL"],q:[null,"1!","2@","wW","aA",null],r:["eE","4$","5%","tT","fF","dD"],s:["aA","wW","eE","dD","xX","zZ"],t:["rR","5%","6^","yY","gG","fF"],u:["yY","7&","8*","iI","jJ","hH"],v:["cC","fF","gG","bB",null,null],w:["qQ","2@","3#","eE","sS","aA"],x:["zZ","sS","dD","cC",null,null],y:["tT","6^","7&","uU","hH","gG"],z:[null,"aA","sS","xX",null,null],"{":["pP","-_","=+","]}","'\"",";:"],"|":["]}",null,null,null,null,null],"}":["[{","=+",null,"\\|",null,"'\""],"~":[null,null,null,"1!",null,null]},dvorak:{"!":["`~",null,null,"2@","'\"",null],'"':[null,"1!","2@",",<","aA",null],"#":["2@",null,null,"4$",".>",",<"],$:["3#",null,null,"5%","pP",".>"],"%":["4$",null,null,"6^","yY","pP"],"&":["6^",null,null,"8*","gG","fF"],"'":[null,"1!","2@",",<","aA",null],"(":["8*",null,null,"0)","rR","cC"],")":["9(",null,null,"[{","lL","rR"],"*":["7&",null,null,"9(","cC","gG"],"+":["/?","]}",null,"\\|",null,"-_"],",":["'\"","2@","3#",".>","oO","aA"],"-":["sS","/?","=+",null,null,"zZ"],".":[",<","3#","4$","pP","eE","oO"],"/":["lL","[{","]}","=+","-_","sS"],0:["9(",null,null,"[{","lL","rR"],1:["`~",null,null,"2@","'\"",null],2:["1!",null,null,"3#",",<","'\""],3:["2@",null,null,"4$",".>",",<"],4:["3#",null,null,"5%","pP",".>"],5:["4$",null,null,"6^","yY","pP"],6:["5%",null,null,"7&","fF","yY"],7:["6^",null,null,"8*","gG","fF"],8:["7&",null,null,"9(","cC","gG"],9:["8*",null,null,"0)","rR","cC"],":":[null,"aA","oO","qQ",null,null],";":[null,"aA","oO","qQ",null,null],"<":["'\"","2@","3#",".>","oO","aA"],"=":["/?","]}",null,"\\|",null,"-_"],">":[",<","3#","4$","pP","eE","oO"],"?":["lL","[{","]}","=+","-_","sS"],"@":["1!",null,null,"3#",",<","'\""],A:[null,"'\"",",<","oO",";:",null],B:["xX","dD","hH","mM",null,null],C:["gG","8*","9(","rR","tT","hH"],D:["iI","fF","gG","hH","bB","xX"],E:["oO",".>","pP","uU","jJ","qQ"],F:["yY","6^","7&","gG","dD","iI"],G:["fF","7&","8*","cC","hH","dD"],H:["dD","gG","cC","tT","mM","bB"],I:["uU","yY","fF","dD","xX","kK"],J:["qQ","eE","uU","kK",null,null],K:["jJ","uU","iI","xX",null,null],L:["rR","0)","[{","/?","sS","nN"],M:["bB","hH","tT","wW",null,null],N:["tT","rR","lL","sS","vV","wW"],O:["aA",",<",".>","eE","qQ",";:"],P:[".>","4$","5%","yY","uU","eE"],Q:[";:","oO","eE","jJ",null,null],R:["cC","9(","0)","lL","nN","tT"],S:["nN","lL","/?","-_","zZ","vV"],T:["hH","cC","rR","nN","wW","mM"],U:["eE","pP","yY","iI","kK","jJ"],V:["wW","nN","sS","zZ",null,null],W:["mM","tT","nN","vV",null,null],X:["kK","iI","dD","bB",null,null],Y:["pP","5%","6^","fF","iI","uU"],Z:["vV","sS","-_",null,null,null],"[":["0)",null,null,"]}","/?","lL"],"\\":["=+",null,null,null,null,null],"]":["[{",null,null,null,"=+","/?"],"^":["5%",null,null,"7&","fF","yY"],_:["sS","/?","=+",null,null,"zZ"],"`":[null,null,null,"1!",null,null],a:[null,"'\"",",<","oO",";:",null],b:["xX","dD","hH","mM",null,null],c:["gG","8*","9(","rR","tT","hH"],d:["iI","fF","gG","hH","bB","xX"],e:["oO",".>","pP","uU","jJ","qQ"],f:["yY","6^","7&","gG","dD","iI"],g:["fF","7&","8*","cC","hH","dD"],h:["dD","gG","cC","tT","mM","bB"],i:["uU","yY","fF","dD","xX","kK"],j:["qQ","eE","uU","kK",null,null],k:["jJ","uU","iI","xX",null,null],l:["rR","0)","[{","/?","sS","nN"],m:["bB","hH","tT","wW",null,null],n:["tT","rR","lL","sS","vV","wW"],o:["aA",",<",".>","eE","qQ",";:"],p:[".>","4$","5%","yY","uU","eE"],q:[";:","oO","eE","jJ",null,null],r:["cC","9(","0)","lL","nN","tT"],s:["nN","lL","/?","-_","zZ","vV"],t:["hH","cC","rR","nN","wW","mM"],u:["eE","pP","yY","iI","kK","jJ"],v:["wW","nN","sS","zZ",null,null],w:["mM","tT","nN","vV",null,null],x:["kK","iI","dD","bB",null,null],y:["pP","5%","6^","fF","iI","uU"],z:["vV","sS","-_",null,null,null],"{":["0)",null,null,"]}","/?","lL"],"|":["=+",null,null,null,null,null],"}":["[{",null,null,null,"=+","/?"],"~":[null,null,null,"1!",null,null]},azerty:{"!":["e7",null,null,"c9","iI","uU"],'"':["e2",null,null,"'4","eE","zZ"],"#":[null,null,null,"&1",null,null],$:["^^","-_",null,null,"`L","u%"],"%":["mM","^^","$*","`L","=+",":/"],"&":["@#",null,null,"e2","aA",null],"'":['"3',null,null,"(5","rR","eE"],"(":["'4",null,null,"^6","tT","rR"],")":["a0",null,null,"-_","^^","pP"],"*":["^^","-_",null,null,"`L","u%"],"+":[":/","u%","`L",null,null,null],",":["nN","kK","lL",";.",null,null],"-":[")]",null,null,null,"$*","^^"],".":[",?","lL","mM",":/",null,null],"/":[";.","mM","u%","=+",null,null],0:["c9",null,null,")]","pP","oO"],1:["@#",null,null,"e2","aA",null],2:["&1",null,null,'"3',"zZ","aA"],3:["e2",null,null,"'4","eE","zZ"],4:['"3',null,null,"(5","rR","eE"],5:["'4",null,null,"^6","tT","rR"],6:["(5",null,null,"e7","yY","tT"],7:["^6",null,null,"!8","uU","yY"],8:["e7",null,null,"c9","iI","uU"],9:["!8",null,null,"a0","oO","iI"],":":[";.","mM","u%","=+",null,null],";":[",?","lL","mM",":/",null,null],"<":[null,"qQ","sS","wW",null,null],"=":[":/","u%","`L",null,null,null],">":[null,"qQ","sS","wW",null,null],"?":["nN","kK","lL",";.",null,null],"@":[null,null,null,"&1",null,null],A:[null,"&1","e2","zZ","qQ",null],B:["vV","hH","jJ","nN",null,null],C:["xX","fF","gG","vV",null,null],D:["sS","eE","rR","fF","xX","wW"],E:["zZ",'"3',"'4","rR","dD","sS"],F:["dD","rR","tT","gG","cC","xX"],G:["fF","tT","yY","hH","vV","cC"],H:["gG","yY","uU","jJ","bB","vV"],I:["uU","!8","c9","oO","kK","jJ"],J:["hH","uU","iI","kK","nN","bB"],K:["jJ","iI","oO","lL",",?","nN"],L:["kK","oO","pP","mM",";.",",?"],M:["lL","pP","^^","u%",":/",";."],N:["bB","jJ","kK",",?",null,null],O:["iI","c9","a0","pP","lL","kK"],P:["oO","a0",")]","^^","mM","lL"],Q:[null,"aA","zZ","sS","<>",null],R:["eE","'4","(5","tT","fF","dD"],S:["qQ","zZ","eE","dD","wW","<>"],T:["rR","(5","^6","yY","gG","fF"],U:["yY","e7","!8","iI","jJ","hH"],V:["cC","gG","hH","bB",null,null],W:["<>","sS","dD","xX",null,null],X:["wW","dD","fF","cC",null,null],Y:["tT","^6","e7","uU","hH","gG"],Z:["aA","e2",'"3',"eE","sS","qQ"],"]":["a0",null,null,"-_","^^","pP"],"^":["(5",null,null,"e7","yY","tT"],_:[")]",null,null,null,"$*","^^"],"`":["u%","$*",null,null,null,"=+"],a:["c9",null,null,")]","pP","oO"],b:["vV","hH","jJ","nN",null,null],c:["xX","fF","gG","vV",null,null],d:["sS","eE","rR","fF","xX","wW"],e:["^6",null,null,"!8","uU","yY"],f:["dD","rR","tT","gG","cC","xX"],g:["fF","tT","yY","hH","vV","cC"],h:["gG","yY","uU","jJ","bB","vV"],i:["uU","!8","c9","oO","kK","jJ"],j:["hH","uU","iI","kK","nN","bB"],k:["jJ","iI","oO","lL",",?","nN"],l:["kK","oO","pP","mM",";.",",?"],m:["lL","pP","^^","u%",":/",";."],n:["bB","jJ","kK",",?",null,null],o:["iI","c9","a0","pP","lL","kK"],p:["oO","a0",")]","^^","mM","lL"],q:[null,"aA","zZ","sS","<>",null],r:["eE","'4","(5","tT","fF","dD"],s:["qQ","zZ","eE","dD","wW","<>"],t:["rR","(5","^6","yY","gG","fF"],u:["mM","^^","$*","`L","=+",":/"],v:["cC","gG","hH","bB",null,null],w:["<>","sS","dD","xX",null,null],x:["wW","dD","fF","cC",null,null],y:["tT","^6","e7","uU","hH","gG"],z:["aA","e2",'"3',"eE","sS","qQ"]},keypad:{"*":["/",null,null,null,"-","+","9","8"],"+":["9","*","-",null,null,null,null,"6"],"-":["*",null,null,null,null,null,"+","9"],".":["0","2","3",null,null,null,null,null],"/":[null,null,null,null,"*","9","8","7"],0:[null,"1","2","3",".",null,null,null],1:[null,null,"4","5","2","0",null,null],2:["1","4","5","6","3",".","0",null],3:["2","5","6",null,null,null,".","0"],4:[null,null,"7","8","5","2","1",null],5:["4","7","8","9","6","3","2","1"],6:["5","8","9","+",null,null,"3","2"],7:[null,null,null,"/","8","5","4",null],8:["7",null,"/","*","9","6","5","4"],9:["8","/","*","-","+",null,"6","5"]},mac_keypad:{"*":["/",null,null,null,null,null,"-","9"],"+":["6","9","-",null,null,null,null,"3"],"-":["9","/","*",null,null,null,"+","6"],".":["0","2","3",null,null,null,null,null],"/":["=",null,null,null,"*","-","9","8"],0:[null,"1","2","3",".",null,null,null],1:[null,null,"4","5","2","0",null,null],2:["1","4","5","6","3",".","0",null],3:["2","5","6","+",null,null,".","0"],4:[null,null,"7","8","5","2","1",null],5:["4","7","8","9","6","3","2","1"],6:["5","8","9","-","+",null,"3","2"],7:[null,null,null,"=","8","5","4",null],8:["7",null,"=","/","9","6","5","4"],9:["8","=","/","*","-","+","6","5"],"=":[null,null,null,null,"/","9","8","7"]}},module.exports=adjacency_graphs;

},{}],2:[function(require,module,exports){
var feedback,scoring;scoring=require("./scoring"),feedback={default_feedback:{warning:"",suggestions:["default_suggestion"]},get_feedback:function(e,n){var s,t,r,a,g,i;if(0===n.length)return this.default_feedback;if(e>2)return{warning:"",suggestions:[]};for(a=n[0],i=n.slice(1),t=0,r=i.length;t<r;t++)g=i[t],g.token.length>a.token.length&&(a=g);return feedback=this.get_match_feedback(a,1===n.length),s="suggestion_too_weak",null!=feedback?(feedback.suggestions.unshift(s),null==feedback.warning&&(feedback.warning="")):feedback={warning:"",suggestions:[s]},feedback},get_match_feedback:function(e,n){var s;switch(e.pattern){case"dictionary":return this.get_dictionary_match_feedback(e,n);case"spatial":return e.graph.toUpperCase(),s=1===e.turns?"warning_straight_rows":"warning_short_pattern",{warning:s,suggestions:["suggestion_short_pattern"]};case"repeat":return s=1===e.base_token.length?"warning_repeat":"warning_repeat_multichar",{warning:s,suggestions:["suggestion_repeat"]};case"sequence":return{warning:"warning_sequence",suggestions:["suggestion_sequence"]};case"regex":if("recent_year"===e.regex_name)return{warning:"warning_recent_year",suggestions:["suggestion_recent_year"]};break;case"date":return{warning:"warning_date",suggestions:["suggestion_date"]}}},get_dictionary_match_feedback:function(e,n){var s,t,r;return t="passwords"===e.dictionary_name?!n||e.l33t||e.reversed?e.guesses_log10<=4?"warning_common_password_similar":void 0:e.rank<=10?"warning_top_10_common_password":e.rank<=100?"warning_top_100_common_password":"warning_common_password":"",s=[],r=e.token,r.match(scoring.START_UPPER)?s.push("suggestion_uppercase"):r.match(scoring.ALL_UPPER)&&r.toLowerCase()!==r&&s.push("suggestion_all_uppercase"),e.reversed&&e.token.length>=4&&s.push("suggestion_reverse_word"),e.l33t&&s.push("suggestion_predictable_substitution"),{warning:t,suggestions:s}}},module.exports=feedback;

},{"./scoring":6}],3:[function(require,module,exports){
var frequency_lists;frequency_lists={passwords:"123456,password,12345678,qwerty,123456789,12345,1234,111111,1234567,dragon,123123,baseball,abc123,football,monkey,letmein,shadow,master,696969,michael,mustang,666666,qwertyuiop,123321,1234567890,pussy,superman,654321,1qaz2wsx,7777777,fuckyou,qazwsx,jordan,jennifer,123qwe,000000,killer,trustno1,hunter,harley,zxcvbnm,asdfgh,buster,andrew,batman,soccer,tigger,charlie,robert,sunshine,thomas,iloveyou,fuckme,ranger,daniel,hockey,george,computer,michelle,jessica,starwars,asshole,pepper,klaster,112233,zxcvbn,freedom,princess,joshua,maggie,pass,ginger,11111111,131313,fuck,amanda,ashley,love,cheese,159753,nicole,summer,matthew,chelsea,dallas,biteme,matrix,william,password123".split(",")},module.exports=frequency_lists;

},{}],4:[function(require,module,exports){
var feedback,matching,scoring,time,time_estimates,zxcvbn;matching=require("./matching"),scoring=require("./scoring"),time_estimates=require("./time_estimates"),feedback=require("./feedback"),time=function(){return(new Date).getTime()},zxcvbn=function(e,t){var i,n,c,s,a,r,m,o,u,g,_;for(null==t&&(t=[]),g=time(),u=[],c=0,s=t.length;c<s;c++)i=t[c],"string"!=(m=typeof i)&&"number"!==m&&"boolean"!==m||u.push(i.toString().toLowerCase());matching.set_user_input_dictionary(u),a=matching.omnimatch(e),o=scoring.most_guessable_match_sequence(e,a),o.calc_time=time()-g,n=time_estimates.estimate_attack_times(o.guesses);for(r in n)_=n[r],o[r]=_;return o.feedback=feedback.get_feedback(o.score,o.sequence),o},module.exports=zxcvbn;

},{"./feedback":2,"./matching":5,"./scoring":6,"./time_estimates":7}],5:[function(require,module,exports){
var DATE_MAX_YEAR,DATE_MIN_YEAR,DATE_SPLITS,GRAPHS,L33T_TABLE,RANKED_DICTIONARIES,REGEXEN,adjacency_graphs,build_ranked_dict,frequency_lists,lst,matching,name,scoring;frequency_lists=require("./frequency_lists"),adjacency_graphs=require("./adjacency_graphs"),scoring=require("./scoring"),build_ranked_dict=function(e){var t,n,r,i,a;for(i={},t=1,r=0,n=e.length;r<n;r++)a=e[r],i[a]=t,t+=1;return i},RANKED_DICTIONARIES={};for(name in frequency_lists)lst=frequency_lists[name],RANKED_DICTIONARIES[name]=build_ranked_dict(lst);GRAPHS={qwerty:adjacency_graphs.qwerty,dvorak:adjacency_graphs.dvorak,keypad:adjacency_graphs.keypad,mac_keypad:adjacency_graphs.mac_keypad},L33T_TABLE={a:["4","@"],b:["8"],c:["(","{","[","<"],e:["3"],g:["6","9"],i:["1","!","|"],l:["1","|","7"],o:["0"],s:["$","5"],t:["+","7"],x:["%"],z:["2"]},REGEXEN={recent_year:/19\d\d|200\d|201\d/g},DATE_MAX_YEAR=2050,DATE_MIN_YEAR=1e3,DATE_SPLITS={4:[[1,2],[2,3]],5:[[1,3],[2,3]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]},matching={empty:function(e){var t;return 0===function(){var n;n=[];for(t in e)n.push(t);return n}().length},extend:function(e,t){return e.push.apply(e,t)},translate:function(e,t){var n;return function(){var r,i,a,s;for(a=e.split(""),s=[],i=0,r=a.length;i<r;i++)n=a[i],s.push(t[n]||n);return s}().join("")},mod:function(e,t){return(e%t+t)%t},sorted:function(e){return e.sort(function(e,t){return e.i-t.i||e.j-t.j})},omnimatch:function(e){var t,n,r,i,a;for(i=[],r=[this.dictionary_match,this.reverse_dictionary_match,this.l33t_match,this.spatial_match,this.repeat_match,this.sequence_match,this.regex_match,this.date_match],a=0,t=r.length;a<t;a++)n=r[a],this.extend(i,n.call(this,e));return this.sorted(i)},dictionary_match:function(e,t){var n,r,i,a,s,o,h,u,c,l,_,f,d,p;null==t&&(t=RANKED_DICTIONARIES),s=[],a=e.length,u=e.toLowerCase();for(n in t)for(l=t[n],r=o=0,_=a;0<=_?o<_:o>_;r=0<=_?++o:--o)for(i=h=f=r,d=a;f<=d?h<d:h>d;i=f<=d?++h:--h)u.slice(r,+i+1||9e9)in l&&(p=u.slice(r,+i+1||9e9),c=l[p],s.push({pattern:"dictionary",i:r,j:i,token:e.slice(r,+i+1||9e9),matched_word:p,rank:c,dictionary_name:n,reversed:!1,l33t:!1}));return this.sorted(s)},reverse_dictionary_match:function(e,t){var n,r,i,a,s,o;for(null==t&&(t=RANKED_DICTIONARIES),o=e.split("").reverse().join(""),i=this.dictionary_match(o,t),a=0,n=i.length;a<n;a++)r=i[a],r.token=r.token.split("").reverse().join(""),r.reversed=!0,s=[e.length-1-r.j,e.length-1-r.i],r.i=s[0],r.j=s[1];return this.sorted(i)},set_user_input_dictionary:function(e){return RANKED_DICTIONARIES.user_inputs=build_ranked_dict(e.slice())},relevant_l33t_subtable:function(e,t){var n,r,i,a,s,o,h,u,c,l;for(s={},o=e.split(""),a=0,r=o.length;a<r;a++)n=o[a],s[n]=!0;l={};for(i in t)c=t[i],h=function(){var e,t,n;for(n=[],t=0,e=c.length;t<e;t++)(u=c[t])in s&&n.push(u);return n}(),h.length>0&&(l[i]=h);return l},enumerate_l33t_subs:function(e){var t,n,r,i,a,s,o,h,u,c,l,_,f,d,p;a=function(){var t;t=[];for(i in e)t.push(i);return t}(),p=[[]],n=function(e){var t,n,r,a,s,o,h,u;for(n=[],s={},o=0,a=e.length;o<a;o++)h=e[o],t=function(){var e,t,n;for(n=[],u=t=0,e=h.length;t<e;u=++t)i=h[u],n.push([i,u]);return n}(),t.sort(),(r=function(){var e,n,r;for(r=[],u=n=0,e=t.length;n<e;u=++n)i=t[u],r.push(i+","+u);return r}().join("-"))in s||(s[r]=!0,n.push(h));return n},r=function(t){var i,a,s,o,h,u,c,l,_,f,d,g,m,A,E,y;if(t.length){for(a=t[0],m=t.slice(1),c=[],d=e[a],l=0,h=d.length;l<h;l++)for(o=d[l],_=0,u=p.length;_<u;_++){for(A=p[_],i=-1,s=f=0,g=A.length;0<=g?f<g:f>g;s=0<=g?++f:--f)if(A[s][0]===o){i=s;break}-1===i?(y=A.concat([[o,a]]),c.push(y)):(E=A.slice(0),E.splice(i,1),E.push([o,a]),c.push(A),c.push(E))}return p=n(c),r(m)}},r(a),d=[];for(u=0,o=p.length;u<o;u++){for(_=p[u],f={},c=0,h=_.length;c<h;c++)l=_[c],s=l[0],t=l[1],f[s]=t;d.push(f)}return d},l33t_match:function(e,t,n){var r,i,a,s,o,h,u,c,l,_,f,d,p,g,m,A;for(null==t&&(t=RANKED_DICTIONARIES),null==n&&(n=L33T_TABLE),u=[],_=this.enumerate_l33t_subs(this.relevant_l33t_subtable(e,n)),c=0,a=_.length;c<a&&(d=_[c],!this.empty(d));c++)for(g=this.translate(e,d),f=this.dictionary_match(g,t),l=0,s=f.length;l<s;l++)if(o=f[l],m=e.slice(o.i,+o.j+1||9e9),m.toLowerCase()!==o.matched_word){h={};for(p in d)r=d[p],-1!==m.indexOf(p)&&(h[p]=r);o.l33t=!0,o.token=m,o.sub=h,o.sub_display=function(){var e;e=[];for(i in h)A=h[i],e.push(i+" -> "+A);return e}().join(", "),u.push(o)}return this.sorted(u.filter(function(e){return e.token.length>1}))},spatial_match:function(e,t){var n,r,i;null==t&&(t=GRAPHS),i=[];for(r in t)n=t[r],this.extend(i,this.spatial_match_helper(e,n,r));return this.sorted(i)},SHIFTED_RX:/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/,spatial_match_helper:function(e,t,n){var r,i,a,s,o,h,u,c,l,_,f,d,p,g,m;for(f=[],u=0;u<e.length-1;)for(c=u+1,l=null,m=0,g="qwerty"!==n&&"dvorak"!==n||!this.SHIFTED_RX.exec(e.charAt(u))?0:1;;){if(p=e.charAt(c-1),o=!1,h=-1,s=-1,i=t[p]||[],c<e.length)for(a=e.charAt(c),d=0,_=i.length;d<_;d++)if(r=i[d],s+=1,r&&-1!==r.indexOf(a)){o=!0,h=s,1===r.indexOf(a)&&(g+=1),l!==h&&(m+=1,l=h);break}if(!o){c-u>2&&f.push({pattern:"spatial",i:u,j:c-1,token:e.slice(u,c),graph:n,turns:m,shifted_count:g}),u=c;break}c+=1}return f},repeat_match:function(e){var t,n,r,i,a,s,o,h,u,c,l,_,f,d,p;for(d=[],a=/(.+)\1+/g,c=/(.+?)\1+/g,l=/^(.+?)\1+$/,u=0;u<e.length&&(a.lastIndex=c.lastIndex=u,s=a.exec(e),_=c.exec(e),null!=s);)s[0].length>_[0].length?(f=s,i=l.exec(f[0])[1]):(f=_,i=f[1]),p=[f.index,f.index+f[0].length-1],o=p[0],h=p[1],t=scoring.most_guessable_match_sequence(i,this.omnimatch(i)),r=t.sequence,n=t.guesses,d.push({pattern:"repeat",i:o,j:h,token:f[0],base_token:i,base_guesses:n,base_matches:r,repeat_count:f[0].length/i.length}),u=h+1;return d},MAX_DELTA:5,sequence_match:function(e){var t,n,r,i,a,s,o,h,u;if(1===e.length)return[];for(u=function(t){return function(n,r,i){var a,s,o,u;if((r-n>1||1===Math.abs(i))&&0<(a=Math.abs(i))&&a<=t.MAX_DELTA)return u=e.slice(n,+r+1||9e9),/^[a-z]+$/.test(u)?(s="lower",o=26):/^[A-Z]+$/.test(u)?(s="upper",o=26):/^\d+$/.test(u)?(s="digits",o=10):(s="unicode",o=26),h.push({pattern:"sequence",i:n,j:r,token:e.slice(n,+r+1||9e9),sequence_name:s,sequence_space:o,ascending:i>0})}}(this),h=[],n=0,a=null,i=s=1,o=e.length;1<=o?s<o:s>o;i=1<=o?++s:--s)t=e.charCodeAt(i)-e.charCodeAt(i-1),null==a&&(a=t),t!==a&&(r=i-1,u(n,r,a),n=r,a=t);return u(n,e.length-1,a),h},regex_match:function(e,t){var n,r,i,a;null==t&&(t=REGEXEN),n=[];for(name in t)for(r=t[name],r.lastIndex=0;i=r.exec(e);)a=i[0],n.push({pattern:"regex",token:a,i:i.index,j:i.index+i[0].length-1,regex_name:name,regex_match:i});return this.sorted(n)},date_match:function(e){var t,n,r,i,a,s,o,h,u,c,l,_,f,d,p,g,m,A,E,y,v,I,R,T,D,k,x,j,b,N,S,q,L,M;for(_=[],f=/^\d{4,8}$/,d=/^(\d{1,4})([\s\/\\_.-])(\d{1,2})\2(\d{1,4})$/,s=m=0,v=e.length-4;0<=v?m<=v:m>=v;s=0<=v?++m:--m)for(o=A=I=s+3,R=s+7;(I<=R?A<=R:A>=R)&&!(o>=e.length);o=I<=R?++A:--A)if(M=e.slice(s,+o+1||9e9),f.exec(M)){for(r=[],T=DATE_SPLITS[M.length],E=0,c=T.length;E<c;E++)D=T[E],h=D[0],u=D[1],null!=(a=this.map_ints_to_dmy([parseInt(M.slice(0,h)),parseInt(M.slice(h,u)),parseInt(M.slice(u))]))&&r.push(a);if(r.length>0){for(t=r[0],p=function(e){return Math.abs(e.year-scoring.REFERENCE_YEAR)},g=p(r[0]),k=r.slice(1),y=0,l=k.length;y<l;y++)n=k[y],(i=p(n))<g&&(x=[n,i],t=x[0],g=x[1]);_.push({pattern:"date",token:M,i:s,j:o,separator:"",year:t.year,month:t.month,day:t.day})}}for(s=q=0,j=e.length-6;0<=j?q<=j:q>=j;s=0<=j?++q:--q)for(o=L=b=s+5,N=s+9;(b<=N?L<=N:L>=N)&&!(o>=e.length);o=b<=N?++L:--L)M=e.slice(s,+o+1||9e9),null!=(S=d.exec(M))&&null!=(a=this.map_ints_to_dmy([parseInt(S[1]),parseInt(S[3]),parseInt(S[4])]))&&_.push({pattern:"date",token:M,i:s,j:o,separator:S[2],year:a.year,month:a.month,day:a.day});return this.sorted(_.filter(function(e){var t,n,r,i;for(t=!1,i=0,n=_.length;i<n;i++)if(r=_[i],e!==r&&r.i<=e.i&&r.j>=e.j){t=!0;break}return!t}))},map_ints_to_dmy:function(e){var t,n,r,i,a,s,o,h,u,c,l,_,f,d,p,g;if(!(e[1]>31||e[1]<=0)){for(o=0,h=0,p=0,s=0,r=e.length;s<r;s++){if(99<(n=e[s])&&n<DATE_MIN_YEAR||n>DATE_MAX_YEAR)return;n>31&&(h+=1),n>12&&(o+=1),n<=0&&(p+=1)}if(!(h>=2||3===o||p>=2)){for(c=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],u=0,i=c.length;u<i;u++)if(_=c[u],g=_[0],d=_[1],DATE_MIN_YEAR<=g&&g<=DATE_MAX_YEAR)return t=this.map_ints_to_dm(d),null!=t?{year:g,month:t.month,day:t.day}:void 0;for(l=0,a=c.length;l<a;l++)if(f=c[l],g=f[0],d=f[1],null!=(t=this.map_ints_to_dm(d)))return g=this.two_to_four_digit_year(g),{year:g,month:t.month,day:t.day}}}},map_ints_to_dm:function(e){var t,n,r,i,a,s;for(a=[e,e.slice().reverse()],i=0,n=a.length;i<n;i++)if(s=a[i],t=s[0],r=s[1],1<=t&&t<=31&&1<=r&&r<=12)return{day:t,month:r}},two_to_four_digit_year:function(e){return e>99?e:e>50?e+1900:e+2e3}},module.exports=matching;

},{"./adjacency_graphs":1,"./frequency_lists":3,"./scoring":6}],6:[function(require,module,exports){
var BRUTEFORCE_CARDINALITY,MIN_GUESSES_BEFORE_GROWING_SEQUENCE,MIN_SUBMATCH_GUESSES_MULTI_CHAR,MIN_SUBMATCH_GUESSES_SINGLE_CHAR,adjacency_graphs,calc_average_degree,k,scoring,v;adjacency_graphs=require("./adjacency_graphs"),calc_average_degree=function(e){var t,r,n,s,a,u;t=0;for(n in e)a=e[n],t+=function(){var e,t,r;for(r=[],t=0,e=a.length;t<e;t++)(s=a[t])&&r.push(s);return r}().length;return t/=function(){var t;t=[];for(r in e)u=e[r],t.push(r);return t}().length},BRUTEFORCE_CARDINALITY=10,MIN_GUESSES_BEFORE_GROWING_SEQUENCE=1e4,MIN_SUBMATCH_GUESSES_SINGLE_CHAR=10,MIN_SUBMATCH_GUESSES_MULTI_CHAR=50,scoring={nCk:function(e,t){var r,n,s,a;if(t>e)return 0;if(0===t)return 1;for(s=1,r=n=1,a=t;1<=a?n<=a:n>=a;r=1<=a?++n:--n)s*=e,s/=r,e-=1;return s},log10:function(e){return Math.log(e)/Math.log(10)},log2:function(e){return Math.log(e)/Math.log(2)},factorial:function(e){var t,r,n,s;if(e<2)return 1;for(t=1,r=n=2,s=e;2<=s?n<=s:n>=s;r=2<=s?++n:--n)t*=r;return t},most_guessable_match_sequence:function(e,t,r){var n,s,a,u,i,_,o,h,E,c,g,f,l,A,S,p,R,I,v,M,N,C,T,U;for(null==r&&(r=!1),l=e.length,f=function(){var e,t,r;for(r=[],n=e=0,t=l;0<=t?e<t:e>t;n=0<=t?++e:--e)r.push([]);return r}(),A=0,_=t.length;A<_;A++)c=t[A],f[c.j].push(c);for(I=0,o=f.length;I<o;I++)E=f[I],E.sort(function(e,t){return e.i-t.i});for(S={m:function(){var e,t,r;for(t=[],n=r=0,e=l;0<=e?r<e:r>e;n=0<=e?++r:--r)t.push({});return t}(),pi:function(){var e,t,r;for(t=[],n=r=0,e=l;0<=e?r<e:r>e;n=0<=e?++r:--r)t.push({});return t}(),g:function(){var e,t,r;for(t=[],n=r=0,e=l;0<=e?r<e:r>e;n=0<=e?++r:--r)t.push({});return t}()},T=function(t){return function(n,s){var a,u,i,_,o,h;_=n.j,o=t.estimate_guesses(n,e),s>1&&(o*=S.pi[n.i-1][s-1]),i=t.factorial(s)*o,r||(i+=Math.pow(MIN_GUESSES_BEFORE_GROWING_SEQUENCE,s-1)),h=S.g[_];for(u in h)if(a=h[u],!(u>s)&&a<=i)return;return S.g[_][s]=i,S.m[_][s]=n,S.pi[_][s]=o}}(this),s=function(e){return function(e){var t,r,n,s,a,u;for(c=g(0,e),T(c,1),a=[],t=u=1,s=e;1<=s?u<=s:u>=s;t=1<=s?++u:--u)c=g(t,e),a.push(function(){var e,s;e=S.m[t-1],s=[];for(r in e)n=e[r],r=parseInt(r),"bruteforce"!==n.pattern&&s.push(T(c,r+1));return s}());return a}}(),g=function(t){return function(t,r){return{pattern:"bruteforce",token:e.slice(t,+r+1||9e9),i:t,j:r}}}(),C=function(e){return function(e){var t,r,n,s,a,u,i;u=[],s=e-1,a=void 0,n=Infinity,i=S.g[s];for(r in i)(t=i[r])<n&&(a=r,n=t);for(;s>=0;)c=S.m[s][a],u.unshift(c),s=c.i-1,a--;return u}}(),u=N=0,v=l;0<=v?N<v:N>v;u=0<=v?++N:--N){for(M=f[u],U=0,h=M.length;U<h;U++)if(c=M[U],c.i>0)for(i in S.m[c.i-1])i=parseInt(i),T(c,i+1);else T(c,1);s(u)}return R=C(l),p=R.length,a=0===e.length?1:S.g[l-1][p],{password:e,guesses:a,guesses_log10:this.log10(a),sequence:R}},estimate_guesses:function(e,t){var r,n,s;return null!=e.guesses?e.guesses:(s=1,e.token.length<t.length&&(s=1===e.token.length?MIN_SUBMATCH_GUESSES_SINGLE_CHAR:MIN_SUBMATCH_GUESSES_MULTI_CHAR),r={bruteforce:this.bruteforce_guesses,dictionary:this.dictionary_guesses,spatial:this.spatial_guesses,repeat:this.repeat_guesses,sequence:this.sequence_guesses,regex:this.regex_guesses,date:this.date_guesses},n=r[e.pattern].call(this,e),e.guesses=Math.max(n,s),e.guesses_log10=this.log10(e.guesses),e.guesses)},bruteforce_guesses:function(e){var t,r;return t=Math.pow(BRUTEFORCE_CARDINALITY,e.token.length),t===Number.POSITIVE_INFINITY&&(t=Number.MAX_VALUE),r=1===e.token.length?MIN_SUBMATCH_GUESSES_SINGLE_CHAR+1:MIN_SUBMATCH_GUESSES_MULTI_CHAR+1,Math.max(t,r)},repeat_guesses:function(e){return e.base_guesses*e.repeat_count},sequence_guesses:function(e){var t,r;return r=e.token.charAt(0),t="a"===r||"A"===r||"z"===r||"Z"===r||"0"===r||"1"===r||"9"===r?4:r.match(/\d/)?10:26,e.ascending||(t*=2),t*e.token.length},MIN_YEAR_SPACE:20,REFERENCE_YEAR:(new Date).getFullYear(),regex_guesses:function(e){var t,r;if(t={alpha_lower:26,alpha_upper:26,alpha:52,alphanumeric:62,digits:10,symbols:33},e.regex_name in t)return Math.pow(t[e.regex_name],e.token.length);switch(e.regex_name){case"recent_year":return r=Math.abs(parseInt(e.regex_match[0])-this.REFERENCE_YEAR),r=Math.max(r,this.MIN_YEAR_SPACE)}},date_guesses:function(e){var t,r;return r=Math.max(Math.abs(e.year-this.REFERENCE_YEAR),this.MIN_YEAR_SPACE),t=365*r,e.separator&&(t*=4),t},KEYBOARD_AVERAGE_DEGREE:calc_average_degree(adjacency_graphs.qwerty),KEYPAD_AVERAGE_DEGREE:calc_average_degree(adjacency_graphs.keypad),KEYBOARD_STARTING_POSITIONS:function(){var e,t;e=adjacency_graphs.qwerty,t=[];for(k in e)v=e[k],t.push(k);return t}().length,KEYPAD_STARTING_POSITIONS:function(){var e,t;e=adjacency_graphs.keypad,t=[];for(k in e)v=e[k],t.push(k);return t}().length,spatial_guesses:function(e){var t,r,n,s,a,u,i,_,o,h,E,c,g,f,l,A,S,p;for("qwerty"===(E=e.graph)||"dvorak"===E?(l=this.KEYBOARD_STARTING_POSITIONS,s=this.KEYBOARD_AVERAGE_DEGREE):(l=this.KEYPAD_STARTING_POSITIONS,s=this.KEYPAD_AVERAGE_DEGREE),a=0,t=e.token.length,S=e.turns,u=_=2,c=t;2<=c?_<=c:_>=c;u=2<=c?++_:--_)for(o=Math.min(S,u-1),i=h=1,g=o;1<=g?h<=g:h>=g;i=1<=g?++h:--h)a+=this.nCk(u-1,i-1)*l*Math.pow(s,i);if(e.shifted_count)if(r=e.shifted_count,n=e.token.length-e.shifted_count,0===r||0===n)a*=2;else{for(A=0,u=p=1,f=Math.min(r,n);1<=f?p<=f:p>=f;u=1<=f?++p:--p)A+=this.nCk(r+n,u);a*=A}return a},dictionary_guesses:function(e){var t;return e.base_guesses=e.rank,e.uppercase_variations=this.uppercase_variations(e),e.l33t_variations=this.l33t_variations(e),t=e.reversed&&2||1,e.base_guesses*e.uppercase_variations*e.l33t_variations*t},START_UPPER:/^[A-Z][^A-Z]+$/,END_UPPER:/^[^A-Z]+[A-Z]$/,ALL_UPPER:/^[^a-z]+$/,ALL_LOWER:/^[^A-Z]+$/,uppercase_variations:function(e){var t,r,n,s,a,u,i,_,o,h,E,c;if(c=e.token,c.match(this.ALL_LOWER)||c.toLowerCase()===c)return 1;for(_=[this.START_UPPER,this.END_UPPER,this.ALL_UPPER],u=0,a=_.length;u<a;u++)if(h=_[u],c.match(h))return 2;for(r=function(){var e,t,r,s;for(r=c.split(""),s=[],t=0,e=r.length;t<e;t++)n=r[t],n.match(/[A-Z]/)&&s.push(n);return s}().length,t=function(){var e,t,r,s;for(r=c.split(""),s=[],t=0,e=r.length;t<e;t++)n=r[t],n.match(/[a-z]/)&&s.push(n);return s}().length,E=0,s=i=1,o=Math.min(r,t);1<=o?i<=o:i>=o;s=1<=o?++i:--i)E+=this.nCk(r+t,s);return E},l33t_variations:function(e){var t,r,n,s,a,u,i,_,o,h,E,c,g;if(!e.l33t)return 1;g=1,o=e.sub;for(E in o)if(c=o[E],s=e.token.toLowerCase().split(""),t=function(){var e,t,r;for(r=[],t=0,e=s.length;t<e;t++)(n=s[t])===E&&r.push(n);return r}().length,r=function(){var e,t,r;for(r=[],t=0,e=s.length;t<e;t++)(n=s[t])===c&&r.push(n);return r}().length,0===t||0===r)g*=2;else{for(i=Math.min(r,t),_=0,a=u=1,h=i;1<=h?u<=h:u>=h;a=1<=h?++u:--u)_+=this.nCk(r+t,a);g*=_}return g}},module.exports=scoring;

},{"./adjacency_graphs":1}],7:[function(require,module,exports){
var time_estimates;time_estimates={estimate_attack_times:function(e){var t,n,s,o;n={online_throttling_100_per_hour:e/(100/3600),online_no_throttling_10_per_second:e/10,offline_slow_hashing_1e4_per_second:e/1e4,offline_fast_hashing_1e10_per_second:e/1e10},t={};for(s in n)o=n[s],t[s]=this.display_time(o);return{crack_times_seconds:n,crack_times_display:t,score:this.guesses_to_score(e)}},guesses_to_score:function(e){var t;return t=5,e<1e3+t?0:e<1e6+t?1:e<1e8+t?2:e<1e10+t?3:4},display_time:function(e){var t,n,s,o,_,r,i,a,u,c;return i=60,r=60*i,s=24*r,a=31*s,c=12*a,n=100*c,u=e<1?[null,"less than a second"]:e<i?(t=Math.round(e),[t,t+" second"]):e<r?(t=Math.round(e/i),[t,t+" minute"]):e<s?(t=Math.round(e/r),[t,t+" hour"]):e<a?(t=Math.round(e/s),[t,t+" day"]):e<c?(t=Math.round(e/a),[t,t+" month"]):e<n?(t=Math.round(e/c),[t,t+" year"]):[null,"centuries"],o=u[0],_=u[1],null!=o&&1!==o&&(_+="s"),_}},module.exports=time_estimates;

},{}]},{},[4])(4)
});
//# sourceMappingURL=zxcvbn.js.map
