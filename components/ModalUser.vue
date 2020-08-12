<template>
  <div
    class="modal fade "
    data-backdrop="static"
    data-keyboard="false"
    :id="modalName || 'modalUser'"
    tabindex="-1"
    :aria-labelledby="`${modalName || 'modalUser'}Label`"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            class="modal-title"
            :id="`${modalName || 'modalUser'}Label`"
            :style="mode === 'add' ? 'color:green' : 'color:blue'"
          >
            {{
              mode === "edit" || mode === "editProfile"
                ? data.email
                : "เพิ่มข้อมูล"
            }}
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="exampleFormControlInput1">ชื่อ</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="ระบุชื่อจริง"
                    v-model="data.firstName"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="exampleFormControlInput1">นามสกุล</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="ระบุนามสกุล"
                    v-model="data.lastName"
                  />
                </div>
              </div>
              <div class="col-8">
                <div class="form-group">
                  <label for="exampleFormControlInput1">อีเมลล์</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    v-model="data.email"
                  />
                </div>
              </div>

              <div class="col-4">
                <div class="form-group">
                  <label for="exampleFormControlInput1">อายุ</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="data.age"
                  />
                </div>
              </div>
              <div class="col-6" v-if="mode === 'add'">
                <div class="form-group">
                  <label for="exampleFormControlInput1">รหัสผ่าน</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="กรอกรหัสผ่าน"
                    v-model="data.password"
                  />
                </div>
              </div>
              <div class="col-6" v-if="mode === 'add'">
                <div class="form-group">
                  <label for="exampleFormControlInput1">รหัสผ่านอีกครั้ง</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="กรอกรหัสผ่านอีกครั้ง"
                    v-model="data.passwordAgain"
                  />
                </div>
              </div>
              <div class="col-6">
                <label for="exampleFormControlInput1">phone</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="ระบุเบอร์โทรศัพท์"
                  v-model="data.phone"
                />
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="exampleFormControlInput1">ที่อยู่</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    v-model="data.address"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <Alert v-if="invalid" :data="errMessage" />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="close"
          >
            Close
          </button>

          <button
            type="button"
            class="btn btn-success"
            @click="save"
            v-if="mode === 'add'"
          >
            Add
          </button>
          <button type="button" class="btn btn-primary" @click="save" v-else>
            Save Chage
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as userService from "../service/users";
import Alert from "./alert.vue";
import _ from "lodash";
export default {
  props: {
    data: {},
    mode: String,
    modalName: String
  },
  data() {
    return {
      invalid: false,
      errMessage: [],
      data: {}
    };
  },
  methods: {
    async save() {
      this.checkInvalid();
      if (!this.invalid) {
        this.saveToDb();
      }
    },
    close() {
      this.reStateInvalid();
      this.$emit("close");
    },
    async saveToDb() {
      try {
        if (this.mode === "editProfile") {
          const email = this.data.email;
          debugger;
          let res = await userService.updateUser(email, this.data);
          alert("save success");
          this.$router.push("/dashboard");
        }
        if (this.mode === "edit") {
          const email = this.data.email;
          debugger;
          let res = await userService.updateUser(email, this.data);
          this.$store.commit("auth/set", { key: "user", payload: this.data });
          alert("save success");
        }
        if (this.mode === "add") {
          let res = await userService.createUserData(this.data);
          alert("add success");
        }
        this.reStateInvalid();
        $(`#${this.modalName || "modalUser"}`).modal("hide");
        this.$emit("save");
      } catch (error) {
        alert(error);
      }
    },
    checkInvalid() {
      this.invalid = false;
      this.errMessage = [];
      const userData = this.data;
      let listModel = [
        "email",
        "firstName",
        "lastName",
        "age",
        "address",
        "phone"
      ];
      if (this.mode === "add") {
        listModel = [...listModel, "password", "passwordAgain"];
      }
      _.forEach(listModel, model => {
        if (!userData[model]) {
          this.invalid = true;
          this.errMessage.push(`${model} is required`);
        }
        if (model === "password" && userData[model]) {
          this.checkPassword();
        }
        if (model === "email" && userData[model]) {
          this.checkEmail();
        }
      });
    },
    checkPassword() {
      let userData = this.data;
      if (userData.password !== userData.passwordAgain) {
        this.invalid = true;
        this.errMessage.push(`password not match password again`);
      }
      if (userData.password.length < 6 || userData.passwordAgain.length < 6) {
        this.invalid = true;
        this.errMessage.push(`password must length greater than equal 6`);
      }
    },
    checkEmail() {
      let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      this.data.email.match(re);
      debugger;
      if (!this.data.email.match(re)) {
        this.invalid = true;
        this.errMessage.push(`email invalid format`);
      }
    },
    reStateInvalid() {
      this.errMessage = [];
      this.invalid = false;
    }
  }
};
</script>

<style></style>
