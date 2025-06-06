import { userGetInfoService } from '@/api/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 用户模块 token setToken removeToken
export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }
    const user=ref({})
    const getUser=async()=>{
        const res=await userGetInfoService()
        user.value=res.data.data
    }
    const removeUser =()=>{
        user.value=''
    }

    return {
      token,
      setToken,
      removeToken,
      user,
      getUser,
      removeUser
    }
  },
  {
    persist: true
  }
)
