<template>
  <div class="mixture-effect">
    <div
      class="mixture-effect__fill"
      :style="color" />
  </div>
</template>

<script>
export default {
  name: 'BigMixtureItem',
  props: {
    color: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoepd>
.mixture-effect {
  display: block;
  width: 15rem;
  height: 15rem;
  border: 10px solid #ddd;
  border-radius: 50%;
  margin: 3rem auto;
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  -webkit-box-shadow: 0 20px 40px 0 rgba(107,154,212,.5);
  box-shadow: 0 20px 40px 0 rgba(107,154,212,.3);

  &__fill {
    width: 100%;
    height: 100%;
    transition: .2s;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #9a9a9a;
    background-image: linear-gradient(0deg, #9a9a9a 0%, #e8fdff 100%);
    opacity: 0.5;
  }
}
</style>
