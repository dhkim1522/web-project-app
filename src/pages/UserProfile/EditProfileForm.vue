<template>
  <card>
    <h4 slot="header" class="card-title mt-2 ml-2">회원 수정</h4>
    <form>
      <div class="row">
      <div class="col-md-6">
          <base-input type="text"
                    label="아이디"
                    :disabled="true"
                    :placeholder="[[ userId ]]"
                    v-model="userId">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                    label="닉네임"
                    :placeholder="[[ userNickname ]]"
                    v-model="userNickname">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-8">
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
      // updateProfile () {
      //   alert('Your data: ' + JSON.stringify(this.user))
      // }

      // 회원 조회
      async loadUser() {

        let userSeqId = this.userSeqId;

        const res = await getUser(userSeqId);

        this.userId = res.data.userId;
        this.userNickname = res.data.userNickname;
        this.userEmail = res.data.userEmail;
      },

      // 회원수정 폼 제출
      async updateProfileForm() {

          let userseqId = this.userSeqId;
          
          const userData = {
              userId: this.userId,
              userNickname: this.userNickname,
              userEmail: this.userEmail
          };

          console.log('수정 userData {}', userData);

          const res = await updateUser(userseqId, userData);

          alert('회원수정 완료');

          // 메인 대시보드 페이지로 이동
          // this.$router.push('/dashboard');
      },
    },
    created() {
      this.loadUser();
    }
  }

</script>
<style>

</style>
