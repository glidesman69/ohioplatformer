gdjs.level_32selectCode = {};
gdjs.level_32selectCode.GDxbuttonObjects1= [];
gdjs.level_32selectCode.GDxbuttonObjects2= [];
gdjs.level_32selectCode.GDxbuttonObjects3= [];
gdjs.level_32selectCode.GDmenuBackground1Objects1= [];
gdjs.level_32selectCode.GDmenuBackground1Objects2= [];
gdjs.level_32selectCode.GDmenuBackground1Objects3= [];
gdjs.level_32selectCode.GDlvl1ButtonObjects1= [];
gdjs.level_32selectCode.GDlvl1ButtonObjects2= [];
gdjs.level_32selectCode.GDlvl1ButtonObjects3= [];
gdjs.level_32selectCode.GDtestlvlButtonObjects1= [];
gdjs.level_32selectCode.GDtestlvlButtonObjects2= [];
gdjs.level_32selectCode.GDtestlvlButtonObjects3= [];
gdjs.level_32selectCode.GDscoredeductionObjects1= [];
gdjs.level_32selectCode.GDscoredeductionObjects2= [];
gdjs.level_32selectCode.GDscoredeductionObjects3= [];
gdjs.level_32selectCode.GDGreenButtonObjects1= [];
gdjs.level_32selectCode.GDGreenButtonObjects2= [];
gdjs.level_32selectCode.GDGreenButtonObjects3= [];
gdjs.level_32selectCode.GDGreyButtonObjects1= [];
gdjs.level_32selectCode.GDGreyButtonObjects2= [];
gdjs.level_32selectCode.GDGreyButtonObjects3= [];
gdjs.level_32selectCode.GDRedButtonObjects1= [];
gdjs.level_32selectCode.GDRedButtonObjects2= [];
gdjs.level_32selectCode.GDRedButtonObjects3= [];
gdjs.level_32selectCode.GDYellowButtonObjects1= [];
gdjs.level_32selectCode.GDYellowButtonObjects2= [];
gdjs.level_32selectCode.GDYellowButtonObjects3= [];
gdjs.level_32selectCode.GDBlueButtonObjects1= [];
gdjs.level_32selectCode.GDBlueButtonObjects2= [];
gdjs.level_32selectCode.GDBlueButtonObjects3= [];
gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1= [];
gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects2= [];
gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects3= [];
gdjs.level_32selectCode.GDNewTextObjects1= [];
gdjs.level_32selectCode.GDNewTextObjects2= [];
gdjs.level_32selectCode.GDNewTextObjects3= [];
gdjs.level_32selectCode.GDNewTextInputObjects1= [];
gdjs.level_32selectCode.GDNewTextInputObjects2= [];
gdjs.level_32selectCode.GDNewTextInputObjects3= [];


