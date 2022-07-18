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
                            <h3 class="display-4">Signup Page</h3>
                            <p class="text-muted mb-4">Create a login split page using Bootstrap 4.</p>
                            
                            <!-- form start -->
                            <form @submit.prevent="submitForm">
                                <div class="form-group mb-3">
                                    <label for="userId">아이디</label>
                                    <input v-model="userId" id="userId" type="text" placeholder="ID" required
                                    class="form-control rounded-pill border-0 shadow-sm px-4">
                                </div>
                                <div class="form-group mb-3">
                                    <label for="userPassword">비밀번호</label>
                                    <input v-model="userPassword" id="userPassword" type="password" placeholder="********" required
                                    class="form-control rounded-pill border-0 shadow-sm px-4">
                                </div>
                                <div class="form-group mb-3">
                                    <label for="userNickname">닉네임</label>
                                    <input v-model="userNickname" id="userNickname" type="text" placeholder="닉네임" required 
                                    class="form-control rounded-pill border-0 shadow-sm px-4">
                                </div>
                                <div class="form-group mb-3">
                                    <label for="userEmail">이메일</label>
                                    <input v-model="userEmail" id="userEmail" type="text" placeholder="example@naver.com" required
                                    class="form-control rounded-pill border-0 shadow-sm px-4">
                                </div>
                                <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">회원가입</button>
                            </form>
                            <!-- form end -->
                            
                        </div>
                    </div>
                </div><!-- End -->
            </div>
        </div><!-- End -->
    </div>
</div>
</template>

<script>
import { signup } from '@/api/axios';

export default {
    data() {
        return {
            userId: '',
            userPassword: '',
            userNickname: '',
            userEmail: ''
        }
    },
    methods: {

        // 회원가입 폼 제출
        async submitForm() {
            const userData= {
                userId: this.userId,
                userPassword: this.userPassword,
                userNickname: this.userNickname,
                userEmail: this.userEmail
            };

            const res = await signup(userData);

            alert('회원가입 완료');

            this.initForm();

            // 로그인 페이지로 이동
            this.$router.push('/login');
        },

        // 폼 초기화
        initForm() {
            this.userId = '';
            this.userPassword = '';
            this.userNickname = '';
            this.userEmail = '';
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