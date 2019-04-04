/* #6 start the #external #action and say hello */
console.log("App is alive");

//#7 global variable of the current channel 
var currentChannel = {};

//#7 my current location
var currentLocation = {
    longitude: 11.537186,
    latitude: 48.1653757,
    what3words: '<a href="hhttps://map.what3words.com/teile.wünsche.augenlid?utm_source=w3w&utm_medium=owned&utm_campaign=B2C_4561_W3_Pt_Map-Site_Org_WO_en_Main-Site-Explore-Map" target="_blank"><strong>teile.wünsche.augenlid</strong></a>'
};


console.log ("currentLocation", currentLocation);

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
   
    //#7 store channelName in the global variable currentChannel
    currentChannel = channelName;
    //#7 Log the currentChannel
    console.log("currentChannel", currentChannel);
   
    //Log the channel switch
    console.log("Tuning in to channel", channelName);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = channelName.location;

    /* #7 #liking channels on #click */
    (channelName.starred == true) ?
    $('#channel-star').attr('class', 'fas fa-star') :
    $('#channel-star').attr('class', 'far fa-star')
   

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName.name + ')').addClass('selected');

}

/* #6 #liking a channel on #click */
function star() {
    $('#channel-star').toggleClass('fas fa-star');
    $('#channel-star').toggleClass('far fa-star');
    
    //currentChannel.starred = !currentChannel.starred
    //$('#channels li:contains(' + currentChannel.name + ')').toggleClass('far fa-star', 'far fa-star');
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

//#8 current date plus 15 minutes
var now15 = new Date();
now15.setMinutes (now15.getMinutes() +15);
now15 = new Date(now15); 

//#8 current date
var now = Date.now();

//#8 expiresIn
var expiresInMilli = (now + 900000) - now;
var expiresInMin = expiresInMilli / 60000;


/**
 * #8 constructor function 
 * @param text 
 */
function Message(text) {
    this.createdBy = currentLocation.what3words;
    this.latitude = currentLocation.latitude;
    this.longitude = currentLocation.longitude;
    this.createdOn = now;
    this.expiresOn = now15;
    this.expiresIn = expiresInMin
    this.text = text;
    this.own = true;
}

/**
 * #8 sends the written message to the constructor Message
 */
function sendMessage() {
    var writtenMessage = $('#input-message').val();

    var newMessage = new Message (writtenMessage);

    $('#messages').append(createMessageElement(newMessage));

    // #8 input is cleared after sending a message
    $('#input-message').val('');
}

/**
 * #8 creats a new message element
 * @param messageObject 
 */
function createMessageElement(messageObject) {
    return $('<div>').addClass('message own').append('<h3>'+messageObject.createdBy +messageObject.createdOn+ '<em>'+messageObject.expiresIn+ ' min. left</em></h3><p>' +messageObject.text+ '</p><button>+5 min.</button>');
}

/**
 * #8 everything works except the onclick="switchChannel();"
 */
/*function listChannels() {
    $('ul').append(createChannelElement(yummy));
    $('ul').append(createChannelElement(sevenContinents));
    $('ul').append(createChannelElement(killerApp));
    $('ul').append(createChannelElement(firstPersonOnMars));
    $('ul').append(createChannelElement(octoberfest));
}

function createChannelElement(channelName) {
      var channelListItem = $('<li onclick="switchChannel();">').text(channelName.name);
      var channelClassMeta = $('<span>').addClass('channel-meta').appendTo(channelListItem);
        $('<i>').addClass(channelName.starred ? 'fas fa-star':'far fa-star').appendTo(channelClassMeta);
        $('<span>').text((channelName.expiresIn / 60000) +' min').appendTo(channelClassMeta);
        $('<span>').text(channelName.messageCount+ ' new').appendTo(channelClassMeta);
        $('<i>').addClass('fa fa-chevron-right').appendTo(channelClassMeta);


    return channelListItem;
}*/

