(function(KoreSDK){

    var KoreSDK=KoreSDK||{};

    var botOptions = {};
    botOptions.logLevel = 'debug';
    botOptions.koreAPIUrl = "https://bots.kore.ai/api/";
    botOptions.koreSpeechAPIUrl = "";//deprecated
    //botOptions.bearer = "bearer xyz-------------------";
    //botOptions.ttsSocketUrl = '';//deprecated
    botOptions.koreAnonymousFn = koreAnonymousFn;
    botOptions.recorderWorkerPath = '../libs/recorderWorker.js';
    // botOptions.JWTUrl = "https://bots.kore.ai/api/oAuth/token/jwtgrant";
     botOptions.JWTUrl = "http://localhost:3000/api/users/sts";
    // botOptions.JWTUrl = "http://ec2-3-92-213-11.compute-1.amazonaws.com:3000/api/users/sts";
    botOptions.userIdentity = 'praveen.tissera@gmail.com';// Provide users email id here
    // botOptions.botInfo = { name: "banking bot", "_id": "st-fc4f3da0-c206-5b55-beb6-62a03ffd399c" }; // bot name is case sensitive
    
    // chatushateam bot
    // botOptions.botInfo = { name: "Bank Bot Demo One", "_id": "st-6e0efd23-96af-5d9a-97a2-e8512dfc6d81" }; // bot name is case sensitive
    // testbot
    // botOptions.botInfo = { name: "test123", "_id": "st-c92b2513-43f0-58b1-aa4f-1ba3de0edae9" }; // bot name is case sensitive
    //sample my bank bot
    // botOptions.botInfo = { name: "Bank Bot Demo One", "_id": "st-bece14e7-ac46-5268-b2b3-42f699c9e24a" }; // bot name is case sensitive
    //v2
    // botOptions.botInfo = { name: "Banking Bot Demo NW", "_id": "st-38d9f1f8-b115-5334-a4c4-a7bcd6a9a880" }; // bot name is case sensitive

    //final chatusha demo
    botOptions.botInfo = { name: "Demo Banking Bot v2", "_id": "st-c2df0383-d108-5e78-88df-f549185ffe89" }; // bot name is case sensitive
    /* 
    Important Note: These keys are provided here for quick demos to generate JWT token at client side but not for Production environment.
    Refer below document for JWT token generation at server side. Client Id and Client secret should maintained at server end.
    https://developer.kore.ai/docs/bots/sdks/user-authorization-and-assertion/
    **/
//    chatushateam bot
    // botOptions.clientId = "cs-a7466f43-0029-5719-9fe7-2750a2f71fe2";
    // botOptions.clientSecret = "OI66pLpR1pOY6jVoZHQ5UINXtHZDJSTXgi1aW9rCeSI=";
    
    // botOptions.clientId = "cs-e8f6a99d-6da9-5a60-9546-14e4cf2004db";
    // botOptions.clientSecret = "pI8Q0A/y769iQcufYrjVmoMDhAgmaXMJxdLuQDtR7T8=";

    // test bot
    // botOptions.clientId = "cs-6f681cb1-ad49-5265-88dd-0dbae2dea72a";
    // botOptions.clientSecret = "R4k3ORE9wRPbzjcJO6mfWG6IjvFk2hgMe/Uj4S22YhM=";
     
    //sample my bank bot
    // botOptions.clientId = "cs-93266ece-133d-55f1-95cb-ba9334f5642b";
    // botOptions.clientSecret = "tLgk/dFY3PHanSEAhSwy9sCUPXlogp145b2VMCEoj2Y=";
    // v2
    // botOptions.clientId = "cs-bb254baa-8e44-54d3-96f5-f9146ab68d4a";
    // botOptions.clientSecret = "Hw4j5r++so3YRBKVq3u+S6pRGf2Y4WgqmGvmUIPIPeg=";

    // final chathusha demo
    botOptions.clientId = "cs-5c91f85b-d8b3-5030-8e58-435d2c9bbcd5";
    botOptions.clientSecret = "1lGJ+/BluxuDY6QBZQpsgzplRmTt939lG7FVXYOZ6q0=";

// for webhook based communication use following option 
// botOptions.webhookConfig={
//     enable:true,
//     webhookURL:'PLEASE_PROVIDE_WEBHOOK_URL',
//     apiVersion:2 //webhookURL will be converted to v2 by default. To use v1(not recommended) webhookURL change it to 1
// }
   
// To modify the web socket url use the following option
// botOptions.reWriteSocketURL = {
//     protocol: 'PROTOCOL_TO_BE_REWRITTEN',
//     hostname: 'HOSTNAME_TO_BE_REWRITTEN',
//     port: 'PORT_TO_BE_REWRITTEN'
// };
    
    var chatConfig={
        botOptions:botOptions,
        allowIframe: false, 			// set true, opens authentication links in popup window, default value is "false"
        isSendButton: false, 			// set true, to show send button below the compose bar
        isTTSEnabled: false,			// set true, to hide speaker icon
        ttsInterface:'webapi',        // webapi or awspolly , where default is webapi
        isSpeechEnabled: true,			// set true, to hide mic icon
        allowGoogleSpeech: false,		// set true, to use Google speech engine instead KORE.AI engine.This feature requires valid Google speech API key. (Place it in 'web-kore-sdk/libs/speech/key.js')
        allowLocation: false,			// set false, to deny sending location to server
        loadHistory: false,				// set true to load recent chat history
        messageHistoryLimit: 10,		// set limit to load recent chat history
        autoEnableSpeechAndTTS: false, 	// set true, to use talkType voice keyboard.
        graphLib: "d3" ,				// set google, to render google charts.This feature requires loader.js file which is available in google charts documentation.
        googleMapsAPIKey:"",
        minimizeMode: true,             // set true, to show chatwindow in minimized mode, If false is set remove #chatContainer style in chatwindow.css  
        multiPageApp: {
            enable: false,              //set true for non SPA(Single page applications)
            userIdentityStore: 'localStorage',//'localStorage || sessionStorage'
            chatWindowStateStore: 'localStorage'//'localStorage || sessionStorage'
        },              
        supportDelayedMessages:true,    // enable to add support for renderDelay in message nodes which will help to render messages with delay from UI       
        maxTypingIndicatorTime:10000,   //time in milliseconds,typing indicator will be stopped after this time limit,even bot doesn't respond 
        pickersConfig:{
            showDatePickerIcon:false,           //set true to show datePicker icon
            showDateRangePickerIcon:false,      //set true to show dateRangePicker icon
            showClockPickerIcon:false,          //set true to show clockPicker icon
            showTaskMenuPickerIcon:false,       //set true to show TaskMenu Template icon
            showradioOptionMenuPickerIcon:false //set true to show Radio Option Template icon
        }
    };
     /* 
        allowGoogleSpeech will use Google cloud service api.
        Google speech key is required for all browsers except chrome.
        On Windows 10, Microsoft Edge will support speech recognization.
     */

    KoreSDK.chatConfig=chatConfig
})(window.KoreSDK);
