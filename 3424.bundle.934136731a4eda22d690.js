"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[3424,4757],{3094:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var a=r(43001),i=r(3827),s=r.n(i),o=r(58553),n=r(33901),c=r.n(n);const l=e=>{const{list:t,itemGenerator:r}=e;if(t)return t.map((t=>{if(!t)return;const a=t.generator||r;if(!a)throw new Error(`No generator for ${t}`);return a({...e,item:t})}))};r(71271),r(12651);const p=(({topLeft:e=[],topRight:t=[],bottomLeft:r=[],bottomRight:i=[],itemGenerator:s=(()=>{})})=>o=>{const n="absolute pointer-events-none microscopy-viewport-overlay";return a.createElement(a.Fragment,null,e&&e.length>0&&a.createElement("div",{"data-cy":"viewport-overlay-top-left",className:c()(n,"top-viewport left-viewport text-primary-light")},l({...o,list:e,itemGenerator:s})),t&&t.length>0&&a.createElement("div",{"data-cy":"viewport-overlay-top-right",className:c()(n,"top-viewport right-viewport-scrollbar text-primary-light")},l({...o,list:t,itemGenerator:s})),i&&i.length>0&&a.createElement("div",{"data-cy":"viewport-overlay-bottom-right",className:c()(n,"bottom-viewport right-viewport-scrollbar text-primary-light")},l({...o,list:i,itemGenerator:s})),r&&r.length>0&&a.createElement("div",{"data-cy":"viewport-overlay-bottom-left",className:c()(n,"bottom-viewport left-viewport text-primary-light")},l({...o,list:r,itemGenerator:s})))})({});var d=r(84793),m=r(32281);var u=r(67540);function v(e){return!("object"==typeof e||Array.isArray(e))}const h=["DS","FL","FD","IS","OD","OF","OL","OV","SL","SS","SV","UL","US","UV"];function y(e,t){if(Array.isArray(e)){return e.map((e=>v(e)?e:y(e,t)))}return v(e)||Object.keys(e).forEach((r=>{null===e[r].Value&&e[r].vr?delete e[r].Value:Array.isArray(e[r].Value)&&e[r].vr&&(1===e[r].Value.length&&e[r].Value[0].BulkDataURI?(m.dicomWebUtils.fixBulkDataURI(e[r].Value[0],t,t.dataSourceConfig),e[r].BulkDataURI=e[r].Value[0].BulkDataURI,"https:"===window.location.protocol&&e[r].BulkDataURI.startsWith("http:")&&(e[r].BulkDataURI=e[r].BulkDataURI.replace("http:","https:")),delete e[r].Value):h.includes(e[r].vr)?e[r].Value=e[r].Value.map((e=>+e)):e[r].Value=e[r].Value.map((e=>y(e,t))))})),e}class w extends a.Component{constructor(e){super(e),this.state={error:null,isLoaded:!1},this.microscopyService=void 0,this.viewer=null,this.managedViewer=null,this.container=a.createRef(),this.overlayElement=a.createRef(),this.setViewportActiveHandler=()=>{const{setViewportActive:e,viewportId:t,activeViewportId:r}=this.props;t!==r&&e(t)};const{microscopyService:t}=this.props.servicesManager.services;this.microscopyService=t}getNearbyROI(e,t=!0){const r=Object.getOwnPropertySymbols(this.viewer),a=r.find((e=>"drawingSource"===e.description)),i=r.find((e=>"pyramid"===e.description)),s=r.find((e=>"map"===e.description)),o=r.find((e=>"affine"===e.description)),n=this.viewer[a].getClosestFeatureToCoordinate(this.viewer[s].getEventCoordinate(e));if(!n)return null;const c=this.viewer._getROIFromFeature(n,this.viewer[i].metadata,this.viewer[o]);return c&&t&&this.microscopyService.selectAnnotation(c),c}async installOpenLayersRenderer(e,t){this.microscopyService.clearAnnotations();let r=t;"SR"===t.Modality&&(r=t.getSourceDisplaySet()),console.log("Loading viewer metadata",r),await(async r=>{const a=await this.microscopyService.importDicomMicroscopyViewer(),{viewer:i,metadata:s}=a,o=i.VolumeImageViewer,n=function({extensionManager:e,servicesManager:t}){const r=window.config.dataSources.find((t=>t.sourceName===e.activeDataSource)),{userAuthenticationService:a}=t.services,{wadoRoot:i,staticWado:s,singlepart:o}=r.configuration,n={url:i||"/dicomlocal",staticWado:s,singlepart:o,headers:a.getAuthorizationHeader(),errorInterceptor:d.Po.getHTTPErrorHandler()},c=new m.StaticWadoClient(n);return c.wadoURL=n.url,"dicomlocal"===e.activeDataSource&&(c.retrieveInstanceFrames=async e=>{if(!("studyInstanceUID"in e))throw new Error("Study Instance UID is required for retrieval of instance frames");if(!("seriesInstanceUID"in e))throw new Error("Series Instance UID is required for retrieval of instance frames");if(!("sopInstanceUID"in e))throw new Error("SOP Instance UID is required for retrieval of instance frames");if(!("frameNumbers"in e))throw new Error("frame numbers are required for retrieval of instance frames");console.log(`retrieve frames ${e.frameNumbers.toString()} of instance ${e.sopInstanceUID}`);const t=d.DicomMetadataStore.getInstance(e.studyInstanceUID,e.seriesInstanceUID,e.sopInstanceUID);return(Array.isArray(e.frameNumbers)?e.frameNumbers:e.frameNumbers.split(",")).map((e=>Array.isArray(t.PixelData)?t.PixelData[+e-1]:t.PixelData))}),c}({extensionManager:this.props.extensionManager,servicesManager:this.props.servicesManager}),c=[];r.forEach((e=>{e.ImageType="string"==typeof e.ImageType?e.ImageType.split("\\"):e.ImageType;const t=y(u.default.data.DicomMetaDictionary.denaturalizeDataset(e),{StudyInstanceUID:e.StudyInstanceUID,SeriesInstanceUID:e.SeriesInstanceUID,dataSourceConfig:this.props.dataSource.getConfig()});t["00480105"]||(t["00480105"]={vr:"SQ",Value:[{"00480106":{vr:"SH",Value:["1"]}}]});const r=new s.VLWholeSlideMicroscopyImage({metadata:t}),a=r.ImageType[2];"VOLUME"!==a&&"THUMBNAIL"!==a||c.push(r)}));const l={client:n,metadata:c,retrieveRendered:!1,controls:["overview","position"]};this.viewer=new o(l),this.overlayElement&&this.overlayElement.current&&this.viewer.addViewportOverlay&&this.viewer.addViewportOverlay({element:this.overlayElement.current,coordinates:[0,0],navigate:!0,className:"OpenLayersOverlay"}),this.viewer.render({container:e});const{StudyInstanceUID:p,SeriesInstanceUID:v}=t;this.managedViewer=this.microscopyService.addViewer(this.viewer,this.props.viewportId,e,p,v),this.managedViewer.addContextMenuCallback((e=>{}))})(r.others),"SR"===t.Modality&&t.load(r)}componentDidMount(){const{displaySets:e,viewportOptions:t}=this.props,r=e[0];this.installOpenLayersRenderer(this.container.current,r).then((()=>{this.setState({isLoaded:!0})}))}componentDidUpdate(e,t,r){if(this.managedViewer&&e.displaySets!==this.props.displaySets){const{displaySets:e}=this.props,t=e[0];if(this.microscopyService.clearAnnotations(),"SR"===t.Modality){const e=t.getSourceDisplaySet();t.load(e)}}}componentWillUnmount(){this.microscopyService.removeViewer(this.viewer)}render(){const e={width:"100%",height:"100%"},t=this.props.displaySets[0],r=t.firstInstance||t.instance;return a.createElement("div",{className:"DicomMicroscopyViewer",style:e,onClick:this.setViewportActiveHandler},a.createElement("div",{style:{...e,display:"none"}},a.createElement("div",{style:{...e},ref:this.overlayElement},a.createElement("div",{style:{position:"relative",height:"100%",width:"100%"}},t&&r.imageId&&a.createElement(p,{displaySet:t,instance:t.instance,metadata:t.metadata})))),this.state.error?a.createElement("h2",null,JSON.stringify(this.state.error)):a.createElement("div",{style:e,ref:e=>{this.container.current=e,this.props.resizeRef.current=e}}),this.state.isLoaded?null:a.createElement(o.LE,{className:"h-full w-full bg-black"}))}}w.propTypes={viewportData:s().object,activeViewportId:s().string,setViewportActive:s().func,displaySets:s().array,viewportId:s().string,viewportLabel:s().string,dataSource:s().object,viewportOptions:s().object,displaySetOptions:s().array,servicesManager:s().object,extensionManager:s().object,commandsManager:s().object,resizeRef:s().oneOfType([s().func,s().shape({current:s().any})])};const g=w}}]);
//# sourceMappingURL=3424.bundle.934136731a4eda22d690.js.map