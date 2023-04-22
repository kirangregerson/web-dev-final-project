// {
//     productId: {
//       type: String,
//       required: true,
//     },
//     commenterId: {
//       type: String,
//       required: true,
//     },
//     rating: {
//       type: Number,
//       required: true,
//     },
//     comment: {
//       type: String,
//       required: true,
//     },
//     commentReplyId: String,
//   }
export const comments = {
  data: [
    {
      _id: "1",
      commenterId: "1",
      productId: "1",
      rating: 4,
      comment: "This is a comment",
      likes: 0,
      profile_picture: "/dummyprofile.png",
      username: "test",
    },
    {
      _id: "2",
      commenterId: "1",
      productId: "1",
      rating: 3,
      comment: "This is a another comment",
      likes: 0,
      profile_picture: "/dummyprofile.png",
      username: "test",
    },
    {
      _id: "3",
      commenterId: "1",
      productId: "1",
      rating: 4.5,
      comment:
        "This is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long comment",
      likes: 0,
      profile_picture: "/dummyprofile.png",
      username: "test",
    },
  ],
};