gdjs.level_32selectCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playMusic(runtimeScene, "ohio platformer shitty ost menu.mp3", true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
{/* Unknown object - skipped. */}}

}


};gdjs.level_32selectCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{/* Unknown object - skipped. */}}

}


};gdjs.level_32selectCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "auth settings");
}}

}


};gdjs.level_32selectCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "https://github.com/glidesman69/ohioplatformer/releases", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.level_32selectCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "level select");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "credits");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "options");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "cheats menu");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("C:\\U\\s\\e\\r\\s\\Gildas\\D\\e\\s\\k\\t\\o\\p\\shitsite", runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
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
gdjs.level_32selectCode.eventsList1(runtimeScene);} //End of subevents
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
{/* Unknown object - skipped. */}
{ //Subevents
gdjs.level_32selectCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
/* Unknown object - skipped. */if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "save screen");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20083636);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://github.com/glidesman69/ohioplatformer/releases", runtimeScene);
}
{ //Subevents
gdjs.level_32selectCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.level_32selectCode.eventsList5 = function(runtimeScene) {

{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("xbutton"), gdjs.level_32selectCode.GDxbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32selectCode.GDxbuttonObjects1.length;i<l;++i) {
    if ( gdjs.level_32selectCode.GDxbuttonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_32selectCode.GDxbuttonObjects1[k] = gdjs.level_32selectCode.GDxbuttonObjects1[i];
        ++k;
    }
}
gdjs.level_32selectCode.GDxbuttonObjects1.length = k;
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
gdjs.level_32selectCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.level_32selectCode.eventsList4(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("xbutton"), gdjs.level_32selectCode.GDxbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32selectCode.GDxbuttonObjects1.length;i<l;++i) {
    if ( gdjs.level_32selectCode.GDxbuttonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_32selectCode.GDxbuttonObjects1[k] = gdjs.level_32selectCode.GDxbuttonObjects1[i];
        ++k;
    }
}
gdjs.level_32selectCode.GDxbuttonObjects1.length = k;
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
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("lvl1Button"), gdjs.level_32selectCode.GDlvl1ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32selectCode.GDlvl1ButtonObjects1.length;i<l;++i) {
    if ( gdjs.level_32selectCode.GDlvl1ButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_32selectCode.GDlvl1ButtonObjects1[k] = gdjs.level_32selectCode.GDlvl1ButtonObjects1[i];
        ++k;
    }
}
gdjs.level_32selectCode.GDlvl1ButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "fake loading screen");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("testlvlButton"), gdjs.level_32selectCode.GDtestlvlButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32selectCode.GDtestlvlButtonObjects1.length;i<l;++i) {
    if ( gdjs.level_32selectCode.GDtestlvlButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_32selectCode.GDtestlvlButtonObjects1[k] = gdjs.level_32selectCode.GDtestlvlButtonObjects1[i];
        ++k;
    }
}
gdjs.level_32selectCode.GDtestlvlButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1.1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "fake loading screen");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("scorededuction"), gdjs.level_32selectCode.GDscoredeductionObjects1);
{for(var i = 0, len = gdjs.level_32selectCode.GDscoredeductionObjects1.length ;i < len;++i) {
    gdjs.level_32selectCode.GDscoredeductionObjects1[i].setString("score deduction (difficulty): " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs.level_32selectCode.GDGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32selectCode.GDGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.level_32selectCode.GDGreyButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_32selectCode.GDGreyButtonObjects1[k] = gdjs.level_32selectCode.GDGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.level_32selectCode.GDGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.level_32selectCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32selectCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.level_32selectCode.GDGreenButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_32selectCode.GDGreenButtonObjects1[k] = gdjs.level_32selectCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.level_32selectCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.level_32selectCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32selectCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.level_32selectCode.GDBlueButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_32selectCode.GDBlueButtonObjects1[k] = gdjs.level_32selectCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.level_32selectCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(10);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.level_32selectCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32selectCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.level_32selectCode.GDYellowButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_32selectCode.GDYellowButtonObjects1[k] = gdjs.level_32selectCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.level_32selectCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(25);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs.level_32selectCode.GDRedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32selectCode.GDRedButtonObjects1.length;i<l;++i) {
    if ( gdjs.level_32selectCode.GDRedButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_32selectCode.GDRedButtonObjects1[k] = gdjs.level_32selectCode.GDRedButtonObjects1[i];
        ++k;
    }
}
gdjs.level_32selectCode.GDRedButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(50);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticSquareToggle"), gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1.length;i<l;++i) {
    if ( gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1[i].HasJustBeenChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1[k] = gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1[i];
        ++k;
    }
}
gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.level_32selectCode.GDNewTextInputObjects1);
{for(var i = 0, len = gdjs.level_32selectCode.GDNewTextInputObjects1.length ;i < len;++i) {
    gdjs.level_32selectCode.GDNewTextInputObjects1[i].setDisabled(false);
}
}{for(var i = 0, len = gdjs.level_32selectCode.GDNewTextInputObjects1.length ;i < len;++i) {
    gdjs.level_32selectCode.GDNewTextInputObjects1[i].setReadOnly(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.level_32selectCode.GDNewTextInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticSquareToggle"), gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1.length;i<l;++i) {
    if ( gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1[k] = gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1[i];
        ++k;
    }
}
gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32selectCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.level_32selectCode.GDNewTextInputObjects1[i].isFocused() ) {
        isConditionTrue_0 = true;
        gdjs.level_32selectCode.GDNewTextInputObjects1[k] = gdjs.level_32selectCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.level_32selectCode.GDNewTextInputObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.level_32selectCode.GDNewTextInputObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(gdjs.evtTools.common.toNumber((( gdjs.level_32selectCode.GDNewTextInputObjects1.length === 0 ) ? "" :gdjs.level_32selectCode.GDNewTextInputObjects1[0].getString())));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticSquareToggle"), gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1.length;i<l;++i) {
    if ( gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1[i].HasJustBeenUnchecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1[k] = gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1[i];
        ++k;
    }
}
gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.level_32selectCode.GDNewTextInputObjects1);
{for(var i = 0, len = gdjs.level_32selectCode.GDNewTextInputObjects1.length ;i < len;++i) {
    gdjs.level_32selectCode.GDNewTextInputObjects1[i].setDisabled(true);
}
}{for(var i = 0, len = gdjs.level_32selectCode.GDNewTextInputObjects1.length ;i < len;++i) {
    gdjs.level_32selectCode.GDNewTextInputObjects1[i].setReadOnly(true);
}
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(10);
}}

}


};

