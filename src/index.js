import Station from './station.js';

export default class SubwayMap {
  constructor() {
    this.stationList = [];
  }

  // 지하철 역 등록
  addStation(name) {
    let station = new Station(name);
    this.stationList.push(station);
    return station;
  }
}
