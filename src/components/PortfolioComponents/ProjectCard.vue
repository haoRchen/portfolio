<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <div class="level is-mobile is-marginless">
            <div class="level-left">
              <h5 class="title ProjectTitle level-item">{{ project.name }}</h5>
            </div>
          </div>
          <p class="ProjectDescription">
            {{ project.description }}            
          </p>
        </div>
        <!-- Card Technology Icons -->
        <nav class="level box__nav is-mobile is-marginless">
          <!-- <div class="level-left box__nav__wrapper--icon">
            <a 
              class="level-item" 
              aria-label="reply">
              <span class="icon is-medium tech-icon">
                <i 
                  class="fab fa-angular fa-lg" 
                  aria-hidden="true"/>
              </span>
            </a>
            <a 
              class="level-item" 
              aria-label="retweet">
              <span class="icon is-medium tech-icon">
                <i 
                  class="fab fa-js fa-lg" 
                  aria-hidden="true"/>
              </span>
            </a>
            <a 
              class="level-item" 
              aria-label="like">
              <span class="icon is-medium tech-icon">
                <i 
                  class="fab fa-vuejs fa-lg" 
                  aria-hidden="true"/>
              </span>
            </a>
            <a 
              class="level-item" 
              aria-label="like">
              <span class="icon is-medium tech-icon">
                <i 
                  class="fab fa-node-js fa-lg" 
                  aria-hidden="true"/>
              </span>
            </a>
          </div> -->
          <div 
            class="level-right box__nav__wrapper--button">
            <a 
              id="MoreInfoButton" 
              class="level-item"
              @click="ShowModal">
              <span class="info__text">
                more info
              </span>
              <span class="info__icon">
                <i 
                  class="fas fa-chevron-right fa-xs" 
                  aria-hidden="true"/>
              </span>
              <span class="info__icon">
                <i 
                  class="fas fa-chevron-right fa-xs" 
                  aria-hidden="true"/>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>    
</template>

<script>
import ProjectDetail from "@/components/PortfolioComponents/ProjectDetail.vue";

export default {
  name: "ProjectTitle",
  components: {
    ProjectDetail
  },
  props: {
    project: {
      type: Object,
      required: true,
      default: () => {
        return {
          name: "default",
          date: "2018/6/12",
          description: "default desc"
        };
      }
    }
  },
  methods: {
    ShowModal() {
      /* 
        the first argument is the component definition, 
        the second are component properties, 
        the third modal parameters, 
        and the fourth the modal event listeners):
      */
      this.$modal.show(
        ProjectDetail,
        { project: this.project },
        {
          scrollable: true,
          transition: "fade",
          height: "auto"
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../main.scss";
.box {
  $box: &;
  background-color: $white;
  padding: 2rem !important;
  padding-left: 2.5rem !important;
  padding-right: 2.5rem !important;
  max-width: 730px;
  border-radius: 6px;
  transition: all 0.3s ease-out;
  &:hover {
    box-shadow: 0 2px 3px 1px lightgrey;
    transform: scale(1.01, 1.01);
    .tech-icon {
      color: $dark-grey;
      &:hover {
        color: $primary;
      }
    }
    & #{ $box }__nav__wrapper--button {
      transition-delay: 0.5s;
      opacity: 1;
      right: 0px;
    }
  }
  &__nav {
    display: flex;
    justify-content: flex-end;
    flex-wrap: nowrap;
    &__wrapper--button {
      opacity: 0;
      height: 0; // Used for slide out/in within mobile view
      right: -20px;
      position: relative;
      transition: all 0.3s ease-in-out;
      font-family: $roboto;
      font-weight: 500;
      transition-delay: 0;
      #MoreInfoButton {
        transition: all 0.5s ease;
        color: $dark-grey;
        position: relative;
        transition: all 0.3s ease-out;
        padding: 5px;
        &:hover {
          color: $primary;
          transform: translate(10px, 0);
        }
        .info__text {
          margin-right: 6px;
        }
        .info__icon {
          animation: fade 1.5s ease-in infinite;
          &:nth-child(3) {
            animation-delay: 0.1s;
          }
        }
      }
    }
  }
}
.title {
  font-family: $montserrat;
  font-weight: 700;
}
.ProjectDescription {
  font-family: $montserrat;
  font-weight: 300;
  font-size: 15px;
}
@media screen and (max-width: $tablet) {
  .box {
    $box: &;
    height: auto;
    box-shadow: 0 2px 3px 1px lightgrey;
    transition: all 0.5s ease;
    &__nav {
      display: flex;
      flex-direction: column;
      transition: all 0.5s ease;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      &__wrapper--button {
        display: flex;
        flex-direction: column;
        right: auto;
        flex-wrap: wrap;
        position: relative;
        transition: all 0.3s ease-in-out;
        transition-delay: 0;
        height: 20px;
        opacity: 1;
        transition-delay: 0.5s;
        #MoreInfoButton {
          transition: all 0.5s ease;
          position: relative;
          margin-top: 1rem;
          width: 12rem;
          bottom: -10px;
          .info__icon {
            display: none;
            animation: none;
          }
        }
      }
      &__wrapper--icon {
        margin-left: 0.75rem;
      }
    }
  }
  .level {
    justify-content: center;
    transition: all 0.5s ease;
  }
}
@keyframes fade {
  0% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
