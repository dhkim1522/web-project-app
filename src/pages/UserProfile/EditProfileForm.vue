<template>
  <card>
    <div class="mx-4 my-4">
      <div class="col-md-10 row bg-light border-top rounded">
        <h4 slot="header" class="card-title m-2">회원 프로필 수정</h4>
      </div>
    <br>
    <form>
      <div class="row">
      <div class="col-md-4">
          <base-input type="text"
                    label="아이디"
                    :disabled="true"
                    :placeholder="[[ userId ]]"
                    v-model="userId">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="닉네임"
                    :placeholder="[[ userNickname ]]"
                    v-model="userNickname">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <base-input type="email"
                    label="이메일"
                    :placeholder="[[ userEmail ]]"
                    v-model="userEmail">
          </base-input>
        </div>
      </div>

      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="updateProfileForm">
          프로필 수정
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
    </div>
  </card>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'
  import { getUser, updateUser } from '@/api/axios'

  export default {
    components: {
      Card
    },
    data () {
      return {
          userSeqId: this.$store.state.userSeqId,
          userId: '',
          userNickname: '',
          userEmail: '',
      }
    },
    methods: {

      // 회원 조회
      async loadUser() {

        const res = await getUser(this.userSeqId);

        this.userId = res.data.userId;
        this.userNickname = res.data.userNickname;
        this.userEmail = res.data.userEmail;
      },

      // 회원수정 폼 제출
      async updateProfileForm() {

          const userData = {
              userId: this.userId,
              userNickname: this.userNickname,
              userEmail: this.userEmail
          };

          const res = await updateUser(this.userSeqId, userData);

          // Vuex store 데이터 갱신
          this.$store.commit('setUserNickname', res.data.userNickname);

          alert('회원수정 완료');

          // 메인 대시보드 페이지로 이동
          this.$router.push('/dashboard');
      },
    },
    created() {
      this.loadUser();
    }
  }

</script>
<style>

</style>
