<template>
  <div>
    <div
      class="card mb-3 shadow m-3 card-menu p-0 pr-1 wrapper fadeInDown"
      style="border-radius: 15px;"
      @click="gotoPage"
    >
      <div class="row no-gutters">
        <div class="col-2" style="padding-top:1.5rem;">
          <span style="font-size: 2rem;margin-left:1.5rem;">
            <slot></slot>
          </span>
        </div>
        <div class="ml-3" style="padding-top:1rem;padding-bottom:1rem;">
          <div class="vl"></div>
        </div>
        <div class="col-7">
          <div class="card-body">
            <h5 class="card-title mb-0" style="">{{ title || "title" }}</h5>
            <span>{{ details || "details" }}</span>
          </div>
        </div>
        <div class="col-2 text-right" style="padding-top:1.5rem;">
          <span style="font-size: 2rem;">
            <i class="fas fa-chevron-right"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "details", "icon", "path"],
  methods: {
    gotoPage() {
      this.$nuxt.$router.push(this.path);
    }
  }
};
</script>

<style scoped>
.vl {
  /* padding-top: 3rem; */
  border-left: 2px solid #e21adc;
  height: 4rem;
}
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
/* .wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 15px;
} */
</style>
