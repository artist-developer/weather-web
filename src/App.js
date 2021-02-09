import React, { Component } from "react";
import axios from "axios";

const region = "Seoul";
export default class App extends Component {
  state = {
    data: {
      coord: { lon: 0, lat: 0 },
      weather: [{ id: 0, main: "", description: "", icon: "" }],
      base: "",
      main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
      },
      visibility: 0,
      wind: { speed: 0, deg: 0 },
      clouds: { all: 0 },
      dt: 0,
      sys: {
        type: 1,
        id: 0,
        country: "KR",
        sunrise: 0,
        sunset: 0,
      },
      timezone: 0,
      id: 0,
      name: "Seoul",
      cod: 0,
    },
    loading: true,
  };

  componentDidMount() {
    this.getWeather();
  }
  getWeather = async () => {
    const { data, error } = await axios.get(
      "http://103.244.111.87:8080/get-weather"
    );

    if (error) {
      console.log(error);
    }
    console.log("data : " + data);
    this.setState({ loading: false, data: data });

    return data;
  };
  render() {
    return (
      <div
        style={{
          flex: 1,
          height: "100vh",
          display: "flex",
          flexDirection: `row`,
          alignItems: `center`,
          justifyContent: `center`,
          backgroundColor: weatherOptions[this.state.data.weather[0].main]
            ? weatherOptions[this.state.data.weather[0].main].color[0]
            : "white",
        }}
      >
        {this.state.loading ? (
          <h1>로딩중입니다</h1>
        ) : (
          <div>
            <h1>오늘의 {region} 날씨입니다.</h1>

            <h2>{weatherOptions[this.state.data.weather[0].main].title}</h2>
            <h2>{weatherOptions[this.state.data.weather[0].main].subtitle}</h2>
          </div>
        )}
      </div>
    );
  }
}

const weatherOptions = {
  Haze: {
    iconName: "weather-fog",
    color: ["#606c88", "#3f4c6b"],
    title: "안개가 짙어요.",
    subtitle: "운전이나 야외 활동 할 때 조심하세요~",
  },
  Mist: {
    iconName: "weather-fog",
    color: ["#606c88", "#3f4c6b"],
    title: "안개가 짙어요.",
    subtitle: "운전이나 야외 활동 할 때 조심하세요~",
  },
  Smoke: {
    iconName: "weather-fog",
    color: ["#606c88", "#3f4c6b"],
    title: "안개가 짙어요.",
    subtitle: "운전이나 야외 활동 할 때 조심하세요~",
  },
  Fog: {
    iconName: "weather-fog",
    color: ["#606c88", "#3f4c6b"],
    title: "안개가 짙어요.",
    subtitle: "운전이나 야외 활동 할 때 조심하세요~",
  },
  Ash: {
    iconName: "weather-fog",
    color: ["#606c88", "#3f4c6b"],
    title: "안개가 짙어요.",
    subtitle: "운전이나 야외 활동 할 때 조심하세요~",
  },
  Dust: {
    iconName: "weather-fog",
    color: ["#544a7d", "#ffd452"],
    title: "먼지가 많아요.",
    subtitle: "야외 활동을 삼가해주세요. 마스크는 필수!!",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    color: ["#232526", "#414345"],
    title: "폭풍우 에요!!",
    subtitle: "오늘은 집돌이 집순이가 됩시다 ㅎㅎ",
  },
  Drizzle: {
    iconName: "weather-rainy",
    color: ["#4c669f", "#3b5998", "#192f6a"],
    title: "비가 조금씩 떨어져요.",
    subtitle:
      "'가랑비에 옷 젖는 줄 모른다' 라는 속담이 있죠. 우산 가져가세요~~",
  },
  Rain: {
    iconName: "weather-pouring",
    color: ["#0f0c29", "#302b63", "#24243e"],
    title: "비가 많이 와요!!",
    subtitle: "우산 꼭 꼭 챙기세요!!",
  },
  Snow: {
    iconName: "weather-snowy",
    color: ["#757f9a", "#d7dde8"],
    title: "눈이 내려요.",
    subtitle: "야외 활동시 미끄러지지 않게 조심하세요!",
  },
  Clear: {
    iconName: "weather-sunny",
    color: ["#2193b0", "#6dd5ed"],
    title: "날씨가 맑아요.",
    subtitle: "오늘 야외 활동을 해보는게 어때요??",
  },
  Clouds: {
    iconName: "weather-cloudy",
    color: ["#403b4a", "#e7e9bb"],
    title: "구름이 많아요.",
    subtitle: "날씨가 꿀꿀 하지만 신나는 음악으로 기분 전환 해봐요~",
  },
};
