<template>
  <div>
    <input type="file" @change="handleImage" accept="image/x-png,image/jpeg">
  </div>
</template>

<script>
export default {
  name: 'ImageInput',
  data: function () {
    return {
        imageDataBase64: String,

    }
  },
  methods: {
    handleImage: function (event) {
      const selectedImage = event.target.files[0];
      this.createBase64Image(selectedImage);
    },

    createBase64Image: function (fileObject) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageDataBase64 = reader.result;
        this.$emit('imageInputSuccess', this.imageDataBase64)
      };
      reader.onerror = function (error) {
        alert(error);
      }
      reader.readAsDataURL(fileObject);
    }
  }
}
</script>