const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [
      require('../image-targets/WhatsApp Image 2026-07-22 at 9.11.24 AM.json'),
      require('../image-targets/1.json')
    ],
  })
}
window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)