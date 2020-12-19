let app = new Vue ({

  el: ".container",

  data: {
    counter: 0,
    images: [
      "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
      "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
    ]
  },

  created: function () {
    setInterval(this.nextImage, 4000)
  },

  methods: {

    nextImage () {
      this.counter++
      if (this.counter === this.images.length) {
        this.counter = 0;
      }
    },

    prevImage () {
      if (this.counter > 0) {
        this.counter--;
      } else {
        this.counter = (this.images.length - 1);
      }
    },

    // metodo con funzione
    littleCircle (index) {
      this.counter = index;
    }
  }
})