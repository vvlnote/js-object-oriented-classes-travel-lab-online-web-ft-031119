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

  static eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ];

  blocksTravelled() {

  }

  estimatedTime() {

  }
}
