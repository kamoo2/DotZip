<template>
  <div style="width:100%;height:100%">
    <div class="house-list-wrapper open">
      <h1>리스트 보여줄 공간</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.house-list-wrapper {
  width: 400px;
  height: 100%;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}

.house-list-wrapper.close {
  left: -40%;
}

.house-list-wrapper.open {
  left: 0;
}
</style>
