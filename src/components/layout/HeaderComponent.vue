<template>
    <div class="header">
        <img src="../../assets/home/slide1.jpg" alt="" class="headerImg">
        <div class="headerTitles">
            <span class="headerTitleLg">Brainstoming after Thursday meeting day</span>
            <span class="headerTitleSm">This group promote excellence</span>
        </div>

    </div>
</template>

<script setup>


</script>
<style>
.header {
  margin-top: 60px;
}

.headerTitles {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lora", serif;
  color: #444;
}

.headerTitleSm {
  position: absolute;
  top: 18%;
  font-size: 20px;
}

.headerTitleLg {
  position: absolute;
  top: 20%;
  font-size: 50px;
}

.headerImg {
  width: 100%;
  height: 450px;
  margin-top: 80px;
  object-fit: cover;
}

</style>