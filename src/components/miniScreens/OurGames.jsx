import React from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

function OurGames() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div
      style={{
        width: "346px",
        height: "374px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <p className="our-game-header">Our Games</p>
      <div className="ourgames">
        <img
          className=""
          style={{ borderRadius: "10px", width: isMobile?"95%":"385px" }}
          src="https://s3-alpha-sig.figma.com/img/2a56/302c/1d863a75ab13fbad6c3bf93814b625f5?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AeWzXkZXxJMESa7SmoPqaiRitz5yfPQfQeXneP8HAnNxKExr5duXCHKFiZaBUCaf0js1OZJOIqWf6L551wa-8kGeKy-uneGNH7scMQdTfJyvcOCJtzvWBKnCtw32nZ6~YiVo3~hEu4-o-j99YB-ImDP4~6s806GT1gf7hY19Lg4dQqgXsLs7t9u7Wjkj4sX8G6GV0sp4aIJHN-8GFFHH5qGvdVlpC3B0w9ZY2HimAiPqWaRa9F4z9hlOfozQvsJnUprGUwH9gyzQhCr~9mB-Nix3Yg681ZR7xNpeElFXEsLlBaWIwkHtLn04SzVe7sZSCrTGsTC-Fy~w5ITzCT7M0Q__"
        ></img>
        <div className="two">
          <img
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/classic-game");
            }}
            src="https://s3-alpha-sig.figma.com/img/bbc0/eca6/6f9190ec4d53be5778224e08f814dbfc?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mg1zIq1~oYDkQuRUeeBd6aKcttpYSQlIQkqshdS6XAtUl5zUPRBjLGxxpwOQWud3kMseQEDlN95jjMNB0Ylnl9HNEsHDkqpwjT5PZ2nDuZlZvl~fJE2ZCcwxgek3yWzVdcV3Wxqq3F9OFPuzmP8YfH~I6sor3ErmR3la5mId4OV~qsDIQCyGeAGcGfvBZ6oH2UUEvmIKX2Y8d6V4U8dJJA3OkuGBfX5WIdFj3E-yReAxI3IOKBTamXY5zOjEwC0VINJdwT1bCOOIB0XoKkqR1Uo7-xKXMK6ehkNfV02ND-qwlLXDjUtv5qUIQmKVLJqAMERUedap0nmkVhLhMQcFkA__"
          ></img>
          <img
            onClick={() => {
              navigate("/classic-game");
            }}
            className="imgtwo"
            style={{ cursor: "pointer", width: isMobile?"90%": " 164px", height: " 164px" }}
            src="https://s3-alpha-sig.figma.com/img/31b3/446e/79f7a22be89cd2ee0f708eb8a05da6f9?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z5FvM9lTbhwxELm3dR0EvqaqGvJYUrd-xiB7pjhAMYSmamq2gJjBwO1Nm3CiIeHFagi~Yz6ob3mKvIdExhWseoyJa-xtylujpwtQvlmgrx2YvaLJp9K0b8dO57uXUXI14vJBRChXrnM0RzS2qiJxk-HhTUHACKXAFgRrfRmYvDytLs~xKzzRNZbQKWFH6QtkMq93GpBMhLsWxnn4AQv8Ejy0SVJZITwMH3Fi7oIkYEbFibaGDtFpRU9dxqdi7EQmMx91zmKtIl~Liurn7m68R~2oEI0FEds2~8HlwmA5bLZbA-DwFErv5vsycKOgawPad9IPJQ4PHbLRzP8B9ASIEw__"
          ></img>
        </div>
        <img
          width={ isMobile?"95%": "368px"}
          src="https://s3-alpha-sig.figma.com/img/9fc4/ed5e/9278a8dac939c859c610832d624b52f9?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVCrbSGIe9DsH7G~zb5b-nz-tIt0BskmvPbga41ZO-rw2K60dUSIsYrNAm~Mv0N8dL0~RtvLfqU1jLW9lTqLLAs6UPAOkxmxKK8bgRCu9VDZBHMwpEiiSXNLc4nJZqZiWiNJ46tgE9ZZReAAMYc~RZ6zn0THSODxoP8hlQM5~cA06axoTnKjrHEqrenS692Rll5s8Z~B-45yu0p0uUjEtuqvZTYnrRdZfn9QoMy2Wjctmzbezwc0V6rfajcWcer63-ZWx0oRQ9tsRSky4AoNfvt7PCMtsQca~22gsdkfboUEYwNkrEA-qYjwiuHcqhofwtP2FNELzu5gt9v-lg59fA__"
        ></img>
      </div>
    </div>
  );
}

export default OurGames;
