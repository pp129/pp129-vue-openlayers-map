import Vue from 'vue'
import VMap from '~/VMap/src/index.vue'
import { VVectorLayer, VGraphicLayer, VHeatmapLayer, VClusterLayer } from '~/VLayers'
import { VOverlay } from '~/VOverlay'
import { VOverview } from '~/VControls'
import { VTrack } from '~/VTrack'

Vue.component(VMap.name, VMap)
// import VMap from '~/VMap/index.js'
const components = [VMap, VVectorLayer, VGraphicLayer, VHeatmapLayer, VClusterLayer, VOverlay, VOverview, VTrack]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => {
    Vue.use(component)
  })
}

//  全局引用可自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  VMap,
  VVectorLayer,
  VGraphicLayer,
  VHeatmapLayer,
  VClusterLayer,
  VOverlay,
  VOverview,
  VTrack
}
export {
  VMap,
  VVectorLayer,
  VGraphicLayer,
  VHeatmapLayer,
  VClusterLayer,
  VOverlay,
  VOverview,
  VTrack
}
