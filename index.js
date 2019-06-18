class Driver {
  constructor (name, strJoinDate) {
    this.name = name;
    this.joinDate = new Date(strJoinDate);
  }
  startDate() {
    return this.strJoinDate;
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.joinDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {

  }

  estimatedTime() {

  }
}
