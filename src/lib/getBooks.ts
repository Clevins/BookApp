const getBooks = () => {
  return {
    kind: "books#volumes",
    totalItems: 3,
    items: [
      {
        kind: "books#volume",
        id: "JK6azwEACAAJ",
        etag: "KwGM7xgNMsc",
        selfLink: "https://www.googleapis.com/books/v1/volumes/JK6azwEACAAJ",
        volumeInfo: {
          title: "The Fellowship of the Ring",
          subtitle: "The Lord of the Rings: Part One",
          authors: ["J.R.R. Tolkien"],
          publisher: "Del Rey",
          publishedDate: "1986-08-12",
          description:
            "The opening novel of The Lord of the Rings—the greatest fantasy epic of all time—which continues in The Two Towers and The Return of the King. Nominated as one of America’s best-loved novels by PBS’s The Great American Read The dark, fearsome ...",
          industryIdentifiers: [
            {
              type: "ISBN_10",
              identifier: "0345339703",
            },
            {
              type: "ISBN_13",
              identifier: "9780345339706",
            },
          ],
          readingModes: {
            text: false,
            image: false,
          },
          pageCount: 0,
          printType: "BOOK",
          categories: ["Fiction"],
          averageRating: 4,
          ratingsCount: 2554,
          maturityRating: "NOT_MATURE",
          allowAnonLogging: false,
          contentVersion: "preview-1.0.0",
          panelizationSummary: {
            containsEpubBubbles: false,
            containsImageBubbles: false,
          },
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=JK6azwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=JK6azwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
          },
          previewLink:
            "http://books.google.ca/books?id=JK6azwEACAAJ&hl=&source=gbs_api",
          infoLink:
            "http://books.google.ca/books?id=JK6azwEACAAJ&hl=&source=gbs_api",
          canonicalVolumeLink:
            "https://books.google.com/books/about/The_Fellowship_of_the_Ring.html?hl=&id=JK6azwEACAAJ",
        },
        userInfo: {
          updated: "2023-05-19T21:45:56.382Z",
        },
        saleInfo: {
          country: "CA",
          saleability: "NOT_FOR_SALE",
          isEbook: false,
        },
        accessInfo: {
          country: "CA",
          viewability: "NO_PAGES",
          embeddable: false,
          publicDomain: false,
          textToSpeechPermission: "ALLOWED",
          epub: {
            isAvailable: false,
          },
          pdf: {
            isAvailable: false,
          },
          webReaderLink:
            "http://play.google.com/books/reader?id=JK6azwEACAAJ&hl=&source=gbs_api",
          accessViewStatus: "NONE",
          quoteSharingAllowed: false,
        },
      },
      {
        kind: "books#volume",
        id: "fn20CwAAQBAJ",
        etag: "xG+42sXtE0E",
        selfLink: "https://www.googleapis.com/books/v1/volumes/fn20CwAAQBAJ",
        volumeInfo: {
          title: "A Gentleman in Moscow",
          subtitle: "A Novel",
          authors: ["Amor Towles"],
          publisher: "Penguin",
          publishedDate: "2016-09-06",
          description:
            "The mega-bestseller with more than 2 million readers, soon to be a Showtime/Paramount series starring Ewan McGregor as Count Alexander Rostov From the #1 New York Times-bestselling author of The Lincoln Highway and Rules of Civility, a ...",
          industryIdentifiers: [
            {
              type: "ISBN_13",
              identifier: "9780399564048",
            },
            {
              type: "ISBN_10",
              identifier: "0399564047",
            },
          ],
          readingModes: {
            text: true,
            image: false,
          },
          pageCount: 513,
          printType: "BOOK",
          categories: ["Fiction"],
          averageRating: 4.5,
          ratingsCount: 238,
          maturityRating: "NOT_MATURE",
          allowAnonLogging: true,
          contentVersion: "1.21.15.0.preview.2",
          panelizationSummary: {
            containsEpubBubbles: false,
            containsImageBubbles: false,
          },
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=fn20CwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=fn20CwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
          },
          previewLink:
            "http://books.google.ca/books?id=fn20CwAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
          infoLink:
            "https://play.google.com/store/books/details?id=fn20CwAAQBAJ&source=gbs_api",
          canonicalVolumeLink:
            "https://play.google.com/store/books/details?id=fn20CwAAQBAJ",
        },
        layerInfo: {
          layers: [
            {
              layerId: "geo",
              volumeAnnotationsVersion: "25",
            },
          ],
        },
        userInfo: {
          updated: "2023-05-19T21:35:48.188Z",
        },
        saleInfo: {
          country: "CA",
          saleability: "FOR_SALE",
          isEbook: true,
          listPrice: {
            amount: 13.99,
            currencyCode: "CAD",
          },
          retailPrice: {
            amount: 13.99,
            currencyCode: "CAD",
          },
          buyLink:
            "https://play.google.com/store/books/details?id=fn20CwAAQBAJ&rdid=book-fn20CwAAQBAJ&rdot=1&source=gbs_api",
          offers: [
            {
              finskyOfferType: 1,
              listPrice: {
                amountInMicros: 13990000,
                currencyCode: "CAD",
              },
              retailPrice: {
                amountInMicros: 13990000,
                currencyCode: "CAD",
              },
              giftable: true,
            },
          ],
        },
        accessInfo: {
          country: "CA",
          viewability: "PARTIAL",
          embeddable: true,
          publicDomain: false,
          textToSpeechPermission: "ALLOWED",
          epub: {
            isAvailable: true,
            acsTokenLink:
              "http://books.google.ca/books/download/A_Gentleman_in_Moscow-sample-epub.acsm?id=fn20CwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
          },
          pdf: {
            isAvailable: false,
          },
          webReaderLink:
            "http://play.google.com/books/reader?id=fn20CwAAQBAJ&hl=&source=gbs_api",
          accessViewStatus: "SAMPLE",
          quoteSharingAllowed: false,
        },
      },
      {
        kind: "books#volume",
        id: "qaKkenvL29UC",
        etag: "mWK6IfpX1Vs",
        selfLink: "https://www.googleapis.com/books/v1/volumes/qaKkenvL29UC",
        volumeInfo: {
          title: "Harry Potter and the Half-Blood Prince",
          authors: ["J.K. Rowling"],
          publisher: "Pottermore Publishing",
          publishedDate: "2015-12-08",
          description:
            "There it was, hanging in the sky above the school: the blazing green skull with a serpent tongue, the mark Death Eaters left behind whenever they had entered a building... wherever they had murdered... When Dumbledore arrives at Privet Drive one ...",
          industryIdentifiers: [
            {
              type: "ISBN_13",
              identifier: "9781781100257",
            },
            {
              type: "ISBN_10",
              identifier: "178110025X",
            },
          ],
          readingModes: {
            text: true,
            image: true,
          },
          pageCount: 662,
          printType: "BOOK",
          categories: ["Fiction"],
          averageRating: 4.5,
          ratingsCount: 2493,
          maturityRating: "NOT_MATURE",
          allowAnonLogging: true,
          contentVersion: "1.20.19.0.preview.3",
          panelizationSummary: {
            containsEpubBubbles: false,
            containsImageBubbles: false,
          },
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=qaKkenvL29UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=qaKkenvL29UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
          },
          previewLink:
            "http://books.google.ca/books?id=qaKkenvL29UC&printsec=frontcover&hl=&source=gbs_api",
          infoLink:
            "https://play.google.com/store/books/details?id=qaKkenvL29UC&source=gbs_api",
          canonicalVolumeLink:
            "https://play.google.com/store/books/details?id=qaKkenvL29UC",
        },
        layerInfo: {
          layers: [
            {
              layerId: "geo",
              volumeAnnotationsVersion: "29",
            },
          ],
        },
        userInfo: {
          updated: "2023-05-18T21:01:18.526Z",
        },
        saleInfo: {
          country: "CA",
          saleability: "FOR_SALE",
          isEbook: true,
          listPrice: {
            amount: 10.99,
            currencyCode: "CAD",
          },
          retailPrice: {
            amount: 10.99,
            currencyCode: "CAD",
          },
          buyLink:
            "https://play.google.com/store/books/details?id=qaKkenvL29UC&rdid=book-qaKkenvL29UC&rdot=1&source=gbs_api",
          offers: [
            {
              finskyOfferType: 1,
              listPrice: {
                amountInMicros: 10990000,
                currencyCode: "CAD",
              },
              retailPrice: {
                amountInMicros: 10990000,
                currencyCode: "CAD",
              },
              giftable: true,
            },
          ],
        },
        accessInfo: {
          country: "CA",
          viewability: "PARTIAL",
          embeddable: true,
          publicDomain: false,
          textToSpeechPermission: "ALLOWED",
          epub: {
            isAvailable: true,
            acsTokenLink:
              "http://books.google.ca/books/download/Harry_Potter_and_the_Half_Blood_Prince-sample-epub.acsm?id=qaKkenvL29UC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
          },
          pdf: {
            isAvailable: true,
            acsTokenLink:
              "http://books.google.ca/books/download/Harry_Potter_and_the_Half_Blood_Prince-sample-pdf.acsm?id=qaKkenvL29UC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
          },
          webReaderLink:
            "http://play.google.com/books/reader?id=qaKkenvL29UC&hl=&source=gbs_api",
          accessViewStatus: "SAMPLE",
          quoteSharingAllowed: false,
        },
      },
    ],
  };
};

export default getBooks;
