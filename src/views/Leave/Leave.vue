<template>
  <div class="SnLeaves">
    <div class="SnLeave" data-title="气泡背景墙">
      <ul class="bubble-bgwall">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
      </ul>

      <div class="bruce-2 animate__animated animate__fadeInUpBig">
        <form class="w-full max-w-sm">
          <div class="md:flex md:items-center">
            <div class="md:w-2/3">
              <input
                class="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value="666666666666！"
              />
            </div>
            <button
              class="px-3 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none"
              type="button"
            >
              Up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SnLeave"
}
</script>

<style lang="scss" scoped>
  .SnLeaves {
    position: fixed;
    width: 100%;
    height: 100%;
    .SnLeave {
      position: relative;
      height: 100%;
      background-image: linear-gradient(270deg, #8146b4, #6990f6);
      .bruce-2 {
        position: absolute;
        top: 40%;
        left: 42%;
        width: 20%;
        border-radius: 5px;
      }
    }
  }
  .bubble-bgwall {
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    li {
      display: flex;
      position: absolute;
      bottom: -200px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      width: 50px;
      height: 50px;
      background-color: rgba(#fff, 0.15);
      color: #ccc;
      animation: bubble 15s infinite;
      &:nth-child(1) {
        left: 3%;
      }
      &:nth-child(2) {
        left: 6%;
        animation-duration: 7s;
        animation-delay: 2s;
      }
      &:nth-child(3) {
        left: 10%;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        left: 20%;
        background-color: rgba(#fff, 0.3);
        animation-duration: 8s;
      }
      &:nth-child(5) {
        left: 30%;
      }
      &:nth-child(6) {
        left: 40%;
        background-color: rgba(#fff, 0.2);
        animation-delay: 3s;
      }
      &:nth-child(7) {
        left: 50%;
        animation-delay: 2s;
      }
      &:nth-child(8) {
        left: 60%;
        font-size: 12px;
        animation-duration: 15s;
        animation-delay: 4s;
      }
      &:nth-child(9) {
        left: 25%;
        background-color: rgba(#fff, 0.3);
        font-size: 12px;
        animation-duration: 12s;
        animation-delay: 2s;
      }
      &:nth-child(10) {
        left: 70%;
        animation-delay: 3s;
      }

      &:nth-child(11) {
        left: 80%;
        animation-delay: 9s;
      }

      &:nth-child(12) {
        left: 85%;
        animation-delay: 4s;
      }

      &:nth-child(13) {
        left: 90%;
        animation-delay: 7s;
      }

      &:nth-child(14) {
        left: 95%;
        animation-delay: 5s;
      }
      &:nth-child(15) {
        left: 75%;
        animation-delay: 2s;
      }
    }
  }
  @keyframes bubble {
    0% {
      opacity: 0.5;
      transform: translateY(0) rotate(1deg);
    }
    25% {
      opacity: 0.75;
      transform: translateY(-400px) rotate(5deg);
    }
    50% {
      opacity: 1;
      transform: translateY(-600px) rotate(10deg);
    }
    100% {
      opacity: 0;
      transform: translateY(-1000px) rotate(160deg);
    }
  }
</style>