<!--
 * @Author: your name
 * @Date: 2021-09-30 14:42:38
 * @LastEditTime: 2021-09-30 14:43:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\login\Login.vue
-->

<script setup lang="ts"></script>
<template>
  <div class="login-box">
    <h2>Login</h2>
    <form>
      <div class="user-box">
        <input type="text" name="" />
        <label>Username</label>
      </div>
      <div class="user-box">
        <input type="password" name="" />
        <label>Password</label>
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </a>
    </form>
  </div>
</template>

<style lang="scss" scoped>
//@import "./index.scss";
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  width: 400px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  transform: translate(-50%, -50%);
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  margin-bottom: 30px;
  padding: 10px 0;
  color: #fff;
  font-size: 16px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  color: #fff;
  font-size: 16px;
  transition: 0.5s;
  pointer-events: none;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  margin-top: 40px;
  padding: 10px 20px;
  overflow: hidden;
  color: #03e9f4;
  font-size: 16px;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.5s;
}

.login-box a:hover {
  color: #fff;
  background: #03e9f4;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }

  50%,
  100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  right: -100%;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }

  50%,
  100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }

  50%,
  100% {
    bottom: 100%;
  }
}
</style>
