"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4202],{74202:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var n=i(97598),a=i.n(n),s=i(86326),r=i(17865);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},o.apply(null,arguments)}function c(e){const{displaySets:t,children:i,viewportOptions:n,displaySetOptions:a,servicesManager:c,extensionManager:l}=e,p=n.viewportId,{displaySetService:u,segmentationService:d,uiNotificationService:S}=c.services;if(1!==t.length)throw new Error("PMAP viewport must have a single display set");const y=t[0],[v,w]=(0,r.ih)(),f=(0,s.useRef)(null),{viewports:m,activeViewportId:I}=v,g=y.getReferenceDisplaySet(),h=function(e,t){const{SharedFunctionalGroupsSequence:i}=t.instance,n=Array.isArray(i)?i[0]:i,{PixelMeasuresSequence:a}=n,s=Array.isArray(a)?a[0]:a,{SpacingBetweenSlices:r,SliceThickness:o}=s,c=e.images[0],l={PatientID:c.PatientID,PatientName:c.PatientName,PatientSex:c.PatientSex,PatientAge:c.PatientAge,SliceThickness:c.SliceThickness||o,StudyDate:c.StudyDate,SeriesDescription:c.SeriesDescription,SeriesInstanceUID:c.SeriesInstanceUID,SeriesNumber:c.SeriesNumber,ManufacturerModelName:c.ManufacturerModelName,SpacingBetweenSlices:c.SpacingBetweenSlices||r};return l}(g,y);f.current={displaySet:g,metadata:h};const[b,E]=(0,s.useState)(!y.isLoaded);(0,s.useEffect)((()=>{const{unsubscribe:e}=d.subscribe(d.EVENTS.SEGMENTATION_LOADING_COMPLETE,(e=>{e.pmapDisplaySet?.displaySetInstanceUID===y.displaySetInstanceUID&&E(!1)}));return()=>{e()}}),[y]);const D=(0,s.useCallback)((()=>{const{displaySet:t}=f.current,{component:i}=l.getModuleEntry("@ohif/extension-cornerstone.viewportModule.cornerstone");a.unshift({});const[r]=a;return r.options=r.options??{},Object.assign(r.options,{colormap:{name:"rainbow_2",opacity:[{value:0,opacity:0},{value:.25,opacity:.25},{value:.5,opacity:.5},{value:.75,opacity:.75},{value:.9,opacity:.99}]},voi:{windowCenter:50,windowWidth:100}}),S.show({title:"Parametric Map",type:"warning",message:"The values are multiplied by 100 in the viewport for better visibility"}),s.createElement(i,o({},e,{displaySets:[t,y],viewportOptions:{viewportType:"volume",orientation:n.orientation,viewportId:n.viewportId},displaySetOptions:[{},r]}))}),[l,a,e,y,n.orientation,n.viewportId]);(0,s.useEffect)((()=>{const e=u.subscribe(u.EVENTS.DISPLAY_SETS_REMOVED,(({displaySetInstanceUIDs:e})=>{const t=m.get(I);e.includes(t.displaySetInstanceUID)&&w.setDisplaySetsForViewport({viewportId:I,displaySetInstanceUIDs:[]})}));return()=>{e.unsubscribe()}}),[I,u,w,m]);let P=null;return i&&i.length&&(P=i.map(((e,t)=>e&&s.cloneElement(e,{viewportId:p,key:t})))),s.createElement(s.Fragment,null,s.createElement("div",{className:"relative flex h-full w-full flex-row overflow-hidden"},b&&s.createElement(r.pT,{className:"h-full w-full",totalNumbers:null,percentComplete:null,loadingText:"Loading Parametric Map..."}),D(),P))}c.propTypes={displaySets:a().arrayOf(a().object),viewportId:a().string.isRequired,dataSource:a().object,children:a().node};const l=c}}]);
//# sourceMappingURL=4202.bundle.180236e315dcb3278b7d.js.map