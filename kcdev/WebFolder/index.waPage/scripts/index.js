
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var loginButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		// Add your code here
		
        ds.Person.login(uName, uPass);
		
	};// @lock

	loginButton.click = function loginButton_click (event)// @startlock
	{// @endlock
		// Add your code here
		
//		$$("userField").setValue("LL");
//		$$("passField").setValue("LL");

		var username = $$("userField").getValue();
		var password = $$("passField").getValue();
		
		
		if(WAF.directory.loginByPassword(username,password)) {
		   
		   var currentuser = WAF.directory.currentUser().fullName;
		   //alert(currentuser);
		  currentUser = currentuser;
		  source.currentUser.sync();
		  
		  
		  
		   
		   //var isIn1 = session.belongsTo("Admin");
		   //var isIn2 = session.belongsTo("User");
		   
		   var isIng1 = WAF.directory.currentUserBelongsTo("Admin");
		   var isIng2 = WAF.directory.currentUserBelongsTo("User");
		   var isIng3 = WAF.directory.currentUserBelongsTo("User2");
		   
		   
		   if(isIng1){
		   	
		   	 //alert("Admin"); 
		   	 window.location = '/views/admin/admin/index.html';
		   }
		   
		   else if(isIng2){ 
		   
		     //alert("User"); 
		     window.location = '/views/user/user/index.html';
		   }
		   
		   else if(isIng3){ 
		   
		     alert("User2"); 
		   }
		   
		   else{
		   	alert("NO User"); 
		   }
		   
		}
		else{
			alert("login ไม่ถูกต้อง");
		}
		
		
		
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("loginButton", "click", loginButton.click, "WAF");
// @endregion
};// @endlock
