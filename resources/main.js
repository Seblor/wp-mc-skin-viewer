function addSkin(url, containerId, width, height) {
  let skinViewer = new skinview3d.SkinViewer({
    domElement: document.getElementById(containerId),
    width: width,
    height: height,
    skinUrl: url
  });

  let control = new skinview3d.createOrbitControls(skinViewer);
  skinViewer.animation = new skinview3d.CompositeAnimation();

  let walk = skinViewer.animation.add(skinview3d.WalkingAnimation);
  walk.speed = 1.5;
}

Array.prototype.forEach.call(document.getElementsByClassName('skin-preview-container'), function (container) {
  addSkin(container.dataset.url, container.id, container.dataset.width, container.dataset.height);
});