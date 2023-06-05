gdjs.auth_32settingsCode = {};
gdjs.auth_32settingsCode.GDxbuttonObjects1= [];
gdjs.auth_32settingsCode.GDxbuttonObjects2= [];
gdjs.auth_32settingsCode.GDGreyButtonObjects1= [];
gdjs.auth_32settingsCode.GDGreyButtonObjects2= [];
gdjs.auth_32settingsCode.GDlogoutButtonObjects1= [];
gdjs.auth_32settingsCode.GDlogoutButtonObjects2= [];


gdjs.auth_32settingsCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("xbutton"), gdjs.auth_32settingsCode.GDxbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.auth_32settingsCode.GDxbuttonObjects1.length;i<l;++i) {
    if ( gdjs.auth_32settingsCode.GDxbuttonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.auth_32settingsCode.GDxbuttonObjects1[k] = gdjs.auth_32settingsCode.GDxbuttonObjects1[i];
        ++k;
    }
}
gdjs.auth_32settingsCode.GDxbuttonObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("logoutButton"), gdjs.auth_32settingsCode.GDlogoutButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.auth_32settingsCode.GDlogoutButtonObjects1.length;i<l;++i) {
    if ( gdjs.auth_32settingsCode.GDlogoutButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.auth_32settingsCode.GDlogoutButtonObjects1[k] = gdjs.auth_32settingsCode.GDlogoutButtonObjects1[i];
        ++k;
    }
}
gdjs.auth_32settingsCode.GDlogoutButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.logout(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.auth_32settingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.auth_32settingsCode.GDxbuttonObjects1.length = 0;
gdjs.auth_32settingsCode.GDxbuttonObjects2.length = 0;
gdjs.auth_32settingsCode.GDGreyButtonObjects1.length = 0;
gdjs.auth_32settingsCode.GDGreyButtonObjects2.length = 0;
gdjs.auth_32settingsCode.GDlogoutButtonObjects1.length = 0;
gdjs.auth_32settingsCode.GDlogoutButtonObjects2.length = 0;

gdjs.auth_32settingsCode.eventsList0(runtimeScene);

return;

}

gdjs['auth_32settingsCode'] = gdjs.auth_32settingsCode;
