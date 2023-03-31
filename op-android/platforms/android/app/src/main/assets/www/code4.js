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

gdjs.cheats_32menuCode.conditionTrue_0 = {val:false};
gdjs.cheats_32menuCode.condition0IsTrue_0 = {val:false};
gdjs.cheats_32menuCode.condition1IsTrue_0 = {val:false};


gdjs.cheats_32menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("xbutton"), gdjs.cheats_32menuCode.GDxbuttonObjects1);

gdjs.cheats_32menuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.cheats_32menuCode.GDxbuttonObjects1.length;i<l;++i) {
    if ( gdjs.cheats_32menuCode.GDxbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.cheats_32menuCode.condition0IsTrue_0.val = true;
        gdjs.cheats_32menuCode.GDxbuttonObjects1[k] = gdjs.cheats_32menuCode.GDxbuttonObjects1[i];
        ++k;
    }
}
gdjs.cheats_32menuCode.GDxbuttonObjects1.length = k;}if (gdjs.cheats_32menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("cheatOutputText"), gdjs.cheats_32menuCode.GDcheatOutputTextObjects1);

gdjs.cheats_32menuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.cheats_32menuCode.GDcheatOutputTextObjects1.length;i<l;++i) {
    if ( gdjs.cheats_32menuCode.GDcheatOutputTextObjects1[i].getString() == "amogus" ) {
        gdjs.cheats_32menuCode.condition0IsTrue_0.val = true;
        gdjs.cheats_32menuCode.GDcheatOutputTextObjects1[k] = gdjs.cheats_32menuCode.GDcheatOutputTextObjects1[i];
        ++k;
    }
}
gdjs.cheats_32menuCode.GDcheatOutputTextObjects1.length = k;}if (gdjs.cheats_32menuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.cheats_32menuCode.GDcheatOutputTextObjects1 */
{for(var i = 0, len = gdjs.cheats_32menuCode.GDcheatOutputTextObjects1.length ;i < len;++i) {
    gdjs.cheats_32menuCode.GDcheatOutputTextObjects1[i].setString("bruh why");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cheatOutputText"), gdjs.cheats_32menuCode.GDcheatOutputTextObjects1);

gdjs.cheats_32menuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.cheats_32menuCode.GDcheatOutputTextObjects1.length;i<l;++i) {
    if ( gdjs.cheats_32menuCode.GDcheatOutputTextObjects1[i].getString() != "amogus" ) {
        gdjs.cheats_32menuCode.condition0IsTrue_0.val = true;
        gdjs.cheats_32menuCode.GDcheatOutputTextObjects1[k] = gdjs.cheats_32menuCode.GDcheatOutputTextObjects1[i];
        ++k;
    }
}
gdjs.cheats_32menuCode.GDcheatOutputTextObjects1.length = k;}if (gdjs.cheats_32menuCode.condition0IsTrue_0.val) {
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