gdjs.level_32selectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level_32selectCode.GDxbuttonObjects1.length = 0;
gdjs.level_32selectCode.GDxbuttonObjects2.length = 0;
gdjs.level_32selectCode.GDxbuttonObjects3.length = 0;
gdjs.level_32selectCode.GDmenuBackground1Objects1.length = 0;
gdjs.level_32selectCode.GDmenuBackground1Objects2.length = 0;
gdjs.level_32selectCode.GDmenuBackground1Objects3.length = 0;
gdjs.level_32selectCode.GDlvl1ButtonObjects1.length = 0;
gdjs.level_32selectCode.GDlvl1ButtonObjects2.length = 0;
gdjs.level_32selectCode.GDlvl1ButtonObjects3.length = 0;
gdjs.level_32selectCode.GDtestlvlButtonObjects1.length = 0;
gdjs.level_32selectCode.GDtestlvlButtonObjects2.length = 0;
gdjs.level_32selectCode.GDtestlvlButtonObjects3.length = 0;
gdjs.level_32selectCode.GDscoredeductionObjects1.length = 0;
gdjs.level_32selectCode.GDscoredeductionObjects2.length = 0;
gdjs.level_32selectCode.GDscoredeductionObjects3.length = 0;
gdjs.level_32selectCode.GDGreenButtonObjects1.length = 0;
gdjs.level_32selectCode.GDGreenButtonObjects2.length = 0;
gdjs.level_32selectCode.GDGreenButtonObjects3.length = 0;
gdjs.level_32selectCode.GDGreyButtonObjects1.length = 0;
gdjs.level_32selectCode.GDGreyButtonObjects2.length = 0;
gdjs.level_32selectCode.GDGreyButtonObjects3.length = 0;
gdjs.level_32selectCode.GDRedButtonObjects1.length = 0;
gdjs.level_32selectCode.GDRedButtonObjects2.length = 0;
gdjs.level_32selectCode.GDRedButtonObjects3.length = 0;
gdjs.level_32selectCode.GDYellowButtonObjects1.length = 0;
gdjs.level_32selectCode.GDYellowButtonObjects2.length = 0;
gdjs.level_32selectCode.GDYellowButtonObjects3.length = 0;
gdjs.level_32selectCode.GDBlueButtonObjects1.length = 0;
gdjs.level_32selectCode.GDBlueButtonObjects2.length = 0;
gdjs.level_32selectCode.GDBlueButtonObjects3.length = 0;
gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects1.length = 0;
gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects2.length = 0;
gdjs.level_32selectCode.GDSmallGreenPlasticSquareToggleObjects3.length = 0;
gdjs.level_32selectCode.GDNewTextObjects1.length = 0;
gdjs.level_32selectCode.GDNewTextObjects2.length = 0;
gdjs.level_32selectCode.GDNewTextObjects3.length = 0;
gdjs.level_32selectCode.GDNewTextInputObjects1.length = 0;
gdjs.level_32selectCode.GDNewTextInputObjects2.length = 0;
gdjs.level_32selectCode.GDNewTextInputObjects3.length = 0;

gdjs.level_32selectCode.eventsList5(runtimeScene);

return;

}

gdjs['level_32selectCode'] = gdjs.level_32selectCode;
