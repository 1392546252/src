<template>
  <div id="building">
    <div class="tabList">
      <!-- <img class="taskOne" src="../assets/image/0.png" />
      <img class="taskTwo" src="../assets/image/1.png" />
      <img class="taskThree" src="../assets/image/2.png" />
      <img class="taskFour" src="../assets/image/3.png" />
      <img class="taskFive" src="../assets/image/4.png" />
      <img class="taskSix" src="../assets/image/5.png" />
      <img class="taskSeven" src="../assets/image/6.png" />
      <img class="taskEight" src="../assets/image/7.png" /> -->
      <span
        @click="change(index)"
        :class="{ active: nowIndex == index }"
        class="tab tabLeft"
        v-for="(item, index) in messionList"
        :key="index"
        ><span> {{ item.name }}</span></span
      >
    </div>
    <div style="margin-top: 120px" class="flex">
      <p
        style="font-size: 24px; font-weight: bold; color: #aecbff"
        v-for="item in taskList"
      >
        {{ item.name }}
      </p>
    </div>
    <div style="margin-top: 60px" v-for="(item, index) in formValue">
      <n-form ref="formRef" inline :label-width="50" :model="formValue">
        <div class="flexGroup">
          <h1 style="margin-right: 100px" :class="sstt[index]">
            {{ item.groupName }}
          </h1>
          <n-form-item path="item.designGrade">
            <n-input-number
              style="width: 120px; background-color: transparent"
              v-model:value="item.designGrade"
              button-placement="both"
            />
          </n-form-item>
        </div>
        <n-form-item style="margin-left: 145px" path="item.exerciseGrade">
          <n-input-number
            style="width: 120px; background-color: transparent"
            v-model:value="item.exerciseGrade"
            button-placement="both"
          />
        </n-form-item>
        <n-form-item style="margin-left: 240px" path="item.debugGrade">
          <n-input-number
            style="width: 120px; background-color: transparent"
            v-model:value="item.debugGrade"
            button-placement="both"
          />
        </n-form-item>
        <n-form-item style="margin-left: 240px" path="item.innovativeGrade">
          <n-input-number
            style="width: 120px; background-color: transparent"
            v-model:value="item.innovativeGrade"
            button-placement="both"
          />
        </n-form-item>
        <n-form-item style="margin-left: 240px" path="item.verifyGrade">
          <n-input-number
            style="width: 120px; background-color: transparent"
            v-model:value="item.verifyGrade"
            button-placement="both"
          />
        </n-form-item>
        <n-form-item style="margin-left: 240px" path="item.practicalGrade">
          <n-input-number
            style="width: 120px"
            v-model:value="item.practicalGrade"
            button-placement="both"
          />
        </n-form-item>
        <n-form-item style="margin-left: 60px">
          <n-button
            style="width: 100px; font-weight: bold"
            color="#164694"
            attr-type="button"
            @click="handleValidateClick($event, item.groupName)"
          >
            提交
          </n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, inject } from "vue";
import { FormInst, useMessage } from "naive-ui";
import pinia from "../stores/index";
import { AdminStore } from "../stores/UserStore";
import { toRaw } from "vue";
import { postGroupScoreAPI } from "../api";
const adminStore = AdminStore(pinia);
const nowIndex = ref(0);
const axios = inject("axios");
const sstt = ref(["ss1", "ss2", "ss3", "ss4", "ss5", "ss6"]);

const messionList = ref([
  {
    id: 0,
    name: "任务一",
  },
  {
    id: 1,
    name: "任务二",
  },
  {
    id: 2,
    name: "任务三",
  },
  {
    id: 3,
    name: "任务四",
  },
  {
    id: 4,
    name: "任务五",
  },
  {
    id: 5,
    name: "任务六",
  },
  {
    id: 6,
    name: "任务七",
  },
  {
    id: 7,
    name: "任务八",
  },
]);
const taskList = ref([
  {
    id: 0,
    name: "课前方案设计",
  },
  {
    id: 1,
    name: "课中方案演练",
  },
  {
    id: 2,
    name: "课中功能调试",
  },
  {
    id: 3,
    name: "课中创新构思",
  },
  {
    id: 4,
    name: "课中实验验证",
  },
  {
    id: 5,
    name: "课后拓展实战",
  },
]);
const result = toRaw(adminStore);

const postGroupScore = async (data) => {
  const res = await postGroupScoreAPI(data);
};

const formRef = ref<FormInst | null>(null);
const message = useMessage();
const nowTacheId = ref(0);
const change = (index) => {
  nowIndex.value = index;
  nowTacheId.value = index;
};

