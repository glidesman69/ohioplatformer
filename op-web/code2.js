gdjs.menuCode = {};
gdjs.menuCode.GDcheatsButtonObjects2_1final = [];

gdjs.menuCode.GDxbuttonObjects1= [];
gdjs.menuCode.GDxbuttonObjects2= [];
gdjs.menuCode.GDxbuttonObjects3= [];
gdjs.menuCode.GDtitidObjects1= [];
gdjs.menuCode.GDtitidObjects2= [];
gdjs.menuCode.GDtitidObjects3= [];
gdjs.menuCode.GDplayButtonObjects1= [];
gdjs.menuCode.GDplayButtonObjects2= [];
gdjs.menuCode.GDplayButtonObjects3= [];
gdjs.menuCode.GDcreditsButtonObjects1= [];
gdjs.menuCode.GDcreditsButtonObjects2= [];
gdjs.menuCode.GDcreditsButtonObjects3= [];
gdjs.menuCode.GDmadeinohioObjects1= [];
gdjs.menuCode.GDmadeinohioObjects2= [];
gdjs.menuCode.GDmadeinohioObjects3= [];
gdjs.menuCode.GDmenuBackground1Objects1= [];
gdjs.menuCode.GDmenuBackground1Objects2= [];
gdjs.menuCode.GDmenuBackground1Objects3= [];
gdjs.menuCode.GDoptionsButtonObjects1= [];
gdjs.menuCode.GDoptionsButtonObjects2= [];
gdjs.menuCode.GDoptionsButtonObjects3= [];
gdjs.menuCode.GDquitButtonObjects1= [];
gdjs.menuCode.GDquitButtonObjects2= [];
gdjs.menuCode.GDquitButtonObjects3= [];
gdjs.menuCode.GDcheatsButtonObjects1= [];
gdjs.menuCode.GDcheatsButtonObjects2= [];
gdjs.menuCode.GDcheatsButtonObjects3= [];
gdjs.menuCode.GDcheatactivationdebugbuttonObjects1= [];
gdjs.menuCode.GDcheatactivationdebugbuttonObjects2= [];
gdjs.menuCode.GDcheatactivationdebugbuttonObjects3= [];
gdjs.menuCode.GDchangelogButtonObjects1= [];
gdjs.menuCode.GDchangelogButtonObjects2= [];
gdjs.menuCode.GDchangelogButtonObjects3= [];
gdjs.menuCode.GDloadsaveButtonObjects1= [];
gdjs.menuCode.GDloadsaveButtonObjects2= [];
gdjs.menuCode.GDloadsaveButtonObjects3= [];
gdjs.menuCode.GDhelpButtonObjects1= [];
gdjs.menuCode.GDhelpButtonObjects2= [];
gdjs.menuCode.GDhelpButtonObjects3= [];
gdjs.menuCode.GDloginButtonObjects1= [];
gdjs.menuCode.GDloginButtonObjects2= [];
gdjs.menuCode.GDloginButtonObjects3= [];
gdjs.menuCode.GDYellowButtonObjects1= [];
gdjs.menuCode.GDYellowButtonObjects2= [];
gdjs.menuCode.GDYellowButtonObjects3= [];
gdjs.menuCode.GDcancledObjects1= [];
gdjs.menuCode.GDcancledObjects2= [];
gdjs.menuCode.GDcancledObjects3= [];
gdjs.menuCode.GDchangelogtextObjects1= [];
gdjs.menuCode.GDchangelogtextObjects2= [];
gdjs.menuCode.GDchangelogtextObjects3= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playMusic(runtimeScene, "ohio platformer shitty ost menu.mp3", true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("madeinohio"), gdjs.menuCode.GDmadeinohioObjects1);
{for(var i = 0, len = gdjs.menuCode.GDmadeinohioObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDmadeinohioObjects1[i].setColor(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) + ";" + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + ";" + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}}

}


};gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDcheatsButtonObjects2Objects = Hashtable.newFrom({"cheatsButton": gdjs.menuCode.GDcheatsButtonObjects2});
gdjs.menuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.menuCode.GDloginButtonObjects2 */
{for(var i = 0, len = gdjs.menuCode.GDloginButtonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDloginButtonObjects2[i].SetLabelText("login", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.menuCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.menuCode.GDloginButtonObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDloginButtonObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDloginButtonObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDloginButtonObjects2[k] = gdjs.menuCode.GDloginButtonObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDloginButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "auth settings");
}}

}


};gdjs.menuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "https://github.com/glidesman69/ohioplatformer/releases", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.menuCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("playButton"), gdjs.menuCode.GDplayButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDplayButtonObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDplayButtonObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDplayButtonObjects2[k] = gdjs.menuCode.GDplayButtonObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDplayButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "level select");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("creditsButton"), gdjs.menuCode.GDcreditsButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDcreditsButtonObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDcreditsButtonObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDcreditsButtonObjects2[k] = gdjs.menuCode.GDcreditsButtonObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDcreditsButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "credits");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quitButton"), gdjs.menuCode.GDquitButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDquitButtonObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDquitButtonObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDquitButtonObjects2[k] = gdjs.menuCode.GDquitButtonObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDquitButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("optionsButton"), gdjs.menuCode.GDoptionsButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDoptionsButtonObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDoptionsButtonObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDoptionsButtonObjects2[k] = gdjs.menuCode.GDoptionsButtonObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDoptionsButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "options");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cheatsButton"), gdjs.menuCode.GDcheatsButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDcheatsButtonObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDcheatsButtonObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDcheatsButtonObjects2[k] = gdjs.menuCode.GDcheatsButtonObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDcheatsButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "cheats menu");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cheatactivationdebugbutton"), gdjs.menuCode.GDcheatactivationdebugbuttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDcheatactivationdebugbuttonObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDcheatactivationdebugbuttonObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDcheatactivationdebugbuttonObjects2[k] = gdjs.menuCode.GDcheatactivationdebugbuttonObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDcheatactivationdebugbuttonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDcheatactivationdebugbuttonObjects2 */
gdjs.menuCode.GDcheatsButtonObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDcheatsButtonObjects2Objects, 64, 128, "");
}{for(var i = 0, len = gdjs.menuCode.GDcheatactivationdebugbuttonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDcheatactivationdebugbuttonObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("helpButton"), gdjs.menuCode.GDhelpButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDhelpButtonObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDhelpButtonObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDhelpButtonObjects2[k] = gdjs.menuCode.GDhelpButtonObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDhelpButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("C:\\U\\s\\e\\r\\s\\Gildas\\D\\e\\s\\k\\t\\o\\p\\shitsite", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("loginButton"), gdjs.menuCode.GDloginButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDloginButtonObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDloginButtonObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDloginButtonObjects2[k] = gdjs.menuCode.GDloginButtonObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDloginButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = !(gdjs.playerAuthentication.isAuthenticated());
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
{gdjs.playerAuthentication.openAuthenticationWindow(runtimeScene);
}
{ //Subevents
gdjs.menuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.playerAuthentication.isAuthenticated();
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("loginButton"), gdjs.menuCode.GDloginButtonObjects2);
{for(var i = 0, len = gdjs.menuCode.GDloginButtonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDloginButtonObjects2[i].SetLabelText("auth settings", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.menuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.menuCode.GDcheatsButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.menuCode.GDcheatsButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cheatsButton"), gdjs.menuCode.GDcheatsButtonObjects3);
for (var i = 0, k = 0, l = gdjs.menuCode.GDcheatsButtonObjects3.length;i<l;++i) {
    if ( gdjs.menuCode.GDcheatsButtonObjects3[i].getBehavior("KonamiCode").KC_Inputted((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.menuCode.GDcheatsButtonObjects3[k] = gdjs.menuCode.GDcheatsButtonObjects3[i];
        ++k;
    }
}
gdjs.menuCode.GDcheatsButtonObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.menuCode.GDcheatsButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.menuCode.GDcheatsButtonObjects2_1final.indexOf(gdjs.menuCode.GDcheatsButtonObjects3[j]) === -1 )
            gdjs.menuCode.GDcheatsButtonObjects2_1final.push(gdjs.menuCode.GDcheatsButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.menuCode.GDcheatsButtonObjects2_1final, gdjs.menuCode.GDcheatsButtonObjects2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDcheatsButtonObjects2 */
{for(var i = 0, len = gdjs.menuCode.GDcheatsButtonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDcheatsButtonObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("loadsaveButton"), gdjs.menuCode.GDloadsaveButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDloadsaveButtonObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDloadsaveButtonObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDloadsaveButtonObjects2[k] = gdjs.menuCode.GDloadsaveButtonObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDloadsaveButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "save screen");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("changelogButton"), gdjs.menuCode.GDchangelogButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDchangelogButtonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDchangelogButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDchangelogButtonObjects1[k] = gdjs.menuCode.GDchangelogButtonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDchangelogButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20083636);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://github.com/glidesman69/ohioplatformer/releases", runtimeScene);
}
{ //Subevents
gdjs.menuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.menuCode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("xbutton"), gdjs.menuCode.GDxbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDxbuttonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDxbuttonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDxbuttonObjects1[k] = gdjs.menuCode.GDxbuttonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDxbuttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "ohio platformer shitty ost menu.mp3");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "ohio platformer shitty ost lvl1.mp3");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "ohio platformer uwin.mp3");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString("menu");
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, gdjs.evtsExt__GetPropertiesData__ReturnGameTitle.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) + " - menu");
}
{ //Subevents
gdjs.menuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.menuCode.eventsList4(runtimeScene);
}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDxbuttonObjects1.length = 0;
gdjs.menuCode.GDxbuttonObjects2.length = 0;
gdjs.menuCode.GDxbuttonObjects3.length = 0;
gdjs.menuCode.GDtitidObjects1.length = 0;
gdjs.menuCode.GDtitidObjects2.length = 0;
gdjs.menuCode.GDtitidObjects3.length = 0;
gdjs.menuCode.GDplayButtonObjects1.length = 0;
gdjs.menuCode.GDplayButtonObjects2.length = 0;
gdjs.menuCode.GDplayButtonObjects3.length = 0;
gdjs.menuCode.GDcreditsButtonObjects1.length = 0;
gdjs.menuCode.GDcreditsButtonObjects2.length = 0;
gdjs.menuCode.GDcreditsButtonObjects3.length = 0;
gdjs.menuCode.GDmadeinohioObjects1.length = 0;
gdjs.menuCode.GDmadeinohioObjects2.length = 0;
gdjs.menuCode.GDmadeinohioObjects3.length = 0;
gdjs.menuCode.GDmenuBackground1Objects1.length = 0;
gdjs.menuCode.GDmenuBackground1Objects2.length = 0;
gdjs.menuCode.GDmenuBackground1Objects3.length = 0;
gdjs.menuCode.GDoptionsButtonObjects1.length = 0;
gdjs.menuCode.GDoptionsButtonObjects2.length = 0;
gdjs.menuCode.GDoptionsButtonObjects3.length = 0;
gdjs.menuCode.GDquitButtonObjects1.length = 0;
gdjs.menuCode.GDquitButtonObjects2.length = 0;
gdjs.menuCode.GDquitButtonObjects3.length = 0;
gdjs.menuCode.GDcheatsButtonObjects1.length = 0;
gdjs.menuCode.GDcheatsButtonObjects2.length = 0;
gdjs.menuCode.GDcheatsButtonObjects3.length = 0;
gdjs.menuCode.GDcheatactivationdebugbuttonObjects1.length = 0;
gdjs.menuCode.GDcheatactivationdebugbuttonObjects2.length = 0;
gdjs.menuCode.GDcheatactivationdebugbuttonObjects3.length = 0;
gdjs.menuCode.GDchangelogButtonObjects1.length = 0;
gdjs.menuCode.GDchangelogButtonObjects2.length = 0;
gdjs.menuCode.GDchangelogButtonObjects3.length = 0;
gdjs.menuCode.GDloadsaveButtonObjects1.length = 0;
gdjs.menuCode.GDloadsaveButtonObjects2.length = 0;
gdjs.menuCode.GDloadsaveButtonObjects3.length = 0;
gdjs.menuCode.GDhelpButtonObjects1.length = 0;
gdjs.menuCode.GDhelpButtonObjects2.length = 0;
gdjs.menuCode.GDhelpButtonObjects3.length = 0;
gdjs.menuCode.GDloginButtonObjects1.length = 0;
gdjs.menuCode.GDloginButtonObjects2.length = 0;
gdjs.menuCode.GDloginButtonObjects3.length = 0;
gdjs.menuCode.GDYellowButtonObjects1.length = 0;
gdjs.menuCode.GDYellowButtonObjects2.length = 0;
gdjs.menuCode.GDYellowButtonObjects3.length = 0;
gdjs.menuCode.GDcancledObjects1.length = 0;
gdjs.menuCode.GDcancledObjects2.length = 0;
gdjs.menuCode.GDcancledObjects3.length = 0;
gdjs.menuCode.GDchangelogtextObjects1.length = 0;
gdjs.menuCode.GDchangelogtextObjects2.length = 0;
gdjs.menuCode.GDchangelogtextObjects3.length = 0;

gdjs.menuCode.eventsList5(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
