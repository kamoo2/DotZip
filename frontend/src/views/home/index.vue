<template>
  <home-layout>
    <div :class="{ 'landing-page': true }">
      <div class="main-container">
        <div class="content-container" id="home">
          <div class="section home" id="sectionHome">
            <div class="container">
              <div class="row home-row" id="homeRow">
                <div class="col-12 col-xl-4 col-lg-5 col-md-6">
                  <div class="home-text">
                    <div class="display-1">
                      <span class="logo-single" />
                    </div>
                    <p class="white mb-5">
                      원하는 조건의 집을 한 눈에 확인하세요!<br />
                      내 집 마련의 시작, Happy House
                    </p>
                    <button
                      class="btn btn-light btn-xl mr-2 mb-2"
                      target="_blank"
                      @click="moveSignin"
                    >
                      SIGN IN
                    </button>
                    <button
                      class="btn btn-dark btn-xl mr-2 mb-2"
                      target="_blank"
                      @click="moveSignup"
                    >
                      SIGN UP
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </home-layout>
</template>

<script>
// import { adminRoot } from "../constants/config";
import logo from "@/assets/logos/black.png";
import HomeLayout from "../../layouts/HomeLayout";
import GlideComponent from "../../components/Carousel/GlideComponent";

export default {
  data() {
    logo;
  },
  components: {
    "home-layout": HomeLayout,
    "glide-component": GlideComponent
  },
  data() {
    return {};
  },
  methods: {
    moveSignin() {
      this.$router.push("/user/login");
    },
    moveSignup() {
      this.$router.push("/user/register");
    }
  }
};
</script>
