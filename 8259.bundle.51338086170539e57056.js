"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8259],{78259:(o,e,t)=>{t.r(e),t.d(e,{default:()=>W});var n=t(29463),a=t(17865);const{windowLevelPresets:i}=n.NT,{createButton:l}=n.hx;function r(o,e,t){return{id:o.toString(),title:e,subtitle:t,commands:[{commandName:"setWindowLevel",commandOptions:{...i[o]},context:"CORNERSTONE"}]}}const s={commandName:"setToolActiveToolbar",commandOptions:{toolGroupIds:["default","mpr","SRToolGroup"]}},c=[{id:"MeasurementTools",uiType:"ohif.splitButton",props:{groupId:"MeasurementTools",evaluate:"evaluate.group.promoteToPrimaryIfCornerstoneToolNotActiveInTheList",primary:l({id:"Length",icon:"tool-length",label:"Length",tooltip:"Length Tool",commands:s,evaluate:"evaluate.cornerstoneTool"}),secondary:{icon:"chevron-down",tooltip:"More Measure Tools"},items:[l({id:"Length",icon:"tool-length",label:"Length",tooltip:"Length Tool",commands:s,evaluate:"evaluate.cornerstoneTool"}),l({id:"Bidirectional",icon:"tool-bidirectional",label:"Bidirectional",tooltip:"Bidirectional Tool",commands:s,evaluate:"evaluate.cornerstoneTool"}),l({id:"ArrowAnnotate",icon:"tool-annotate",label:"Annotation",tooltip:"Arrow Annotate",commands:s,evaluate:"evaluate.cornerstoneTool"}),l({id:"EllipticalROI",icon:"tool-ellipse",label:"Ellipse",tooltip:"Ellipse ROI",commands:s,evaluate:"evaluate.cornerstoneTool"}),l({id:"CircleROI",icon:"tool-circle",label:"Circle",tooltip:"Circle Tool",commands:s,evaluate:"evaluate.cornerstoneTool"}),l({id:"PlanarFreehandROI",icon:"icon-tool-freehand-roi",label:"Freehand ROI",tooltip:"Freehand ROI",commands:s,evaluate:"evaluate.cornerstoneTool"}),l({id:"SplineROI",icon:"icon-tool-spline-roi",label:"Spline ROI",tooltip:"Spline ROI",commands:s,evaluate:"evaluate.cornerstoneTool"}),l({id:"LivewireContour",icon:"icon-tool-livewire",label:"Livewire tool",tooltip:"Livewire tool",commands:s,evaluate:"evaluate.cornerstoneTool"})]}},{id:"Zoom",uiType:"ohif.radioGroup",props:{icon:"tool-zoom",label:"Zoom",commands:s,evaluate:"evaluate.cornerstoneTool"}},{id:"WindowLevel",uiType:"ohif.splitButton",props:{groupId:"WindowLevel",primary:l({id:"WindowLevel",icon:"tool-window-level",label:"Window Level",tooltip:"Window Level",commands:s,evaluate:"evaluate.cornerstoneTool"}),secondary:{icon:"chevron-down",label:"W/L Manual",tooltip:"W/L Presets"},renderer:a.d4,items:[r(1,"Soft tissue","400 / 40"),r(2,"Lung","1500 / -600"),r(3,"Liver","150 / 90"),r(4,"Bone","2500 / 480"),r(5,"Brain","80 / 40")]}},{id:"Pan",uiType:"ohif.radioGroup",props:{type:"tool",icon:"tool-move",label:"Pan",commands:s,evaluate:"evaluate.cornerstoneTool"}},{id:"MPR",uiType:"ohif.radioGroup",props:{icon:"icon-mpr",label:"MPR",commands:[{commandName:"toggleHangingProtocol",commandOptions:{protocolId:"mpr"}}],evaluate:"evaluate.mpr"}},{id:"TrackBallRotate",type:"ohif.radioGroup",props:{type:"tool",icon:"tool-3d-rotate",label:"3D Rotate",commands:s}},{id:"Capture",uiType:"ohif.radioGroup",props:{icon:"tool-capture",label:"Capture",commands:"showDownloadViewportModal",evaluate:["evaluate.action",{name:"evaluate.viewport.supported",unsupportedViewportTypes:["video","wholeSlide"]}]}},{id:"Layout",uiType:"ohif.layoutSelector",props:{rows:3,columns:4,evaluate:"evaluate.action",commands:"setViewportGridLayout"}},{id:"Crosshairs",uiType:"ohif.radioGroup",props:{type:"tool",icon:"tool-crosshair",label:"Crosshairs",commands:{commandName:"setToolActiveToolbar",commandOptions:{toolGroupIds:["mpr"]}},evaluate:"evaluate.cornerstoneTool"}}],d=JSON.parse('{"UU":"@ohif/mode-test"}').UU,m={"viewport-0":"rgb(200, 0, 0)","viewport-1":"rgb(200, 200, 0)","viewport-2":"rgb(0, 200, 0)"},u={axial:"rgb(200, 0, 0)",sagittal:"rgb(200, 200, 0)",coronal:"rgb(0, 200, 0)"};const p=function(o,e,t){!function(o,e,t,n){const a=o.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),{toolNames:i,Enums:l}=a.exports,r={active:[{toolName:i.WindowLevel,bindings:[{mouseButton:l.MouseBindings.Primary}]},{toolName:i.Pan,bindings:[{mouseButton:l.MouseBindings.Auxiliary}]},{toolName:i.Zoom,bindings:[{mouseButton:l.MouseBindings.Secondary}]},{toolName:i.StackScroll,bindings:[{mouseButton:l.MouseBindings.Wheel}]}],passive:[{toolName:i.Length},{toolName:i.ArrowAnnotate,configuration:{getTextCallback:(o,e)=>t.runCommand("arrowTextCallback",{callback:o,eventDetails:e}),changeTextCallback:(o,e,n)=>t.runCommand("arrowTextCallback",{callback:n,data:o,eventDetails:e})}},{toolName:i.Bidirectional},{toolName:i.DragProbe},{toolName:i.Probe},{toolName:i.EllipticalROI},{toolName:i.CircleROI},{toolName:i.RectangleROI},{toolName:i.StackScroll},{toolName:i.Angle},{toolName:i.CobbAngle},{toolName:i.Magnify},{toolName:i.WindowLevelRegion},{toolName:i.UltrasoundDirectional},{toolName:i.PlanarFreehandROI},{toolName:i.SplineROI},{toolName:i.LivewireContour}],enabled:[{toolName:i.ImageOverlayViewer}],disabled:[{toolName:i.ReferenceLines},{toolName:i.AdvancedMagnify}]};e.createToolGroupAndAddTools(n,r)}(o,e,t,"default"),function(o,e,t){const n=o.getModuleEntry("@ohif/extension-cornerstone-dicom-sr.utilityModule.tools"),a=o.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),{toolNames:i}=n.exports,{toolNames:l,Enums:r}=a.exports,s={active:[{toolName:l.WindowLevel,bindings:[{mouseButton:r.MouseBindings.Primary}]},{toolName:l.Pan,bindings:[{mouseButton:r.MouseBindings.Auxiliary}]},{toolName:l.Zoom,bindings:[{mouseButton:r.MouseBindings.Secondary}]},{toolName:l.StackScroll,bindings:[{mouseButton:r.MouseBindings.Wheel}]}],passive:[{toolName:i.SRLength},{toolName:i.SRArrowAnnotate},{toolName:i.SRBidirectional},{toolName:i.SREllipticalROI},{toolName:i.SRCircleROI},{toolName:l.WindowLevelRegion}],enabled:[{toolName:i.DICOMSRDisplay,bindings:[]}]};e.createToolGroupAndAddTools("SRToolGroup",s)}(o,e),function(o,e,t){const n=o.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),a=o._servicesManager,{cornerstoneViewportService:i}=a.services,{toolNames:l,Enums:r}=n.exports,s={active:[{toolName:l.WindowLevel,bindings:[{mouseButton:r.MouseBindings.Primary}]},{toolName:l.Pan,bindings:[{mouseButton:r.MouseBindings.Auxiliary}]},{toolName:l.Zoom,bindings:[{mouseButton:r.MouseBindings.Secondary}]},{toolName:l.StackScroll,bindings:[{mouseButton:r.MouseBindings.Wheel}]}],passive:[{toolName:l.Length},{toolName:l.ArrowAnnotate,configuration:{getTextCallback:(o,e)=>t.runCommand("arrowTextCallback",{callback:o,eventDetails:e}),changeTextCallback:(o,e,n)=>t.runCommand("arrowTextCallback",{callback:n,data:o,eventDetails:e})}},{toolName:l.Bidirectional},{toolName:l.DragProbe},{toolName:l.Probe},{toolName:l.EllipticalROI},{toolName:l.CircleROI},{toolName:l.RectangleROI},{toolName:l.StackScroll},{toolName:l.Angle},{toolName:l.WindowLevelRegion},{toolName:l.PlanarFreehandROI},{toolName:l.SplineROI}],disabled:[{toolName:l.Crosshairs,configuration:{viewportIndicators:!1,autoPan:{enabled:!1,panSize:10},getReferenceLineColor:o=>{const e=i.getViewportInfo(o),t=e?.viewportOptions;return t?m[t.id]||u[t.orientation]||"#0c0":(console.warn("missing viewport?",o),"#0c0")}}},{toolName:l.ReferenceLines}]};e.createToolGroupAndAddTools("mpr",s)}(o,e,t),function(o,e){const t=o.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),{toolNames:n,Enums:a}=t.exports,i={active:[{toolName:n.TrackballRotateTool,bindings:[{mouseButton:a.MouseBindings.Primary}]},{toolName:n.Zoom,bindings:[{mouseButton:a.MouseBindings.Secondary}]},{toolName:n.Pan,bindings:[{mouseButton:a.MouseBindings.Auxiliary}]}]};e.createToolGroupAndAddTools("volume3d",i)}(o,e)};var v=t(81985);const{createButton:g}=n.hx,b=[{commandName:"setSourceViewportForReferenceLinesTool",context:"CORNERSTONE"}],T=[{id:"MoreTools",uiType:"ohif.splitButton",props:{groupId:"MoreTools",evaluate:"evaluate.group.promoteToPrimaryIfCornerstoneToolNotActiveInTheList",primary:g({id:"Reset",icon:"tool-reset",tooltip:"Reset View",label:"Reset",commands:"resetViewport",evaluate:"evaluate.action"}),secondary:{icon:"chevron-down",label:"",tooltip:"More Tools"},items:[g({id:"Reset",icon:"tool-reset",label:"Reset View",tooltip:"Reset View",commands:"resetViewport",evaluate:"evaluate.action"}),g({id:"rotate-right",icon:"tool-rotate-right",label:"Rotate Right",tooltip:"Rotate +90",commands:"rotateViewportCW",evaluate:"evaluate.action"}),g({id:"flipHorizontal",icon:"tool-flip-horizontal",label:"Flip Horizontal",tooltip:"Flip Horizontally",commands:"flipViewportHorizontal",evaluate:"evaluate.viewportProperties.toggle"}),g({id:"ImageSliceSync",icon:"link",label:"Image Slice Sync",tooltip:"Enable position synchronization on stack viewports",commands:{commandName:"toggleSynchronizer",commandOptions:{type:"imageSlice"}},listeners:{[v.EVENTS.VIEWPORT_NEW_IMAGE_SET]:{commandName:"toggleImageSliceSync",commandOptions:{toggledState:!0}}},evaluate:"evaluate.cornerstone.synchronizer"}),g({id:"ReferenceLines",icon:"tool-referenceLines",label:"Reference Lines",tooltip:"Show Reference Lines",commands:"toggleEnabledDisabledToolbar",listeners:{[n.sI.EVENTS.ACTIVE_VIEWPORT_ID_CHANGED]:b,[n.sI.EVENTS.VIEWPORTS_READY]:b},evaluate:"evaluate.cornerstoneTool.toggle"}),g({id:"ImageOverlayViewer",icon:"toggle-dicom-overlay",label:"Image Overlay",tooltip:"Toggle Image Overlay",commands:"toggleEnabledDisabledToolbar",evaluate:"evaluate.cornerstoneTool.toggle"}),g({id:"StackScroll",icon:"tool-stack-scroll",label:"Stack Scroll",tooltip:"Stack Scroll",commands:s,evaluate:"evaluate.cornerstoneTool"}),g({id:"invert",icon:"tool-invert",label:"Invert",tooltip:"Invert Colors",commands:"invertViewport",evaluate:"evaluate.viewportProperties.toggle"}),g({id:"Probe",icon:"tool-probe",label:"Probe",tooltip:"Probe",commands:s,evaluate:"evaluate.cornerstoneTool"}),g({id:"Cine",icon:"tool-cine",label:"Cine",tooltip:"Cine",commands:"toggleCine",evaluate:"evaluate.cine"}),g({id:"Angle",icon:"tool-angle",label:"Angle",tooltip:"Angle",commands:s,evaluate:"evaluate.cornerstoneTool"}),g({id:"CobbAngle",icon:"icon-tool-cobb-angle",label:"Cobb Angle",tooltip:"Cobb Angle",commands:s,evaluate:"evaluate.cornerstoneTool"}),g({id:"Magnify",icon:"tool-magnify",label:"Zoom-in",tooltip:"Zoom-in",commands:s,evaluate:"evaluate.cornerstoneTool"}),g({id:"RectangleROI",icon:"tool-rectangle",label:"Rectangle",tooltip:"Rectangle",commands:s,evaluate:"evaluate.cornerstoneTool"}),g({id:"CalibrationLine",icon:"tool-calibration",label:"Calibration",tooltip:"Calibration Line",commands:s,evaluate:"evaluate.cornerstoneTool"}),g({id:"TagBrowser",icon:"dicom-tag-browser",label:"Dicom Tag Browser",tooltip:"Dicom Tag Browser",commands:"openDICOMTagViewer"}),g({id:"AdvancedMagnify",icon:"icon-tool-loupe",label:"Magnify Probe",tooltip:"Magnify Probe",commands:"toggleActiveDisabledToolbar",evaluate:"evaluate.cornerstoneTool.toggle.ifStrictlyDisabled"}),g({id:"UltrasoundDirectionalTool",icon:"icon-tool-ultrasound-bidirectional",label:"Ultrasound Directional",tooltip:"Ultrasound Directional",commands:s,evaluate:["evaluate.cornerstoneTool",{name:"evaluate.modality.supported",supportedModalities:["US"]}]}),g({id:"WindowLevelRegion",icon:"icon-tool-window-region",label:"Window Level Region",tooltip:"Window Level Region",commands:s,evaluate:"evaluate.cornerstoneTool"})]}}];var h=t(40680);const y=["ECG","SR","SEG","RTSTRUCT"],f="@ohif/extension-default.layoutTemplateModule.viewerLayout",w="@ohif/extension-default.sopClassHandlerModule.stack",N="@ohif/extension-cornerstone.sopClassHandlerModule.DicomMicroscopySopClassHandler",S="@ohif/extension-measurement-tracking.panelModule.trackedMeasurements",M="@ohif/extension-measurement-tracking.panelModule.seriesList",R="@ohif/extension-measurement-tracking.viewportModule.cornerstone-tracked",C="@ohif/extension-cornerstone-dicom-sr.sopClassHandlerModule.dicom-sr",x="@ohif/extension-cornerstone-dicom-sr.viewportModule.dicom-sr",I="@ohif/extension-dicom-video.sopClassHandlerModule.dicom-video",L="@ohif/extension-dicom-video.viewportModule.dicom-video",B="@ohif/extension-dicom-pdf.sopClassHandlerModule.dicom-pdf",A="@ohif/extension-dicom-pdf.viewportModule.dicom-pdf",O="@ohif/extension-cornerstone-dicom-seg.sopClassHandlerModule.dicom-seg",E="@ohif/extension-cornerstone-dicom-seg.viewportModule.dicom-seg",k="@ohif/extension-cornerstone.panelModule.panelSegmentation",P="@ohif/extension-cornerstone-dicom-pmap.sopClassHandlerModule.dicom-pmap",D="@ohif/extension-cornerstone-dicom-pmap.viewportModule.dicom-pmap",V={"@ohif/extension-default":"^3.0.0","@ohif/extension-cornerstone":"^3.0.0","@ohif/extension-measurement-tracking":"^3.0.0","@ohif/extension-cornerstone-dicom-sr":"^3.0.0","@ohif/extension-cornerstone-dicom-seg":"^3.0.0","@ohif/extension-cornerstone-dicom-pmap":"^3.0.0","@ohif/extension-dicom-pdf":"^3.0.1","@ohif/extension-dicom-video":"^3.0.1","@ohif/extension-test":"^0.0.1"};const W={id:d,modeFactory:function(){return{id:d,routeName:"basic-test",displayName:h.A.t("Modes:Basic Test Mode"),onModeEnter:({servicesManager:o,extensionManager:e,commandsManager:t})=>{const{measurementService:n,toolbarService:a,toolGroupService:i,customizationService:l}=o.services;n.clearMeasurements(),p(e,i,t),l.addModeCustomizations(["@ohif/extension-test.customizationModule.custom-context-menu"]),a.addButtons([...c,...T]),a.createButtonSection("primary",["MeasurementTools","Zoom","WindowLevel","Pan","Capture","Layout","MPR","Crosshairs","MoreTools"])},onModeExit:({servicesManager:o})=>{const{toolGroupService:e,syncGroupService:t,segmentationService:n,cornerstoneViewportService:a,uiDialogService:i,uiModalService:l}=o.services;i.dismissAll(),l.hide(),e.destroy(),t.destroy(),n.destroy(),a.destroy()},validationTags:{study:[],series:[]},isValidMode:function({modalities:o}){return{valid:!!o.split("\\").filter((o=>-1===y.indexOf(o))).length,description:"The mode does not support studies that ONLY include the following modalities: SM, ECG, SR, SEG"}},routes:[{path:"basic-test",layoutTemplate:()=>({id:f,props:{leftPanels:[M],rightPanels:[k,S],viewports:[{namespace:R,displaySetsToDisplay:[w,I,N]},{namespace:x,displaySetsToDisplay:[C]},{namespace:L,displaySetsToDisplay:[I]},{namespace:A,displaySetsToDisplay:[B]},{namespace:E,displaySetsToDisplay:[O]},{namespace:D,displaySetsToDisplay:[P]}]}})}],extensions:V,hangingProtocol:"default",sopClassHandlers:[I,O,N,w,B,C],hotkeys:{name:"basic-test-hotkeys",hotkeys:[...n.ot.defaults.hotkeyBindings]}}},extensionDependencies:V}}}]);
//# sourceMappingURL=8259.bundle.51338086170539e57056.js.map