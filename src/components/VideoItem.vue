<template lang="pug">
.video-item
    .thumbnail-container 
        img.thumbnail-image(src="../assets/images/1280x1024.png", alt="")
    .video-info 
        .video-info-col.video-description
            span.video-title dummyTitledummyTitledummyTitledummyTitledummyTitledummyTitledummyTitledummyTitledummyTitledummyTitledummyTitle
            div.tag-container
                button.tag TAG
                button.tag TAG
                button.tag TAG
                button.tag TAG
                button.tag TAG
                button.tag TAG
                button.tag TAG
                button.tag TAG
                button.tag TAG
                button.tag TAG
                button.tag TAG
        .video-info-col
            button.copy-url-btn

</template>

<style lang="scss" scoped>
div.video-item {
  background-color: #eeeeee;
  border-radius: 0.5rem;
  overflow: hidden;

  // サムネ
  div.thumbnail-container {
    width: 100%;
    height: 100%;
    aspect-ratio: 16 / 9;

    img.thumbnail-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  // 動画の情報
  div.video-info {
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    display: flex;
  }

  span.video-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
}
</style>
