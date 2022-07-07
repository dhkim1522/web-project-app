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
                            <h3 class="display-4">Login Page</h3>
                            <p class="text-muted mb-4">Create a login split page using Bootstrap 4.</p>
                            <!-- form start -->
                            <form @submit.prevent="submitForm">
                                <div class="form-group mb-3">
                                    <input v-model="userId" id="userId" type="text" placeholder="Id" required="" autofocus=""
                                     class="form-control rounded-pill border-0 shadow-sm px-4">
                                </div>
                                <div class="form-group mb-3">
                                    <input v-model="userPassword" id="userPassword" type="password" placeholder="Password" required=""
                                     class="form-control rounded-pill border-0 shadow-sm px-4 text-primary">
                                </div>
                                <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">로그인</button>
                            </form>
                            <!-- form end -->

                            <div class="text-right mt-4">
                                <router-link to="/signup" >회원가입</router-link>
                            </div>
                        </div>
                    </div>
                </div><!-- End -->
            </div>
        </div><!-- End -->
    </div>
</div>
</template>

<script>
import { login } from '@/api/axios';

export default {
    data() {
        return {
            userId: '',
            userPassword: ''
        }
    },
    mounted() {
        var dd = this.$store.state.counter
    },
    methods: {

        // 로그인 폼 제출
        async submitForm() {
            const userData= {
                userId: this.userId,
                userPassword: this.userPassword
            }
            const res = await login(userData);

            alert('로그인 완료');

            // vuex store 등록
            this.$store.commit('setUserId', res.data.userId);

            // 대시보드 페이지로 이동
            this.$router.push('/dashboard');
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