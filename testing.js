import { v4 as uuidv4 } from "uuid";
const dbb = [
    {
      "id": "M001",
      "title": "Beyond Earth",
      "thumbnail": {
        "trending": {
          "small": "../assets/thumbnails/beyond-earth/trending/small.jpg",
          "large": "../assets/thumbnails/beyond-earth/trending/large.jpg"
        },
        "regular": {
          "small": "../assets/thumbnails/beyond-earth/regular/small.jpg",
          "medium": "../assets/thumbnails/beyond-earth/regular/medium.jpg",
          "large": "../assets/thumbnails/beyond-earth/regular/large.jpg"
        }
      },
      "year": 2019,
      "category": "Movie",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": true
    },
    {
      "id": "M002",
      "title": "Bottom Gear",
      "thumbnail": {
        "trending": {
          "small": "../assets/thumbnails/bottom-gear/trending/small.jpg",
          "large": "../assets/thumbnails/bottom-gear/trending/large.jpg"
        },
        "regular": {
          "small": "../assets/thumbnails/bottom-gear/regular/small.jpg",
          "medium": "../assets/thumbnails/bottom-gear/regular/medium.jpg",
          "large": "../assets/thumbnails/bottom-gear/regular/large.jpg"
        }
      },
      "year": 2021,
      "category": "Movie",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": true
    },
    {
      "id": "TV001",
      "title": "Undiscovered Cities",
      "thumbnail": {
        "trending": {
          "small": "../assets/thumbnails/undiscovered-cities/trending/small.jpg",
          "large": "../assets/thumbnails/undiscovered-cities/trending/large.jpg"
        },
        "regular": {
          "small": "../assets/thumbnails/undiscovered-cities/regular/small.jpg",
          "medium": "../assets/thumbnails/undiscovered-cities/regular/medium.jpg",
          "large": "../assets/thumbnails/undiscovered-cities/regular/large.jpg"
        }
      },
      "year": 2019,
      "category": "TV Series",
      "rating": "E",
      "isBookmarked": false,
      "isTrending": true
    },
    {
      "id": "M003",
      "title": "1998",
      "thumbnail": {
        "trending": {
          "small": "../assets/thumbnails/1998/trending/small.jpg",
          "large": "../assets/thumbnails/1998/trending/large.jpg"
        },
        "regular": {
          "small": "../assets/thumbnails/1998/regular/small.jpg",
          "medium": "../assets/thumbnails/1998/regular/medium.jpg",
          "large": "../assets/thumbnails/1998/regular/large.jpg"
        }
      },
      "year": 2021,
      "category": "Movie",
      "rating": "18+",
      "isBookmarked": false,
      "isTrending": true
    },
    {
      "id": "TV002",
      "title": "Dark Side of the Moon",
      "thumbnail": {
        "trending": {
          "small": "../assets/thumbnails/dark-side-of-the-moon/trending/small.jpg",
          "large": "../assets/thumbnails/dark-side-of-the-moon/trending/large.jpg"
        },
        "regular": {
          "small": "../assets/thumbnails/dark-side-of-the-moon/regular/small.jpg",
          "medium": "../assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg",
          "large": "../assets/thumbnails/dark-side-of-the-moon/regular/large.jpg"
        }
      },
      "year": 2018,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": true,
      "isTrending": true
    },
    {
      "id": "M004",
      "title": "The Great Lands",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/the-great-lands/regular/small.jpg",
          "medium": "../assets/thumbnails/the-great-lands/regular/medium.jpg",
          "large": "../assets/thumbnails/the-great-lands/regular/large.jpg"
        }
      },
      "year": 2019,
      "category": "Movie",
      "rating": "E",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "id": "TV003",
      "title": "The Diary",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/the-diary/regular/small.jpg",
          "medium": "../assets/thumbnails/the-diary/regular/medium.jpg",
          "large": "../assets/thumbnails/the-diary/regular/large.jpg"
        }
      },
      "year": 2019,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "id": "M005",
      "title": "Earth’s Untouched",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/earths-untouched/regular/small.jpg",
          "medium": "../assets/thumbnails/earths-untouched/regular/medium.jpg",
          "large": "../assets/thumbnails/earths-untouched/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "18+",
      "isBookmarked": true,
      "isTrending": false
    },
    {
      "id": "M006",
      "title": "No Land Beyond",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/no-land-beyond/regular/small.jpg",
          "medium": "../assets/thumbnails/no-land-beyond/regular/medium.jpg",
          "large": "../assets/thumbnails/no-land-beyond/regular/large.jpg"
        }
      },
      "year": 2019,
      "category": "Movie",
      "rating": "E",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "id": "TV004",
      "title": "During the Hunt",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/during-the-hunt/regular/small.jpg",
          "medium": "../assets/thumbnails/during-the-hunt/regular/medium.jpg",
          "large": "../assets/thumbnails/during-the-hunt/regular/large.jpg"
        }
      },
      "year": 2016,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "id": "TV005",
      "title": "Autosport the Series",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/autosport-the-series/regular/small.jpg",
          "medium": "../assets/thumbnails/autosport-the-series/regular/medium.jpg",
          "large": "../assets/thumbnails/autosport-the-series/regular/large.jpg"
        }
      },
      "year": 2016,
      "category": "TV Series",
      "rating": "18+",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "id": "M007",
      "title": "Same Answer II",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/same-answer-2/regular/small.jpg",
          "medium": "../assets/thumbnails/same-answer-2/regular/medium.jpg",
          "large": "../assets/thumbnails/same-answer-2/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "E",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "id": "TV006",
      "title": "Below Echo",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/below-echo/regular/small.jpg",
          "medium": "../assets/thumbnails/below-echo/regular/medium.jpg",
          "large": "../assets/thumbnails/below-echo/regular/large.jpg"
        }
      },
      "year": 2016,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "id": "TV007",
      "title": "The Rockies",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/the-rockies/regular/small.jpg",
          "medium": "../assets/thumbnails/the-rockies/regular/medium.jpg",
          "large": "../assets/thumbnails/the-rockies/regular/large.jpg"
        }
      },
      "year": 2015,
      "category": "TV Series",
      "rating": "E",
      "isBookmarked": true,
      "isTrending": false
    },
    {
      "id": "M008",
      "title": "Relentless",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/relentless/regular/small.jpg",
          "medium": "../assets/thumbnails/relentless/regular/medium.jpg",
          "large": "../assets/thumbnails/relentless/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "PG",
      "isBookmarked": true,
      "isTrending": false
    },
    {
      "id": "TV008",
      "title": "Community of Ours",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/community-of-ours/regular/small.jpg",
          "medium": "../assets/thumbnails/community-of-ours/regular/medium.jpg",
          "large": "../assets/thumbnails/community-of-ours/regular/large.jpg"
        }
      },
      "year": 2018,
      "category": "TV Series",
      "rating": "18+",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "id": "M009",
      "title": "Van Life",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/van-life/regular/small.jpg",
          "medium": "../assets/thumbnails/van-life/regular/medium.jpg",
          "large": "../assets/thumbnails/van-life/regular/large.jpg"
        }
      },
      "year": 2015,
      "category": "Movie",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "id": "M010",
      "title": "The Heiress",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/the-heiress/regular/small.jpg",
          "medium": "../assets/thumbnails/the-heiress/regular/medium.jpg",
          "large": "../assets/thumbnails/the-heiress/regular/large.jpg"
        }
      },
      "year": 2021,
      "category": "Movie",
      "rating": "PG",
      "isBookmarked": true,
      "isTrending": false
    },
    {
      "id": "M011",
      "title": "Off the Track",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/off-the-track/regular/small.jpg",
          "medium": "../assets/thumbnails/off-the-track/regular/medium.jpg",
          "large": "../assets/thumbnails/off-the-track/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "18+",
      "isBookmarked": true,
      "isTrending": false
    },
    {
      "id": "M012",
      "title": "Whispering Hill",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/whispering-hill/regular/small.jpg",
          "medium": "../assets/thumbnails/whispering-hill/regular/medium.jpg",
          "large": "../assets/thumbnails/whispering-hill/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "E",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "id": "TV009",
      "title": "112",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/112/regular/small.jpg",
          "medium": "../assets/thumbnails/112/regular/medium.jpg",
          "large": "../assets/thumbnails/112/regular/large.jpg"
        }
      },
      "year": 2013,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "id": "M013",
      "title": "Lone Heart",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/lone-heart/regular/small.jpg",
          "medium": "../assets/thumbnails/lone-heart/regular/medium.jpg",
          "large": "../assets/thumbnails/lone-heart/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "E",
      "isBookmarked": true,
      "isTrending": false
    },
    {
      "id": "TV010",
      "title": "Production Line",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/production-line/regular/small.jpg",
          "medium": "../assets/thumbnails/production-line/regular/medium.jpg",
          "large": "../assets/thumbnails/production-line/regular/large.jpg"
        }
      },
      "year": 2018,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "id": "TV011",
      "title": "Dogs",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/dogs/regular/small.jpg",
          "medium": "../assets/thumbnails/dogs/regular/medium.jpg",
          "large": "../assets/thumbnails/dogs/regular/large.jpg"
        }
      },
      "year": 2016,
      "category": "TV Series",
      "rating": "E",
      "isBookmarked": true,
      "isTrending": false
    },
    {
      "id": "TV012",
      "title": "Asia in 24 Days",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/asia-in-24-days/regular/small.jpg",
          "medium": "../assets/thumbnails/asia-in-24-days/regular/medium.jpg",
          "large": "../assets/thumbnails/asia-in-24-days/regular/large.jpg"
        }
      },
      "year": 2020,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "id": "TV013",
      "title": "The Tasty Tour",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/the-tasty-tour/regular/small.jpg",
          "medium": "../assets/thumbnails/the-tasty-tour/regular/medium.jpg",
          "large": "../assets/thumbnails/the-tasty-tour/regular/large.jpg"
        }
      },
      "year": 2016,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "id": "M014",
      "title": "Darker",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/darker/regular/small.jpg",
          "medium": "../assets/thumbnails/darker/regular/medium.jpg",
          "large": "../assets/thumbnails/darker/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "18+",
      "isBookmarked": true,
      "isTrending": false
    },
    {
      "id": "TV014",
      "title": "Unresolved Cases",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/unresolved-cases/regular/small.jpg",
          "medium": "../assets/thumbnails/unresolved-cases/regular/medium.jpg",
          "large": "../assets/thumbnails/unresolved-cases/regular/large.jpg"
        }
      },
      "year": 2018,
      "category": "TV Series",
      "rating": "18+",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "id": "M015",
      "title": "Mission: Saturn",
      "thumbnail": {
        "regular": {
          "small": "../assets/thumbnails/mission-saturn/regular/small.jpg",
          "medium": "../assets/thumbnails/mission-saturn/regular/medium.jpg",
          "large": "../assets/thumbnails/mission-saturn/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "PG",
      "isBookmarked": true,
      "isTrending": false
    }
  ]

  function generateUniqueAccountNumberr() {
    let id;
    let idExists = true;

      // Keep generating account numbers until a unique one is found
  while (idExists) {
    // Generate a UUID and take only the numeric parts
    const uuid = uuidv4()
    // Optionally, trim it to a specific length
    id = uuid.substring(0, 10); // Example: 10-digit account number

    // Check if the account number already exists in the database
    const dbbb = dbb.find(el => el.id === id)

    if (dbbb) {
      accountExists = false;
    }
  }
  }

  const updb = dbb.map(el => el.id = generateUniqueAccountNumberr())
  console.log(updb);