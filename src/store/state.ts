export default {

  title: 'ホーム',

  articles: [
    {
      title: 'SPAを作ってみた',
      date: '2020/04/01',
      categories: [ 1 ],
      tags: [ 1,2 ]
    },
    {
      title: 'AWSにデプロイしてみた',
      date: '2020/04/02',
      categories: [ 1, 2 ],
      tags: [ 2 ]
    }
  ],

  filteredArticles: [
    {
      title: 'SPAを作ってみた',
      date: '2020/04/01',
      categories: [ 1 ],
      tags: [ 1,2 ]
    },
    {
      title: 'AWSにデプロイしてみた',
      date: '2020/04/02',
      categories: [ 1, 2 ],
      tags: [ 2 ]
    }
  ],

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

  filterKeyword: ''
}
