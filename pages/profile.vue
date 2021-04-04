<template>
  <div class="p-6 flex flex-col items-center justify-center ">
      <img class="rounded-full w-48 h-48" :src="user.image" alt="">
      <h2 class="text-2xl font-bold">{{user.first_name}} {{user.first_name}}</h2>
      <span>@{{user.username}}</span>
      <span class="text-xl mt-6">{{user.email}}</span>
        <span>Age : {{user.age}}</span>
  </div>
</template>

<script>
import user from '@/static/user.json'
export default {
    data: ()=>{
        return ({
            user:user
        })
    },
    methods:{

    },
    async created(){

    }
}
</script>

<style>

</style>