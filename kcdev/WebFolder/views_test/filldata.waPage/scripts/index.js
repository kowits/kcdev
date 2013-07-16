
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var documentEvent = {};	// @document
	var button4 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		// Add your code here
		sources.test.uid = sources.test.uid * 1.1;
		sources.test.autoDispatch();
		//sources.test.save;
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// Add your code here
		 myArr1 = []; // initialization of a global variable (required for working with datasources)
		    for (var i = 0; i < 100; i++) // loop to add values
		    { 
		        var e = { c1:"test"+(i*i), c2: i, c3: Math.random() }; // automatically create values
		        myArr1.push(e); // fill the myArray array
		    }
		            // At this point, the JavaScript array is filled, but the datasource is not notified of the change
		            // It is necessary to trigger the synchronization from the array to the datasource
		    sources.myArr1.sync();
		             
		            // Calculate a variable each time the c2 attribute for the current element of the array changes
		    sources.myArr1.addListener("onAttributeChange", computeX, { attributeName: "c2" });
		    
		    
	};// @lock


	function computeX(event)
	{
	    x = sources.myArr1.c2 * 0.31; // calculate a (global) variable named x
	    sources.x.sync(); // synchronize the variable with the datasource
	}
	
	
	button4.click = function button4_click (event)// @startlock
	{// @endlock
		// Add your code here
		sources.test.save({
	        onSuccess: function (event){
	                //handle successful save
	            sources.test.addEntity(sources.test.getCurrentElement()); 
	        },
	        onError: function(event){ 
	                // an error occurred
	                // display the top-level error message in the Display Error widget
	            $$('textField2').setErrorMessage({message: event.error[0].message, tooltip: true});
	        }
   		});

	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		// Add your code here
		// Valid code
			var vcount;
			var myset = ds.Test.query("ID > 0 and ID < 11", {
			    onSuccess: function(event) // we pass a function that receives the server response
			    {
			        vcount = event.entityCollection.length; // we retrieve the size of the entity collection
			       // $("#display").html("selection : "+vcount);
			            // we display the size of the entity collection in the container whose ID is "display"
			            
			         $("#display").val(vcount);   
			    }
			});
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		// Add your code here
		myVar1 = "ทดสอบตัวแปลแบบ Local";
		source.myVar1.sync();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
