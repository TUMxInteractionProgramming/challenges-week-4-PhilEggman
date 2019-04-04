/* #6 start the #external #action and say hello */
console.log("App is alive");

var currentChannel;

console.log (hallo);

var currentLocation = {
    longitude: 11.537186,
    latitude: 48.1653757,
    what3words: 'teile.wünsche.augenlid'
};

console.log(currentChannel);
console.log ("currentLocation", currentLocation);

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
   

    //console.log("currentChannel", currentChannel);
   
    //Log the channel switch
    console.log("Tuning in to channel", channelName);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = channelName.location;

    /* #6 #liking channels on #click */
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
    
     element = document.getElementById('channel-star');
     className = element.className;

    console.log(currentChannel.starred);
    
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