const formValue = ref([
  {
    groupName: "开拓组",
    userName: result.$id,
    projectId: "3",
    designGrade: "",
    exerciseGrade: "",
    debugGrade: "",
    innovativeGrade: "",
    verifyGrade: "",
    practicalGrade: "",
    tacheId: "",
  },

  {
    groupName: "创新组",
    userName: result.$id,
    projectId: "3",
    designGrade: "",
    exerciseGrade: "",
    debugGrade: "",
    innovativeGrade: "",
    verifyGrade: "",
    practicalGrade: "",
    tacheId: "",
  },
  {
    groupName: "进取组",
    userName: result.$id,
    projectId: "3",
    designGrade: "",
    exerciseGrade: "",
    debugGrade: "",
    innovativeGrade: "",
    verifyGrade: "",
    practicalGrade: "",
    tacheId: "",
  },
  {
    groupName: "团结组",
    userName: result.$id,
    projectId: "3",
    designGrade: "",
    exerciseGrade: "",
    debugGrade: "",
    innovativeGrade: "",
    verifyGrade: "",
    practicalGrade: "",
    tacheId: "",
  },
  {
    groupName: "拼搏组",
    userName: result.$id,
    projectId: "3",
    designGrade: "",
    exerciseGrade: "",
    debugGrade: "",
    innovativeGrade: "",
    verifyGrade: "",
    practicalGrade: "",
    tacheId: "",
  },
  {
    groupName: "奋斗组",
    userName: result.$id,
    projectId: "3",
    designGrade: "",
    exerciseGrade: "",
    debugGrade: "",
    innovativeGrade: "",
    verifyGrade: "",
    practicalGrade: "",
    tacheId: "",
  },
]);
const handleValidateClick = (e, name) => {
  e.preventDefault();
  const submitGroup = formValue.value.find((item) => (item.groupName = name));
  submitGroup!.tacheId = `${nowTacheId.value}`;
  postGroupScore(submitGroup);
};
</script>

<style scoped>
.tabList {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.tab {
  width: 80px;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
  background-color: #ddd;
  cursor: pointer;
}
.active {
  background-color: rgb(103, 103, 103);
}
.flex {
  padding-left: 120px;
  padding-right: 120px;
  display: flex;
  justify-content: space-around;
}
.flexGroup {
  padding-left: 50px;
  padding-right: 120px;
  display: flex;
  justify-content: space-around;
}
.ss1 {
  background-color: #4946b5;
  width: 100px;
  text-align: center;
  border-radius: 8px;
  color: #ddd;
}

.ss2 {
  background-color: #f2cc76;
  width: 100px;
  text-align: center;
  border-radius: 8px;
  color: #ddd;
}

.ss3 {
  background-color: #9ecf8e;
  width: 100px;
  text-align: center;
  border-radius: 8px;
  color: #ddd;
}

.ss4 {
  background-color: #e87e82;
  width: 100px;
  text-align: center;
  border-radius: 8px;
  color: #ddd;
}

.ss5 {
  background-color: #975afb;
  width: 100px;
  text-align: center;
  border-radius: 8px;
  color: #ddd;
}

.ss6 {
  background-color: #6c86ce;
  width: 100px;
  text-align: center;
  border-radius: 8px;
  color: #ddd;
}
#building {
  background: url("../assets/image/bj.png");
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100%, 100%;
}

.taskOne {
  width: 200px;
  position: absolute;
  left: 225px;
  top: 30px;
}

.taskTwo {
  width: 200px;
  position: absolute;
  left: 415px;
  top: 30px;
}

.taskThree {
  width: 200px;
  position: absolute;
  left: 615px;
  top: 30px;
}

.taskFour {
  width: 200px;
  position: absolute;
  left: 815px;
  top: 30px;
}

.taskFive {
  width: 200px;
  position: absolute;
  right: 880px;
  top: 30px;
}

.taskSix {
  width: 200px;
  position: absolute;
  right: 680px;
  top: 30px;
}

.taskSeven {
  width: 200px;
  position: absolute;
  right: 480px;
  top: 30px;
}

.taskEight {
  width: 200px;
  position: absolute;
  right: 280px;
  top: 30px;
}

.tabLeft {
  transform: skewX(45deg);
  display: inline-block;
  span {
    display: inline-block;
    transform: skewX(-90deg);
  }
}
.tabRight {
  transform: skewX(-45deg);
  display: inline-block;
}
</style>
