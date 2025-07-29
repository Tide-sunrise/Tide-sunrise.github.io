<template>
  <div class="header">
    <!-- 背景图片 -->
    <div class="background-image" :style="{ backgroundImage: `url(${coverImage})` }"></div>

    <!-- 内容容器 -->
    <div class="content-container">
      <!-- 头像 -->
      <div class="avatar-container">
        <img :src="avatar" alt="用户头像" class="avatar" />
        <span class="avatar-label">修改我的头像</span>
      </div>

      <!-- 用户信息 -->
      <div class="user-info">
        <div class="main-info">
          <h1 class="username">{{ username }}</h1>
          <p class="bio">{{ bio }}</p>
        </div>
        <div class="additional-info" v-if="!isExpanded">
          <span class="school"><i class="fas fa-university"></i> {{ school }} </span>
        </div>

        <!-- 查看详细资料按钮 -->
        <a href="#" class="view-details" @click="toggleDetails">
          {{ isExpanded ? '收起详细资料' : '查看详细资料' }}
        </a>

        <!-- 展开区域 -->
        <div class="expanded-info" :class="{ expanded: isExpanded }">
          <div class="education-info">
            <h3>教育信息</h3>
            <img :src="education.icon"/>
            <p>{{ education.school }}</p>
            <p>{{ education.degree }}</p>
          </div>
          <div class="industry-info">
            <h3>行业信息</h3>
            <p>{{ industry }}</p>
          </div>
        </div>
      </div>

      <!-- 编辑按钮 -->
<!--      <div class="edit-buttons">-->
<!--        <button class="edit-cover" @click="editCover">-->
<!--          <i class="fas fa-camera"></i> 编辑封面图片-->
<!--        </button>-->
<!--        <button class="edit-profile" @click="editProfile">编辑个人资料</button>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script setup>
// 接收外部传入的 props
defineProps({
  username: {
    type: String,
    default: '朝汐'
  },
  bio: {
    type: String,
    default: '万物皆在万物之中'
  },
  school: {
    type: String,
    default: '中南大学'
  },
  location: {
    type: String,
    default: '湖南'
  },
  avatar: {
    type: String,
    default: '@/assets/avatar.png' // 默认头像路径
  },
  coverImage: {
    type: String,
    default: '@/assets/cover.jpg' // 默认封面图片路径
  },
  education: {
    type: Object,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {
      school: '中南大学',
      degree: '本科',
      major: '计算机科学与技术',
      graduationYear: 2026,
      icon:'@/assets/csu.png'
    }
  },
  industry: {
    type: String,
    default: '计算机科学与技术'
  }
})

// 控制展开与收起的状态
import { ref } from 'vue';

const isExpanded = ref(false);

// 模拟编辑功能
// function editCover() {
//   alert('正在编辑封面图片...');
// }
//
// function editProfile() {
//   alert('正在编辑个人资料...');
// }

function toggleDetails() {
  isExpanded.value = !isExpanded.value;
}
</script>

<style scoped lang="scss">
$avatar-size: 250px;  // 设置头像尺寸
$page-background: #f9f9f9;
$navbar-color: #66ccff;
$primary-color: #66ccff;

.header {
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;

  /* 背景图部分 */
  .background-image {
    width: 100%;
    height: 300px; /* 可根据需要调整 */
    background-size: cover;
    background-position: 0 15%;
    filter: brightness(70%);
    position: relative;
    z-index: 0;
  }

  /* 内容容器 */
  .content-container {
    position: relative;
    display: flex;
    align-items: flex-start; /* 顶部对齐 */
    padding: 1rem;
    gap: 1rem;
    z-index: 1;
  }

  /* 头像部分 */
  .avatar-container {
    position: absolute;
    left: 1rem; /* 左边距 */
    transform: translateY(-50%); /* 上半部分嵌入背景 */
    width: $avatar-size;
    height: $avatar-size;
    border-radius: 8px;  /* 圆角方形 */
    overflow: hidden;
    cursor: pointer;
    z-index: 2;  /* 使头像在其他元素上方 */

    .avatar {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .avatar-label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
      color: white;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover .avatar-label {
      opacity: 1;
    }
  }

  /* 用户信息部分 */
  .user-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;  /* 保持原有间距 */
    margin-left: $avatar-size + 30px; /* 确保内容不被头像遮挡 */
    text-align: left; /* 设置文本左对齐 */

    .main-info{
      display: flex;
      flex-direction: row;
      align-items: center;

      .username {
        font-size: 1.8rem;
        font-weight: bold;
        color: $primary-color;
      }

      .bio {
        font-size: 1rem;
        color: #666;
        margin-left: 5%;
      }
    }

    .additional-info {
      display: flex;
      gap: 1rem;
      font-size: 0.9rem;
      color: #888;

      .school,
      .location {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }

    .view-details {
      font-size: 0.9rem;
      color: #888;
      text-decoration: none;
      cursor: pointer;
      margin-top: 1rem;
    }

    .expanded-info {
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.3s ease-out;

      &.expanded {
        max-height: 200px; /* 控制展开时的最大高度 */
      }

      .education-info,
      .industry-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 1rem;
        font-size: 0.9rem;
        color: #666;
        img{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          margin-left: 30px;
        }
        p{
          margin-left: 30px;
        }
      }
    }
  }

  /* 编辑按钮部分 */
  .edit-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      background-color: $navbar-color;
      color: white;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: lighten($navbar-color, 10%);
      }
    }
  }
}
</style>
