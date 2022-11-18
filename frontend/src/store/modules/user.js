import { currentUser, isAuthGuardActive } from "../../constants/config";
import { setCurrentUser, getCurrentUser } from "../../utils";
import { loginAPI } from "@/apis/user.js";

export default {
  state: {
    // currentUser: isAuthGuardActive ? getCurrentUser() : currentUser,
    loginError: null,
    processing: false,
    // forgotMailSuccess: null,
    // resetPasswordSuccess: null
    isLogin: false,
    currentUser: {
      userSeq: 0,
      userName: "",
      userPassword: "",
      userEmail: "",
      userProfileImageUrl: "",
      userRegisterDate: "",
      userClsf: ""
    }
  },
  getters: {
    isLogin: state => state.isLogin,
    currentUser: state => state.currentUser,
    processing: state => state.processing,
    loginError: state => state.loginError
  },
  mutations: {
    SET_LOGIN(state, payload) {
      console.log("로그인 성공");
      state.isLogin = true;
      state.currentUser = { ...payload };
      state.processing = false;
      state.loginError = null;
    },
    SET_LOGOUT(state) {
      state.currentUser.userSeq = 0;
      state.currentUser.isLogin = false;
      state.currentUser.isKakao = false;
      state.currentUser.userPassword = "";
      state.currentUser.userName = "";
      state.currentUser.userEmail = "";
      state.currentUser.userClsf = "";
    },
    SET_USER_INFO(state) {
      state.currentUser.userSeq = payload.userSeq;
      state.currentUser.userPassword = payload.userPassword;
      state.currentUser.userName = payload.userName;
      state.currentUser.userEmail = payload.userEmail;
      state.currentUser.userClsf = payload.userClsf;
      state.currentUser.userProfileImageUrl = payload.userProfileImageUrl;
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
        ({ data, status }) => {
          console.log(data);
          if (data.message === 1) {
            commit("SET_LOGIN", { ...data.user });
          } else {
            if (status === 202) {
              commit("SET_ERROR", "아이디 또는 비밀번호가 틀렸습니다.");
            } else {
              commit("SET_ERROR", "서버에 문제가 발생했습니다.");
            }
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
