<template>
  <el-row :gutter="24">
    <el-col style="text-align: center" :span="8">
      <el-upload
          ref="elupload"
          class="avatar-uploader"
          action="#"
          :http-request="transformToBase64"
          :show-file-list="false"
          :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <br/>
      <br/>

      <el-form label-width="100px" class="demo-ruleForm">
        <el-form-item label="相似度阈值" prop="pass">
          <el-input v-model="threshold" class="ipt-width" type="number" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片数" prop="checkPass">
          <el-input v-model="number" class="ipt-width" type="number" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <br/>

      <el-button class="btn-width" type="primary" @click="search()">查询</el-button><br/><br/>
      <el-button class="btn-width" type="success" @click="addToLib()">加入图库</el-button>
    </el-col>
    <el-col :span="16">
      <div>
        <el-image class="first-img" :src="imageSrc"></el-image>
      </div>
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
    </el-col>
  </el-row>
</template>

<style>
.avatar-uploader-icon{
  line-height: 178px !important;
}
.btn-width{
  width: 150px;
}
.first-img, .item-img{
  width: 200px;
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<script>
export default {
  name: 'SearchPage',
  data() {
    return {
      threshold: undefined,
      number: undefined,
      imgName: '',
      nowFile: null,
      fileBase64: '',
      tempUrl: '',
      imageUrl: '',
      imageSrc: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    };
  },
  methods: {
    beforeAvatarUpload(file) {
      this.imgName = file.name;
      this.nowFile = file;
    },
    transformToBase64(data){
      this.imageUrl = URL.createObjectURL(data.file);
      //这是限制上传文件类型
      const isPFX = data.file.type === 'image/jpeg' || data.file.type === 'image/jpg' || data.file.type === 'image/png';
      // const isLt2M = data.file.size / 1024 / 1024 < 2;
      if (!isPFX) {
        this.$message.error("上传图片只能是 JPG、PNG、JPEG 格式!");
      }else{
        this.getBase64(data.file).then(resBase64 => {
          this.fileBase64 = resBase64.split(',')[1]
          this.tempUrl = resBase64.split(',')[1]
        })
      }
    },

    // 查询
    search(){
      // TODO 开始请求
      let url = 'http://www.demo.com';
      let requestData = {
        image: this.fileBase64,
        threshold: this.threshold,
        n: this.number
      };

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
    },

    // 加入图库
    addToLib(){
      // TODO 开始请求
      let url = 'http://www.demo.com';
      let requestData = {
        image: this.fileBase64,
        threshold: this.threshold,
        n: this.number
      };

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
    },

    getBase64(file) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        let fileResult = "";
        reader.readAsDataURL(file);
        //开始转
        reader.onload = function() {
          fileResult = reader.result;
        };
        //转 失败
        reader.onerror = function(error) {
          reject(error);
        };
        //转 结束 resolve 出去
        reader.onloadend = function() {
          resolve(fileResult);
        };
      });
    },
  }
}
</script>

