export default {

  articles: [
    {
      id: 1,
      categoryId: [ 1 ],
      tagId: [1, 2],
      userId: 1,
      title: 'SPAを作ってみた',
      body: '今回初めてSPAを作りました。苦労した点や今後のためのメモを残しておきます。',
      date: '2020/04/01',
    },
    {
      id: 2,
      categoryId: [ 1, 2 ],
      tagId: [2],
      userId: 2,
      title: 'AWSにデプロイしてみた',
      body: 'AWSへRailsアプリをデプロイするまでの手順。思ったより難しい！',
      date: '2020/04/02',
    }
  ],

  comments: [
    {
      id: 1,
      articleId: 1,
      userId: 3,
      body: '参考にできそう！',
      date: '2020/04/01',
    },
    {
      id: 2,
      articleId: 1,
      userId: 4,
      body: '何を書いているのかわからない、、。',
      date: '2020/04/02',
    },
    {
      id: 3,
      articleId: 2,
      userId: 5,
      body: '他の言語やFWには対応できないんですか？',
      date: '2020/04/02',
    }
  ],

  users: [
    {
      id: 1,
      email: 'sample1@example.com',
      password: 'foobar',
      name: 'サンプルユーザー01',
    },
    {
      id: 2,
      email: 'sample2@example.com',
      password: 'foobar',
      name: 'サンプルユーザー02',
    },
    {
      id: 3,
      email: 'sample3@example.com',
      password: 'foobar',
      name: 'サンプルユーザー03',
    },
    {
      id: 4,
      email: 'sample4@example.com',
      password: 'foobar',
      name: 'サンプルユーザー04',
    },
    {
      id: 5,
      email: 'sample5@example.com',
      password: 'foobar',
      name: 'サンプルユーザー05',
    },
  ],

  loggedInUserId: 1,

  categories: [
    { id: 1, name: 'Web開発', selected: false },
    { id: 2, name: 'クラウドサービス', selected: false },
    { id: 3, name: 'ネットワーク', selected: false }
  ],

  tags: [
    { id: 1, name: 'Vue.js', selected: false },
    { id: 2, name: 'AWS', selected: false },
    { id: 3, name: 'Azure', selected: false }
  ],

}
