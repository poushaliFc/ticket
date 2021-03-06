function Forum(){
    var i=0, j=0;
    function createElement(tagName, parentElement, attList, style, events, label) {
        var element = document.createElement(tagName);
        var attrName, styleName, eventName;
        for (attrName in attList) {
            element[attrName] = attList[attrName];
        }
        for (styleName in style) {
            element.style[styleName] = style[styleName];
        }
        if (label != null) {
            element.appendChild(document.createTextNode(label));
        }
        for (eventName in events) {
            element.addEventListener(eventName, events[eventName]);
        }
        parentElement.appendChild(element);
        return element;
    }
    createElement("div", document.body, {id:"maindiv"}, { boxShadow:"0px 0px 50px #87CEEB" , position:"relative", margin:"auto", height:"auto", width:"60%"}, null, "");

    (function login() {
        createElement("div", maindiv, {id:"insertDiv"}, {position:"relative", height:"20%", width:"100%", borderBottom: "2px solid black"},null, "");
        createElement("h1", insertDiv, {id:"heading"}, {position:"absolute", width:"100%", textAlign:"center"}, null, "Online Forum");
        createElement("input", insertDiv, {id:"userId", placeholder:"Please Enter Your ID"}, {position:"absolute", left:"5%", top:"60%", height:"20%", width:"50%"}, null, "");
        createElement("button", insertDiv, {id:"go1"}, {position:"absolute", right:"30%", top:"60%", height:"20%", width:"10%", cursor: "pointer", backgroundColor:"white"}, null, "GO");
        createElement("span", insertDiv, {id:"span"}, {position:"absolute", right:"10%", top:"60%", height:"20%", width:"20%", color:"red" }, null, "* Invalid Id");
        return {
                "login_id":"userId",
                "go1":"go1"
              };
    })();

    this.addUser=function() {
        if(document.getElementById('addUserDiv')==null){
            createElement('div', maindiv, {id:"addUserDiv"}, {position:"relative", height:"15%", width:"100%", borderBottom:'2px solid black'}, null, "");
            createElement('input', addUserDiv, {id:'name', placeholder:'Name'}, {position:"absolute", left:"5%", top:"30%", height:'30%',width:'20%'}, null, "");
            createElement('input', addUserDiv, {id:'id', placeholder:'ID'}, {position:"absolute", left:"30%", top:"30%", height:'30%', width:'20%'},null, "");
            createElement('input', addUserDiv, {id:'role', placeholder:'ROLE'}, {position:"absolute", left:"55%", top:"30%", height:'30%',width:'20%'}, null, "");
            createElement('button', addUserDiv, {id:'add'}, {position:"absolute", left:"80%", top:"30%", height:'30%',width:'10%', cursor: "pointer", backgroundColor:"white"}, null, "ADD");
        }
        if(document.getElementById('viewDiv')==null){
            createElement('div', maindiv, {id:'viewDiv'}, {position:'relative', width:'100%', display:"block"}, null, "");
        }
        return {
                "name":"name",
                "login_id":"id",
                "role":"role",
                "add_user":"add"
               };
    }
    this.showTicket=function (id, header, name, description) {   
        var tick=createElement('div', viewDiv, {id:'ticketDiv'+i}, {position:'relative', height:'30%', width:'100%', border:'1px solid red'}, null, "");
        var head=createElement('div', tick, {id:'divHeader'}, {position:'absolute', top:'6%', height:'50%', width:'100%'}, null, "");
        createElement('input', head, {id:'ticket'+j, value:id}, {position:'absolute', left:"2%", top:"5%", height:'30%', width:'20%'}, null, "");
        createElement('input', head, {id:'header'+j, value:header}, {position:'absolute', left:"27%", top:"5%", height:'30%', width:'30%'}, null, "");
        createElement('input', head, {id:'user'+j, value:name}, {position:'absolute', right:"7%", top:"5%", height:'30%', width:'20%'}, null, "");
        createElement('button', tick, {id:'cancel'+j}, {position:'absolute', right:"2%", top:"10%", height:'10%', width:'3%', cursor: "pointer", backgroundColor:"white"},{click:function(){deleteTicket(this)}},  "X"); 
        createElement('a', tick, {id:'confirm'}, {position:'absolute', right:"8%", bottom:"62%", cursor:'pointer'}, null, "confirm");
        createElement('a', tick, {id:"reject"}, {position:'absolute', right:"2%", bottom:"62%", cursor:'pointer'}, null, "/ reject");
        createElement('button', head, {id:'toggle'+j}, {position:"absolute", left:"48%", bottom:"0%", height:'15%',width:'3%', cursor: "pointer"}, null, "-");
        var desc=createElement('div', tick, {id:'divDescription'}, {position:'absolute', bottom:'10%', height:'40%', width:'100%', display:"none"}, null, "");
        createElement('textarea', desc, {id:'textarea'+j, value:description}, {position:'absolute', top:"10%", height:'80%', width:'80%', margin:'2%'}, null, "");
        createElement('button', tick, {id:'export1'+j}, {position:'absolute', right:'2%', top:'42%', height:'12%', width:'10%', cursor: "pointer", backgroundColor:"white"},{click:function(){exportTicket(this)}}, "Export");
        i++;

        document.getElementById('toggle'+j).addEventListener("click",function() {
            console.log("ok");
            if(document.getElementById('divDescription').style.display = 'none')
                document.getElementById('divDescription').style.display = '';
        });
        document.getElementById('confirm').addEventListener("click",function(){
            console.log("ok1");
            document.getElementById('divHeader').style.background = "red";
        });
        document.getElementById('reject').addEventListener("click",function(){
            console.log("ok2");
            document.getElementById('divHeader').style.background = 'green';
        });
        return {
                "ticket_id":'ticket'+j,
                "header":'header'+j,
                "user_name":'user'+j,
                "delete":'cancel'+j,
                "toggle":'toggle'+j,
                "textarea":'textarea'+j,
                "export_single":'export1'+j
               };
    }
    function deleteTicket(element){
        var p1=element.parentNode;
        var p2=p1.parentNode;
        p2.removeChild(p1);
    }

    this.createTicket=function() {
        createElement("div", maindiv, {id:"insertionDiv"}, {position:"relative", height:"30%", width:"100%", display:"block", border:'1px solid red'},null,  "");
        createElement("h4", insertionDiv, {id:"thread"}, {position:"absolute", width:"100%", textAlign:"center"}, null, "Insert A Thread");
        createElement("input", insertionDiv, {id:"threadHeader", placeholder:"Header"}, {position:"absolute", left:"2%", top:"30%", height:"15%", width:"30%"},null,  "");
        createElement("textarea", insertionDiv, {id:"description", placeholder:"Description"}, {position:"absolute", left:"2%", top:"50%", height:"35%", width:"70%"},null,  "");
        createElement("button", insertionDiv, {id:"go2"}, {position:"absolute", left:"75%", top:"65%", height:"20%", width:"5%", cursor: "pointer", backgroundColor:"white"},null,  "GO");
        createElement("button", insertionDiv, {id:"export2"}, {position:"absolute", right:"2%", bottom:"2%", height:"15%", width:"10%", cursor: "pointer", backgroundColor:"white"}, null, "Export");
        return {
                "insert_header":"threadHeader",
                "insert_description":"description",
                "insert_button":"go2",
                "export_all":"export2"
               };
    }
}
//userdetail.register("draw",new Forum());

