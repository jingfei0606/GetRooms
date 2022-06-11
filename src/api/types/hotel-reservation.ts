export interface ISearchResult {
  "_id": string,
  "enabled": boolean,
  "isDeleted": boolean,
  "roomType": string,
  "bedType": string,
  "numberOfBeds": number,
  "occupancyAmount": number,
  "hotelID": {
    "_id": string,
    "enabled": boolean,
    "isDeleted": boolean,
    "hotelName": string,
    "website": string,
    "phoneNumber": string,
    "POBox": string,
    "countryName": string,
    "cityName": string,
    "email": string,
    "address": string,
    "createdAt": string,
    "lastModified": string,
    "location": {
      "longitude": number,
      "latitude": number
    },
    "imageGallery": Array<string>
  },
  "createdAt": string,
  "lastModified": string,
  "__v": 0,
  "featureImage": string,
  "availRoomCount": number,
  "description": string,
  "reviews": [
    {
      "review": string,
      "rating": number
    }
  ],
  "roomPrice": number,
  "roomPolicy": [
    {
      "policyName": string,
      "addedPrice": number,
      "additionalGuests": number
    },
    {
      "policyName": string,
      "addedPrice": number,
      "additionalGuests": number
    }
  ]
}