var bgs = new Array("SiteImages/treeback.jpg", "SiteImages/surfback.jpg", "SiteImages/lakeback.jpg", "SiteImages/oakleyback.jpg", "SiteImages/sunback.jpg");
var lastbg=-1;
var curpage="icon1";
var letters = new Array('w','h','a','t','t','h','e','f','a','r','k','?');
var light = "";
var dark = "#5C666E";
var contrast = "#ac5500";
var highlight = "#FF0000";

var lastChange;

function setupBarCode() {
    for(var i=1;i<15;i++){
        for(var j=1;j<8;j++){
            var obj = document.getElementById("d"+i+"_b"+j);
            if(Math.ceil((Math.random()*10))%2==0) {
                obj.style.background=light;
            } else {
                obj.style.background=dark;
            }
        }
        var txt = document.getElementById("text"+i);
        if(txt)
            txt.innerHTML=letters[i-2];
    }
}

function randPic() {
    var pic = document.getElementById("back_img");
    var rndm;
    do {
        rndm=Math.ceil(Math.random()*100)%bgs.length;
    } while(rndm==lastbg);
    pic.src=bgs[rndm];
    lastbg=rndm;
}

function newCode(o,i) {
    if(o!=lastChange) {
    	lastChange=o;
	    var obj = document.getElementById(o);
	    var random = Math.ceil((Math.random()*100));
		  var color = dark;
		  if(random%3==0) {
              color = contrast
          }

		  for(var j=1;j<8;j++){
			     random = Math.ceil((Math.random()*100));
			     var obj = document.getElementById("d"+i+"_b"+j);
			     if(random%2==0 || random%3==0) {
                     obj.style.background=color;
			     } else {
			         obj.style.background=light;
			}
	    }
    }
}

function barText(st) {
    for(var i=0;i<letters.length;i++){
        if(i<st.length) {
            letters[i]=st.charAt(i);
        } else
            letters[i]="#";
        var txt = document.getElementById("text"+(i+2));
        if(txt) {
            txt.innerHTML = letters[i];
            txt.style.color=contrast;
        }
    }
    for(i=0;i<15;i++){
        for(var j=1;j<8;j++){
            var obj = document.getElementById("d"+(i+1)+"_b"+j);
            if(obj){
            if(Math.ceil((Math.random()*10))%2==0) {
                obj.style.background=light;
            } else {
                if(st!= "whatthefark?")
                    obj.style.background=contrast;
                else
                    obj.style.background=dark;
            }
            }
        }
    }
    i=1;
    do {
        var con = document.getElementById("const_bit"+i);
        if(con){
            if(st!="whatthefark?")
                con.style.background=contrast;
            else
                con.style.background=dark;
        }
        i++;
   } while(con);
}
