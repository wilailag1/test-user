<template>
  <div>
    <ModalUser
      :data="modalData || {}"
      :mode="modalMode"
      @close="fetchUser"
      @save="fetchUser"
    />
    <div class="card shadow m-3">
      <div class="card-body">
        <div class="row">
          <div class="col-12 text-right">
            <button type="button" class="btn btn-success" @click="add">
              เพิ่ม
            </button>
          </div>
          <div class="col-12">
            <table class="table table-borderless table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">email</th>
                  <th scope="col">name</th>
                  <th scope="col">phone</th>
                  <th scope="col">action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in userData" :key="user.email">
                  <th scope="row">{{ user.email }}</th>
                  <td>
                    {{ `${user.firstName || ""} ${user.lastName || ""}` }}
                  </td>
                  <td>{{ user.phone }}</td>
                  <td>
                    <div>
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="showModal(user)"
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as userService from "../service/users";
import ModalUser from "../components/ModalUser.vue";
export default {
  components: {
    ModalUser
  },
  data() {
    return {
      userData: [],
      modalData: {},
      modalMode: ""
    };
  },
  methods: {
    async fetchUser() {
      debugger;
      let data = await userService.fetchUser();
      this.userData = data || [];
    },
    showModal(data) {
      this.modalData = data;
      this.modalMode = "edit";
      $("#modalUser").modal("show");
    },
    add() {
      this.modalMode = "add";
      this.modalData = {};
      $("#modalUser").modal("show");
    }
  },
  mounted() {
    this.fetchUser();
  }
};
</script>

<style></style>
