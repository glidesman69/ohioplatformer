var gdjs;(function(s){const o=GlobalPIXIModule.PIXI,c=new s.Logger("LayerPixiRenderer"),l=class{constructor(e,t,r){this._lightingSprite=null;this._renderTexture=null;this._oldWidth=null;this._oldHeight=null;this._threeGroup=null;this._threeScene=null;this._threeCamera=null;this._threeCameraDirty=!1;this._threePlaneTexture=null;this._threePlaneGeometry=null;this._threePlaneMaterial=null;this._threePlaneMesh=null;this._pixiContainer=new o.Container,this._pixiContainer.sortableChildren=!0,this._layer=e,this._isLightingLayer=e.isLightingLayer(),t.getRendererObject().addChild(this._pixiContainer),this._pixiContainer.filters=[];const i=r.getPIXIRenderer();this._isLightingLayer?(this._clearColor=e.getClearColor(),this._setupLightingRendering(i,t)):(this._clearColor=[...s.hexNumberToRGBArray(this._layer.getRuntimeScene().getBackgroundColor()),0],this._setup3DRendering(i,t))}onCreated(){this._update3DCameraAspectAndPosition()}onGameResolutionResized(){this._update3DCameraAspectAndPosition()}_update3DCameraAspectAndPosition(){this._threeCamera&&(this._threeCamera.aspect=this._layer.getWidth()/this._layer.getHeight(),this._threeCamera.updateProjectionMatrix(),this.updatePosition())}getRendererObject(){return this._pixiContainer}getThreeScene(){return this._threeScene}getThreeCamera(){return this._threeCamera}getLightingSprite(){return this._lightingSprite}_setup3DRendering(e,t){if(typeof THREE!="undefined")if(this._layer instanceof s.Layer){if(this._layer.getRenderingType()===s.RuntimeLayerRenderingType.THREE_D||this._layer.getRenderingType()===s.RuntimeLayerRenderingType.TWO_D_PLUS_THREE_D){if(this._threeScene||this._threeGroup||this._threeCamera)throw new Error("Tried to setup 3D rendering for a layer that is already set up.");if(this._threeScene=new THREE.Scene,this._threeScene.scale.y=-1,this._threeGroup=new THREE.Group,this._threeScene.add(this._threeGroup),this._threeCamera=new THREE.PerspectiveCamera(this._layer.getInitialCamera3DFieldOfView(),1,this._layer.getInitialCamera3DNearPlaneDistance(),this._layer.getInitialCamera3DFarPlaneDistance()),this._threeCamera.rotation.order="ZYX",this._layer.getRenderingType()===s.RuntimeLayerRenderingType.TWO_D_PLUS_THREE_D){if(this._renderTexture||this._threePlaneGeometry||this._threePlaneMaterial||this._threePlaneTexture||this._threePlaneMesh)throw new Error("Tried to setup PixiJS plane for 2D rendering in 3D for a layer that is already set up.");this._createPixiRenderTexture(e),this._threePlaneGeometry=new THREE.PlaneGeometry(1,1),this._threePlaneMaterial=new THREE.MeshBasicMaterial({side:THREE.FrontSide,transparent:!0});const r=1,i=1,n=r*i,h=new Uint8Array(4*n),_=new THREE.DataTexture(h,r,i);_.needsUpdate=!0,this._threePlaneTexture=_,this._threePlaneTexture.generateMipmaps=!1;const d=this._layer.getRuntimeScene().getGame().getScaleMode()==="nearest"?THREE.NearestFilter:THREE.LinearFilter;this._threePlaneTexture.minFilter=d,this._threePlaneTexture.magFilter=d,this._threePlaneTexture.wrapS=THREE.ClampToEdgeWrapping,this._threePlaneTexture.wrapT=THREE.ClampToEdgeWrapping,this._threePlaneMaterial.map=this._threePlaneTexture,this._threePlaneMesh=new THREE.Mesh(this._threePlaneGeometry,this._threePlaneMaterial),this._threePlaneMesh.renderOrder=Number.MAX_SAFE_INTEGER,this._threeScene.add(this._threePlaneMesh)}}}else{const r=t.get3DRendererObject();if(!r)return;this._threeGroup||(this._threeGroup=new THREE.Group,r.add(this._threeGroup))}}setThreeCameraDirty(e){this._threeCameraDirty=e}show2DRenderingPlane(e){!this._threePlaneMesh||this._threePlaneMesh.visible!==e&&(this._threePlaneMesh.visible=e)}updatePosition(){const e=-s.toRad(this._layer.getCameraRotation()),t=this._layer.getCameraZoom();this._pixiContainer.rotation=e,this._pixiContainer.scale.x=t,this._pixiContainer.scale.y=t;const r=Math.cos(e),i=Math.sin(e),n=this._layer.getCameraX()*t*r-this._layer.getCameraY()*t*i,h=this._layer.getCameraX()*t*i+this._layer.getCameraY()*t*r;this._pixiContainer.position.x=this._layer.getWidth()/2-n,this._pixiContainer.position.y=this._layer.getHeight()/2-h,this._layer.getRuntimeScene().getGame().getPixelsRounding()&&(r===0||i===0)&&Number.isInteger(t)&&(this._pixiContainer.position.x=Math.ceil(this._pixiContainer.position.x),this._pixiContainer.position.y=Math.ceil(this._pixiContainer.position.y)),this._threeCamera&&(this._threeCamera.position.x=this._layer.getCameraX(),this._threeCamera.position.y=-this._layer.getCameraY(),this._threeCamera.rotation.z=e,this._threeCamera.position.z=this._layer.getCameraZ(this._threeCamera.fov),this._threePlaneMesh&&(this._threePlaneMesh.scale.x=this._layer.getWidth()/t,this._threePlaneMesh.scale.y=this._layer.getHeight()/t,this._threePlaneMesh.position.x=this._threeCamera.position.x,this._threePlaneMesh.position.y=-this._threeCamera.position.y,this._threePlaneMesh.rotation.z=-e))}isCameraRotatedIn3D(){return this._threeCamera&&(this._threeCamera.rotation.x!==0||this._threeCamera.rotation.y!==0)}transformTo3DWorld(e,t,r,i,n){const h=this._threeCamera;if(!h)return n[0]=0,n[1]=0,n;const _=this._layer.getWidth(),d=this._layer.getHeight();let a=l.vectorForProjections;a||(a=new THREE.Vector3,l.vectorForProjections=a),a.set(e/_*2-1,-(t/d)*2+1,.5),a.unproject(h),a.sub(h.position).normalize();const p=(r-h.position.z)/a.z;return a.multiplyScalar(p),!Number.isFinite(a.x)||!Number.isFinite(a.y)?(n[0]=0,n[1]=0,n):(n[0]=h.position.x+a.x,n[1]=-(h.position.y+a.y),n)}updateVisibility(e){this._pixiContainer.visible=!!e,this._threeGroup&&(this._threeGroup.visible=!!e)}updatePreRender(){if(this._threeCameraDirty){const e=this.getThreeCamera();e&&e.updateProjectionMatrix(),this._threeCameraDirty=!1}}addRendererObject(e,t){const r=e;r.zIndex=t||l.zeroZOrderForPixi,this._pixiContainer.addChild(r)}changeRendererObjectZOrder(e,t){const r=e;r.zIndex=t}removeRendererObject(e){this._pixiContainer.removeChild(e)}has3DObjects(){return!!this._threeGroup&&this._threeGroup.children.length>0}has2DObjects(){return this._pixiContainer.children.length>0}add3DRendererObject(e){!this._threeGroup||this._threeGroup.add(e)}remove3DRendererObject(e){!this._threeGroup||this._threeGroup.remove(e)}updateClearColor(){this._clearColor=this._layer.getClearColor()}_createPixiRenderTexture(e){if(!e||e.type!==o.RENDERER_TYPE.WEBGL)return;if(this._renderTexture){c.error("Tried to create a PixiJS RenderTexture for a layer that already has one.");return}this._oldWidth=e.screen.width,this._oldHeight=e.screen.height;const t=this._oldWidth,r=this._oldHeight,i=e.resolution;this._renderTexture=o.RenderTexture.create({width:t,height:r,resolution:i}),this._renderTexture.baseTexture.scaleMode=o.SCALE_MODES.LINEAR,c.info(`RenderTexture created for layer ${this._layer.getName()}.`)}renderOnPixiRenderTexture(e){if(!this._renderTexture)return;(this._oldWidth!==e.screen.width||this._oldHeight!==e.screen.height)&&(this._renderTexture.resize(e.screen.width,e.screen.height),this._oldWidth=e.screen.width,this._oldHeight=e.screen.height);const t=e.renderTexture.current,r=e.renderTexture.sourceFrame;e.renderTexture.bind(this._renderTexture),this._clearColor[3]=this._isLightingLayer?1:0,e.renderTexture.clear(this._clearColor),e.render(this._pixiContainer,{renderTexture:this._renderTexture,clear:!1}),e.renderTexture.bind(t,r,void 0)}updateThreePlaneTextureFromPixiRenderTexture(e,t){if(!this._threePlaneTexture||!this._renderTexture)return;const r=this._renderTexture.baseTexture._glTextures[t.CONTEXT_UID];if(r){const i=e.properties.get(this._threePlaneTexture);i.__webglTexture=r.texture}}_setupLightingRendering(e,t){if(this._createPixiRenderTexture(e),!this._renderTexture)return;this._lightingSprite=new o.Sprite(this._renderTexture),this._lightingSprite.blendMode=o.BLEND_MODES.MULTIPLY;const r=t.getRendererObject(),i=r.getChildIndex(this._pixiContainer);r.addChildAt(this._lightingSprite,i),r.removeChild(this._pixiContainer)}};let u=l;u.zeroZOrderForPixi=Math.pow(2,-24),u.vectorForProjections=null,s.LayerPixiRenderer=u,s.LayerRenderer=s.LayerPixiRenderer})(gdjs||(gdjs={}));
//# sourceMappingURL=layer-pixi-renderer.js.map
