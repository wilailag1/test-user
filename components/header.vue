<template>
  <div class="pt-3 pb-3 bg-primary">
    <div
      class="container bg-primary d-flex justify-content-between align-items-center"
    >
      <div class="d-flex align-items-center">
        <i
          style="font-size: 1.3rem;"
          class="fas fa-arrow-left text-white mr-2"
        ></i>
        <div class="d-flex align-items-center">
          <!-- <img
            width="30"
            height="30"
            src="../assets/image/niceloop_logo.png"
            alt="logo niceloop"
          /> -->
          <span class="ml-1 mt-1 text-white"></span>
        </div>
        <small class="ml-1 mt-1 text-white" style="font-size: 1.3rem"
          >tablea</small
        >
      </div>
      <div class="d-flex">
        <div class="position-relative mr-4">
          <i style="font-size: 1.3rem;" class="fas fa-lock text-white"></i>
          <!-- <i class="fas fa-lock"></i> -->
        </div>
        <div class="position-relative mr-2">
          <i
            style="font-size: 1.3rem;"
            class="fas fa-ellipsis-h text-white"
            data-toggle="dropdown"
          >
          </i>
          <div class="dropdown-menu dropdown-menu-right">
            <!-- <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a> -->
            <!-- <div class="dropdown-divider"></div> -->
            <a class="dropdown-item" href="#">logout</a>
          </div>
        </div>
      </div>

      <div class="d-flex">
        <div class="mr-4">
          <i
            class="fa fa-trash text-white"
            style="font-size: 1.3rem;"
            aria-hidden="true"
          ></i>
        </div>
        <div class="position-relative mr-2" @click="send">
          <i
            style="font-size: 1.3rem;"
            class="fas fa-paper-plane text-white"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>



<style>
.sumQty {
  background-color: #ef1212;
  position: absolute;
  top: -12px;
  right: -12px;
  border-radius: 100%;
  height: 22px;
  width: 22px;
  text-align: center;
  font-size: 0.9rem;
}
</style>
