<template>
  <div class="pt-3 pb-3 bg-primary">
    <ModalUser :data="modalData || {}" mode="editProfile" :modalName="modalName" />
    <div
      class="container bg-primary d-flex justify-content-between align-items-between mr-0"
    >
      <div class="d-flex">
        <!-- <div class="position-relative mr-4">
          <i style="font-size: 1.3rem;" class="fas fa-lock text-white"></i>
        </div>
        <div class="position-relative mr-2">
          <i
            style="font-size: 1.3rem;"
            class="fas fa-ellipsis-h text-white"
            data-toggle="dropdown"
          >
          </i>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">logout</a>
          </div>
        </div> -->
      </div>

      <div class="d-flex mr-0">
        <div class="mr-4" v-if="email">
          <span style="color: white;">{{ email }}</span>
        </div>
        <div class="position-relative mr-2" v-if="email">
          <i
            style="font-size: 1.3rem;"
            class="fas fa-ellipsis-h text-white"
            data-toggle="dropdown"
          >
          </i>
          <div class="dropdown-menu dropdown-menu-right">
            <a
              class="dropdown-item"
              href="#"
              style="color:blue"
              @click="editProfile"
              >Profile</a
            >
            <a class="dropdown-item" href="#" style="color:red" @click="signOut"
              >SingOut</a
            >
          </div>
        </div>
        <!-- <div class="position-relative ">
          <i
            style="font-size: 1.3rem;"
            class="fas fa-paper-plane text-white"
          ></i>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import * as authService from "../service/authService";
import ModalUser from "./ModalUser.vue";
import _ from "lodash";
export default {
  components: {
    ModalUser
  },
  data() {
    return {
      modalName: "modalUserProfile",
      modalData: {}
    };
  },
  computed: {
    email() {
      if (this.$store.state.auth.user) {
        return this.$store.state.auth.user.email;
      } else {
        return "";
      }
    }
  },
  methods: {
    signOut() {
      this.$store.dispatch("auth/singOut");
    },
    editProfile() {
      this.modalData = _.cloneDeep(this.$store.state.auth.user) || {};
      $("#modalUserProfile").modal("show");
    }
  }
};
</script>

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
