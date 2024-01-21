import basketballMarker from "./../../assets/basketball.svg";
import tennisMarker from "./../../assets/tennis.svg";
import volleyMarker from "./../../assets/volley.svg";
import soccerMarker from "./../../assets/soccer.svg";

export const mapDatas = [
  {
    name: 'Totem Park Basketball Court',
    imageSrc: basketballMarker,
    listOfEvents: [
      {sport: 'tennis', time: '23', capacity: '12', location: 'Student Rec Centre'},
    ],
    location: {
      lat: 49.25800113260783,
      lng: -123.25148766420304,
    }
  },
  {
    name: 'North Outdoor Court',
    imageSrc: soccerMarker,
    listOfEvents: [
      {sport: 'tennis', time: '23', capacity: '12', location: 'Student Rec Centre'},
    ],
    location: {
      lat: 49.26097002952596,
      lng: -123.24407261083188,
    }
  },
  {
    name: 'Tennis Centre',
    imageSrc: tennisMarker,
    listOfEvents: [
      {sport: 'tennis', time: '23', capacity: '12', location: 'Student Rec Centre'},
    ],
    location: {
      lat: 49.2598589949036,
      lng: -123.24314783193442,
    }
  },
  {
    name: 'Thunderbird Park',
    imageSrc: tennisMarker,
    listOfEvents: [
      {sport: 'tennis', time: '23', capacity: '12', location: 'Student Rec Centre'},
    ],
    location: {
      lat: 49.25791600718387,
      lng: -123.24248214727845,
    }
  },
  {
    name: 'Student Rec Centre',
    imageSrc: volleyMarker,
    listOfEvents: [
      {sport: 'tennis', time: '23', capacity: '12', location: 'Student Rec Centre'},
    ],
    location: {
      lat: 49.26847818097267,
      lng: -123.24911530680163,
    }
  },
  {
    name: 'Totem Park Tennis Court',
    imageSrc: tennisMarker,
    listOfEvents: [
      {sport: 'tennis', time: '23', capacity: '12', location: 'Student Rec Centre'},
    ],
    location: {
      lat: 49.25799578873962,
      lng: -123.25100457786168
    }
  }
]