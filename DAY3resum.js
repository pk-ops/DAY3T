var resume={
    "basics": {
      "name": "Prathamesh kamble",
      "label": "",
      "picture": "",
      "email": "kambleprathamesh60@gmail.com",
      "phone": "8087161770",
      "degree": "BE",
      "website": "Your website URL",
      "summary": "A one-sentence to one-paragraph overview text. Do not include any line-breaks.",
      "location": {
        "address": "Flat no 101 shree sai dham society lonkar wasti keshavnagar mundhwa",
        "postalCode": "411036",
        "city": "Pune",
        "countryCode": "INDIA",
        "region": "MAHARASHTRA"
      },
      "profiles": [
        {
          "network": "LinkedIn",
          "username": "prathamesh kamble",
          "url": "linkedin.com/in/prathamesh-kamble-9b19461a0"
        }
      ]
    },
    "education": [
      {
      "Study program":"BE(ELECTRONICS AND TELECOMMUNICATION)",
       "Place of Education":"Pune Institute of computer Technology",
       "CGPA":"7.99",
       "YY-YY":"2018-2021",
      }
    ],
    
    "skills": [
      {
        "name": "Programming Languages",
        "level": "",
        "keywords": [
          "Basic-Java', 'C++','C','My-SQL' "
        ]
      }
    ],
    "languages": [
      {
        "language": " English, Hindi,Marathi"
       }
    ],
    "interests": [
      {
        "name": "Sports",
        "keywords": [
          "Cricket,khabaddi"
         ]
      }
    ]
  }

  var res=Object.keys(resume)
for(var i=0;i<res.length;i++){
    console.log(res[i],resume[res[i]]);
}