<template>
  <div class="login_panel">
    <n-card title="登录">
      <n-form :rules="rules" :model="admin">
        <n-form-item path="username" label="账号">
          <n-input v-model:value="admin.username" placeholder="请输入账号" />
        </n-form-item>
        <n-form-item path="password" label="密码">
          <n-input
            v-model:value="admin.password"
            type="password"
            placeholder="请输入密码"
          />
        </n-form-item>
      </n-form>
      <template #footer>
        <n-checkbox v-model:checked="admin.rember" label="记住我" />
        <n-button @click="login">登录</n-button>
      </template>
    </n-card>
  </div>
</template>

<script setup>
import { ref, reactive, inject } from "vue";
import { router } from "../common/router";
import { AdminStore } from "../stores/UserStore";
import { useMessage } from "naive-ui";

const axios = inject("axios");
const adminStore = AdminStore();
const message = useMessage();

const admin = reactive({
  username: "",
  password: "",
  rember: false,
});

let rules = {
  account: [
    { required: true, message: "请输入账号", trigger: "blur" },
    { min: 3, max: 12, message: "账号长度在 3 到 12 个字符", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 18, message: "密码长度在 6 到 18 个字符", trigger: "blur" },
  ],
};

const login = async () => {
  let result = await axios.post("/information/user/login", {
    username: admin.username,
    password: admin.password,
  });
  if (result.data.code == 1) {
    adminStore.token = result.data.data.token;
    adminStore.username = result.data.data.userName;
    adminStore.id = result.data.data.id;
    message.success("登录成功");
    console.log(adminStore.token);
    localStorage.setItem("token", adminStore.token);
    router.push("/detail");
  } else {
    message.error("登录失败");
  }
};
</script>

<style lang="scss" scoped>
.login_panel {
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
