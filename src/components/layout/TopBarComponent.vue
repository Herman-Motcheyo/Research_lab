
<template>
   <div class="top">
    <div class="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
    </div>

    <div class="topCenter">
        <div class="topListItem">Home</div>
        <div class="topListItem">About</div>
        <div class="topListItem">Publications</div>
        <div class="topListItem">Projects</div>
        <div class="topListItem">Join Us</div>
        <div class="topListItem">Contact</div>
    </div>
    <div class="topRight">
        <img src="" class="topImg" alt="">
    </div>

   </div>
</template>

<script setup>

</script>
<style>

.top{
    display:flex;
    width: 100%;
    background-color: white;
    position: sticky;
    top: 0;
    align-items: center;
    z-index: 999;
    font-family:  "Josefin Sans", sans-serif;
}
.topLeft, 
.topRight{
    display: flex;
    flex: 3;
    align-items: center;
    justify-content: center;
}
.topIcon{
    font-size: 20px;
    margin-right: 10px;
    color:#444;
    cursor:pointeur;
}
.topCenter{
   display: flex;
   justify-content: center;
   margin: 5px;
}
.topListItem{
    margin-right: 20px;
    font-size: 18px;
    font-weight: 300;
    cursor:pointer
}
.topImg{
    width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin:5px;
  cursor: pointer;
}
</style>