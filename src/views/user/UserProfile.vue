<script setup>
import PageContainer from '@/components/PageContainer.vue'
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus';
import { userUpdateInfoService } from '@/api/user'

const formRef = ref()

const {
  user: { email, id, nickname, username },
  getUser
} = useUserStore()

const form = ref({
  id,
  username,
  nickname,
  email
})

const rules = ref({
  nickname: [
    { required: true, message: '请输入用户昵称', trigger: 'blur' },
    {
      pattern: /^\S{2,10}/,
      message: '昵称长度在2-10个非空字符',
      trigger: 'blur'
    }
  ],
  email: [
    { required: true, message: '请输入用户邮箱', trigger: 'blur' },
    {
      type: 'email',
      message: '请输入正确的邮箱格式',
      trigger: ['blur', 'change']
    }
  ]
})

const submitForm = async () => {
  await formRef.value.validate()
  await userUpdateInfoService(form.value)
  getUser()
  ElMessage.success('修改成功')
}
</script>
<template>
  <page-container title="基本资料">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="登录名称" style="width: 600px; ">
        <el-input v-model="form.username" disabled style="height: 40px;"></el-input>
      </el-form-item>
      <el-form-item label="用户昵称" prop="nickname" style="width: 600px; ">
        <el-input v-model="form.nickname" style="height: 40px;"></el-input>
      </el-form-item>
      <el-form-item label="用户邮箱" prop="email" style="width: 600px; ">
        <el-input v-model="form.email" style="height: 40px;"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交修改</el-button>
      </el-form-item>
    </el-form>
  </page-container>
</template>
