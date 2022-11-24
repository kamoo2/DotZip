<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.profile')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12" class="profile-page-wrap">
        <b-card no-body class="profile-wrap">
          <div class="position-absolute card-top-buttons profile-info-wrap">
            <b-button
              @click="onClickToggleEditContainer"
              variant="outline-white"
              class="icon-button openEditSlideBtn"
            >
              <i class="simple-icon-pencil" />
            </b-button>
          </div>
          <single-lightbox
            thumb="/assets/img/profiles/noProfile.jpg"
            large="/assets/img/profiles/noProfile.jpg"
            class-name="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">{{ $t("menu.userName") }}</p>
            <p class="mb-3">
              {{ this.currentUser.userName }}
            </p>
            <!-- <p class="text-muted text-small mb-2">{{ $t("pages.location") }}</p>
            <p class="mb-3">Nairobi, Kenya</p> -->
            <p class="text-muted text-small mb-2">
              {{ $t("pages.area-title") }}
            </p>
            <p class="mb-3">
              <b-badge
                v-for="(item, index) in bookmarkAreaList"
                :key="index"
                variant="outline-secondary"
                class="mb-1 mr-1"
                pill
                >{{ item.name }}</b-badge
              >
            </p>
            <p class="text-muted text-small mb-2">{{ $t("menu.contact") }}</p>
            <div class="social-icons">
              <ul class="list-unstyled list-inline">
                <li class="list-inline-item">
                  <router-link to="#"
                    ><i class="simple-icon-social-facebook"></i
                  ></router-link>
                </li>
                <li class="list-inline-item">
                  <router-link to="#"
                    ><i class="simple-icon-social-twitter"></i
                  ></router-link>
                </li>
                <li class="list-inline-item">
                  <router-link to="#"
                    ><i class="simple-icon-social-instagram"></i
                  ></router-link>
                </li>
              </ul>
            </div>
          </b-card-body>
        </b-card>
        <b-card class="profile-edit-wrap close"> </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import SingleLightbox from "@/components/Profile/SingleLightbox";
import { mapGetters, mapActions } from "vuex";

export default {
  // 얻어야 하는 데이터
  // 내 관심 지역 limit 4개 -> 현재 관심 지역이 없다면 클릭하면
  // SearchDong 페이지로 이동시키는 버튼 추가
  // 현재 로그인 한 사람의 정보
  data() {
    return {
      repAreaList: [],
      isNotExistBookmarkArea: false,
      isOpen: false
    };
  },
  computed: {
    ...mapGetters(["currentUser", "bookmarkAreaList"])
  },
  methods: {
    ...mapActions(["getBookMarkAreaListAction"]),
    onClickToggleEditContainer() {
      if (this.isOpen) {
        // 열린 상태 -> 닫아야 함 -> close 클래스를 추가
        document.querySelector(".profile-edit-wrap").classList.add("close");
      } else {
        // 닫힌 상태 -> 열어야 함 -> close 클래스를 제거
        document.querySelector(".profile-edit-wrap").classList.remove("close");
      }
      this.isOpen = !this.isOpen;
    }
  },
  components: {
    "single-lightbox": SingleLightbox
  },
  created() {
    this.getBookMarkAreaListAction({
      userSeq: this.currentUser.userSeq,
      limit: 2,
      offset: 0
    });
    console.log(this.currentUser);
  },
  watch: {
    bookmarkAreaList() {
      if (this.bookmarkAreaList.length > 0) {
        this.isNotExistBookmarkArea = false;
      } else {
        this.isNotExistBookmarkArea = true;
      }
    }
  }
};
</script>

<style>
.profile-page-wrap {
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.profile-wrap {
  flex-basis: 30%;
  position: relative;
  z-index: 3;
}

.profile-edit-wrap {
  flex-basis: 68%;
  transition-duration: 2000ms;
  background-color: white;
}
.profile-edit-wrap.close {
  background-color: transparent;
  transform: translateX(-2000px);
}

.profile-info-wrap {
}

.openEditSlideBtn {
}
</style>
