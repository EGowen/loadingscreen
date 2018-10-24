/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "Heritage Networks Clone Wars";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/server1.jpg",
	"backgrounds/images/server2.jpg",
	"backgrounds/images/server3.jpg",
	"backgrounds/images/server4.jpg",
	
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = false;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "9FVADOLRf54", name: "Cantina Band 2"},
	{youtube: "axZemDfcfX8", name: "Cantina Band"},
	{youtube: "-bzWSJG93P8", name: "Imperial March"},
	{youtube: "3YLFakwWwt8", name: "Arctic Monkeys - Flourescent Adolescent"},
	{youtube: "p00v9ZFhWJM", name: "Gorillaz - On Melancholy Hill"},
	{youtube: "EAYfJckSEN0", name: "Wice - Star Fighter"},
	{youtube: "L00wacOr7ck", name: "M O O N - Dust"},
	{youtube: "X3NA8cRn2l8", name: "Hotline Miami OST - Miami 2"},
	{youtube: "7u65WiPxZKc", name: "Simpsons Hit + Run - Homer's Day"},
	{youtube: "khMb3k-Wwvg", name: "Tyler, The Creator - 911"},
	{youtube: "Kp7eSUU9oy8", name: "Childish Gambino - Redbone"},
	{youtube: "gGdGFtwCNBE", name: "The Killers - Mr Brightside"},
	{youtube: "Fi8rsCncwF8", name: "Outkast - Hey Ya"},
	{youtube: "WCj-IXoHy2E", name: "Venom added this"},
	{youtube: "EZE62LpaqHg", name: "Tyler, The Creator - See You Again"},
	{youtube: "EqkBRVukQmE", name: "Arctic Monkeys - When The Sun Goes Down"},
	{youtube: "Y5fBdpreJiU", name: "The Killers - Somebody Told Me"},
	{youtube: "nJtK14ffgEM", name: "Coldplay - Adventure of a Lifetime"},
	{youtube: "iO_WxYC34eM", name: "Imagine Dragons - Radioactive"},
	{youtube: "RQxDM2K-hd0", name: "Black Banshee"},
	{youtube: "SSbBvKaM6sk", name: "Blur - Song 2"},
	{youtube: "hTWKbfoikeg", name: "Nirvana - Smells Like Teen Spirit"},
	{youtube: "498OznJOYMs", name: "Beach Walk - Zen Remix"},
	{youtube: "3YLFakwWwt8", name: "Arctic Monkeys - Flourescent Adolescent"},
	{youtube: "SSbBvKaM6sk", name: "Blur - Song 2"},
	{youtube: "hTWKbfoikeg", name: "Nirvana - Smells Like Teen Spirit"},
	{youtube: "498OznJOYMs", name: "Beach Walk - Zen Remix"},
	{youtube: "NxxjLD2pmlk", name: "Gorillaz - Feel Good Inc"},
		
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 8;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Enjoy the server",
"Thanks for joining Heritage Networks!",
"The 501st Legion specialise in getting up close with their Shotguns",
"The 41st Elite Corps pick off their targets from a range with their Sniper Rifles",
"The 21st Nova Corps Suppress their enemies with their miniguns",
"Delta Squad work as a team to complete special operations",
"The Alpha Class ARC were trained by Jango Fett and are the Republic's most skilled Clones",
"Training to become an ARC trooper within your regiment gives you access to better armour and more weaponry",
"Training to become an ARF trooper within your regiment gives you access to ranged weaponry",
"The 212th Utilise explosives and vehicles on the battlefield",
"The bomb squad is a specialised explosives defusal unit",
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
