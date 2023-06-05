gdjs.cheats_32menuCode = {};
gdjs.cheats_32menuCode.GDxbuttonObjects1= [];
gdjs.cheats_32menuCode.GDxbuttonObjects2= [];
gdjs.cheats_32menuCode.GDhackaaaaObjects1= [];
gdjs.cheats_32menuCode.GDhackaaaaObjects2= [];
gdjs.cheats_32menuCode.GDtypecheatsObjects1= [];
gdjs.cheats_32menuCode.GDtypecheatsObjects2= [];
gdjs.cheats_32menuCode.GDcheatInputObjects1= [];
gdjs.cheats_32menuCode.GDcheatInputObjects2= [];
gdjs.cheats_32menuCode.GDcheatOutputTextObjects1= [];
gdjs.cheats_32menuCode.GDcheatOutputTextObjects2= [];


gdjs.cheats_32menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setString("cheats");
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, gdjs.evtsExt__GetPropertiesData__ReturnGameTitle.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) + " - menu (" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) + " screen)");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("xbutton"), gdjs.cheats_32menuCode.GDxbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.cheats_32menuCode.GDxbuttonObjects1.length;i<l;++i) {
    if ( gdjs.cheats_32menuCode.GDxbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.cheats_32menuCode.GDxbuttonObjects1[k] = gdjs.cheats_32menuCode.GDxbuttonObjects1[i];
        ++k;
    }
}
gdjs.cheats_32menuCode.GDxbuttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("cheatOutputText"), gdjs.cheats_32menuCode.GDcheatOutputTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.cheats_32menuCode.GDcheatOutputTextObjects1.length;i<l;++i) {
    if ( gdjs.cheats_32menuCode.GDcheatOutputTextObjects1[i].getString() == "amogus" ) {
        isConditionTrue_0 = true;
        gdjs.cheats_32menuCode.GDcheatOutputTextObjects1[k] = gdjs.cheats_32menuCode.GDcheatOutputTextObjects1[i];
        ++k;
    }
}
gdjs.cheats_32menuCode.GDcheatOutputTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.cheats_32menuCode.GDcheatOutputTextObjects1 */
{for(var i = 0, len = gdjs.cheats_32menuCode.GDcheatOutputTextObjects1.length ;i < len;++i) {
    gdjs.cheats_32menuCode.GDcheatOutputTextObjects1[i].setString("bruh why");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cheatOutputText"), gdjs.cheats_32menuCode.GDcheatOutputTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.cheats_32menuCode.GDcheatOutputTextObjects1.length;i<l;++i) {
    if ( gdjs.cheats_32menuCode.GDcheatOutputTextObjects1[i].getString() != "amogus" ) {
        isConditionTrue_0 = true;
        gdjs.cheats_32menuCode.GDcheatOutputTextObjects1[k] = gdjs.cheats_32menuCode.GDcheatOutputTextObjects1[i];
        ++k;
    }
}
gdjs.cheats_32menuCode.GDcheatOutputTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.cheats_32menuCode.GDcheatOutputTextObjects1 */
{for(var i = 0, len = gdjs.cheats_32menuCode.GDcheatOutputTextObjects1.length ;i < len;++i) {
    gdjs.cheats_32menuCode.GDcheatOutputTextObjects1[i].setString("not a cheat");
}
}}

}


};

gdjs.cheats_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.cheats_32menuCode.GDxbuttonObjects1.length = 0;
gdjs.cheats_32menuCode.GDxbuttonObjects2.length = 0;
gdjs.cheats_32menuCode.GDhackaaaaObjects1.length = 0;
gdjs.cheats_32menuCode.GDhackaaaaObjects2.length = 0;
gdjs.cheats_32menuCode.GDtypecheatsObjects1.length = 0;
gdjs.cheats_32menuCode.GDtypecheatsObjects2.length = 0;
gdjs.cheats_32menuCode.GDcheatInputObjects1.length = 0;
gdjs.cheats_32menuCode.GDcheatInputObjects2.length = 0;
gdjs.cheats_32menuCode.GDcheatOutputTextObjects1.length = 0;
gdjs.cheats_32menuCode.GDcheatOutputTextObjects2.length = 0;

gdjs.cheats_32menuCode.eventsList0(runtimeScene);

return;

}

gdjs['cheats_32menuCode'] = gdjs.cheats_32menuCode;
