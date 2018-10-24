function addSkin(url, containerId) {
  let skinViewer = new skinview3d.SkinViewer({
    domElement: document.getElementById(containerId),
    skinUrl: url
  });

  let control = new skinview3d.createOrbitControls(skinViewer);
  skinViewer.animation = new skinview3d.CompositeAnimation();

  let walk = skinViewer.animation.add(skinview3d.WalkingAnimation);
  walk.speed = 1.5;
}