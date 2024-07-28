<template>
  <div>
    <div class="title">图库展示</div>
    <div class="imgsArea">
      <div class="imagesArea">
        <el-image class="item-img" :src="imageSrc"></el-image>
        <el-image class="item-img" :src="imageSrc"></el-image>
        <el-image class="item-img" :src="imageSrc"></el-image>
        <el-image class="item-img" :src="imageSrc"></el-image>
        <el-image class="item-img" :src="imageSrc"></el-image>
        <el-image class="item-img" :src="imageSrc"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisplayPage',
  data() {
    return {
      imageUrl: '',
      imageSrc: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    };
  },
}
</script>

<style>
.title{
  font-size: 30px;
}
.imgsArea{
  border-radius: 10px;
  border: #8c939d dashed 2px;
  margin-top: 10px;
  padding: 10px;
  height: 400px;
}
.imagesArea{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  .item-img{
    flex: 0 0 26;
    margin-right: calc(10% / 4);
    margin-bottom: 20px;
  }
}
</style>