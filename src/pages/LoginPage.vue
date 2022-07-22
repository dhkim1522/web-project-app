<template>
 <div class="container-fluid">
    <div class="row no-gutter">
        <!-- The image half -->
        <div class="col-md-6 d-none d-md-flex bg-image"></div>
        <!-- The content half -->
        <div class="col-md-6 bg-light">
            <div class="login d-flex align-items-center py-5">
                <!-- Demo content-->
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-xl-7 mx-auto">
                            <h3 class="display-4">로그인 페이지</h3>
                            <p class="text-muted mb-4">Create a login split page using Bootstrap 4.</p>
                            <br>
                            <br>
                            <!-- form start -->
                            <form @submit.prevent="submitForm">
                                <div class="form-group mb-3">
                                    <label for="userId">아이디</label>
                                    <input v-model="userId" id="userId" type="text" placeholder="Id" required="" autofocus=""
                                     class="form-control rounded-pill border-0 shadow-sm px-4">
                                </div>
                                <div class="form-group mb-3">
                                    <label for="userPassword">비밀번호</label>
                                    <input v-model="userPassword" id="userPassword" type="password" placeholder="**********" required=""
                                     class="form-control rounded-pill border-0 shadow-sm px-4 text-primary">
                                </div>
                                <br>
                                <br>
                                <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                                    로그인
                                </button>
                            </form>
                            <!-- form end -->

                            <div class="text-right mt-4">
                                <router-link to="/signup" >회원가입</router-link>
                            </div>
                        </div>
                    </div>
                    <br>
                    <br>
                    <br>
                    <br>
                </div><!-- End -->
            </div>
        </div><!-- End -->
    </div>
</div>
</template>

<script>
import { duplicationUserCheck } from '@/api/axios'

export default {
    data() {
        return {
            userId: '',
            userPassword: ''
        }
    },
    methods: {
        // 로그인 폼 제출
        async submitForm() {
            try {
                // 비즈니스 로직
                const duplication = await duplicationUserCheck(this.userId);

                const isDuplcate = duplication.data.duplication;

                if(isDuplcate == 0) {
                    alert('존재하지 않는 회원 입니다.');
                    return;
                }

                const userData = {
                    userId: this.userId,
                    userPassword: this.userPassword
                };

                await this.$store.dispatch('LOGIN', userData);

                // 대시보드 페이지로 이동
                this.$router.push('/dashboard');

            } catch (error) {
                console.log(error.response.data);
            } finally {
                this.initForm();
            }
        },
        initForm() {
            this.userId = '';
            this.password = '';
        }
    }
}
</script>

<style>
.login,
.image {
  min-height: 100vh;
}

.bg-image {
  background-image: url('https://therichpost.com/wp-content/uploads/2021/02/login-split.jpg');
  background-size: cover;
  background-position: center center;
}
</style>