/* zklinks.js

	Purpose:
		
	Description:
		
	History:
		Fri Jun  24 22:10:09     2009, Created by jumperchen

Copyright (C) 2011 Potix Corporation. All Rights Reserved.

*/
FBL.ns(function() { with (FBL) {
const zkURLs = {
    main: "http://www.zkoss.org",
    forum: "http://www.zkoss.org/forum/",
    demo: "http://www.zkoss.org/zkdemo/",
    docs: "http://books.zkoss.org/",
    javaAPI: "http://www.zkoss.org/javadoc/latest/zk/",
    jsAPI: "http://www.zkoss.org/javadoc/latest/jsdoc/",
	zkfiddle: "http://www.zkfiddle.org/"
};
function ZKLinks() {}
ZKLinks.prototype = extend(Firebug.Panel, { 
    name: "ZKLinks",
    parentPanel: "ZulEditor",
    title: "ZK Links",
	initialize: function() {
		Firebug.Panel.initialize.apply(this, arguments);
		ZKLinksTag.bodyTag.append(null, this.panelNode, null);
	},
});

var ZKLinksTag = domplate(Firebug.Rep, {
    bodyTag:
    UL(
        LI(
			A({onclick: "$onClick", which:'main'},
            "Home")
        ),
        LI(
			A({onclick: "$onClick", which:'forum'},
            "Forum")
        ),
        LI(
			A({onclick: "$onClick", which:'demo'},
            "Demo")
        ),
        LI(
			A({onclick: "$onClick", which:'docs'},
            "Document")
        ),
        LI(
			A({onclick: "$onClick", which:'javaAPI'},
            "Java Doc")
        ),
        LI(
			A({onclick: "$onClick", which:'jsAPI'},
            "Javascript Doc")
        ),
        LI(
			A({onclick: "$onClick", which:'zkfiddle'},
            "ZK Fiddle")
        )
    ),
    onClick: function(evt) {
  		openNewTab(zkURLs[evt.target.getAttribute("which")]);
    }
});
Firebug.registerPanel(ZKLinks); 
}});