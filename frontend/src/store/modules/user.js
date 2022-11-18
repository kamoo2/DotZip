import { currentUser, isAuthGuardActive } from "../../constants/config";
import { setCurrentUser, getCurrentUser } from "../../utils";
import { loginAPI } from "@/apis/user.js";

export default {
  state: {
    currentUser: isAuthGuardActive ? getCurrentUser() : currentUser,
    loginError: null,
    processing: false,
    // forgotMailSuccess: null,
    // resetPasswordSuccess: null
    info: {
      isLogin: false,
      isKakao: false,
      userSeq: 0,
      userEmail: "",
      userPassword: "",
      userName: "",
      userClsf: "",
      userProfileImageUrl: ""
    }
  },
  getters: {
    isLogin: state => state.info.isLogin,
    currentUser: state => state.info,
    processing: state => state.processing,
    loginError: state => state.loginError
  },
  mutations: {
    SET_LOGIN(state, payload) {
      console.log("로그인 성공");
      state.info.isLogin = true;
    },
    SET_LOGOUT(state) {
      state.info.userSeq = 0;
      state.info.isLogin = false;
      state.info.isKakao = false;
      state.info.userPassword = "";
      state.info.userName = "";
      state.info.userEmail = "";
      state.info.userClsf = "";
    },
    SET_USER_INFO(state) {
      state.info.userSeq = payload.userSeq;
      state.info.userPassword = payload.userPassword;
      state.info.userName = payload.userName;
      state.info.userEmail = payload.userEmail;
      state.info.userClsf = payload.userClsf;
      state.info.userProfileImageUrl = payload.userProfileImageUrl;
    },
    SET_KAKAO(state) {
      state.info.isKakao = true;
      state.info.isLogin = true;
    },
    SET_PROCESSING(state, payload) {
      state.processing = payload;
      state.loginError = null;
    },
    SET_ERROR(state, payload) {
      state.loginError = payload;
      state.currentUser = null;
      state.processing = false;
    },
    // setForgotMailSuccess(state) {
    //   state.loginError = null;
    //   state.currentUser = null;
    //   state.processing = false;
    //   state.forgotMailSuccess = true;
    // },
    // setResetPasswordSuccess(state) {
    //   state.loginError = null;
    //   state.currentUser = null;
    //   state.processing = false;
    //   state.resetPasswordSuccess = true;
    // },
    SET_CLEAR_ERROR(state) {
      state.loginError = null;
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      commit("SET_CLEAR_ERROR");
      commit("SET_PROCESSING", true);
      await loginAPI(
        {
          userEmail: email,
          userPassword: password
        },
        ({ data }) => {
          if (data.message === "success") {
            commit("SET_CLEAR_ERROR");
          } else {
            commit("SET_ERROR");
            setTimeout(() => {
              commit("SET_CLEAR_ERROR");
            }, 3000);
          }
        }
      );

      // 성공이면 commit("SET_LOGIN")
    }
    // forgotPassword({ commit }, payload) {
    //   commit("clearError");
    //   commit("setProcessing", true);
    // firebase
    //   .auth()
    //   .sendPasswordResetEmail(payload.email)
    //   .then(
    //     user => {
    //       commit('clearError')
    //       commit('setForgotMailSuccess')
    //     },
    //     err => {
    //       commit('setError', err.message)
    //       setTimeout(() => {
    //         commit('clearError')
    //       }, 3000)
    //     }
    //   )
    // },
    // resetPassword({ commit }, payload) {
    // commit("clearError");
    // commit("setProcessing", true);
    // firebase
    //   .auth()
    //   .confirmPasswordReset(payload.resetPasswordCode, payload.newPassword)
    //   .then(
    //     user => {
    //       commit('clearError')
    //       commit('setResetPasswordSuccess')
    //     },
    //     err => {
    //       commit('setError', err.message)
    //       setTimeout(() => {
    //         commit('clearError')
    //       }, 3000)
    //     }
    //   )
    // },

    // signOut({ commit }) {
    // firebase
    //   .auth()
    //   .signOut()
    //   .then(() => {
    //     setCurrentUser(null);
    //     commit('setLogout')
    //   }, _error => { })
    // }
  }
};
